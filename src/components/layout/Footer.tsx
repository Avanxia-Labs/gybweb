import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import { XIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from '@/libs/Icons'
import SlideElement from '../ui/SlideElement'
import { useSwipeable } from 'react-swipeable'
import { useState } from 'react'


function Footer() {

    const { theme } = useTheme();

    const logoUrl = {
        light: "/assets/svgs/footer-logo-light.svg",
        dark: "/assets/svgs/footer-logo-dark.svg"
    };

    const currentLogoUrl = theme === 'dark' ? logoUrl.dark : logoUrl.light;


    return (
        <div className={`
            flex flex-col py-[3.5rem] px-[1.75rem] items-center gap-[2rem]`}
        >
            {/* Elemento 1 */}
            <div className='border w-full flex flex-col items-start gap-[1.5rem] self-stretch'>
                
                {/* Logo */}
                <div>
                    <Image src={currentLogoUrl} alt='logo' width={113} height={28}/>
                </div>
                
                {/* Contacto */}
                <div className='flex flex-col items-start gap-[0.5rem]'>
                    
                    <p className={`${
                        theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                    } ${fontSizes.size13} font-inter leading-[120%]`}>
                        Phone number: +1 (000) 000-0000
                    </p>

                    <p className={`${
                        theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                    } ${fontSizes.size13} font-inter leading-[120%]`}>
                        Email: email@email.com
                    </p>

                    <p className={`${
                        theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                    } ${fontSizes.size13} font-inter leading-[120%]`}>
                        Address: 123 Main St, Anytown
                    </p>
                    
                </div>
                
                {/* Redes */}
                <div className={`${
                    theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                } flex flex-row items-start gap-[0.75]`}>
                    <XIcon />
                    <YoutubeIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
                
                {/* Copyright */}
                <div className={`${
                    theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                } ${fontSizes.size10} font-inter leading-[120%]`}>
                    © Copyright 2025 GYB. All Rights Reserved.
                </div>
            </div>
            
            {/* Elemento 2 */}
            <div className='border w-full'>
                Elemento2
            </div>
           



        </div>
    )
}

export default Footer