// styles/constants.js
// Archivo de constantes de estilo generado a partir de variablesGYBWEB.json

// =================================================================
// --- COLORES ---
// =================================================================
// Se exportan objetos para colores de texto, fondo y borde.
// Los valores de light-mode se usan por defecto.
// Los valores de dark-mode se pueden aplicar en Tailwind con el prefijo `dark:`,
// ej: className={`${textColors.primary} dark:${textColors.primary_dark}`}
// =================================================================


// /styles/constant.js
export const textColors = {
    // GYB Greens
    gybDarkGreen: 'text-[#0f1413]',
    gybDarkGreen_dark: 'text-[#e3f6f2]',
    gybGreen: 'text-[#06af7f]',
    gybGreenDarkMode: 'text-[#e3f6f2]', // Mismo que gybDarkGreen_dark

    // Neutrals
    white: 'text-[#ffffff]',
    white_dark: 'text-[#020202]',
    whiteTrue: 'text-[#ffffff]', // Siempre blanco
    black: 'text-[#020202]',
    black_dark: 'text-[#ffffff]',
    blackTrue: 'text-[#020202]', // Siempre negro
    gray50: 'text-[#808080]',
    gray50_dark: 'text-[#b2b2b2]',
    gray30: 'text-[#4d4d4d]',
    gray30_dark: 'text-[#cccccc]',
    text2: 'text-[#161b16]',

    // Opacidades (Negro)
    black90: 'text-[#020202e5]',
    black70: 'text-[#020202b2]',
    black50: 'text-[#02020280]',
    black50_dark: 'text-[#ffffff80]',
    black30: 'text-[#0202024d]',
    black25: 'text-[#02020240]',
    black10: 'text-[#0202021a]',
    black10_dark: 'text-[#ffffff1a]',
    black5: 'text-[#0202020d]',

    // Opacidades (Blanco)
    white70: 'text-[#ffffffb2]',
    white70_dark: 'text-[#ffffff26]',
    white50: 'text-[#ffffff80]',
    white50_dark: 'text-[#ffffff33]',
    white30: 'text-[#ffffff4d]',
    white30_dark: 'text-[#ffffff1a]',
};

export const hovers = {
   gybGreen: 'hover:text-[#06af7f]'
}

export const backgroundColors = {
    // GYB Greens
    gybDarkGreen: 'bg-[#0f1413]',
    gybDarkGreen_dark: 'bg-[#e3f6f2]',
    gybLightGreen: 'bg-[#e3f6f2]',
    gybLightGreen75: 'bg-[#e3f6f2bf]',
    gybLightGreen50: 'bg-[#e3f6f280]',
    gybLightGreen50_dark: 'bg-[#e3f6f233]',
    gybGreen: 'bg-[#06af7f]',
    gybGreenDarkMode: 'bg-[#e3f6f2]',
    gybGreen50: 'bg-[#06af7f80]',
    gybGreen25: 'bg-[#06af7f40]',
    gybGreen20: 'bg-[#06af7f33]',
    gybGreen10: 'bg-[#06af7f1a]',
    gybGreen5: 'bg-[#06af7f0d]',

    // Neutrals
    white: 'bg-[#ffffff]',
    white_dark: 'bg-[#020202]',
    whiteTrue: 'bg-[#ffffff]',
    black: 'bg-[#020202]',
    black10: 'bg-[#0202021a]',
    black10_dark: 'bg-[#ffffff1a]',
    black_dark: 'bg-[#ffffff]',
    blackTrue: 'bg-[#020202]',
    gray98: 'bg-[#fafafa]',
    gray95: 'bg-[#f2f2f2]',
    gray90: 'bg-[#e5e5e5]',
    gray80: 'bg-[#cccccc]',
    gray70: 'bg-[#b2b2b2]',
    gray50: 'bg-[#808080]',
    gray30: 'bg-[#4d4d4d]',
    gray20: 'bg-[#333333]',
    gray10: 'bg-[#1a1a1a]',
    white50: 'bg-rgba(255, 255, 255, 0.50)',

    // Legacy
    legacy210: 'bg-[#44BCFF]',
    legacy23: 'bg-[#FF44EC]'
};

