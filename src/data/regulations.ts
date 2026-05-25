export type RegulationCategory =
  | 'process'        // регламенты процессов сети
  | 'event'          // регламенты разовых событий (ярмарка, открытый урок)
  | 'plan'           // планы развития / разворота / пилотов
  | 'communication'  // памятки родителю, отчёты
  | 'onboarding';    // программы адаптации

export type RegulationMeta = {
  file: string;          // имя файла в src/content/regulations
  slug: string;          // URL slug
  title: string;
  category: RegulationCategory;
  short: string;
  forRoles: string[];    // slug'и должностей, кому особенно важно
};

export const REGULATIONS: RegulationMeta[] = [
  {
    file: '03-reglament-fermera-propuski.md',
    slug: 'reglament-propuski',
    title: 'Регламент работы с пропусками',
    category: 'process',
    short: 'Как фермер реагирует на пропуски и предотвращает отток',
    forRoles: ['fermer', 'ros', 'rukovoditel-filiala'],
  },
  {
    file: '04-tz-rukovoditel-otdela-soprovozhdeniya.md',
    slug: 'tz-ros',
    title: 'ТЗ: руководитель отдела сопровождения',
    category: 'process',
    short: 'Задачи и зона ответственности РОС в сети',
    forRoles: ['ros', 'operacionnyy-direktor'],
  },
  {
    file: '05-plan-razvorota-krasnodara.md',
    slug: 'plan-razvorota-krasnodara',
    title: 'План разворота Краснодара',
    category: 'plan',
    short: 'Корректирующий план для проблемного филиала',
    forRoles: ['rukovoditel-filiala', 'operacionnyy-direktor'],
  },
  {
    file: '07-dashboard-metrik.md',
    slug: 'dashboard-metrik',
    title: 'Дашборд метрик сети',
    category: 'process',
    short: 'Какие метрики смотрим еженедельно и где их брать',
    forRoles: ['operacionnyy-direktor', 'rop', 'ros', 'rukovoditel-filiala'],
  },
  {
    file: '08-onboarding-tutora.md',
    slug: 'onboarding-tutora',
    title: 'Онбординг тьютора (4+8 недель)',
    category: 'onboarding',
    short: 'Программа адаптации нового тьютора',
    forRoles: ['tutor', 'metodist', 'rukovoditel-filiala', 'hr'],
  },
  {
    file: '09-business-case-letnego-produkta.md',
    slug: 'biznes-keys-leto',
    title: 'Бизнес-кейс летнего продукта',
    category: 'plan',
    short: 'Экономика и сценарий летнего продукта KIBERone',
    forRoles: ['rukovoditel-filiala', 'operacionnyy-direktor', 'rop'],
  },
  {
    file: '10-cheklist-probnogo-uroka.md',
    slug: 'cheklist-probnogo',
    title: 'Чек-лист пробного урока',
    category: 'process',
    short: 'Стандарт качества пробного занятия',
    forRoles: ['tutor', 'metodist', 'hanter'],
  },
  {
    file: '17-reglament-dovodimost-probnogo.md',
    slug: 'reglament-dovodimost',
    title: 'Регламент доводимости пробного',
    category: 'process',
    short: 'Как менеджер доводит записанного на пробный до прихода',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '22-reglament-utrennih-planerok-rukovoditelei.md',
    slug: 'reglament-planerok',
    title: 'Регламент утренних планёрок',
    category: 'process',
    short: 'Структура и ритм планёрок руководителей',
    forRoles: ['operacionnyy-direktor', 'rukovoditel-filiala', 'rop', 'ros'],
  },
  {
    file: '23-reglament-attestacii-i-obucheniya.md',
    slug: 'reglament-attestacii',
    title: 'Регламент аттестаций и обучения',
    category: 'process',
    short: 'Цикл аттестаций тьюторов и методические встречи',
    forRoles: ['metodist', 'tutor', 'hr'],
  },
  {
    file: '24-reglament-kiber-yarmarki.md',
    slug: 'reglament-kiber-yarmarki',
    title: 'Регламент Кибер-ярмарки',
    category: 'event',
    short: 'Полный регламент январь/июнь ярмарки: балансы, продажи, отчёт',
    forRoles: ['tutor', 'metodist', 'rukovoditel-filiala'],
  },
  {
    file: '25-reglament-reanimacii-avgust.md',
    slug: 'reglament-reanimacii',
    title: 'Регламент августовской реанимации',
    category: 'process',
    short: 'Программа возврата ушедших клиентов через подарочный пакет',
    forRoles: ['fermer', 'ros', 'rukovoditel-filiala'],
  },
  {
    file: '02-otchet-progressa-roditelyu.md',
    slug: 'otchet-progressa',
    title: 'Отчёт прогресса родителю',
    category: 'communication',
    short: 'Шаблон ежемесячного отчёта о ребёнке',
    forRoles: ['tutor', 'fermer'],
  },
  {
    file: '23-pamyatka-roditelyu-whatsapp.md',
    slug: 'pamyatka-roditelyu',
    title: 'Памятка родителю в WhatsApp',
    category: 'communication',
    short: 'Шаблон приветственного сообщения родителю после оплаты',
    forRoles: ['fermer'],
  },
  {
    file: '28-plan-pilota-perezagruzka-cheln.md',
    slug: 'plan-pilota-perezagruzka',
    title: 'План пилота «Перезагрузка» в Челнах',
    category: 'plan',
    short: 'Пилот программы реанимации через AI-пакет',
    forRoles: ['operacionnyy-direktor', 'rukovoditel-filiala'],
  },
  // ─── обновление 24 мая 2026 ───────────────────────────────────────────
  {
    file: '34-provedenie-master-class-v-shkole.md',
    slug: 'master-class-v-shkole',
    title: 'Проведение мастер-класса в школе',
    category: 'event',
    short: 'Сценарий проведения МК директором школы — от заезда до сбора анкет',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '36-licenzii-i-rekvizity.md',
    slug: 'licenzii-i-rekvizity',
    title: 'Лицензии и реквизиты юр.лиц',
    category: 'process',
    short: '3 юр.лица на 7 городов: маткапитал, налоговый вычет, школы',
    forRoles: ['operacionnyy-direktor', 'hr', 'ofis-menedzher', 'rukovoditel-filiala'],
  },
  {
    file: '37-pamyatka-licenziya-otvety.md',
    slug: 'pamyatka-licenziya-otvety',
    title: 'Памятка: что говорить про лицензию',
    category: 'communication',
    short: 'Готовые ответы менеджеров на вопрос «А у вас есть лицензия?»',
    forRoles: ['hanter', 'fermer', 'manager-razvitiya'],
  },
  {
    file: '38-principy-stazhirovki-pervye-dni.md',
    slug: 'principy-stazhirovki',
    title: 'Принципы стажировки в первые дни',
    category: 'onboarding',
    short: 'С первого дня — реальные задачи. Решение по итогам 3–5 дней',
    forRoles: ['hr', 'rukovoditel-filiala'],
  },
  {
    file: '44-algoritm-raboty-s-lidom.md',
    slug: 'algoritm-raboty-s-lidom',
    title: 'Алгоритм работы с ЛИДом',
    category: 'process',
    short: 'Последовательность шагов хантера от поступления заявки до закрытия',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '45-reglament-zayavok-tg.md',
    slug: 'reglament-zayavok-tg',
    title: 'Регламент обработки заявок из Telegram',
    category: 'process',
    short: 'Как реагировать на заявки из Telegram-чатов и каналов',
    forRoles: ['hanter', 'rop', 'ofis-menedzher'],
  },
  {
    file: '46-reglament-15-na-35.md',
    slug: 'reglament-15-na-35',
    title: 'Регламент «15 попыток / 35 дней»',
    category: 'process',
    short: 'Сколько касаний нужно сделать до закрытия лида в отказ',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '51-checklist-menedzhera-mk.md',
    slug: 'checklist-menedzhera-mk',
    title: 'Чек-лист менеджера на мастер-классе',
    category: 'event',
    short: 'Что менеджер делает на МК: до, во время, после',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '56-standart-obshheniya.md',
    slug: 'standart-obshheniya',
    title: 'Стандарт общения с клиентами',
    category: 'process',
    short: '10 правил «нельзя» и 4 совета по тону менеджера',
    forRoles: ['hanter', 'fermer', 'rop', 'ros'],
  },
  {
    file: '59-zapolnenie-dogovorov.md',
    slug: 'zapolnenie-dogovorov',
    title: 'Заполнение и нумерация договоров',
    category: 'process',
    short: 'Как корректно оформлять договоры с клиентами',
    forRoles: ['ofis-menedzher', 'hanter', 'hr'],
  },
  {
    file: '60-stoimost-lokacii-2026.md',
    slug: 'stoimost-lokacii-2026',
    title: 'Стоимость, локации и ориентиры (сезон 2025–2026)',
    category: 'process',
    short: 'Цены, адреса филиалов, +8% индексация с сентября 2026',
    forRoles: ['hanter', 'fermer', 'manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '70-rukovodstvo-vzaimodejstviya-s-ou.md',
    slug: 'vzaimodejstvie-s-ou',
    title: 'Руководство по взаимодействию с ОУ',
    category: 'process',
    short: 'Образовательные учреждения: первый контакт, согласование, документы',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '71-cheklist-promo-v-ou.md',
    slug: 'cheklist-promo-v-ou',
    title: 'Чек-лист подготовки промо в ОУ',
    category: 'event',
    short: 'Подготовка и проведение промо в образовательных учреждениях',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '80-dorozhnaya-karta-obucheniya-po-vozrastam.md',
    slug: 'dorozhnaya-karta-obucheniya',
    title: 'Дорожная карта обучения по возрастам',
    category: 'process',
    short: 'Что ребёнок проходит в каждом возрасте — основа продаж и сопровождения',
    forRoles: ['hanter', 'fermer', 'manager-razvitiya', 'metodist'],
  },
];

export const REGULATION_CATEGORIES: Record<RegulationCategory, { label: string; icon: string }> = {
  process: { label: 'Процессы сети', icon: '⚙️' },
  event: { label: 'События года', icon: '🎉' },
  plan: { label: 'Планы и пилоты', icon: '🧭' },
  communication: { label: 'Общение с родителями', icon: '💬' },
  onboarding: { label: 'Адаптация', icon: '🌱' },
};
