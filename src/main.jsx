import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { pages, importedCount, summaryLinks, indexFromHash, fitScale } from './magazine.mjs';
import { imageSources } from './assets.mjs';
import { InteractionProvider } from './interactive.jsx';
import './fonts.css';
import './figma.css';
import './reader.css';

const imports = import.meta.glob('./pages/*.tsx', { eager: true });
const components = Object.fromEntries(Object.entries(imports).map(([name, module]) => [
  name.match(/Page(\d+)_(\d+)/).slice(1).join(':'), module.default,
]));

function Icon({ name }) {
  const paths = {
    previous: 'm14 6-6 6 6 6', next: 'm10 6 6 6-6 6',
    contents: 'M8 6h12M8 12h12M8 18h12M3 6h.01M3 12h.01M3 18h.01',
    full: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5',
    fit: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 8l8 8m0-8-8 8',
    minus: 'M5 12h14', plus: 'M5 12h14M12 5v14', close: 'm6 6 12 12M6 18 18 6',
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function App() {
  const [index, setIndex] = useState(() => indexFromHash(location.hash));
  const [zoom, setZoom] = useState(null);
  const [viewport, setViewport] = useState({ width: innerWidth, height: innerHeight - 150 });
  const [showIndex, setShowIndex] = useState(false);
  const [notice, setNotice] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const stage = useRef(null);
  const page = pages[index];
  const Page = components[page.id];
  const scale = zoom ?? fitScale(viewport.width, viewport.height, page.height);

  function go(next) {
    const bounded = Math.max(0, Math.min(pages.length - 1, next));
    setIndex(bounded);
    setNotice('');
    setShowIndex(false);
    location.hash = `pagina=${pages[bounded].number}`;
    if (stage.current) stage.current.scrollTo(0, 0);
  }

  useEffect(() => {
    for (const source of imageSources) { const image = new Image(); image.src = source; }
    const onHash = () => setIndex(indexFromHash(location.hash));
    const onFull = () => setFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('hashchange', onHash);
    document.addEventListener('fullscreenchange', onFull);
    return () => { window.removeEventListener('hashchange', onHash); document.removeEventListener('fullscreenchange', onFull); };
  }, []);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => setViewport({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);

  async function toggleFullscreen() {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
    catch { setNotice('Use F11 no navegador para apresentar em tela cheia.'); }
  }

  useEffect(() => {
    const onKey = event => {
      if (event.target.closest('input, select, textarea, button, [contenteditable]') || event.altKey || event.ctrlKey || event.metaKey) return;
      if (showIndex) { if (event.key === 'Escape') setShowIndex(false); return; }
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); go(index + 1); }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(index - 1); }
      if (event.key === 'Home') { event.preventDefault(); go(0); }
      if (event.key === 'End') { event.preventDefault(); go(pages.length - 1); }
      if (event.key.toLowerCase() === 'f') toggleFullscreen();
      if (event.key === 'Escape') { setShowIndex(false); setNotice(''); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, showIndex]);

  function onPageClick(event) {
    const elements = [];
    let target = event.target;
    while (target && target !== event.currentTarget) { elements.push(target); target = target.parentElement; }
    const link = elements.find(element => summaryLinks[element.dataset.nodeId]);
    if (page.number === '02' && link) { go(pages.findIndex(p => p.number === summaryLinks[link.dataset.nodeId])); return; }
    const sourceLinks = {
      '503:1008': 'https://ecam.org.br/en/blog/amazonia-legal-e-a-atuacao-do-compartilhando-mundos/',
      '503:1020': 'https://apublica.org/2024/09/seca-no-amazonas-pode-atrapalhar-120-mil-eleitores-a-votar/',
      '503:1071': 'https://apublica.org/2024/09/seca-no-amazonas-pode-atrapalhar-120-mil-eleitores-a-votar/',
      '503:1114': 'https://www.flickr.com/photos/ebc-oficial/54843033138',
    };
    const sourceLink = elements.find(element => sourceLinks[element.dataset.nodeId]);
    if (sourceLink) window.open(sourceLinks[sourceLink.dataset.nodeId], '_blank', 'noopener,noreferrer');
    if (page.number === '00') go(1);
  }

  function onPageKey(event) {
    if (['Enter', ' '].includes(event.key) && event.target.matches('[role="button"], [role="link"]')) { event.preventDefault(); event.target.click(); }
  }

  return <div className="reader">
    <header className="reader-header">
      <button className="masthead" onClick={() => go(0)} title="Ir para a capa"><span>TERRA RICA.</span><span>PRATO POBRE.</span></button>
      <span className="header-divider" />
      <span className="edition-title">Fome e Insegurança Alimentar<span>No Brasil e no Norte.</span></span>
      <div className="header-actions"><span className="edition-count">{importedCount} páginas</span><button className="icon-button" title="Tela cheia (F)" aria-label={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'} onClick={toggleFullscreen}><Icon name="full" /></button></div>
    </header>

    <main ref={stage} className="reader-stage" aria-label="Leitor da revista">
      <div className="page-holder" style={{ width: 1440 * scale, height: page.height * scale }}>
        <article key={page.id} className="magazine-page" aria-label={`${page.number} — ${page.title}`} style={{ height: page.height, transform: `scale(${scale})` }} onClick={onPageClick} onKeyDown={onPageKey}>
          <Page />
          {page.number === '02' && <nav aria-label="Matérias do sumário">{pages.slice(2).map((entry, position) => <button key={entry.id} className="summary-link" style={{ left: position < 10 ? 48 : 744, top: 238 + position % 10 * 73 }} aria-label={`Abrir página ${entry.number}: ${entry.title}`} onClick={event => { event.stopPropagation(); go(position + 2); }} />)}</nav>}
        </article>
      </div>
    </main>

    {notice && <div className="notice" role="status"><span>{notice}</span><button className="icon-button" aria-label="Fechar aviso" onClick={() => setNotice('')}><Icon name="close" /></button></div>}

    <footer className="reader-toolbar">
      <div className="toolbar-side"><button className="toolbar-button" onClick={() => setShowIndex(true)}><Icon name="contents" /><span>Páginas</span></button><button className="toolbar-button summary-button" onClick={() => go(1)}>Sumário</button></div>
      <nav className="pagination" aria-label="Navegação da revista"><button className="icon-button" aria-label="Página anterior" title="Página anterior (←)" disabled={index === 0} onClick={() => go(index - 1)}><Icon name="previous" /></button><label className="page-select-label"><span className="sr-only">Página atual</span><select aria-label="Ir para página" value={index} onChange={event => go(Number(event.target.value))}>{pages.map((p, i) => <option key={p.id} value={i}>{p.number === '00' ? 'Capa' : p.number}</option>)}</select><span className="page-total">/ {pages.length}</span></label><button className="icon-button" aria-label="Próxima página" title="Próxima página (→)" disabled={index === pages.length - 1} onClick={() => go(index + 1)}><Icon name="next" /></button></nav>
      <div className="toolbar-side zoom-controls"><button className="icon-button" aria-label="Diminuir zoom" onClick={() => setZoom(Math.max(0.2, scale - 0.1))}><Icon name="minus" /></button><output aria-label="Zoom atual">{Math.round(scale * 100)}%</output><button className="icon-button" aria-label="Aumentar zoom" onClick={() => setZoom(Math.min(2, scale + 0.1))}><Icon name="plus" /></button><button className="icon-button" aria-label="Ajustar página à tela" title="Ajustar à tela" onClick={() => setZoom(null)}><Icon name="fit" /></button></div>
    </footer>
    <div className="reading-progress" aria-hidden="true"><span style={{ width: `${((index + 1) / pages.length) * 100}%` }} /></div>
    <p className="sr-only" aria-live="polite">Página {page.number}: {page.title}</p>

    {showIndex && <div className="index-overlay" onClick={() => setShowIndex(false)}><section className="index-panel" role="dialog" aria-modal="true" aria-label="Páginas da revista" onClick={event => event.stopPropagation()}><div className="index-heading"><h2>Páginas da revista</h2><button className="icon-button" aria-label="Fechar páginas" autoFocus onClick={() => setShowIndex(false)}><Icon name="close" /></button></div><ol>{pages.map((p, i) => <li key={p.id}><button className={i === index ? 'current-page' : ''} onClick={() => go(i)}><span className="index-number">{p.number === '00' ? 'Capa' : p.number}</span><span>{p.title}</span></button></li>)}</ol></section></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<InteractionProvider><App /></InteractionProvider>);