export const borderColors = {
    // Usando los mismos nombres que los colores de texto/fondo para consistencia
    gybDarkGreen: 'border-[#0f1413]',
    gybDarkGreen_dark: 'border-[#e3f6f2]',
    gybGreen: 'border-[#06af7f]',
    black: 'border-[#020202]',
    black_dark: 'border-[#ffffff]',
    black25: 'border-[#02020240]',
    black10: 'border-[#0202021a]',
    black10_dark: 'border-[#ffffff1a]',
    gray30: 'border-[#4d4d4d]',
    gray30_dark: 'border-[#cccccc]',
};

export const submenus = {
    label: `${textColors.gray50} font-sans text-[0.625rem] not-italic font-normal leading-[120%] tracking-[0.1875rem] uppercase`,
    title: ``,
    subtitle: ``
}

// =================================================================
// --- GRADIENTES ---
// =================================================================
// Clases de utilidad para fondos con gradientes lineales.
// =================================================================

export const gradients = {
    // Legacy Gradients
    legacy1: 'bg-[linear-gradient(90deg,_#6ddcff_0%,_#6cf977_100%)]',
    legacy2: 'bg-[linear-gradient(90deg,_#44bcff_0%,_#44b0ff_23%,_#ff44ec_49%,_#ff44ec_74%,_#ff675e_100%)]',
    legacy3: 'bg-[linear-gradient(90deg,_#f3ec58_0%,_#f6ca45_40%,_#f9b036_77%,_#faa631_100%)]',
    legacy4: 'bg-[linear-gradient(90deg,_#44ff9a_0%,_#44b0ff_23%,_#8b44ff_49%,_#ff6644_79%,_#ebff70_100%)]',

    legacy1_inverted: 'bg-[linear-gradient(99deg,_#6cf977_0%,_#6ddcff_100%)]',

    // Basic Gradients (usados en los badges del ejemplo)
    basic1: 'bg-[linear-gradient(92deg,_#6e95ff_0%,_#d8daff_100%)]',
    basic2: 'bg-[linear-gradient(92deg,_#8d6dff_0%,_#f4e4ff_100%)]',
    basic3: 'bg-[linear-gradient(92deg,_#ff8cb0_0%,_#fde4ff_100%)]',
    basic4: 'bg-[linear-gradient(92deg,_#ff6563_0%,_#f9efe2_100%)]',

    basic1_opacity25: 'bg-[linear-gradient(92deg,rgba(110,149,255,0.25)_0%,rgba(216,218,255,0.25)_100%)]',
    basic2_opacity25: 'bg-[linear-gradient(92deg,rgba(141,109,255,0.25)_0%,rgba(244,228,255,0.25)_100%)]',
    basic3_opacity25: 'bg-[linear-gradient(92deg,rgba(255,140,176,0.25)_0%,rgba(253,228,255,0.25)_100%)]'

};


// =================================================================
// --- TIPOGRAFÍA ---
// =================================================================
// Fuentes, tamaños de texto y alturas de línea.
// Los valores responsivos usan `md:` para el tamaño de escritorio.
// Formato: `mobile md:desktop`
// =================================================================

export const fonts = {
    sans: 'font-["IBM_Plex_Sans"]', // typography_font_ibm plex sans
    inter: 'font-inter',           // typography_font_inter
};

export const fontSizes = {
    // text-[mobile] md:text-[desktop]
    size120: 'text-[5.5rem] md:text-[7.5rem]',
    size61: 'text-[2.5rem] md:text-[3.8125rem]',   // 40px -> 61px
    size49: 'text-[2rem] md:text-[3.0625rem]',     // 32px -> 49px
    size39: 'text-[1.75rem] md:text-[2.4375rem]',  // 28px -> 39px
    size31: 'text-[1.5rem] md:text-[1.9375rem]',   // 24px -> 31px
    size25: 'text-[1.25rem] md:text-[1.5625rem]',  // 20px -> 25px
    size20: 'text-[1.125rem] md:text-[1.25rem]',   // 18px -> 20px
    size18: 'text-[1.0625rem] md:text-[1.125rem]', // 17px -> 18px
    size16: 'text-[1rem]',                         // 16px (solo desktop)
    size13: 'text-[0.875rem]',                     // 14px (solo desktop)
    size10: 'text-[0.75rem] md:text-[0.625rem]',   // 12px -> 10px
};

