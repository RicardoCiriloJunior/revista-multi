export const pages = [
  ['156:747', '00', 'Capa', 959],
  ['156:772', '02', 'Sumário'],
  ['156:904', '03', 'Editorial: fome no Brasil e no Norte'],
  ['156:913', '04', 'O que é insegurança alimentar?'],
  ['156:933', '05', 'Josué de Castro e Amartya Sen'],
  ['156:943', '06', 'História da fome e direito à alimentação'],
  ['156:969', '07', 'Insegurança alimentar no Brasil'],
  ['156:979', '08', 'Evolução da insegurança alimentar'],
  ['156:989', '09', 'Insegurança alimentar grave por região'],
  ['196:739', '10', 'Norte: situação e evolução'],
  ['196:760', '11', 'Norte: níveis de insegurança'],
  ['156:998', '12', 'Renda, gênero e raça'],
  ['156:1011', '13', 'Insegurança alimentar no campo e na cidade'],
  ['156:1021', '14', 'Economia e desigualdade no Norte'],
  ['156:1048', '15', 'Produção comunitária e bioeconomia'],
  ['156:1060', '16', 'Transporte e abastecimento no Norte'],
  ['156:1074', '17', 'Secas e acesso à alimentação'],
  ['156:1095', '18', 'Depoimentos sobre a insegurança alimentar'],
  ['156:1106', '19', 'Alimentação e identidade cultural'],
  ['156:1117', '20', 'Cidadania e direito à alimentação'],
  ['156:1130', '21', 'Políticas de combate à fome'],
  ['156:1142', '22', 'Fontes e créditos'],
].map(([id, number, title, height = 1024]) => ({ id, number, title, height }));

export const pendingPages = [];
export const importedCount = pages.length - pendingPages.length;

// Current Figma destinations. The 10/11 fixes were explicitly approved earlier.
export const summaryLinks = {
  '156:776': '03', '156:783': '04', '156:790': '05', '156:797': '06', '156:804': '07',
  '156:811': '08', '156:818': '09', '196:781': '10', '196:788': '11',
  '156:825': '12', '156:832': '13', '156:839': '14', '156:846': '15',
  '156:853': '16', '156:860': '17', '156:867': '18', '156:874': '19',
  '156:881': '20', '156:888': '21', '156:895': '22',
};

export function indexFromHash(hash) {
  const match = hash.match(/^#pagina=(\d+)$/);
  const index = pages.findIndex(page => page.number === match?.[1]);
  return index < 0 ? 0 : index;
}

export function fitScale(width, height, pageHeight) {
  return Math.max(0.1, Math.min((width - 48) / 1440, (height - 48) / pageHeight));
}
