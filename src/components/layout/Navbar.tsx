// "use client"
// import React from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import ThemeToggle from '@/components/ui/ThemeToggle'
// import { useTheme } from '@/providers/ThemeProvider'
// import {textColors, fontSizes, buttons, backgroundColors} from '@/styles/constants'

// function Navbar() {

//   // Usamos nuestro hook personalizado para acceder al tema actual
//   const { theme } = useTheme()

//   // Hook para obtener la ruta actual
//   const pathname = usePathname()

//   // Función para verificar si la ruta está activa
//   const isActive = (path: string) => pathname === path

//   const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.gybGreen10}`
//   const LOGO_SRC = theme === 'dark' ? '/assets/svgs/LogoDesktopDark.svg' : '/assets/svgs/LogoDesktopLight.svg';

//   return (
//     <div data-layer="header" className={` flex flex-row items-center justify-between w-full max-w-[1920px] h-[88px] py-[1.5rem] px-[2.5rem] `}>

//         {/* Left - Logo */}
//         <div>
//             <Link href="/">
//               <img data-layer="LOGO_GYB_MOVIL" className={`w-[8rem] h-[2rem] cursor-pointer`} src={LOGO_SRC} alt="Logo" />
//             </Link>
//         </div>

//         {/* Center - Navigation */}
//         <div className={`flex flex-row gap-[2.5rem] items-center font-inter font-bold leading-[120%] ${
//             theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
//         } ${fontSizes.size16}`}>
//             <Link 
//               href="/pricing" 
//               className={`${hovers.gybGreen} ${isActive('/pricing') ? '' : ''}`}
//             >
//               Pricing
//             </Link>
//             <Link 
//               href="/payments" 
//               className={`${hovers.gybGreen} ${isActive('/payments') ? '' : ''}`}
//             >
//               Payments
//             </Link>
//             <Link 
//               href="/features" 
//               className={`${hovers.gybGreen} ${isActive('/features') ? '' : ''}`}
//             >
//               Features
//             </Link>
//             <Link 
//               href="/industries" 
//               className={`${hovers.gybGreen} ${isActive('/industries') ? '' : ''}`}
//             >
//               Industries
//             </Link>
//             <Link 
//               href="/about" 
//               className={`${hovers.gybGreen} ${isActive('/about') ? '' : ''}`}
//             >
//               About Us
//             </Link>
//         </div>

//         {/* Right */}
//         <div className='flex flex-row items-center gap-[0.5rem]'>
//             <div className={` ${textColors.gybGreen}`}><ThemeToggle/></div>
//             <Link href="/demo">
//               <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] ${hovers.gybGreen}`}>
//                 Get a Demo
//               </button>
//             </Link>
//         </div>

//     </div>
//   )
// }

// export default Navbar



"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ui/ThemeToggle'
import MobileMenu from '@/components/layout/MobileMenu'
import { useTheme } from '@/providers/ThemeProvider'
import { textColors, fontSizes, buttons, backgroundColors, hovers } from '@/styles/constants'
import Pricing from '../submenus/Pricing'
import Payments from '../submenus/Payments'
import Features from '../submenus/Features'
import Industries from '../submenus/Industries'

function Navbar() {
    // Usamos nuestro hook personalizado para acceder al tema actual
    const { theme } = useTheme()

    // Hook para obtener la ruta actual
    const pathname = usePathname()

    // Función para verificar si la ruta está activa
    const isActive = (path: string) => pathname === path

    // Estados para controlar la visibilidad de los submenús 
    const [isPricingHovered, setIsPricingHovered] = useState(false);
    const [isPaymentHovered, setIsPaymentHovered] = useState(false);
    const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
    const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);


    const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.gybGreen10}`
    const LOGO_SRC = theme === 'dark' ? '/assets/svgs/LogoDesktopDark.svg' : '/assets/svgs/LogoDesktopLight.svg';

    return (
        // border border-red-500
        <div data-layer="header" className={`relative flex flex-row items-center justify-between w-full max-w-[1920px] h-[88px] py-[1.5rem] px-[1rem] md:px-[2rem] lg:px-[2.5rem]`}>

            {/* Mobile/Tablet Layout (base to lg) */}
            <div className="flex items-center justify-between w-full lg:hidden">
                {/* Left - Hamburger Menu */}
                <MobileMenu />

                {/* Center - Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/">
                        <img
                            data-layer="LOGO_GYB_MOVIL"
                            className="w-[6rem] h-[1.5rem] md:w-[8rem] md:h-[2rem] cursor-pointer"
                            src={LOGO_SRC}
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Right - Get Demo Button */}
                <Link href="/demo">
                    <button className={`${fontSizes.size13} md:${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] ${hovers.gybGreen} px-4 py-2 md:px-6 md:py-3`}>
                        Get a Demo
                    </button>
                </Link>
            </div>

            {/* Desktop Layout (lg and up) */}
            <div className="hidden  lg:flex lg:items-center lg:justify-between lg:w-full">
                {/* Left - Logo */}
                <div>
                    <Link href="/">
                        <img
                            data-layer="LOGO_GYB_DESKTOP"
                            className="w-[8rem] h-[2rem] cursor-pointer"
                            src={LOGO_SRC}
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Center - Navigation */}
                <div className={`flex  flex-row gap-[2.5rem] items-center font-inter font-bold leading-[120%] ${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size16}`}>

                    {/* Pricings */}
                    <div className=''
                        onMouseEnter={() => setIsPricingHovered(true)}
                        onMouseLeave={() => setIsPricingHovered(false)}>
                        <Link
                            href="/pricing"
                            className={`${hovers.gybGreen} ${isActive('/pricing') ? 'opacity-100' : 'opacity-90'}`}
                        >
                            Pricing
                        </Link>

                        {isPricingHovered && (
                            <>
                                {/* Zona segura invisible que conecta el menú con el submenú */}
                                < div className='absolute bottom-[-5px] left-0 w-full h-[39px] z-10'></div>

                                <div className='absolute z-20 top-[87px] left-[1rem] w-full flex-shrink'>
                                    <Pricing />
                                </div>
                            </>
                        )}
                    </div>

                    {/* Payments */}
                    <div className=''
                        onMouseEnter={() => setIsPaymentHovered(true)}
                        onMouseLeave={() => setIsPaymentHovered(false)}>
                        <Link
                            href="/payments"
                            className={`${hovers.gybGreen} ${isActive('/payments') ? 'opacity-100' : 'opacity-90'}`}
                        >
                            Payments
                        </Link>

                        {isPaymentHovered && (
                            <>
                                {/* Zona segura invisible que conecta el menú con el submenú */}
                                < div className='absolute bottom-[-5px] left-0 w-full h-[39px] z-10'></div>

                                <div className='absolute z-20 top-[87px] left-[1rem] w-full flex-shrink'>
                                    <Payments />
                                </div>
                            </>
                        )}
                    </div>


                    {/* Features */}
                    <div className=''
                        onMouseEnter={() => setIsFeaturesHovered(true)}
                        onMouseLeave={() => setIsFeaturesHovered(false)}>
                        <Link
                            href="/features"
                            className={`${hovers.gybGreen} ${isActive('/payments') ? 'opacity-100' : 'opacity-90'}`}
                        >
                            Features
                        </Link>

                        {isFeaturesHovered && (
                            <>
                                {/* Zona segura invisible que conecta el menú con el submenú */}
                                < div className='absolute bottom-[-5px] left-0 w-full h-[39px] z-10'></div>

                                <div className='absolute z-20 top-[87px] left-[1rem] w-full flex-shrink'>
                                    <Features />
                                </div>
                            </>

                        )}
                    </div>


                    {/* Industries */}
                    <div className=''
                        onMouseEnter={() => setIsIndustriesHovered(true)}
                        onMouseLeave={() => setIsIndustriesHovered(false)}>
                        <Link
                            href="/industries"
                            className={`${hovers.gybGreen} ${isActive('/industries') ? 'opacity-100' : 'opacity-90'}`}
                        >
                            Industries
                        </Link>

                        {isIndustriesHovered && (
                            <>
                                {/* Zona segura invisible que conecta el menú con el submenú */}
                                < div className='absolute bottom-[-5px] left-0 w-full h-[39px] z-10'></div>

                                <div className='absolute z-20 top-[87px] left-[1rem] w-full flex-shrink'>
                                    <Industries />
                                </div>
                            </>

                        )}
                    </div>




                    <Link
                        href="/about"
                        className={`${hovers.gybGreen} ${isActive('/about') ? 'opacity-100' : 'opacity-90'}`}
                    >
                        About Us
                    </Link>
                </div>

                {/* Right - Theme Toggle + Get Demo Button */}
                <div className='flex flex-row items-center gap-[0.5rem]'>
                    <div className={`${textColors.gybGreen}`}>
                        <ThemeToggle />
                    </div>
                    <Link href="/demo">
                        <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] ${hovers.gybGreen}`}>
                            Get a Demo
                        </button>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default Navbar