import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, gradients } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import { GavelIcon, SketchLogoIcon, HeartbeatIcon, StorefrontIcon, SubtitlesIcon, CoinsIcon, CheckIcon, InfoIcon } from '@/libs/Icons'
import MyButton from '../ui/MyButton';


function Section2() {

    const { theme } = useTheme();

    const handleClick = () => { console.log("CLICKED") }


    return (
        <div className={`border relative flex justify-center rounded-b-[3rem] xl:min-h-screen overflow-hidden py-[2.5rem] px-[1.75rem]
           md:py-[5rem] md:px-[2.5rem]
           xl:py-[7.5rem]
        `}>

            <div id='content' className={`border border-red-500 w-full max-w-[1440px] flex flex-col items-center self-stretch gap-[3.5rem] 
                md:gap-[5rem]
                xl:gap-[6rem]
            `}>

                {/* Content - 1 */}
                <div className={`flex flex-row items-center justify-start gap-[0.75rem] self-stretch overflow-x-auto
                    md:gap-[0.5rem] sm:justify-center
                    xl:gap-[1.5rem]
                `}>

                    <div className={`${theme === 'dark' ? backgroundColors.black10_dark : backgroundColors.black10
                        } shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
                        md:px-[1.5rem]
                    `}>
                        <GavelIcon className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`} />

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size16} font-semibold leading-[120%]`}>Legal Offices</p>
                    </div>

                    <div className={`shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
                        md:px-[1.5rem]
                    `}>
                        <SketchLogoIcon className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`} />

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size16} font-semibold leading-[120%]`}>Jewelry</p>
                    </div>

                    <div className={`shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
                        md:px-[1.5rem]
                    `}>
                        <HeartbeatIcon className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`} />

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size16} font-semibold leading-[120%]`}>Health Care</p>
                    </div>

                    <div className={`shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
                        md:px-[1.5rem]
                    `}>
                        <StorefrontIcon className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`} />

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size16} font-semibold leading-[120%]`}>Retail</p>
                    </div>

                </div>

                {/* Content - 2 */}
                <div className={`w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size39} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        We understand the importance of your Trust Account
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        We know that the integrity of your Trust Account is non-negotiable. Our platform is specifically designed to handle the complexities of legal billing, ensuring that your client funds and retainers are processed with the utmost compliance, upholding the strict ethical separation your practice requires.
                    </p>

                    <div className={`max-w-[400px] flex flex-row items-start gap-[1.5rem]
                                     md:gap-[2rem]
                    `}>
                        <SubtitlesIcon className={`${textColors.gybGreen} shrink-0`} />

                        <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                            } ${fontSizes.size16} font-inter leading-[120%]`}>
                            Operate with complete peace of mind, knowing your financial partner speaks your language.
                        </p>

                    </div>

                </div>


                {/* Content - 3 - Imagen con bloque de texto*/}
                <div className={`max-w-[1280px] flex flex-col justify-center items-start gap-[1.75rem] 
                    md:gap-[2.5rem] xl:flex-row xl:gap-[0.5rem]`}
                >

                    {/* Imagen */}
                    <picture className=' block w-full xl:ml-[4rem]'>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/industries-section2-woman-desktop.png"
                            width="504"
                            height="504"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-section2-woman-tablet.png"
                            width="688"
                            height="400"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-section2-woman-mobile.png"
                            alt="woman"
                            width={334}
                            height={334}
                            className=""
                            //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                            quality={100}
                            priority
                        />
                    </picture>

                    {/* Bloque de textos */}
                    <div className={` flex w-full flex-col items-start justify-center gap-[1.5rem] self-stretch
                                    md:gap-[2rem]
                                `}>

                        {/* Bloque - 1 */}
                        <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size31} font-ibm font-semibold leading-[120%]`}>
                                Payments for Law Firms. Professional, Secure, and Automated
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                Your time is for your cases, not for chasing invoices.
                            </p>
                        </div>

                        {/* Bloque - 2 */}
                        <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <InfoIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Your focus should be on your clients and legal strategy, not the tedious task of managing collections or complex retainers.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    GYB Connect modernizes your firm administration, allowing you to bill and collect payments.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    We offers the security and professionalism your clients demand.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    While automating the cash flow your firm needs to grow.
                                </p>

                            </div>
                        </div>

                        <MyButton text='Know more' onClick={handleClick} />

                    </div>

                </div>

                {/* Content - 4 */}
                <div className={` flex flex-col items-center gap-[1.5rem]`}>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                       relative
                                       md:z-5 md:translate-y-[0rem] md:translate-x-[7.5rem] 
                                       xl:mb-[-13rem] xl:mt-[4rem] xl:translate-x-[27rem] xl:translate-y-[8rem]
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Professional Invoicing with Instant Payments
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Modernize your invoices by sending a direct Payment Link via email. Your client pays instantly with their card, providing a professional experience that builds trust.
                        </p>
                    </div>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic3_opacity25}
                                       relative 
                                          mb-[-2.7rem]
                                       md:mt-[-5.5rem] md:translate-y-[0rem] md:-translate-x-[8rem] 
                                       xl:mt-[-8.5rem] xl:-translate-x-[26.7rem] md:translate-y-[11rem] 
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Manage Retainers Frictionlessly
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            With our Payment Plans, divide large retainers into automatic installments, removing the single-payment barrier and making it easier for clients to say yes to your services.
                        </p>

                    </div>

                    {/* Imagen */}
                    <picture className=''>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/pricing-section2-cellphones-desktop.png"
                            width="596"
                            height="856"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/pricing-section2-cellphones-tablet.png"
                            width="429"
                            height="616"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/pricing-section2-cellphones-mobile.png"
                            alt="cellphones"
                            width={359}
                            height={516}
                            className={`md:mt-[-1.6rem]`}
                            quality={100}
                            priority
                        />
                    </picture>


                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                        relative 
                                           mt-[-4.5rem]
                                        md:mt-[-5.3rem] md:translate-x-[8.6rem] md:pl-[4rem] 
                                        xl:mt-[-14rem] xl:translate-x-[27.6rem] xl:-translate-y-[6.6rem] xl:pl-[1rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Security and Confidentiality in Every Interaction
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Operate with complete peace of mind. Our platform complies with the highest security standards (PCI) and offers tools like IVR Payments to protect your clients sensitive information.
                        </p>

                    </div>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic3_opacity25}
                                        relative 
                                        md:mt-[-8rem] md:translate-x-[-10.9rem] 
                                        xl:mt-[-14rem] xl:translate-x-[-26.6rem] xl:-translate-y-[12.6rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Maximize the Profitability of Every Case
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Use ACH Payments for high-value settlements and fees. Avoid costly card commissions and ensure a larger percentage of the money stays with your firm.
                        </p>

                    </div>
                </div>

                {/* Content - 5 */}
                <div className='border'>Content 5</div>

                {/* Content - 6 */}
                <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        You focus on the law, we'll handle the payments
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        By adopting GYB Connect, you are not just modernizing your payments; you're elevating your firm image, optimizing your profitability, and freeing up hours of administrative work.
                    </p>

                    <div className={`flex flex-row items-center gap-[1rem]`}>
                        <button className={`${buttons.v2Desktop} ${fontSizes.size16} ${textColors.gybDarkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Get a Demo
                        </button>
                        <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Learn More
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section2