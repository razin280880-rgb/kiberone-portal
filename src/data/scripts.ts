export type ScriptCategory =
  | 'soprovozhdenie'   // фермер: сопровождение действующих клиентов
  | 'prodlenie'        // продление модулей
  | 'reanimaciya'      // возврат ушедших
  | 'letnij'           // летние программы
  | 'probnyj'          // работа с пробным занятием
  | 'shablony'         // шаблоны WhatsApp и шпаргалки
  | 'shkoly'           // школьный канал: мастер-классы и касания
  | 'dokumenty';       // юридические скрипты — ПД, договоры, согласия

export type ScriptMeta = {
  file: string;
  slug: string;
  title: string;
  category: ScriptCategory;
  short: string;
  forRoles: string[];
};

export const SCRIPTS: ScriptMeta[] = [
  {
    file: '01-script-prodleniya.md',
    slug: 'prodlenie',
    title: 'Скрипт продления',
    category: 'prodlenie',
    short: 'Звонок фермера о продлении на следующий модуль',
    forRoles: ['fermer', 'ros'],
  },
  {
    file: '06-script-fermera-letnih-prodazh.md',
    slug: 'fermer-letnie-prodazhi',
    title: 'Скрипт летних продаж фермера',
    category: 'letnij',
    short: 'Допродажа летнего продукта существующим клиентам',
    forRoles: ['fermer'],
  },
  {
    file: '11-script-soprovozhdeniya-leto.md',
    slug: 'soprovozhdenie-leto',
    title: 'Скрипт сопровождения летом',
    category: 'letnij',
    short: 'Точки касания с клиентом в летний период',
    forRoles: ['fermer'],
  },
  {
    file: '12-script-prodaj-novye-lidy-leto.md',
    slug: 'novye-lidy-leto',
    title: 'Скрипт продаж: новые лиды летом',
    category: 'letnij',
    short: 'Скрипт хантера для летних входящих лидов',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '13-script-reaktivacii-bazy-ai-probnoe.md',
    slug: 'reaktivaciya-ai-probnoe',
    title: 'Скрипт реактивации базы (AI-пробное)',
    category: 'reanimaciya',
    short: 'Звонок ушедшим: приглашение на новое AI-пробное',
    forRoles: ['hanter', 'fermer'],
  },
  {
    file: '14-script-vhodjashie-zayavki-lager-cherez-probnoe.md',
    slug: 'lager-cherez-probnoe',
    title: 'Скрипт: лагерь через пробное',
    category: 'letnij',
    short: 'Перевод лагерной заявки в воронку пробного',
    forRoles: ['hanter'],
  },
  {
    file: '15-shpargalka-menedzhera-leto-AI.md',
    slug: 'shpargalka-leto-ai',
    title: 'Шпаргалка менеджера: лето + AI',
    category: 'shablony',
    short: 'Кратко: позиционирование и ключевые ответы',
    forRoles: ['hanter', 'fermer'],
  },
  {
    file: '16-script-soprovozhdenie-INDEX.md',
    slug: 'soprovozhdenie-index',
    title: 'Скрипты сопровождения: оглавление',
    category: 'soprovozhdenie',
    short: 'Карта всех скриптов фермера на год',
    forRoles: ['fermer', 'ros'],
  },
  {
    file: '16a-script-znakomstvo.md',
    slug: 'znakomstvo',
    title: 'Скрипт знакомства',
    category: 'soprovozhdenie',
    short: 'Первый звонок фермера после оплаты',
    forRoles: ['fermer'],
  },
  {
    file: '16b-script-pogruzhenie.md',
    slug: 'pogruzhenie',
    title: 'Скрипт погружения',
    category: 'soprovozhdenie',
    short: 'Звонок после первых занятий ребёнка',
    forRoles: ['fermer'],
  },
  {
    file: '16c-script-loyalnost-prodlenie-modulya.md',
    slug: 'loyalnost-prodlenie',
    title: 'Скрипт лояльности (продление модуля)',
    category: 'prodlenie',
    short: 'Закрепление и продление лояльного клиента',
    forRoles: ['fermer'],
  },
  {
    file: '16d-tochka-kontrolya-snizhenie-motivacii.md',
    slug: 'tochka-snizhenie-motivacii',
    title: 'Точка контроля: снижение мотивации',
    category: 'soprovozhdenie',
    short: 'Когда ребёнок «загас» — что делать фермеру',
    forRoles: ['fermer', 'tutor'],
  },
  {
    file: '16e-tochka-kontrolya-minecraft-roblox.md',
    slug: 'tochka-minecraft-roblox',
    title: 'Точка контроля: Minecraft / Roblox',
    category: 'soprovozhdenie',
    short: 'Что отвечать на запрос «учите ли вы Minecraft?»',
    forRoles: ['fermer', 'hanter'],
  },
  {
    file: '16f-script-doplata-5-zanyatie.md',
    slug: 'doplata-5',
    title: 'Скрипт доплаты к 5-му занятию',
    category: 'soprovozhdenie',
    short: 'Допродажа дополнительного формата',
    forRoles: ['fermer'],
  },
  {
    file: '16g-bank-vozrazhenij.md',
    slug: 'bank-vozrazhenij',
    title: 'Банк возражений',
    category: 'shablony',
    short: 'Ответы на типовые возражения родителей',
    forRoles: ['hanter', 'fermer', 'rop', 'ros'],
  },
  {
    file: '18-script-kuratora-probnyh.md',
    slug: 'kurator-probnyh',
    title: 'Скрипт куратора пробных',
    category: 'probnyj',
    short: 'Доведение записанного на пробный до прихода',
    forRoles: ['hanter'],
  },
  {
    file: '19-whatsapp-shablony.md',
    slug: 'whatsapp-shablony',
    title: 'WhatsApp-шаблоны',
    category: 'shablony',
    short: 'Готовые сообщения для типовых ситуаций',
    forRoles: ['fermer', 'hanter'],
  },
  {
    file: '21-script-perezagruzka-zakrytie.md',
    slug: 'perezagruzka-zakrytie',
    title: 'Скрипт «Перезагрузка»: закрытие',
    category: 'reanimaciya',
    short: 'Закрытие сделки в пилоте Перезагрузка',
    forRoles: ['hanter', 'fermer'],
  },
  {
    file: '24-script-fermera-priglashenie-na-otkrytyi-urok.md',
    slug: 'priglashenie-otkrytyj-urok',
    title: 'Приглашение на открытый урок',
    category: 'soprovozhdenie',
    short: 'Звонок-приглашение родителя на открытый урок',
    forRoles: ['fermer'],
  },
  {
    file: '29-script-prozvon-ushedshih-perezagruzka.md',
    slug: 'prozvon-ushedshih',
    title: 'Прозвон ушедших (Перезагрузка)',
    category: 'reanimaciya',
    short: 'Холодный звонок ушедшему клиенту',
    forRoles: ['hanter', 'fermer'],
  },
  // ─── обновление 24 мая 2026 ───────────────────────────────────────────
  {
    file: '41-skript-promoutera-steve-kanikuly.md',
    slug: 'promouter-steve-kanikuly',
    title: 'Скрипт промоутера «Стив» — каникулы',
    category: 'shkoly',
    short: 'Полевой промоутер для летнего лидгена',
    forRoles: ['manager-razvitiya'],
  },
  {
    file: '47-skript-kasanie-1-zapis-na-mk.md',
    slug: 'kasanie-1-zapis-na-mk',
    title: 'Касание №1. Запись на мастер-класс',
    category: 'shkoly',
    short: 'Первый звонок — приглашение на мастер-класс',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '48-skript-kasanie-2-posle-mk.md',
    slug: 'kasanie-2-posle-mk',
    title: 'Касание №2. После мастер-класса',
    category: 'shkoly',
    short: 'Первый звонок после МК — фиксация интереса',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '49-skript-kasanie-3-povtor.md',
    slug: 'kasanie-3-povtor',
    title: 'Касание №3. Повторный звонок',
    category: 'shkoly',
    short: 'Второй звонок после МК — фиксация решения',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '50-skript-kasanie-4-privedi-druga.md',
    slug: 'kasanie-4-privedi-druga',
    title: 'Касание №4. Акция «Приведи друга»',
    category: 'shkoly',
    short: 'Первая неделя обучения + активация рекомендаций',
    forRoles: ['fermer', 'hanter'],
  },
  {
    file: '64-script-roditelskoye-sobranie.md',
    slug: 'roditelskoye-sobranie',
    title: 'Скрипт работы на родительском собрании',
    category: 'shkoly',
    short: 'Что говорить родителям, когда выступаешь на собрании',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '65-skript-personalnye-dannye.md',
    slug: 'personalnye-dannye-hanter',
    title: 'Скрипт по ПД для менеджеров (ФЗ-152)',
    category: 'dokumenty',
    short: '«А откуда у вас мой номер?» — ответ хантера',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '66-pokazatelnyj-urok.md',
    slug: 'pokazatelnyj-urok',
    title: 'Показательный урок — что доносим родителю',
    category: 'probnyj',
    short: 'Что обязательно сказать родителю при записи на показательный',
    forRoles: ['hanter', 'manager-razvitiya'],
  },
  {
    file: '67-script-personalnye-dannye.md',
    slug: 'personalnye-dannye-sbor',
    title: 'Скрипт сбора ПД — анкеты и согласия',
    category: 'dokumenty',
    short: 'Как корректно собирать ПД на МК, родсобрании, через QR',
    forRoles: ['manager-razvitiya', 'tutor', 'rukovoditel-filiala'],
  },
  {
    file: '75-script-kross-promo-partnery.md',
    slug: 'kross-promo-partnery',
    title: 'Скрипт кросс-промо с партнёрами',
    category: 'shkoly',
    short: 'Партнёрка B2B: первый разговор с потенциальным партнёром',
    forRoles: ['manager-razvitiya', 'rukovoditel-filiala'],
  },
  {
    file: '81-skript-hantera-dozhim-cherez-dorozhnuyu-kartu.md',
    slug: 'hanter-dozhim-cherez-kartu',
    title: 'Хантер: дожим через дорожную карту',
    category: 'prodlenie',
    short: 'Использование дорожной карты обучения как аргумента закрытия',
    forRoles: ['hanter', 'rop'],
  },
  {
    file: '82-skript-soprovozhdeniya-prodlenie-cherez-sleduyushchiy-god.md',
    slug: 'prodlenie-cherez-sleduyushchiy-god',
    title: 'Сопровождение: продление через «следующий год»',
    category: 'prodlenie',
    short: 'Аргументация продления через дорожную карту обучения',
    forRoles: ['fermer', 'ros'],
  },
];

export const SCRIPT_CATEGORIES: Record<ScriptCategory, { label: string; icon: string }> = {
  soprovozhdenie: { label: 'Сопровождение', icon: '🤝' },
  prodlenie: { label: 'Продление', icon: '🔄' },
  reanimaciya: { label: 'Реанимация', icon: '♻️' },
  letnij: { label: 'Летние программы', icon: '☀️' },
  probnyj: { label: 'Пробный урок', icon: '🎯' },
  shablony: { label: 'Шаблоны и шпаргалки', icon: '📋' },
  shkoly: { label: 'Школы и мастер-классы', icon: '🏫' },
  dokumenty: { label: 'Документы и ПД', icon: '📄' },
};
