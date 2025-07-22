import React from 'react'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import { ScalesIcon, IntersectThreeIcon, ShieldWarningIcon, ArrowsMergeIcon } from '@/libs/Icons'

function Section3() {

    const { theme } = useTheme();


    return (
        <div className={` relative
            bg-[url('/assets/images/backgrounds/bg-home-section3.png')] bg-center bg-cover bg-no-repeat 
            flex flex-col justify-center items-center self-stretch gap-[5rem] px-[1.75rem] py-[7.5rem] 
            md:gap-[11.5rem]  md:px-[2.5rem] 
            xl:gap-[0.5rem] xl:min-h-screen xl:py-[8.5rem]
            overflow-hidden`}
        >
            {/* Parte Superior */}
            <div className={`h-full w-full max-w-[1440px] flex flex-col gap-[2.5rem] items-center justify-center md:flex-row xl:gap-[6.1rem]`}>

                <div id='Belinda' className=' absolute relative xl:translate-y-[120px]'>
                    <Image
                        src={'/assets/images/Belinda.png'}
                        alt={'Belinda'}
                        width={397}
                        height={529}
                        className={``}
                        quality={100}
                        priority
                    />

                    <Image
                        src={'/assets/images/eiffel1.png'}
                        alt={'Eiffel'}
                        width={211.5}
                        height={244}
                        className={`absolute  
                            // Breakpoint base (móvil)
                            w-[126.92px] h-[146.4px] 
                            left-[-7.02rem] top-[0.5rem] 
                            
                            sm:right-[22.02rem]

                            // Breakpoint md (tablet)
                            w-[158.6px] h-[183px] 
                            md:right-[2.43rem] md:bottom-[-8.26rem] md:top-auto md:left-auto
                            
                            // Breakpoint xl (desktop)
                            xl:w-[211.5px] xl:h-[244px] 
                            xl:right-[23.51rem] xl:top-[16.19rem]

                            `
                        }
                        quality={100}
                        priority
                    />
                </div>

                {/* Texto */}
                <div className={`flex flex-col gap-[2.5rem] max-w-[20.62rem] items-start justify-center`}>
                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size39} font-ibm leading-[120%] font-bold`}>
                        Accept payments — no matter where your customers are.
                    </p>

                    <div className={`flex flex-col items-start gap-[1.5rem] self-stretch`}>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size18} leading-[120%] font-normal font-inter`}>
                            We have a tool for every situation, designed to be simple and powerful.
                        </p>

                        <button className={`flex items-center justify-center gap-[0.5rem]`}>
                            <p className={`${theme === 'dark' ? textColors.black50_dark : textColors.black50
                                } ${fontSizes.size16} leading-[120%] font-semibold font-inter`}>
                                Learn more
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.8538 8.85403L9.35375 13.354C9.25993 13.4478 9.13268 13.5006 9 13.5006C8.86732 13.5006 8.74007 13.4478 8.64625 13.354C8.55243 13.2602 8.49972 13.133 8.49972 13.0003C8.49972 12.8676 8.55243 12.7403 8.64625 12.6465L12.2931 9.00028H2.5C2.36739 9.00028 2.24021 8.9476 2.14645 8.85383C2.05268 8.76006 2 8.63289 2 8.50028C2 8.36767 2.05268 8.24049 2.14645 8.14672C2.24021 8.05296 2.36739 8.00028 2.5 8.00028H12.2931L8.64625 4.35403C8.55243 4.26021 8.49972 4.13296 8.49972 4.00028C8.49972 3.8676 8.55243 3.74035 8.64625 3.64653C8.74007 3.55271 8.86732 3.5 9 3.5C9.13268 3.5 9.25993 3.55271 9.35375 3.64653L13.8538 8.14653C13.9002 8.19296 13.9371 8.24811 13.9623 8.30881C13.9874 8.36951 14.0004 8.43457 14.0004 8.50028C14.0004 8.56599 13.9874 8.63105 13.9623 8.69175C13.9371 8.75245 13.9002 8.80759 13.8538 8.85403Z"
                                    fill={
                                        theme === 'dark' ? 'white' : 'black'
                                    } fill-opacity="0.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Parte Inferior */}
            <div className={`h-full w-full  max-w-[1440px] flex flex-col gap-[2.5rem] items-center justify-center md:flex-row xl:gap-[6.1rem]`}>

                {/* Texto */}
                <div className={`hidden md:block flex flex-col gap-[2.5rem] max-w-[20.62rem] items-start justify-center`}>
                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size39} font-ibm leading-[120%] font-bold`}>
                        Your success is our business model
                    </p>

                    <div className={`flex flex-col items-start gap-[1.5rem] self-stretch`}>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size18} leading-[120%] font-normal font-inter`}>
                            It's not just a slogan. Our philosophy of transparent pricing and smart tools are built to grow with you. When your business thrives, so does our partnership.
                        </p>

                        <button className={`flex items-center justify-center gap-[0.5rem]`}>
                            <p className={`${theme === 'dark' ? textColors.black50_dark : textColors.black50
                                } ${fontSizes.size16} leading-[120%] font-semibold font-inter`}>
                                Learn more
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.8538 8.85403L9.35375 13.354C9.25993 13.4478 9.13268 13.5006 9 13.5006C8.86732 13.5006 8.74007 13.4478 8.64625 13.354C8.55243 13.2602 8.49972 13.133 8.49972 13.0003C8.49972 12.8676 8.55243 12.7403 8.64625 12.6465L12.2931 9.00028H2.5C2.36739 9.00028 2.24021 8.9476 2.14645 8.85383C2.05268 8.76006 2 8.63289 2 8.50028C2 8.36767 2.05268 8.24049 2.14645 8.14672C2.24021 8.05296 2.36739 8.00028 2.5 8.00028H12.2931L8.64625 4.35403C8.55243 4.26021 8.49972 4.13296 8.49972 4.00028C8.49972 3.8676 8.55243 3.74035 8.64625 3.64653C8.74007 3.55271 8.86732 3.5 9 3.5C9.13268 3.5 9.25993 3.55271 9.35375 3.64653L13.8538 8.14653C13.9002 8.19296 13.9371 8.24811 13.9623 8.30881C13.9874 8.36951 14.0004 8.43457 14.0004 8.50028C14.0004 8.56599 13.9874 8.63105 13.9623 8.69175C13.9371 8.75245 13.9002 8.80759 13.8538 8.85403Z"
                                    fill={
                                        theme === 'dark' ? 'white' : 'black'
                                    } fill-opacity="0.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id='MyBusiness' className='hidden md:block relative absolute xl:translate-x-[-90px]'>
                    
                    <Image
                        src={'/assets/images/MyBusiness.png'}
                        alt={'MyBusiness'}
                        width={397}
                        height={529}
                        className={``}
                        quality={100}
                        priority
                    />
                    <Image
                        src={'/assets/images/chart1.png'}
                        alt={'Chart'}
                        width={206.7}
                        height={200}
                        className={`absolute  
                            // Breakpoint base (móvil)
                            w-[124px] h-[120px] 
                            right-[3.24rem] top-[3.91rem] 
                            
                            // Breakpoint md (tablet)
                            w-[155px] h-[150px] 
                            md:right-[1.88rem] md:top-[-8.31rem] 
                            
                            // Breakpoint xl (desktop)
                            xl:w-[206.7px] xl:h-[200px] 
                            xl:right-[-11.01rem] xl:top-[0.88rem]

                        `
                        }
                        quality={100}
                        priority
                    />

                    {/* Movil - Imagen encima y texto debajo */}
                    
                </div>


                {/* Movil - Imagen encima y texto debajo */}
                <div id='MyBusiness' className='md:hidden relative'>
                    
                    <Image
                        src={'/assets/images/MyBusiness.png'}
                        alt={'MyBusiness'}
                        width={397}
                        height={529}
                        className={``}
                        quality={100}
                        priority
                    />
                    <Image
                        src={'/assets/images/chart1.png'}
                        alt={'Chart'}
                        width={206.7}
                        height={200}
                        className={`absolute  
                            // Breakpoint base (móvil)
                            w-[124px] h-[120px] 
                            right-[-3.24rem] top-[-3.91rem] 
                            
                            // Breakpoint md (tablet)
                            w-[155px] h-[150px] 
                            md:right-[1.88rem] md:top-[-8.31rem] 
                            
                            // Breakpoint xl (desktop)
                            xl:w-[206.7px] xl:h-[200px] 
                            xl:right-[-11.01rem] xl:top-[0.88rem]

                        `
                        }
                        quality={100}
                        priority
                    />

                    
                    
                </div>

                <div className={`md:hidden flex flex-col gap-[2.5rem] max-w-[20.62rem] items-start justify-center`}>
                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size39} font-ibm leading-[120%] font-bold`}>
                        Your success is our business model
                    </p>

                    <div className={`flex flex-col items-start gap-[1.5rem] self-stretch`}>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size18} leading-[120%] font-normal font-inter`}>
                            It's not just a slogan. Our philosophy of transparent pricing and smart tools are built to grow with you. When your business thrives, so does our partnership.
                        </p>

                        <button className={`flex items-center justify-center gap-[0.5rem]`}>
                            <p className={`${theme === 'dark' ? textColors.black50_dark : textColors.black50
                                } ${fontSizes.size16} leading-[120%] font-semibold font-inter`}>
                                Learn more
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.8538 8.85403L9.35375 13.354C9.25993 13.4478 9.13268 13.5006 9 13.5006C8.86732 13.5006 8.74007 13.4478 8.64625 13.354C8.55243 13.2602 8.49972 13.133 8.49972 13.0003C8.49972 12.8676 8.55243 12.7403 8.64625 12.6465L12.2931 9.00028H2.5C2.36739 9.00028 2.24021 8.9476 2.14645 8.85383C2.05268 8.76006 2 8.63289 2 8.50028C2 8.36767 2.05268 8.24049 2.14645 8.14672C2.24021 8.05296 2.36739 8.00028 2.5 8.00028H12.2931L8.64625 4.35403C8.55243 4.26021 8.49972 4.13296 8.49972 4.00028C8.49972 3.8676 8.55243 3.74035 8.64625 3.64653C8.74007 3.55271 8.86732 3.5 9 3.5C9.13268 3.5 9.25993 3.55271 9.35375 3.64653L13.8538 8.14653C13.9002 8.19296 13.9371 8.24811 13.9623 8.30881C13.9874 8.36951 14.0004 8.43457 14.0004 8.50028C14.0004 8.56599 13.9874 8.63105 13.9623 8.69175C13.9371 8.75245 13.9002 8.80759 13.8538 8.85403Z"
                                    fill={
                                        theme === 'dark' ? 'white' : 'black'
                                    } fill-opacity="0.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                
            </div>


        </div>
    )
}

export default Section3