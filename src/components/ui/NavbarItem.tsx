"use client"
import React, { ReactElement } from 'react'
import { CoinsIcon, GeneralIconProps } from '@/libs/Icons'
import { gradients, fontSizes, textColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'

interface NavbarItemProps {
    icon: React.ComponentType<GeneralIconProps>,
    title: string,
    subtitle: string
}

function NavbarItem({icon: Icon, title, subtitle}: NavbarItemProps) {

  const {theme} = useTheme();

  return (
    <div className='flex flex-row items-center gap-[1rem]'>
        {/* Icon */}
        <div className={`flex w-[2.5rem] h-[2.5rem] p-[0.5rem] items-center justify-center rounded-lg ${gradients.legacy1}`}>
            {<Icon />}
        </div>

        {/* Title and Subtitle */}
        <div className='flex flex-col items-start gap-[0.625]'>
            <p className={`${fontSizes.size16} ${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen} font-inter  font-sans text-base not-italic font-bold leading-[120%]`}>{title}</p>
            <p className={`${textColors.gray50} ${fontSizes.size13} ${theme === 'dark' ? textColors.gray50_dark : textColors.gray50} font-inter not-italic font-normal leading-[120%]`}>{subtitle}</p>
        </div>
    </div>
  )
}

export default NavbarItem