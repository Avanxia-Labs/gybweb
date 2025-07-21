"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useTheme } from '@/providers/ThemeProvider'
import {textColors, fontSizes, backgroundColors} from '@/styles/constants'

interface MobileMenuProps {
  className?: string
}

function MobileMenu({ className = '' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Cerrar menú con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuBgColor = theme === 'dark' ? backgroundColors.black : backgroundColors.gybGreen10
  const overlayBgColor = theme === 'dark' ? 'bg-black/80' : 'bg-white/80'

  return (
    <div className={className}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-lg hover:opacity-80 transition-opacity ${
          theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 ${overlayBgColor} backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full ${menuBgColor} z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-6 border-b border-opacity-20 border-gray-400">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img 
                className="w-[8rem] h-[2rem] cursor-pointer" 
                src={theme === 'dark' ? '/assets/svgs/LogoDesktopDark.svg' : '/assets/svgs/LogoDesktopLight.svg'} 
                alt="Logo" 
              />
            </Link>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg hover:opacity-80 transition-opacity ${
                theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
              }`}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-1 px-6 py-8">
            <nav className="flex flex-col space-y-6">
              {[
                { href: '/pricing', label: 'Pricing' },
                { href: '/payments', label: 'Payments' },
                { href: '/features', label: 'Features' },
                { href: '/industries', label: 'Industries' },
                { href: '/about', label: 'About Us' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${fontSizes.size16} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity ${
                    theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                  } ${pathname === item.href ? 'opacity-100' : 'opacity-90'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle dentro del menú */}
            <div className="mt-8 pt-6 border-t border-opacity-20 border-gray-400">
              <div className="flex items-center justify-between">
                <span className={`${fontSizes.size16} font-inter font-bold ${
                  theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                }`}>
                  Theme
                </span>
                <div className={textColors.gybGreen}>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu