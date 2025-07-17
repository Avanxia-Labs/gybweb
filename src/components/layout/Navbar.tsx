"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useTheme } from '@/providers/ThemeProvider'
import {textColors, textSize, buttons, backgroundColors} from '@/styles/constants'

function Navbar() {

  // Usamos nuestro hook personalizado para acceder al tema actual
  const { theme } = useTheme()
  
  // Hook para obtener la ruta actual
  const pathname = usePathname()

  // Función para verificar si la ruta está activa
  const isActive = (path: string) => pathname === path

  return (
    <div data-layer="header" className={`${backgroundColors.gybGreen10} flex flex-row items-center justify-between w-full max-w-[1920px] h-[88px] py-[1.5rem] px-[2.5rem] overflow-hidden`}>
      
        {/* Left - Logo */}
        <div>
            <Link href="/">
              <img data-layer="LOGO_GYB_MOVIL" className={`w-[8rem] h-[2rem] cursor-pointer`} src="/assets/svgs/Brand/Logo.svg" alt="Logo" />
            </Link>
        </div>
        
        {/* Center - Navigation */}
        <div className={`flex flex-row gap-[2.5rem] items-center font-inter font-bold leading-[120%] ${textColors.darkGreen} ${textSize.size16}`}>
            <Link 
              href="/pricing" 
              className={`hover:opacity-80 transition-opacity ${isActive('/pricing') ? '' : ''}`}
            >
              Pricing
            </Link>
            <Link 
              href="/payments" 
              className={`hover:opacity-80 transition-opacity ${isActive('/payments') ? '' : ''}`}
            >
              Payments
            </Link>
            <Link 
              href="/features" 
              className={`hover:opacity-80 transition-opacity ${isActive('/features') ? '' : ''}`}
            >
              Features
            </Link>
            <Link 
              href="/industries" 
              className={`hover:opacity-80 transition-opacity ${isActive('/industries') ? '' : ''}`}
            >
              Industries
            </Link>
            <Link 
              href="/about" 
              className={`hover:opacity-80 transition-opacity ${isActive('/about') ? '' : ''}`}
            >
              About Us
            </Link>
        </div>

        {/* Right */}
        <div className='flex flex-row items-center gap-[0.5rem]'>
            <div className={` ${textColors.gybGreen}`}><ThemeToggle/></div>
            <Link href="/demo">
              <button className={`${textSize.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                Get a Demo
              </button>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar