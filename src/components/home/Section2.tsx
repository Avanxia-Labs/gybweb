import React from 'react'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import { ScalesIcon, IntersectThreeIcon, ShieldWarningIcon, ArrowsMergeIcon } from '@/libs/Icons'

function Section2() {

    const { theme } = useTheme();

    // Configuración de imágenes de background
    const backgroundClasses = {
        light: "bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')] md:bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')] xl:bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')]",
        dark: "bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')] md:bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')] xl:bg-[url('/assets/images/backgrounds/bg-home-section2-desktop-light.png')]"
    };

    const currentBackground = theme === 'dark' ? backgroundClasses.dark : backgroundClasses.light;
   


    return (
        <div className={`${currentBackground} bg-center bg-cover bg-no-repeat xl:h-screen w-full px-[2.5rem] py-[7.5rem] flex justify-center overflow-hidden`}>

            <div id='container' className='w-full max-w-[58rem]  flex flex-col items-center gap-[2.5rem]'>

                <div id='Frame1299' className='flex flex-col gap-[1rem] items-center'>
                    <p className={`italic font-normal leading-[120%] font-ibm ${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } ${fontSizes.size25}`}>The 4 Pillars of GYB</p>
                    <p className={`font-bold text-center leading-[120%] font-ibm ${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size49}`}>Your business deserves more than just a payment processor... </p>
                </div>

                <div id='Frame1300' className='flex flex-row flex-wrap justify-center gap-[1rem]'>

                    <div className={`${badges.v1Desktop}`}>
                        <ScalesIcon />
                        <p className={`${fontSizes.size16} ${theme === 'dark' ? textColors.black90 : textColors.black90
                            } font-inter text-base font-bold leading-[120%]`}>
                            Fair Pricing
                        </p>
                    </div>

                    <div className={`${badges.v2Desktop}`}>
                        <IntersectThreeIcon />
                        <p className={`${fontSizes.size16} ${theme === 'dark' ? textColors.black90 : textColors.black90
                            } font-inter text-base font-bold leading-[120%]`}>
                            All-In-One
                        </p>
                    </div>

                    <div className={`${badges.v3Desktop}`}>
                        <ShieldWarningIcon />
                        <p className={`${fontSizes.size16} ${theme === 'dark' ? textColors.black90 : textColors.black90
                            } font-inter text-base font-bold leading-[120%]`}>
                            Fraud Management
                        </p>
                    </div>

                    <div className={`${badges.v4Desktop}`}>
                        <ArrowsMergeIcon />
                        <p className={`${fontSizes.size16} ${theme === 'dark' ? textColors.black90 : textColors.black90
                            } font-inter text-base font-bold leading-[120%]`}>
                            Omnichannel
                        </p>
                    </div>
                </div>

                <div id='Imagen' className='w-full'>
                    <Image
                        className='hidden xl:block'
                        src={'/assets/images/HomeSection2_D_dark.png'}
                        alt={'HomeSection2'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                    <Image
                        className='hidden md:block xl:hidden'
                        src={'/assets/images/HomeSection2_T.png'}
                        alt={'HomeSection2'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />

                    <div className='block md:hidden w-full '>
                        <Image
                            className='w-full min-w-[140%] ml-[-20%] sm:min-w-full sm:ml-0'
                            src={'/assets/images/HomeSection2_M.png'}
                            alt={'HomeSection2'}
                            width={0}
                            height={0}
                            sizes="(max-width: 450px) 160vw, 100vw"
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                </div>


                <button className={`${buttons.cta}`}>
                    <p className={`${textColors.gybGreen} ${fontSizes.size16} font-inter font-bold leading-[120%]`}>
                        Chat with us to learn more
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.3538 8.35378L9.85375 12.8538C9.75993 12.9476 9.63268 13.0003 9.5 13.0003C9.36732 13.0003 9.24007 12.9476 9.14625 12.8538C9.05243 12.76 8.99972 12.6327 8.99972 12.5C8.99972 12.3674 9.05243 12.2401 9.14625 12.1463L12.7931 8.50003H3C2.86739 8.50003 2.74021 8.44736 2.64645 8.35359C2.55268 8.25982 2.5 8.13264 2.5 8.00003C2.5 7.86743 2.55268 7.74025 2.64645 7.64648C2.74021 7.55271 2.86739 7.50003 3 7.50003H12.7931L9.14625 3.85378C9.05243 3.75996 8.99972 3.63272 8.99972 3.50003C8.99972 3.36735 9.05243 3.2401 9.14625 3.14628C9.24007 3.05246 9.36732 2.99976 9.5 2.99976C9.63268 2.99976 9.75993 3.05246 9.85375 3.14628L14.3538 7.64628C14.4002 7.69272 14.4371 7.74786 14.4623 7.80856C14.4874 7.86926 14.5004 7.93433 14.5004 8.00003C14.5004 8.06574 14.4874 8.1308 14.4623 8.1915C14.4371 8.2522 14.4002 8.30735 14.3538 8.35378Z" fill="#06AF7F" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Section2