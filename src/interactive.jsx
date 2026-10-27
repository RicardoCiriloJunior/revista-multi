import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import EbiaSource from './figma-components/Ebia.tsx';
import ThinkersSource from './figma-components/Thinkers.tsx';
import EvolutionSource from './figma-components/Evolution.tsx';
import VoicesSource from './figma-components/Voices.tsx';
import PhotosSource from './figma-components/Photos.tsx';

const InteractionContext = createContext(null);

export function InteractionProvider({ children }) {
  const [values, setValues] = useState({});
  return <InteractionContext.Provider value={{ values, setValues }}>{children}</InteractionContext.Provider>;
}

export function useInteractionState(key, initial) {
  const context = useContext(InteractionContext);
  const value = context.values[key] ?? initial;
  const setValue = next => context.setValues(previous => ({ ...previous, [key]: typeof next === 'function' ? next(previous[key] ?? initial) : next }));
  return [value, setValue];
}

function dissolve(update, duration = 400) {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) { update(); return; }
  document.documentElement.style.setProperty('--figma-transition-duration', `${duration}ms`);
  document.startViewTransition(() => flushSync(update));
}

export function handleAnnualSelection(event, setYear) {
  const selection = event.target.closest('[data-name^="Selecionar "]');
  if (!selection) return;
  const year = selection.dataset.name.slice(-4);
  if (year === '2023' || year === '2024') dissolve(() => setYear(year));
}

export function EbiaPanel({ className }) {
  const [state, setState] = useInteractionState('ebia', 'Recolhido');
  function onClick(event) {
    const target = event.target.closest('[data-name]');
    const name = target?.dataset.name;
    if (name?.startsWith('Área de clique • ')) dissolve(() => setState(`Expandido • ${name.split(' • ')[1]}`));
    else if (state !== 'Recolhido' && (name?.startsWith('Fechar ao clicar fora') || !event.target.closest('[data-name^="Editorial / Nível"]'))) dissolve(() => setState('Recolhido'));
  }
  return <div className="interactive-slot" onClick={onClick}><EbiaSource className={className} estado={state} /></div>;
}

export function Thinkers({ className }) {
  const [highlight, setHighlight] = useInteractionState('thinker', 'Josué de Castro');
  function onClick(event) {
    const profile = event.target.closest('[data-name^="Perfil / "]');
    if (profile) dissolve(() => setHighlight(profile.dataset.name.slice('Perfil / '.length)));
  }
  return <div className="interactive-slot" onClick={onClick}><ThinkersSource className={className} destaque={highlight} /></div>;
}

export function Evolution({ className }) {
  const [view, setView] = useInteractionState('evolution', 'Geral');
  function onClick(event) {
    const tab = event.target.closest('[data-name^="Tab • "]');
    if (tab) dissolve(() => setView(tab.dataset.name === 'Tab • Níveis' ? 'Níveis' : 'Geral'));
  }
  return <div className="interactive-slot" onClick={onClick}><EvolutionSource className={className} visao={view} /></div>;
}

export function Voices({ className }) {
  const [voice, setVoice] = useInteractionState('voice', 'Mariazinha Baré');
  function onClick(event) {
    const tab = event.target.closest('[data-name^="Ler "]');
    if (tab) dissolve(() => setVoice(tab.dataset.name.slice('Ler '.length)));
  }
  return <div className="interactive-slot" onClick={onClick}><VoicesSource className={className} voz={voice} /></div>;
}

export function PhotoCarousel({ className }) {
  const [photo, setPhoto] = useInteractionState('photo', 0);
  const [wrapping, setWrapping] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (photo === 3) { setWrapping(true); setPhoto(0); }
      else setPhoto(photo + 1);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [photo]);
  useEffect(() => {
    if (!wrapping) return;
    const timeout = setTimeout(() => setWrapping(false), 450);
    return () => clearTimeout(timeout);
  }, [wrapping]);
  return <div className="interactive-slot photos-slot" data-reset={photo === 0}>{wrapping && <PhotosSource key="previous" className={`${className} photo-exit`} foto="04" />}<PhotosSource key="current" className={`${className}${wrapping ? ' photo-enter' : ''}`} foto={String(photo + 1).padStart(2, '0')} /></div>;
}
