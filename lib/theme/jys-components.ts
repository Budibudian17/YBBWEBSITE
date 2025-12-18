// Per-component JYS theme config: kumpulin semua class warna di sini

export const jysSectionTheme = {
  infoStrip: {
    background: 'bg-primary text-primary-foreground',
    divider: 'lg:border-blue-800/60',
    iconCircle:
      'flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-pink-500/30',
    icon: 'h-5 w-5 text-white',
    subtitle: 'text-sm font-semibold uppercase tracking-wider text-pink-400',
  },
  videoSection: {
    badge:
      'inline-flex items-center rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow',
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    card: 'mx-auto max-w-7xl px-0 py-12 sm:px-6 lg:px-8',
    subtitle: 'mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600 sm:text-base',
    inner:
      'grid grid-cols-2 gap-6 rounded-2xl bg-white/95 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.25)] md:gap-8 md:p-6',
    mainVideoWrapper: 'relative overflow-hidden rounded-xl bg-slate-900/5',
    mainIframe: 'absolute inset-0 h-full w-full rounded-xl border-0',
    listWrapper: 'flex flex-col gap-3',
    yearTabsWrapper: 'mb-3 inline-flex rounded-full bg-slate-100 p-1 text-xs',
    yearTab:
      'inline-flex min-w-[64px] items-center justify-center rounded-full px-3 py-1 text-[11px] font-semibold text-slate-600 transition hover:text-slate-900',
    yearTabActive: 'bg-pink-600 text-white shadow-sm',
    listCard:
      'flex cursor-pointer items-center gap-3 rounded-xl bg-slate-50/90 p-3 text-left transition hover:bg-slate-100 border border-transparent',
    listCardActive: 'border-pink-300 bg-pink-50 shadow-[0_12px_30px_rgba(15,23,42,0.12)]',
    thumbnailWrapper: 'relative h-16 w-28 overflow-hidden rounded-lg bg-slate-200 flex-shrink-0',
    thumbnailImg: 'object-cover',
    listTitle: 'text-sm font-semibold text-slate-900',
    listMeta: 'mt-0.5 text-xs text-slate-500',
  },
  momentsShorts: {
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-20 sm:py-24',
    card: 'mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-12 text-accent-foreground shadow-[0_18px_60px_rgba(15,23,42,0.35)] sm:px-10 lg:px-16',
    cardBackground: '/img/bgshorts60.jpg',
    title: 'text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl lg:text-4xl',
    shortsRow: 'grid grid-cols-3 gap-5',
    shortWrapper: 'relative h-80 w-full overflow-hidden bg-black/15',
    shortIframe: 'absolute inset-0 h-full w-full border-0',
  },
  furtherInfo: {
    sectionWrapper: 'relative w-full py-12 sm:py-14',
    card: 'mx-auto flex max-w-7xl items-center px-6 sm:px-10 lg:px-16',
    innerGrid:
      'grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:gap-12',
    leftCol: 'order-2 w-full max-w-xl space-y-4 text-blue-950 lg:order-1 lg:pr-6',
    description: 'mt-2 max-w-md text-sm leading-relaxed text-blue-950/90 sm:text-base',
    buttonsCol: 'mt-4 flex flex-col items-start gap-3',
    guideButtonBase:
      'inline-flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-semibold shadow-sm transition',
    guideButtonPrimary: 'border-pink-500/80 bg-white/95 text-pink-700 hover:bg-white',
    guideButtonSecondary: 'border-blue-500/70 bg-blue-50/90 text-blue-800 hover:bg-blue-100',
    flagCircle: 'inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-full',
    rightCol: 'order-1 relative flex w-full justify-center lg:order-2',
    mockupWrapper:
      'relative h-80 w-full max-w-xs -mt-6 sm:h-96 sm:max-w-sm lg:h-[420px] lg:max-w-md lg:-mt-10 drop-shadow-[0_26px_70px_rgba(15,23,42,0.65)]',
  },
  alumniStories: {
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    card: 'mx-auto max-w-7xl px-6 py-10 text-slate-900 sm:px-10',
    layoutGrid: 'grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-start',
    mainVideoWrapper:
      'relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-200 mx-auto',
    mainIframe: 'absolute inset-0 h-full w-full border-0 rounded-2xl',
    reelsTitle: 'text-sm font-semibold uppercase tracking-wide text-pink-600',
    reelsGrid: 'mt-4 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    reelItem: 'relative aspect-[9/16] w-full max-w-[50px] mx-auto overflow-hidden rounded-xl',
    reelVideo: 'h-full w-full object-cover',
    reelSkeleton: 'absolute inset-0 animate-pulse bg-slate-200',
  },
  globalImpact: {
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    statsGrid: 'mx-auto mt-2 grid max-w-4xl grid-cols-1 gap-3 text-center sm:grid-cols-3',
    card: 'flex flex-col items-center gap-1 px-2 py-1',
    iconCircle:
      'grid h-10 w-10 place-items-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200',
    value: 'text-3xl font-extrabold tracking-tight text-pink-600 sm:text-4xl',
    label: 'text-xs font-medium uppercase tracking-wide text-slate-500',
  },
  participantDistribution: {
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    mapCard:
      'mx-auto max-w-7xl rounded-3xl bg-white px-6 py-8 text-slate-900 shadow-[0_14px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 sm:px-10',
    mapWrapper: 'relative w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200',
    mapInner: 'relative z-10 h-80 sm:h-96 lg:h-[420px]',
    legendRow: 'mt-6 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm',
    legendTitle: 'sr-only',
    legendItem: 'flex items-center gap-2.5 text-slate-700',
    legendDotBase: 'inline-block h-3.5 w-3.5 rounded-sm ring-2 ring-white shadow-sm',
    legendDotHigh: 'bg-red-500',
    legendDotMedium: 'bg-yellow-400',
    legendDotLow: 'bg-emerald-400',
    legendDotNone: 'bg-slate-300',
    mapBackdrop: '',
  },
  recognition: {
    sectionWrapper: 'relative w-full py-16 sm:py-20',
    container: 'mx-auto max-w-7xl px-6 lg:px-8',
    subtitle: '-mt-6 mb-8 text-center text-sm text-accent',
    grid: 'grid gap-6 lg:grid-cols-12',
    proofsCol: 'col-span-12 lg:col-span-7',
    proofsGrid: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3',
    proofCard:
      'overflow-hidden rounded-2xl bg-white px-4 py-4 shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200',
    proofIconCircle:
      'bg-accent text-accent-foreground inline-grid h-7 w-7 place-items-center rounded-full',
    proofTitle: 'text-[14px] font-extrabold text-blue-900',
    proofSubtitle: 'mt-0.5 text-[11px] leading-5 text-slate-700',
    bulletChip:
      'rounded-full bg-pink-600/10 px-2 py-0.5 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200',
    hakiIconCircle: 'inline-grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white',
    hakiCol: 'col-span-12 flex items-center justify-center lg:col-span-5',
    hakiCard:
      'w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200',
    hakiTitle: 'text-lg font-extrabold text-blue-900',
    hakiSubtitle: 'text-xs font-medium text-slate-600',
    hakiBrand: 'text-sm font-semibold text-blue-900',
    hakiClassText: 'text-xs text-slate-600',
    hakiMeta: 'rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200',
    hakiMetaLabel: 'text-slate-500',
    hakiMetaValue: 'font-semibold text-blue-950',
    hakiButton:
      'inline-flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700',
    hakiChip:
      'rounded-full bg-pink-600/10 px-2 py-1 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200',
  },
  aboutProgram: {
    checklistIcon: 'grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white',
    ctaButton:
      'inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2',
    sectionWrapper:
      "relative min-h-[520px] w-full bg-[url('/img/bgourprogram.png')] bg-cover bg-center bg-no-repeat py-20 sm:py-20",
    blurTop:
      'pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-400/20 blur-2xl',
    blurBottom:
      'pointer-events-none absolute -bottom-12 right-6 h-48 w-48 rounded-full bg-white/40 blur-2xl',
    tabContainer:
      'mt-4 inline-flex rounded-full bg-white/70 p-1 text-xs shadow-sm ring-1 ring-slate-200',
    tabButtonBase: 'rounded-full px-4 py-2 text-xs font-semibold transition',
    tabButtonActive: 'bg-pink-600 text-white shadow-sm',
    tabButtonInactive: 'text-slate-600 hover:text-slate-900',
    contentWrapper:
      'mt-5 min-h-[220px] space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base',
    visionLabel: 'font-semibold text-blue-950',
  },
  programHighlights: {
    card: 'hover:ring-accent/30 group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]',
    imageWrapper: 'h-40 w-full overflow-hidden bg-blue-100/60',
    title: 'text-xl font-extrabold text-blue-900',
    intro: 'mt-2 text-sm leading-6 text-slate-600',
    listItem:
      'flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 border-slate-200',
    checkIcon: 'bg-accent text-accent-foreground grid h-7 w-7 place-items-center rounded-full',
    crossIcon: 'grid h-7 w-7 place-items-center rounded-full bg-slate-200 text-slate-600',
    ctaButton:
      'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2',
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    collageLargeCard:
      'relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-blue-900/5 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-blue-900/10',
    collageSmallCard:
      'relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/40 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-slate-200/80',
    rightWrapper: 'order-2 lg:order-2 lg:pl-4',
    objectiveIntro: 'text-sm leading-relaxed text-slate-600 sm:text-base',
    objectivePointText: 'text-sm font-medium text-blue-950 sm:text-base',
  },
  awards: {
    sectionWrapper: 'relative w-full bg-background py-16 sm:py-20',
    container: 'mx-auto max-w-7xl px-6 lg:px-8',
    subtitle: '-mt-6 mb-8 text-center text-sm text-accent',
    grid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
    card: 'group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/10 transition hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]',
    cardInner: 'p-5',
    cardHeader: 'mb-2 flex items-center gap-2',
    iconCircleBase: 'inline-grid h-9 w-9 place-items-center rounded-full',
    title: 'text-lg font-extrabold text-blue-900',
    desc: 'text-sm leading-6 text-slate-700',
    highlightsList: 'flex flex-1 flex-col p-5 pt-0',
    highlightItemBase: 'flex items-center justify-between gap-3 py-3 text-sm transition-colors',
    highlightDivider: 'border-b border-slate-200',
    highlightLabel: 'font-medium text-blue-950',
    highlightBadge:
      'rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200',
    singleHighlightBox:
      'flex flex-1 items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4',
    singleHighlightValue: 'text-3xl font-extrabold text-blue-900',
    singleHighlightUnit: 'text-xs font-semibold uppercase tracking-wide text-slate-600',
    chip: 'rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200',
  },
  photoGallery: {
    sectionWrapper: 'relative w-full bg-background py-12 sm:py-16 lg:py-20',
    container: 'mx-auto max-w-7xl px-6 lg:px-8',
    subtitle: '-mt-6 mb-8 text-center text-sm text-accent',
    grid: 'grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4',
    itemWrapper: 'group overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200',
    itemButton: 'block h-40 w-full cursor-zoom-in overflow-hidden sm:h-48 lg:h-52',
    itemImageWrapper: 'relative block h-full w-full',
    itemImage:
      'origin-center scale-100 transform object-cover transition-transform duration-500 group-hover:scale-[1.05]',
    modalOverlay: 'fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4',
    modalCard: 'relative max-h-[90vh] w-full max-w-5xl',
    modalCloseButton:
      'absolute -right-3 -top-3 z-[61] inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow ring-1 ring-slate-200 hover:bg-white',
    modalImageWrapper: 'relative w-full',
    modalImage: 'max-h-[80vh] w-full rounded-xl object-contain',
    modalCaption: 'mt-3 text-center text-sm font-medium text-white/90',
    homeCtaButton:
      'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2',
    loadMoreButton:
      'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2',
  },
  getInTouch: {
    cardBackground: '/img/getintouchs.png',
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-16 sm:py-20',
    card: 'mx-auto max-w-7xl overflow-hidden rounded-3xl bg-transparent px-6 py-10 text-white sm:px-10 lg:px-16',
    layoutGrid: 'grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]',
    imageWrapper: 'relative mx-auto h-64 w-full max-w-sm sm:h-72',
    image: 'object-contain',
    title: 'text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl',
    list: 'mt-6 space-y-3',
    item: 'flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-blue-950 shadow-[0_10px_30px_rgba(15,23,42,0.18)]',
    itemIconCircle:
      'grid h-9 w-9 place-items-center rounded-full bg-pink-600 text-white shadow-[0_6px_20px_rgba(236,72,153,0.55)]',
    itemTitle: 'text-sm font-semibold',
    itemSubtitle: 'text-xs text-slate-600',
  },
  supportedBy: {
    sectionWrapper: 'relative w-full bg-white py-12 sm:py-16',
    subtitle: 'mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600 sm:text-base',
    card: 'flex flex-col items-center gap-2 rounded-2xl bg-white/80 p-4 shadow-[0_8px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-200',
    logoWrapper: 'relative h-14 w-32 sm:h-16 sm:w-40 flex-shrink-0',
    logoImg: 'object-contain',
    name: 'text-sm font-semibold text-slate-900 text-center',
    role: 'text-xs text-slate-500 text-center',
  },
  faq: {
    toggleIcon:
      'shrink-0 rounded-full bg-pink-50 p-2 text-pink-600 ring-1 ring-pink-200 transition group-open:rotate-180',
  },
  programsCurrent: {
    subtitle: 'mt-1 text-sm font-medium text-pink-700',
    statusBadge:
      'inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pink-700',
    primaryCta:
      'inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700',
    secondaryCta:
      'inline-flex items-center justify-center rounded-lg border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm transition hover:bg-pink-50',
    tertiaryCta:
      'inline-flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100',
  },
  programsPrevious: {
    yearBadge:
      'absolute left-3 top-3 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pink-700',
    cardTitle: 'text-base font-extrabold text-gray-900 group-hover:text-pink-700 sm:text-lg',
    arrowButton:
      'mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-pink-600 transition hover:bg-gray-50 hover:text-pink-700',
  },
  programsAdditional: {
    subtitle: '-mt-6 mb-8 text-center text-sm text-pink-600 sm:text-base',
    cardTitle: 'text-base font-extrabold text-gray-900 group-hover:text-pink-700 sm:text-lg',
    arrowCircle:
      'mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white',
  },
  programsMissionVision: {
    missionIconMain: 'grid h-9 w-9 place-items-center rounded-full bg-pink-600 text-white',
    missionBulletIcon:
      'mt-1 grid h-6 w-6 place-items-center rounded-full bg-pink-100 text-pink-700 ring-1 ring-pink-200',
  },
  programsObjectives: {
    numberCircle:
      'grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white',
  },
  programsBenefits: {
    iconCircle: 'grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white',
  },
  insightsStats: {
    iconCircle: 'grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white',
    label: 'text-xs font-semibold uppercase tracking-wide text-pink-600',
    value: 'mt-1 text-2xl font-extrabold text-blue-900',
  },
  insightsTheme: {
    card: 'relative overflow-hidden rounded-xl border border-pink-200/60 bg-gradient-to-br from-pink-50 to-white p-5 shadow-[0_8px_30px_rgba(2,6,23,0.06)]',
    leftAccent: 'absolute left-0 top-0 h-full w-1 bg-pink-500/60',
    tagChip:
      'inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-pink-600 ring-1 ring-pink-200',
    iconCircle:
      'grid h-8 w-8 place-items-center rounded-full bg-white text-pink-600 ring-1 ring-pink-200',
    sdgCircle:
      'inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white',
  },
  insightsParticipants: {
    rankCircle:
      'inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white',
    flagCircle:
      'grid h-7 w-7 place-items-center rounded-full bg-pink-50 text-pink-600 ring-1 ring-pink-200',
    barTrack: 'mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100',
    barFill: 'h-full bg-pink-500',
  },
  announcementsGrid: {
    subtitle: '-mt-6 mb-8 text-center text-sm text-pink-600',
    card: 'group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200',
    loadMoreButton:
      'inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2',
  },
  login: {
    input:
      'mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200',
    checkbox: 'h-4 w-4 rounded border-white/30 bg-white/20 text-pink-600 focus:ring-pink-300',
    primaryButton:
      'inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2',
    forgotPasswordLink: 'font-semibold text-white hover:text-pink-200',
    switchModeLink: 'font-semibold text-white underline hover:text-pink-200',
  },
  applyImportant: {
    card: 'overflow-hidden rounded-2xl bg-pink-50 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-pink-200 sm:p-8',
    chip: 'rounded-full border border-pink-300 bg-white/70 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-pink-700',
    bulletDot: 'mt-1 h-1.5 w-1.5 rounded-full bg-pink-500',
    legalLink: 'font-semibold underline decoration-pink-300 underline-offset-2 hover:text-pink-700',
  },
  applyRegistrationTypes: {
    card: 'group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200',
    iconCircle: 'grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white',
    priceText: 'text-2xl font-extrabold text-pink-600',
    calendarIcon: 'h-4 w-4 text-pink-600',
    bulletCircle: 'grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white',
    ctaButton:
      'inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700',
  },
  homeRegistration: {
    sectionWrapper: 'relative w-full bg-[#ffffff72] py-14 sm:py-16',
    introText: 'mx-auto -mt-6 mb-8 max-w-3xl text-center text-sm text-slate-600 sm:text-base',
    instagramCard:
      'overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200',
    instagramHeader:
      'border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500',
    instagramFooter: 'flex items-center justify-between px-4 py-3 text-xs text-slate-600',
    instagramLink: 'font-semibold text-accent hover:underline',
    guidePrimary:
      'inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
    guideSecondary:
      'inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold text-pink-700 shadow-sm transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2',
  },
  homeImportantPayment: {
    sectionWrapper: 'relative w-full bg-white py-14 sm:py-16',
    introText: 'mx-auto -mt-6 mb-10 max-w-3xl text-center text-sm text-slate-600 sm:text-base',
    card: 'flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200',
    iconCircle:
      'mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600',
    cardTitle: 'text-base font-semibold text-slate-900',
    cardBody: 'mt-2 text-sm leading-relaxed text-slate-600',
    noteBar:
      'mt-8 flex items-center gap-3 rounded-xl bg-pink-50 px-4 py-3 text-xs text-slate-900 border-l-4 border-pink-400/80 shadow-[0_8px_30px_rgba(2,6,23,0.06)]',
    noteIcon: 'h-4 w-4 text-pink-500',
    noteEmphasis: 'font-semibold text-pink-700',
  },
  promoCta: {
    sectionWrapper:
      "relative w-full overflow-hidden bg-[url('/img/ctabekground.png')] bg-cover bg-center bg-no-repeat py-12 text-[#172554] sm:py-16 lg:py-20",
    innerGrid:
      'relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8',
    title: 'text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl',
    body: 'text-white-200 mt-4 max-w-xl',
    primaryButton:
      'hover:bg-accent/90 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
    videoCol: 'relative z-10 flex flex-col',
    videoCard:
      'rounded-2xl bg-white/95 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70',
    videoFrameWrapper: 'relative aspect-video w-full overflow-hidden rounded-xl bg-black/5',
    videoTitle: 'text-base font-semibold text-blue-950',
    videoDesc: 'mt-1 text-xs text-slate-600 sm:text-sm',
  },
  programsTestimonialsGrid: {
    card: 'rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200',
    countryChip:
      'inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-[11px] font-semibold text-pink-700 ring-1 ring-pink-200',
    yearPill:
      'inline-flex items-center rounded-full bg-pink-600 px-2 py-1 text-[11px] font-semibold text-white',
    starsWrapper: 'flex items-center gap-0.5 text-pink-500',
    starFilled: 'h-4 w-4 fill-pink-500 stroke-pink-600',
    starEmpty: 'h-4 w-4 stroke-pink-300',
  },
  programsTestimonialsImpact: {
    card: 'group rounded-2xl bg-white p-5 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200',
    iconCircle:
      'mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white transition group-hover:bg-pink-700',
    label: 'text-xs font-semibold uppercase tracking-wide text-pink-600',
  },
  partnersWhy: {
    featureCard:
      'rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200',
    featureIconCircle: 'mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white',
    ctaCard:
      "relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-[url('/img/bgourprogram.png')] bg-cover bg-center p-10 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-pink-100 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200",
    ctaIconCircle:
      'mb-3 grid h-16 w-16 place-items-center rounded-full bg-pink-600 text-white shadow',
  },
  partnersOpportunities: {
    diamondCard:
      'group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]',
    diamondBadge:
      'rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-pink-700 ring-1 ring-pink-200',
    checkCircle: 'grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white',
    diamondCta:
      'inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2',
  },
  partnersCommunity: {
    card: 'group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300',
    pinkChip:
      'mt-1 inline-block rounded-full bg-pink-50 px-2.5 py-0.5 text-xs font-semibold text-pink-700 ring-1 ring-pink-200',
  },
  partnersDetail: {
    iconCircle: 'inline-grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white',
  },
  programDetail: {
    heroCta:
      'inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700',
    heroCtaClosed:
      'inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/80',
    infoStripIconCircle:
      'flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5',
    infoStripSubtitle: 'text-sm font-semibold uppercase tracking-wider text-pink-400',
    guidelinesIconCircle:
      'mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-500/80 bg-pink-50',
    guidelinesIcon: 'h-5 w-5 text-pink-600',
    guidelinesButton:
      'inline-flex items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700',
    overviewIconCircle:
      'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-pink-50',
    overviewIcon: 'h-5 w-5 text-pink-600',
    overviewBulletIcon:
      'inline-flex aspect-square h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white',
    applicationPrimaryCta:
      'inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700',
    applicationSecondaryCta:
      'inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-500',
  },
  galleryOtherPrograms: {
    subtitle: '-mt-6 mb-8 text-center text-sm text-pink-600 sm:text-base',
    cardTitle: 'text-base font-extrabold text-blue-950 group-hover:text-pink-700 sm:text-lg',
    visitChip:
      'inline-flex items-center gap-1 rounded-md border border-pink-200 px-3 py-2 text-xs font-semibold text-pink-700 transition group-hover:border-pink-300',
  },
  programRundowns: {
    tabButton:
      'relative px-4 py-5 text-center text-base font-extrabold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 sm:px-6 sm:text-lg',
    tabLabelIcon: 'h-4 w-4 text-pink-600',
    tabActiveUnderline: 'absolute inset-x-0 bottom-0 block h-0.5 bg-pink-600',
    noteIcon: 'mt-0.5 h-5 w-5 flex-shrink-0 text-pink-600',
  },
  programFAQ: {
    tabButton:
      'relative px-4 py-5 text-center text-base font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 sm:px-6 sm:text-lg',
    tabInactive:
      'text-blue-900/70 hover:bg-pink-50 hover:text-blue-950 hover:shadow-sm hover:ring-1 hover:ring-pink-200',
    tabActiveUnderline: 'absolute inset-x-0 bottom-0 block h-0.5 bg-pink-600',
    tabLabelIcon: 'h-4 w-4 text-pink-600',
  },
} as const;

export type JysSectionTheme = typeof jysSectionTheme;
