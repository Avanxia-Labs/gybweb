import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, gradients } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import { GavelIcon, SketchLogoIcon, HeartbeatIcon, StorefrontIcon, CheckIcon, InfoIcon, } from '@/libs/Icons'
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

            <div id='content' className={`w-full  max-w-[1440px] flex flex-col items-center self-stretch gap-[3.5rem] 
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

                    <div className={`shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
                        md:px-[1.5rem]
                    `}>
                        <HeartbeatIcon className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`} />

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size16} font-semibold leading-[120%]`}>Health Care</p>
                    </div>

                    <div className={`${theme === 'dark' ? backgroundColors.black10_dark : backgroundColors.black10
                        } shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
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
                        Every second at the checkout and every penny of your margin counts
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        In retail, speed and precision are everything. GYB Connect helps you move faster at checkout and keep more of every sale.
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
                            srcSet="/assets/images/industries-retail-section2-desktop.png"
                            width="504"
                            height="504"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-retail-section2-tablet.png"
                            width="688"
                            height="400"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-retail-section2-mobile.png"
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
                                Optimize Every Transaction, Maximize Every Margin
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                In retail, speed and profitability go hand in hand
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
                                    Retail success depends on efficiency at every step — especially at checkout.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    GYB Connect enhances both speed and reliability in your payment process.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Deliver an ultra-fast payment experience that keeps customers happy.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Protect your bottom line with a pricing structure designed to preserve your margins.
                                </p>

                            </div>
                        </div>

                        <MyButton text='Know more' onClick={handleClick} />

                    </div>

                </div>

                {/* Content - 4 */}
                <div className={`flex  flex-col items-center gap-[1.5rem]`}>

                    {/* Card - 1 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic3_opacity25}
                                       relative
                                       mb:
                                       md:translate-y-[0rem] md:-translate-x-[10rem] md:mb-[-2.9rem]
                                       xl:mb-[0rem] xl:-translate-x-[23rem] xl:translate-y-[6rem] xl:z-5
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Accelerate Your Cash Flow
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            With our Next-Business-Day Deposits, the money from today's sales is in your account tomorrow. Maintain the agility to buy inventory, pay suppliers, and grow without waiting.
                        </p>
                    </div>
                    
                    {/* Me quedé: Content 4 - Vist Desktop....ajustando la posicion de las cards */}

                    {/* Card - 2 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic4_opacity25}
                                       relative
                                       mb-[-3rem] z-5
                                       md:translate-y-[0rem] md:translate-x-[8rem] 
                                       xl:mb-[-20rem] xl:translate-x-[20rem] xl:-translate-y-[7rem]
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            A Frictionless Payment Experience
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Reduce queues and improve customer satisfaction with fast and reliable Clover Terminals, self-service kiosks, and our complete range of payment devices. Accept chip and contactless payments in seconds, keeping your store's flow moving.
                        </p>
                    </div>

                    {/* Imagen */}
                    <picture className=''>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/industries-retail-section2-imac-desktop.png"
                            width="1662"
                            height="1108"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-retail-section2-imac-desktop.png"
                            width="1256"
                            height="837"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-retail-section2-imac-desktop.png"
                            alt="cellphones"
                            width={664}
                            height={442}
                            className="scale-[1.5] lg:scale-[1.3] xl:scale-[1.3] 2xl:scale-[1.5]"
                            quality={100}
                            priority
                        />
                    </picture>

                    {/* Card - 3 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                       relative
                                       mt-[-2.3rem] 
                                       md:mt-[0rem] md:-translate-y-[5rem] md:-translate-x-[10rem] md:z-5
                                       lg:-translate-y-[8rem]
                                       xl:mt-[0rem] xl:translate-x-[0rem] xl:-translate-y-[0rem] 
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Protect Your Profit Margin
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Stop giving away your profits. Our Interchange Plus model ensures you get the lowest fees, especially on high-volume days, to make every sale as profitable as possible.
                        </p>

                    </div>

                    {/* Card - 4 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic1_opacity25}
                                        relative 
                                        md:-translate-y-[7.5rem] md:translate-x-[8rem] md:mb-[-8rem]
                                        lg:-translate-y-[10.5rem] lg:mb-[-10rem]
                                        xl:mb-[0rem] xl:-translate-x-[0rem] xl:-translate-y-[0rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Defend Your Sales Easily
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            If a chargeback occurs, our Dispute Module gives you a clear dashboard and easy-to-use tools to respond quickly with the necessary evidence and protect your revenue.
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

                            <MyButton text='Know more' onClick={handleClick} className='' />
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

                            <MyButton text='Know more' onClick={handleClick} className='' />
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

                            <MyButton text='Know more' onClick={handleClick} className='' />
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