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


    // Configuración de imágenes de background
    const bgTheme = `bg-[url('/assets/images/backgrounds/bg-footer-movil.png')] md:bg-[url('/assets/images/backgrounds/bg-footer-tablet.png')] xl:bg-[url('/assets/images/backgrounds/bg-footer-desktop.png')]`


    return (
        <div className={`${bgTheme} bg-center bg-cover bg-no-repeat
            flex flex-col py-[3.5rem] px-[1.75rem] justify-center gap-[2rem] 
            md:flex-row md:py-[6.5rem] md:px-[2.5rem] md:gap-[3rem]
            xl:py-[12.5rem] xl:px-[2.5rem] xl:gap-[6rem]`}
        >
            <div id='container' className={`w-full max-w-[1440px] flex flex-col items-center gap-[2rem]
                md:flex-row md:gap-[3rem] xl:gap-[6rem]
                `}>
                {/* Elemento 1 */}
                <div className=' shrink-0 flex flex-col items-start gap-[1.5rem] md:gap-[2rem] self-stretch'>

                    {/* Logo */}
                    <div>
                        <Image src={currentLogoUrl} alt='logo' width={113} height={28} />
                    </div>

                    {/* Contacto */}
                    <div className='flex flex-col items-start gap-[0.5rem]'>

                        <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                            } ${fontSizes.size13} font-inter leading-[120%]`}>
                            Phone number: +1 (000) 000-0000
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                            } ${fontSizes.size13} font-inter leading-[120%]`}>
                            Email: email@email.com
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                            } ${fontSizes.size13} font-inter leading-[120%]`}>
                            Address: 123 Main St, Anytown
                        </p>

                    </div>

                    {/* Redes */}
                    <div className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } flex flex-row items-start gap-[0.75]`}>
                        <XIcon />
                        <YoutubeIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>

                    {/* Copyright */}
                    <div className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } ${fontSizes.size10} font-inter leading-[120%]`}>
                        © Copyright 2025 GYB. All Rights Reserved.
                    </div>
                </div>

                {/* Elemento 2 */}
                <div className=' w-full flex flex-col xl:flex-row justify-center items-start self-stretch gap-[1.5rem]'>

                    {/* ROW - 1 */}
                    <div id='Row1' className=' w-full flex flex-row items-start gap-[1.5rem] self-stretch'>

                        <div id='2' className=' w-full flex flex-col items-start gap-[1.5rem]'>

                            <div id='Frame1325' className='flex flex-col items-start gap-[2rem]'>

                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>Pricing</p>

                                <div id='Frame1324' className='flex flex-col items-start gap-[1rem]'>

                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>Pricing models</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Interchange Plus</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Pass-through Cost
                                    </p>
                                </div>

                            </div>

                            <div id='Frame1326' className='flex flex-col items-start gap-[2rem]'>

                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>Features</p>

                                <div id='Frame1324' className='flex flex-col items-start gap-[1rem]'>

                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>System features</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Surcharging</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Dual pricing
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Customer Manager</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Faster Deposits
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div id='3' className=' w-full flex flex-col items-start gap-[1.5rem]'>

                            <div id='Frame1325' className='flex flex-col items-start gap-[2rem]'>

                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>Payment</p>

                                <div className='flex flex-col items-start gap-[1rem]'>

                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>Plans</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Payment Plans</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Subscriptions
                                    </p>
                                </div>

                                <div className='flex flex-col items-start gap-[1rem]'>

                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>payment pages</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>SMS</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Email
                                    </p>
                                </div>

                                <div className='flex flex-col items-start gap-[1rem]'>

                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>Point-of-sale</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Point-of-Sale</p>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* ROW - 2 */}
                    <div id='Row2' className=' w-full flex flex-row items-start gap-[1.5rem] self-stretch'>

                        <div id='4' className='order-1 xl:order-2 w-full  flex flex-col items-start gap-[1.5rem]'>

                            <div id='Frame1327' className='flex flex-col items-start gap-[2rem]'>

                                {/* Main Title */}
                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>Industries</p>

                                <div id='Frame1324' className='flex flex-col items-start gap-[1rem]'>

                                    {/* Green Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>Industries</p>

                                    {/* Subtitles Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Legal Offices</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Jewelry
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Health Care
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Retail
                                    </p>
                                </div>

                            </div>

                            <div id='Frame1327' className='flex flex-col items-start gap-[2rem]'>

                                {/* Main Title */}
                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>About Us</p>


                            </div>

                        </div>

                        <div id='5' className='order-2 xl:order-1 w-full  flex flex-col items-start gap-[1.5rem]'>

                            <div id='Frame1327' className='flex flex-col items-start gap-[2rem]'>

                                {/* Main Title */}
                                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                    } ${fontSizes.size20} font-inter leading-[120%] font-semibold opacity-0`}>.</p>

                                <div id='Frame1324' className='flex flex-col items-start gap-[1rem]'>

                                    {/* Green Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>payment methods</p>

                                    {/* Subtitles Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Cash Management</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Debit or Credit Card
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        ACH payments
                                    </p>
                                </div>

                            </div>

                            <div id='Frame1327' className='flex flex-col items-start gap-[2rem]'>

                                {/* Main Title */}
                                {/* <p className={`${
                                theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size20} font-inter leading-[120%] font-semibold`}>.</p> */}

                                <div id='Frame1324' className='flex flex-col items-start gap-[1rem]'>

                                    {/* Green Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                        } ${fontSizes.size10} uppercase leading-[120%] font-inter tracking-[0.225rem]`}>Elements</p>

                                    {/* Subtitles Title */}
                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>Virtual Terminal</p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Customizable Reports
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        Advanced System Tracker
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size16} leading-[120%] font-inter`}>
                                        IVR Payments
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>






        </div>
    )
}

export default Footer