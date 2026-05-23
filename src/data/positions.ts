export type PositionGroup = 'central' | 'branch';

export type Position = {
  slug: string;        // URL slug
  folder: string;      // папка в kiberone-management/positions
  title: string;       // короткое название
  full: string;        // полное название должности
  group: PositionGroup;
  dept: string;        // отдел
  short: string;       // одной строкой что делает
  icon: string;        // эмодзи или короткий код
};

export const POSITIONS: Position[] = [
  {
    slug: 'tutor',
    folder: '02-tutor',
    title: 'Тьютор',
    full: 'Тьютор (преподаватель)',
    group: 'branch',
    dept: 'Учебный отдел',
    short: 'Главное лицо учебного процесса для ребёнка и родителя',
    icon: '🎓',
  },
  {
    slug: 'assistent',
    folder: '03-assistent',
    title: 'Ассистент',
    full: 'Ассистент тьютора',
    group: 'branch',
    dept: 'Учебный отдел',
    short: 'Правая рука тьютора на уроке, путь в тьюторы',
    icon: '🤝',
  },
  {
    slug: 'metodist',
    folder: '01-metodist',
    title: 'Методист',
    full: 'Методист сети',
    group: 'central',
    dept: 'Учебный отдел',
    short: 'Программа, контроль качества уроков, аттестации',
    icon: '📚',
  },
  {
    slug: 'rukovoditel-filiala',
    folder: '05-rukovoditel-filiala',
    title: 'Руководитель филиала',
    full: 'Руководитель филиала (РФ)',
    group: 'branch',
    dept: 'Управление',
    short: 'P&L филиала, команда, план продаж и удержания',
    icon: '🏢',
  },
  {
    slug: 'manager-razvitiya',
    folder: '04-manager-razvitiya',
    title: 'Менеджер развития',
    full: 'Менеджер развития (МР)',
    group: 'branch',
    dept: 'Маркетинг и развитие',
    short: 'Школы, партнёры, локальный трафик в филиал',
    icon: '🌱',
  },
  {
    slug: 'hanter',
    folder: '07-hanter',
    title: 'Хантер',
    full: 'Хантер (менеджер по продажам)',
    group: 'central',
    dept: 'Отдел продаж',
    short: 'Конверсия лидов в пробный и пробного в оплату',
    icon: '🎯',
  },
  {
    slug: 'rop',
    folder: '08-rop',
    title: 'РОП',
    full: 'Руководитель отдела продаж',
    group: 'central',
    dept: 'Отдел продаж',
    short: 'План и качество продаж по сети, наставничество хантеров',
    icon: '📈',
  },
  {
    slug: 'fermer',
    folder: '09-fermer',
    title: 'Фермер',
    full: 'Фермер (сопровождение)',
    group: 'central',
    dept: 'Отдел сопровождения',
    short: 'Удержание ученика: посещаемость, продление, допродажи',
    icon: '🌾',
  },
  {
    slug: 'ros',
    folder: '10-ros',
    title: 'РОС',
    full: 'Руководитель отдела сопровождения',
    group: 'central',
    dept: 'Отдел сопровождения',
    short: 'План удержания и допродаж по сети, наставничество фермеров',
    icon: '🛡️',
  },
  {
    slug: 'hr',
    folder: '11-hr',
    title: 'HR',
    full: 'HR-специалист сети',
    group: 'central',
    dept: 'HR',
    short: 'Найм, адаптация, удержание сотрудников по всей сети',
    icon: '👥',
  },
  {
    slug: 'ofis-menedzher',
    folder: '14-ofis-menedzher',
    title: 'Офис-менеджер',
    full: 'Офис-менеджер филиала',
    group: 'branch',
    dept: 'Управление',
    short: 'Ресепшен, документы, бытовая операционка филиала',
    icon: '🏛️',
  },
  {
    slug: 'operacionnyy-direktor',
    folder: '15-operacionnyy-direktor',
    title: 'Операционный директор',
    full: 'Операционный директор сети',
    group: 'central',
    dept: 'Управление',
    short: 'Сквозные процессы и регулярный менеджмент по сети',
    icon: '⚙️',
  },
  {
    slug: 'rukovoditel-otdela-razvitiya',
    folder: '16-rukovoditel-otdela-razvitiya',
    title: 'Руководитель отдела развития',
    full: 'Руководитель отдела развития',
    group: 'central',
    dept: 'Маркетинг и развитие',
    short: 'Маркетинг, лиды, партнёрства, развитие сети',
    icon: '🚀',
  },
];

export const POSITION_SECTIONS = [
  { slug: 'rol', file: '01-rol-i-funkcii.md', title: 'Роль и функции', icon: '🎯' },
  { slug: 'adaptaciya', file: '02-sistema-adaptacii.md', title: 'Адаптация (новичкам)', icon: '🌱' },
  { slug: 'den', file: '03-snimok-rabochego-dnya.md', title: 'Снимок рабочего дня', icon: '🕒' },
  { slug: 'cheklisty', file: '04-cheklisty.md', title: 'Чек-листы', icon: '✅' },
  { slug: 'pokazateli', file: '05-pokazateli-i-istochniki.md', title: 'Показатели и источники', icon: '📊' },
  { slug: 'puls', file: '06-ruka-na-pulse.md', title: 'Рука на пульсе', icon: '🩺' },
  { slug: 'kpi', file: '07-kpi-i-mesyachnye-metriki.md', title: 'KPI и метрики', icon: '🏆' },
] as const;

export type PositionSection = typeof POSITION_SECTIONS[number];

export function getPosition(slug: string): Position | undefined {
  return POSITIONS.find((p) => p.slug === slug);
}
