// styles/constants.js

// Colores de texto
export const textColors = {
  darkGreen: 'text-[#0F1413]',
  gybGreen: 'text-[#06AF7F]',
  neutralGrey: 'text-[#4D4D4D]',
  neutralGrey50: 'text-[#808080]',
  neutralBlack100_90: 'text-[rgba(2,2,2,0.9)]'
}

// Colores de fondo
export const backgroundColors = {
  darkGreen: 'bg-[#418d7dff]',
  gybGreen: 'bg-[#06AF7F]',
  gybGreen10: 'bg-[#06AF7F1A]',
  gybLightGreen50: 'bg-[rgba(227,246,242,0.50)]'
}

// Tamaño de texto
export const textSize = {
    size10: 'text-[0.625rem]',
    size13: 'text-[0.875rem]',
    size16: 'text-[1rem]',
    size18: 'text-[1.125rem]',
    size25: 'text-[1.5625rem]',
    size49: 'text-[3.0625rem]',
    size61: 'text-[3.8125rem]'
}

// Espaciado
export const spacing = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10'
}

// Padding
export const padding = {
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12'
}

// Tipografía
export const typography = {
  heading: 'font-inter font-bold text-2xl',
  subheading: 'font-inter font-semibold text-lg',
  body: 'font-inter font-normal text-base',
  caption: 'font-inter font-normal text-sm'
}

// Badges
export const badges = {
    v1Desktop: `inline-flex py-[0.625rem] pr-[2rem] pl-[1.5rem] justify-center items-center gap-[0.8125rem] rounded-[1.5rem] border-2 border-[rgba(2,2,2,0.25)] bg-[linear-gradient(92deg,_#6E95FF_0%,_#D8DAFF_100.01%)] backdrop-blur-[6.5957446px]`,
    v2Desktop: `inline-flex py-[0.625rem] pr-[2rem] pl-[1.5rem] justify-center items-center gap-[0.8125rem] rounded-[1.5rem] border-2 border-[rgba(2,2,2,0.25)] bg-[linear-gradient(92deg,_#8D6DFF_0%,_#F4E4FF_100.01%)] backdrop-blur-[6.5957446px]`,
    v3Desktop: `inline-flex py-[0.625rem] pr-[2rem] pl-[1.5rem] justify-center items-center gap-[0.8125rem] rounded-[1.5rem] border-2 border-[rgba(2,2,2,0.25)] bg-[linear-gradient(92deg,_#FF8CB0_0%,_#FDE4FF_100.01%)] backdrop-blur-[6.5957446px]`,
    v4Desktop: `inline-flex py-[0.625rem] pr-[2rem] pl-[1.5rem] justify-center items-center gap-[0.8125rem] rounded-[1.5rem] border-2 border-[rgba(2,2,2,0.25)] bg-[linear-gradient(92deg,_#FF6563_0%,_#F9EFE2_100.01%)] backdrop-blur-[6.5957446px]`
}

// Botones
export const buttons = {
  v1Desktop: `flex h-[2.5rem] px-[2rem] justify-center items-center gap-2 rounded-md border border-[#0202020D] bg-[#06AF7F1A]`,  
  v2Desktop: `flex h-[2.5rem] px-[2rem] justify-center items-center rounded-md border border-[#0202021A] bg-[linear-gradient(99deg,_#6DDCFF_0%,_#6CF977_100%)]`,

  buttonCTA: `inline-flex justify-center items-center gap-[0.5rem] hover:opacity-80 transition-all duration-300 ease-out`,

  primary: `${backgroundColors.darkGreen} ${textColors.white} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`,
  secondary: `border-2 border-[#418d7dff] ${textColors.darkGreen} px-6 py-3 rounded-lg font-semibold hover:bg-[#418d7dff] hover:text-white transition-colors`,
  ghost: `${textColors.darkGreen} px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors`
}

// Contenedores
export const containers = {
  page: 'w-full max-w-[1440px] mx-auto',
  section: 'py-16 px-8',
  card: 'bg-white rounded-lg shadow-md p-6'
}

// Navegación
export const navigation = {
  navbar: 'flex flex-row items-center justify-between w-full max-w-[1440px] h-[88px] py-[1.5rem] px-[2.5rem]',
  navLinks: `flex flex-row gap-[2.5rem] items-center font-inter font-bold ${textColors.darkGreen}`
}