export const lineHeights = {
    // leading-[mobile] md:leading-[desktop]
    leading61: 'leading-[2.5rem] md:leading-[3.8125rem]',   // 40px -> 61px
    leading49: 'leading-[2rem] md:leading-[3.0625rem]',     // 32px -> 49px
    leading39: 'leading-[1.75rem] md:leading-[2.4375rem]',  // 28px -> 39px
    leading31: 'leading-[1.5rem] md:leading-[1.9375rem]',   // 24px -> 31px
    leading25: 'leading-[1.25rem] md:leading-[1.5625rem]',  // 20px -> 25px
    leading20: 'leading-[1.125rem] md:leading-[1.25rem]',   // 18px -> 20px
    leading16: 'leading-[1rem]',                            // 16px (solo desktop)
    leading13: 'leading-[0.875rem] md:leading-[0.8125rem]', // 14px -> 13px
    leading10: 'leading-[0.75rem] md:leading-[0.625rem]',   // 12px -> 10px
};

// =================================================================
// --- TAMAÑO Y ESPACIADO ---
// =================================================================

export const strokeWidths = {
    stroke1: 'border',
    stroke2: 'border-2',
};

export const roundedCorners = {
    // rounded-[mobile] md:rounded-[desktop]
    xs: 'rounded-[2px]',
    sm: 'rounded-[4px]',
    md: 'rounded-[8px]',
    lg: 'rounded-[12px]',
    xl: 'rounded-[16px]',
    '2xl': 'rounded-[20px] md:rounded-[24px]',
    '4xl': 'rounded-[32px] md:rounded-[48px]',
    full: 'rounded-full', // 9999px es un truco común para 'full'
};

// =================================================================
// --- LAYOUTS 
// =================================================================
export const layout = {
    homeHero: `flex flex-col self-stretch items-center
           max-h-[86.0625rem] py-[7.4375rem] px-[1.75rem] gap-[0.75rem]
           md:max-h-[82.125rem] md:py-[9.4375rem] md:px-[2.5rem] md:gap-[1rem]
           xl:max-h-[63.125rem] xl:py-0 xl:px-[2.5rem] xl:justify-center xl:gap-[1rem]`
};

export const gap = {
    xss: 'gap-[4px]',
    xs: 'gap-[8px]',
    xs2: 'gap-[9px] md:gap-[10px]',
    sm: 'gap-[12px] md:gap-[16px]',
    ms: 'gap-[16px] md:gap-[24px]',
    lg: 'gap-[24px] md:gap-[32px]',
    lg2: 'gap-[28px] md:gap-[40px]',
    lg2Button: 'gap-[32px] md:gap-[40px]',
    xl: 'gap-[32px] md:gap-[48px]',
    '2xl': 'gap-[40px] md:gap-[64px]',
    '3xl': 'gap-[56px] md:gap-[80px]',
    '4xl': 'gap-[64px] md:gap-[96px]',
};

// =================================================================
// --- POSICIONAMIENTOS DE BLURS Y GRAPHS ---
// =================================================================

// Función helper para crear posicionamientos responsive
const createResponsivePosition = (base, md, xl) => {
    let classes = [];

    // Base (mobile)
    if (base.left) classes.push(`left-[${base.left}]`);
    if (base.right) classes.push(`right-[${base.right}]`);
    if (base.top) classes.push(`top-[${base.top}]`);
    if (base.bottom) classes.push(`bottom-[${base.bottom}]`);

    // MD breakpoint con resets necesarios
    if (md.left) {
        classes.push(`md:left-[${md.left}]`);
        if (base.right) classes.push(`md:right-auto`);
    }
    if (md.right) {
        classes.push(`md:right-[${md.right}]`);
        if (base.left) classes.push(`md:left-auto`);
    }
    if (md.top) {
        classes.push(`md:top-[${md.top}]`);
        if (base.bottom) classes.push(`md:bottom-auto`);
    }
    if (md.bottom) {
        classes.push(`md:bottom-[${md.bottom}]`);
        if (base.top) classes.push(`md:top-auto`);
    }

    // XL breakpoint con resets necesarios
    if (xl.left) {
        classes.push(`xl:left-[${xl.left}]`);
        if (md.right || base.right) classes.push(`xl:right-auto`);
    }
    if (xl.right) {
        classes.push(`xl:right-[${xl.right}]`);
        if (md.left || base.left) classes.push(`xl:left-auto`);
    }
    if (xl.top) {
        classes.push(`xl:top-[${xl.top}]`);
        if (md.bottom || base.bottom) classes.push(`xl:bottom-auto`);
    }
    if (xl.bottom) {
        classes.push(`xl:bottom-[${xl.bottom}]`);
        if (md.top || base.top) classes.push(`xl:top-auto`);
    }

    return classes.join(' ');
};

