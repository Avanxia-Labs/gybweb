import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, gradients } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import { GavelIcon, SketchLogoIcon, HeartbeatIcon, StorefrontIcon, SubtitlesIcon, CoinsIcon, CheckIcon, InfoIcon } from '@/libs/Icons'
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

            <div id='content' className={` w-full max-w-[1440px] flex flex-col items-center self-stretch gap-[3.5rem] 
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

                    <div className={`${theme === 'dark' ? backgroundColors.black10_dark : backgroundColors.black10
                        } shrink-0 py-1 rounded-lg flex flex-row items-center justify-center px-[1rem] gap-[0.5rem]
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
                        Secure & Profitable Payments. Sell with confidence, keep more of your margin
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Every piece you sell is a high-value transaction that demands maximum security. GYB Connect protects your sales against fraud, reduces fees to maximize your profit on every sale, and offers a premium payment experience worthy of your brand.
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
                            srcSet="/assets/images/industries-jewelry-section2-woman-desktop.png"
                            width="504"
                            height="504"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-jewelry-section2-woman-tablet.png"
                            width="688"
                            height="400"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-jewelry-section2-woman-mobile.png"
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
                                Smart Payments for Jewelry Stores. Refined, Reliable, Effortless
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                Focus on your craft and products, not on chasing down payments
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
                                    Let your energy shine through your collections, not through paperwork.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    GYB Connect brings elegance to your backend processes, helping you manage sales, deposits, and custom orders with ease.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Provide a seamless, secure payment experience your clients can trust, whether online or in-store.
                                </p>

                            </div>

                            <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                    } ${fontSizes.size18} font-inter leading-[120%]`}>
                                    Free up your time and ensure steady cash flow to keep your business sparkling.
                                </p>

                            </div>
                        </div>

                        <MyButton text='Know more' onClick={handleClick} />

                    </div>

                </div>

                {/* Content - 4 */}
                <div className={` flex flex-col items-center gap-[1.5rem] xl:mt-[-4rem]`}>
                    
                    {/* Card - 1 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic4_opacity25}
                                       relative 
                                       md:z-10 md:translate-y-[17.5rem] md:translate-x-[7.5rem] 
                                       xl:translate-x-[28rem] xl:translate-y-[38rem] 
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Close Remote Sales with Complete Security
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            A customer wants a piece from another city? Send them a secure Payment Link via SMS or email. Offer a professional and reliable experience that facilitates the purchase and secures the payment instantly.
                        </p>

                    </div>
                    
                    {/* Card - 2 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic3_opacity25}
                                       relative 
                                       md:z-5 md:-translate-y-[4rem] md:-translate-x-[9.5rem] 
                                       xl:-translate-x-[20.5rem]   xl:m-auto
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Advanced Fraud Protection
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Use 3D Secure for online or remote sales. This smart shield verifies the
                            buyer identity, drastically reducing the risk of fraudulent chargebacks on your most valuable pieces.
                        </p>

                    </div>
                    
                    {/* Card - 3 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                       relative
                                          mb-[-2.5rem]
                                       md:z-0 md:-translate-y-[23rem] md:translate-x-[7.5rem] md:mb-[-9rem]
                                       xl:translate-x-[28rem] xl:mb-[-19rem] xl:translate-y-[-10rem]
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

                    {/* Imagen */}
                    <picture className=''>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/industries-jewelry-section2-tablets-desktop.png"
                            width="826"
                            height="632"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/industries-jewelry-section2-tablets-tablet.png"
                            width="745"
                            height="571"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/industries-jewelry-section2-tablets-mobile.png"
                            alt="cellphones"
                            width={380}
                            height={291}
                            className={`md:mt-[-1.6rem]`}
                            quality={100}
                            priority
                        />
                    </picture>

                    {/* Card - 4 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic2_opacity25}
                                        relative 
                                           mt-[-2.5rem]
                                        md:translate-y-[5.6rem]  md:translate-x-[8.6rem]  
                                        xl:translate-x-[0rem] xl:translate-y-[-3.9rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Sleek Hardware, Powerful Software
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Offer a premium payment experience with modern Clover terminals, all seamlessly integrated with the GYB Connect platform. Every in-store sale is not only fast and secure, but it also feeds your digital ecosystem, instantly updating your customer records and financial reports. 
                        </p>

                    </div>

                    {/* Card - 5 */}
                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${gradients.basic4_opacity25}
                                        relative 
                                        md:-translate-y-[21.5rem] md:translate-x-[-7.9rem] 
                                        xl:-translate-x-[27rem] xl:-translate-y-[32.5rem] xl:mb-[-10rem]
                                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                            Maximize Your Margin on Every Sale
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            In a sale worth thousands of dollars, every fraction of a percent matters. Our Interchange Plus pricing model ensures you always get the lowest possible rate, so you dont give away your profits to card fees.
                        </p>

                    </div>
                </div>

                {/* Content - 5 */}
                <div className={` flex flex-col items-center justify-center gap-[2.5rem]
                    md:gap-[4rem]    
                `}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} leading-[120%] font-semibold font-ibm`}>
                        GYB Tools for your jewelry store:
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
                                    srcSet="/assets/images/industries-jewelry-3dsecure1.png"
                                    width="215"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-jewelry-3dsecure1.png"
                                    width="215"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-jewelry-3dsecure1.png"
                                    alt="paymentplan"
                                    width={215}
                                    height={176}
                                    className=""
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-semibold font-ibm`}>
                                3D Secure
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                The essential anti-fraud shield to protect your high-value online sales.
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
                                    srcSet="/assets/images/industries-jewelry-ach2.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-jewelry-ach2.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-jewelry-ach2.png"
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
                                Interchange Plus
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                The pricing structure that ensures you get the maximum margin on every piece sold.
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
                                    srcSet="/assets/images/industries-jewelry-dispute2.png"
                                    width="170"
                                    height="176"
                                    className=''


                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/industries-jewelry-dispute2.png"
                                    width="170"
                                    height="176"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/industries-jewelry-dispute2.png"
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
                                Dispute Module
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size18} leading-[120%] font-inter`}>
                                Easily respond to and manage chargebacks to protect your sales and your inventory.
                            </p>

                            <MyButton text='Know more' onClick={handleClick} className='' />
                        </div>
                    </div>
                </div>

                {/* Content - 6 */}
                <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        Your brand deserves a payment partner to match
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        With GYB Connect, every sale is protected by the best technology and backed by the fairest pricing model. You focus on the beauty and art of your pieces; we will ensure every transaction is secure, seamless, and profitable.
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