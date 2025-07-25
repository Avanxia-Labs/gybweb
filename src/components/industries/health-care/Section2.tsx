import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, gradients } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import { GavelIcon, SketchLogoIcon, HeartbeatIcon, StorefrontIcon, CheckIcon, } from '@/libs/Icons'
import MyButton from '../../ui/MyButton';


function Section2() {

    const { theme } = useTheme();

    const handleClick = () => { console.log("CLICKED") }

    // Configuración de imágenes de background
    const bgTheme = `bg-[url('/assets/images/backgrounds/bg-industries-section2-mobile.png')] md:bg-[url('/assets/images/backgrounds/bg-industries-section2-mobile.png')] xl:bg-[url('/assets/images/backgrounds/bg-industries-section2-desktop.png')]`


    return (
        <div className={`${bgTheme} bg-[center_top_0%] bg-no-repeat relative flex justify-center rounded-b-[3rem] xl:min-h-screen overflow-hidden py-[2.5rem] px-[1.75rem]
           md:py-[5rem] md:px-[2.5rem]
           xl:py-[7.5rem]
        `}>

            <div id='content' className={`w-full max-w-[1440px] flex flex-col items-center self-stretch gap-[3.5rem] 
                md:gap-[5rem]
                xl:gap-[6rem]
            `}>

                {/* Content - 1 */}
                <div className={`flex flex-row items-center justify-start gap-[0.75rem] self-stretch overflow-x-auto
                    md:gap-[0.5rem] sm:justify-center
                    xl:gap-[1.5rem]
                `}>

                    <div className={`shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
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

                    <div className={`${theme === 'dark' ? backgroundColors.black10_dark : backgroundColors.black10
                        } shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
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
                        Health for Your Patients, Health for Your Finances
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Focus on your patients, not on chasing payments. Let your time and attention go where it truly matters, delivering quality care.
                    </p>

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
                            srcSet="/assets/images/industries-health-care-section2-desktop.png"
                            width="504"
                            height="504"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-health-care-section2-tablet.png"
                            width="712"
                            height="400"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-health-care-section2-mobile.png"
                            alt="woman"
                            width={346}
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
                                Simplified Payments for Healthcare Providers
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                Deliver better care while we handle the complexity of payments
                            </p>
                        </div>

                        {/* Bloque - 2 */}
                        <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    GYB Connect streamlines your clinic administrative burden.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Offer flexible payment options tailored to your patients needs.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Help patients access necessary treatments without delays.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Ensure steady, predictable cash flow for your clinic or private practice.
                                </p>

                            </div>
                        </div>

                        <MyButton text='Know more' onClick={handleClick} />

                    </div>

                </div>

                {/* Content - 4 */}
                <div className={` flex flex-col items-center gap-[1.5rem]`}>
                    
                    {/* Card - 1 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic3_opacity25}
                                       relative
                                        mb-[-3rem]
                                       md:translate-y-[1rem] md:translate-x-[4rem] 
                                       xl:mb-[-10rem] xl:-translate-x-[27rem] xl:translate-y-[40rem]
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Make Treatments More Accessible
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Dont let cost be a barrier to health. With our Payment Plans, you can offer your patients a convenient, automated way to pay for costly treatments in manageable installments. 
                        </p>
                    </div>

                    {/* Imagen */}
                    <picture className=''>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/industries-health-care-section2-computer-desktop.png"
                            width="1124"
                            height="907"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-health-care-section2-computer-tablet.png"
                            width="728"
                            height="588"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-health-care-section2-computer-mobile.png"
                            alt="cellphones"
                            width={366}
                            height={296}
                            className={``}
                            quality={100}
                            priority
                        />
                    </picture>

                    {/* Card - 2 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                       relative
                                       mt-[-3rem] 
                                       md:z-5 md:mt-[-16.2rem] md:translate-y-[11.3rem] md:-translate-x-[7.5rem] 
                                       xl:mt-[-13rem] xl:translate-x-[14.5rem] xl:-translate-y-[44rem] 
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Automate Recurring Payments
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Ideal for ongoing therapies, wellness plans, or memberships. Set up Subscriptions to automate monthly billing, securing your revenue without additional administrative work.
                        </p>

                    </div>

                    {/* Card - 3 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic1_opacity25}
                                        relative 
                                        md:translate-y-[8.7rem] md:translate-x-[7rem] md:mb-[7rem]
                                        xl:mb-[-14rem] xl:translate-x-[24.5rem] xl:-translate-y-[37.5rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Offer Flexible and Private Payment Channels
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Let your patients pay how they are most comfortable. Send a Payment Link to their email/SMS or allow them to pay by phone 24/7 with our secure and confidential IVR system.
                        </p>

                    </div>
                </div>

                {/* Content - 5 */}
                <div className={` flex flex-col items-center justify-center gap-[2.5rem]
                    md:gap-[4rem]    
                `}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} leading-[120%] font-semibold font-ibm`}>
                        GYB Tools for your practice:
                    </p>
                    
                    {/* Content - 5.2 */}
                    <div className={` flex flex-col items-center justify-center gap-[3.5rem]
                        sm:flex-wrap sm:flex-row
                        md:gap-[5rem] 
                    `}>
                        
                        {/* Content - 5.2.1 */}
                        <div className={`flex self-stretch flex-col items-start gap-[1rem] max-w-[16.5rem]
                            md:gap-[1.5rem] relative
                        `}>

                            {/* Imagen */}
                            <picture className='block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/industries-legal-offcies-paymentplan2.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-legal-offcies-paymentplan2.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-legal-offcies-paymentplan2.png"
                                    alt="paymentplan"
                                    width={170}
                                    height={176}
                                    className=""
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                                Payment Plans
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                Make treatments more accessible by dividing the cost into automatic installments.
                            </p>

                            <MyButton text='Know more' onClick={handleClick} className='' />
                        </div>
                        
                        {/* Content - 5.2.2 */}
                        <div className={`flex relative flex-col self-stretch items-start gap-[1rem] max-w-[16.5rem]
                            md:gap-[1.5rem]
                        `}>

                            {/* Imagen */}
                            <picture className=' block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/industries-health-care-recurrentpayment1.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-health-care-recurrentpayment1.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-health-care-recurrentpayment1.png"
                                    alt="paymentplan"
                                    width={170}
                                    height={176}
                                    className=""
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                                Recurring Payments
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                Automate billing for ongoing therapies, memberships, or wellness plans.
                            </p>

                            <MyButton text='Know more' onClick={handleClick} className=''/>
                        </div>
                        
                        {/* Content - 5.2.3 */}
                        <div className={`flex flex-col self-stretch items-start gap-[1rem] max-w-[16.5rem]
                            md:gap-[1.5rem] relative
                        `}>

                            {/* Imagen */}
                            <picture className=' block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/industries-legal-offcies-paymentlink1.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-legal-offcies-paymentlink1.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-legal-offcies-paymentlink1.png"
                                    alt="paymentplan"
                                    width={170}
                                    height={176}
                                    className=""
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                                Payment Links
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                Email / SMS payment links. Send professional invoices that your clients can pay instantly with their card.
                            </p>

                            <MyButton text='Know more' onClick={handleClick} className=''/>
                        </div>
                        
                        {/* Content - 5.2.4 */}
                        <div className={`flex flex-col self-stretch items-start gap-[1rem] max-w-[16.5rem]
                            md:gap-[1.5rem] relative
                        `}>

                            {/* Imagen */}
                            <picture className=' block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/industries-legal-offcies-ivr1.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-legal-offcies-ivr1.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-legal-offcies-ivr1.png"
                                    alt="paymentplan"
                                    width={170}
                                    height={176}
                                    className=""
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                                Payment Plans
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                Offer a 24/7 phone payment channel that protects your patients sensitive information.
                            </p>

                            <MyButton text='Know more' onClick={handleClick} className=''/>
                        </div>
                    </div>
                </div>

                {/* Content - 6 */}
                <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        A better experience for everyone
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Simplifying the payment process is an extension of the care you provide. By making it easier for your patients to manage their finances, you reduce their stress, increase the likelihood they will complete their treatments, and strengthen the financial health of your practice.
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