export const posicionamientos = {
    
    // blurHome: createResponsivePosition(
    //     { left: '-11.37rem', bottom: '-48.03rem' }, // base-mobile
    //     { left: '-0.31rem', bottom: '-43.59rem' }, // md-tablet
    //     { right: '-2.5rem', top: '-8.96rem' }      // xl-desktop
    // ),

    blurHomev2: `
        left-[-11.37rem] bottom-[-48.03rem]
        md:left-[-0.31rem] md:bottom-[-43.59rem] md:right-auto md:top-auto
        xl:right-[-2.5rem] xl:top-[-8.96rem] xl:left-auto xl:bottom-auto
    `,

    graphHome: `
        w-[29.125rem] h-[50.58831rem] right-[-4.5rem] bottom-[-53.15688rem] 
        md:w-[40.1875rem] md:h-[38.18813rem] md:left-[0.3125rem] md:right-auto md:bottom-[-41.21938rem] 
        xl:right-[-2.5rem] xl:left-auto xl:bottom-[-8.53188rem]
    `

    // Puedes agregar más posicionamientos aquí siguiendo el mismo patrón
    // otroElemento: createResponsivePosition(...),
};

// =================================================================
// --- COMPONENTES (Ejemplos basados en el JSON) ---
// =================================================================

export const badges = {
    // Recreando los badges del ejemplo con las variables del JSON
    v1Desktop: `inline-flex py-[10px] pr-[32px] pl-[24px] justify-center items-center gap-[13px] ${roundedCorners['2xl']} ${strokeWidths.stroke2} ${borderColors.black25} ${gradients.basic1} backdrop-blur-[6.5px]`,
    v2Desktop: `inline-flex py-[10px] pr-[32px] pl-[24px] justify-center items-center gap-[13px] ${roundedCorners['2xl']} ${strokeWidths.stroke2} ${borderColors.black25} ${gradients.basic2} backdrop-blur-[6.5px]`,
    v3Desktop: `inline-flex py-[10px] pr-[32px] pl-[24px] justify-center items-center gap-[13px] ${roundedCorners['2xl']} ${strokeWidths.stroke2} ${borderColors.black25} ${gradients.basic3} backdrop-blur-[6.5px]`,
    v4Desktop: `inline-flex py-[10px] pr-[32px] pl-[24px] justify-center items-center gap-[13px] ${roundedCorners['2xl']} ${strokeWidths.stroke2} ${borderColors.black25} ${gradients.basic4} backdrop-blur-[6.5px]`,

    homeHeroFrame15: `rounded-full border border-white/70 bg-[rgba(227,246,242,0.50)] backdrop-blur-[10px]`
};

export const buttons = {
    // Recreando botones basados en el JSON
    v1Desktop: `flex h-[40px] px-[32px] justify-center items-center ${gap.xs} ${roundedCorners.md} ${borderColors.black10} ${backgroundColors.gybGreen10}`,
    v2Desktop: `flex h-[40px] px-[32px] justify-center items-center ${roundedCorners.md} ${borderColors.black10} ${gradients.legacy1}`,

    // Botones de acción semánticos
    primary: `${backgroundColors.gybGreen} ${textColors.whiteTrue} py-3 px-6 ${roundedCorners.md} ${fonts.inter} font-semibold hover:opacity-90 transition-opacity`,
    secondary: `${backgroundColors.white} ${borderColors.gybGreen} ${strokeWidths.stroke1} ${textColors.gybGreen} py-3 px-6 ${roundedCorners.md} ${fonts.inter} font-semibold hover:${backgroundColors.gybGreen10} transition-colors`,
    ghost: `${textColors.gybGreen} py-3 px-6 ${roundedCorners.md} ${fonts.inter} font-semibold hover:${backgroundColors.gybGreen5} transition-colors`,

    // Comportamiento común
    cta: `inline-flex justify-center items-center ${gap.xs} hover:opacity-80 transition-all duration-300 ease-out`,
};

export const elementosHomeHero = {
    bgFrames: `rounded-3xl border border-white/70 bg-[rgba(227,246,242,0.50)] backdrop-blur-[10px]`
}