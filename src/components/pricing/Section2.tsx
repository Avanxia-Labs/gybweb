import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, gradients } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import { SubtitlesIcon, CoinsIcon } from '@/libs/Icons'


function Section2() {

    const { theme } = useTheme();

    const handleClick = () => { console.log("CLICKED") }

    // Configuración de imágenes de background
    const bgTheme = `bg-[url('/assets/images/backgrounds/bg-pricing-section2-mobile.png')] md:bg-[url('/assets/images/backgrounds/bg-pricing-section2-mobile.png')] xl:bg-[url('/assets/images/backgrounds/bg-pricing-section2-desktop.png')]`


    return (
        <div className={`${bgTheme} bg-center bg-cover bg-no-repeat relative flex justify-center rounded-b-[3rem] xl:min-h-screen overflow-hidden py-[3.5rem] px-[1.75rem]
           md:py-[5rem] md:px-[2.5rem]
           xl:py-[7.5rem]
        `}>

            <div id='content' className={` w-full max-w-[1440px] flex flex-col items-center self-stretch gap-[2.5rem] 
                md:gap-[4rem]
                xl:gap-[6rem]
            `}>

                {/* Content - 1 */}
                <div className={`w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`italic font-normal leading-[120%] font-ibm ${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } ${fontSizes.size25}`}>Pass-through Cost</p>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        A model build on total transparency
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        We offer a model built on total transparency and fairness for both you and your clients. At GYB Connect, we empower your business to operate without absorbing credit card fees by allowing the customer who chooses the convenience of card payment to cover the small processing cost.
                    </p>

                    <div className={` flex flex-col items-center self-stretch gap-[1.75rem]
                        md:flex-row md:justify-center md:items-start md:gap-[2.5rem]
                    `}>

                        <div className={` md:max-w-[400px] flex flex-row items-start gap-[1.5rem] self-stretch
                                                                        md:gap-[2rem]
                        `}>
                            <SubtitlesIcon className={`${textColors.gybGreen} shrink-0`} />

                            <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                                } ${fontSizes.size16} font-inter leading-[120%]`}>
                                This is clearly explained to the customer
                                during the transaction, positioning it as a standard fee for the payment service.
                            </p>

                        </div>

                        <div className={` md:max-w-[400px] flex flex-row items-start gap-[1.5rem] self-stretch
                                                                    md:gap-[2rem]
                        `}>
                            <CoinsIcon className={`${textColors.gybGreen} shrink-0`} />

                            <p className={`${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                                } ${fontSizes.size16} font-inter leading-[120%]`}>
                                This approach frees your business from a significant operational cost, improving your profitability while maintaining a clear and honest relationship with your customers.
                            </p>

                        </div>
                    </div>

                    <div className={`flex flex-row items-center gap-[1rem]`}>
                        <button className={`${buttons.v2Desktop} ${fontSizes.size16} ${textColors.gybDarkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Lets Start
                        </button>
                        <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Get a Demo
                        </button>
                    </div>

                </div>

                {/* Content - 2 */}
                <div className={`w-full flex flex-col items-center gap-[1.75rem] px-[1rem] 
                    md:gap-[2rem] 
                    xl:gap-[3rem]
                `}>

                    {/* Bloque - 1 */}
                    <div className={`max-w-[600px] xl:ml-[-10rem]  relative`}>

                        <div className={`flex flex-col p-[1.75rem] items-start gap-[1rem] border rounded-[1.25rem] border-white/70 ${gradients.basic3_opacity25} backdrop-blur-[10px]
                            md:p-[2.5rem] md:gap-[1.5rem]
                        `}>
                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-ibm font-semibold`}>
                                Goodbye Hidden Markups
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size13} leading-[120%] font-inter`}>
                                Forget opaque pricing models. GYB Connect aligns with the Pass-through Cost concept, clearly breaking down the expenses associated with each card transaction.
                            </p>
                        </div>

                        {/* Image */}
                        <picture>

                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/svgs/transparent1.svg"
                                width="168"
                                height="174"
                            />

                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/svgs/transparent1.svg"
                                width="134"
                                height="139"
                            />

                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/svgs/transparent1.svg"
                                alt="transparent1"
                                width={116}
                                height={120}
                                className={`absolute bottom-[-1.8rem] right-[-4.3rem] 
                                    md:bottom-[-1.8rem] md:right-[-3.5rem]
                                    xl:bottom-[-2.8rem] xl:right-[-5.5rem]
                                `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>

                    {/* Bloque - 2 */}
                    <div className={`max-w-[600px] xl:ml-[10rem] xl:mt-[0.5rem]   relative`}>

                        <div className={`flex flex-col p-[1.75rem] items-start gap-[1rem] border rounded-[1.25rem] border-white/70 ${gradients.basic2_opacity25} backdrop-blur-[10px]
                            md:p-[2.5rem] md:gap-[1.5rem]
                        `}>
                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-ibm font-semibold`}>
                                Covering Real Costs
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size13} leading-[120%] font-inter`}>
                                We show you how network costs (Visa/Mastercard) and the issuing bank (Interchange Fee) are passed directly through. The extra you might see is explained by these underlying expenses, not by arbitrarily added markups.
                            </p>
                        </div>

                        {/* Image */}
                        <picture>

                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/svgs/payment1.svg"
                                width="168"
                                height="174"
                            />

                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/svgs/payment1.svg"
                                width="134"
                                height="139"
                            />

                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/svgs/payment1.svg"
                                alt="transparent1"
                                width={116}
                                height={120}
                                className={`absolute bottom-[-1.8rem] right-[-4.8rem] 
                                    md:bottom-[-1.8rem] md:right-[-4.9rem]
                                    xl:bottom-[-2.8rem] xl:right-[-7.0rem]
                                `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>


                    {/* Bloque - 3 */}
                    <div className={`max-w-[600px] xl:ml-[30rem] xl:mt-[0.7rem]  relative`}>

                        <div className={`flex flex-col p-[1.75rem] items-start gap-[1rem] border rounded-[1.25rem] border-white/70 ${gradients.basic1_opacity25} backdrop-blur-[10px]
                            md:p-[2.5rem] md:gap-[1.5rem]
                        `}>
                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size25} leading-[120%] font-ibm font-semibold`}>
                                A Simple and Honest Pricing Structure
                            </p>

                            <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                } ${fontSizes.size13} leading-[120%] font-inter`}>
                                Forget about statements you need an expert to decipher. Our pricing structure is straightforward and easy to understand. This honesty gives you the confidence that you are always getting a fair rate, with no surprises at the end of the month.
                            </p>
                        </div>

                        {/* Image */}
                        <picture>

                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/svgs/pricemodel1.svg"
                                width="168"
                                height="174"
                            />

                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/svgs/pricemodel1.svg"
                                width="134"
                                height="139"
                            />

                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/svgs/pricemodel1.svg"
                                alt="transparent1"
                                width={116}
                                height={120}
                                className={`absolute bottom-[-1.8rem] right-[-4.8rem] 
                                    md:bottom-[-1.8rem] md:right-[-4.9rem]
                                    xl:bottom-[4.8rem] xl:right-[36.0rem]
                                `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>
                </div>


                {/* Content - 3 */}
                <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size25} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        Why choose GYB Connect? The answer is simple:
                    </p>

                    <div className={`flex relative flex-col py-[0.75rem] items-center justify-center gap-[2rem]
                        md:py-[1rem] md:gap-[2.5rem]
                        xl:py-[2.5rem] xl:flex-row
                    `}>
                        <div className={`flex px-[1rem] items-center justify-center rounded-xl border border-white/70 shadow-[0px_5px_10px_0px_rgba(2,2,2,0.05)] ${gradients.legacy1_inverted}
                            md:px-[1.5rem]
                        `}>
                            <p className={`${theme === 'dark' ? textColors.black : textColors.white
                                } ${fontSizes.size120} leading-[120%] font-semibold font-ibm`}>
                                $0.00
                            </p>
                        </div>

                        <p className={` ${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                            } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm `}>
                            Zero <br /> <span className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen}`}>Processing Fees</span>
                        </p>

                        {/* Image */}
                        <picture>

                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/svgs/0fee1.svg"
                                width="168"
                                height="174"
                            />

                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/svgs/0fee1.svg"
                                width="108"
                                height="112"
                            />

                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/svgs/0fee1.svg"
                                alt="transparent1"
                                width={75}
                                height={78}
                                className={`absolute bottom-[4.2rem] right-[-0.7rem] 
                                    md:bottom-[7.8rem] md:right-[-4.9rem]
                                    xl:bottom-[1.5rem] xl:right-[50.0rem]
                                `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} text-center max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Our model isnt just about transparency; it is about completely eliminating your costs for accepting cards. We implement a fair and fully compliant system where the cost of processing is covered by the customer who chooses the convenience of paying with a card.
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size20} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        The result: <span className={`${textColors.gybGreen} italic font-semibold`}>you stop giving away your profits in fees forever.</span>
                    </p>

                </div>

                {/* Content - 4 */}
                <div className={` flex flex-col items-center gap-[1.5rem]
                       
                `}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size25} max-w-[750px] leading-[120%] font-normal font-ibm text-center`}>
                        What this really means for your business:
                    </p>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${backgroundColors.gybLightGreen50}
                       relative
                       md:mb-[-4.5rem] md:-translate-x-[3rem] 
                       xl:mb-[-13rem] xl:mt-[4rem] xl:-translate-x-[28rem]
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size20} leading-[120%] font-normal font-inter`}>
                            You Keep 100% of Every Sale
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            Forget the deductions on your statement. The price you set for your product is the money you receive in your bank. It is that simple.
                        </p>

                        {/* Coins */}
                        <picture className=''>
                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/images/pricing-section2-coins1-tablet.png"
                                width="95.61"
                                height="88"
                                className=''


                            />
                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/images/pricing-section2-coins1-tablet.png"
                                width="95.61"
                                height="88"
                                className=''
                            />
                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/images/pricing-section2-coins1-mobile.png"
                                alt="Coins1"
                                width={76.49}
                                height={70.4}
                                className={`absolute top-[2.5rem] right-[-3.8rem]
                                    md:top-[0rem] md:right-[-3.8rem]
                                    xl:top-[-4.8rem] xl:right-[7.8rem]
                            `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>

                    {/* Imagen */}
                    <picture className=''>
                        {/* Desktop */}
                        <source
                            media="(min-width: 1280px)"
                            srcSet="/assets/images/pricing-section2-tablet.png"
                            width="669"
                            height="434"
                            className=''


                        />
                        {/* Tablet */}
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/images/pricing-section2-tablet.png"
                            width="669"
                            height="434"
                            className=''
                        />
                        {/* Mobile (fallback) */}
                        <Image
                            src="/assets/images/pricing-section2-mobile.png"
                            alt="Image1"
                            width={363}
                            height={207}
                            className={`

                            `}
                            quality={100}
                            priority
                        />
                    </picture>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 rounded-[1.25rem] backdrop-blur-[10px] ${backgroundColors.gybLightGreen50}
                       relative 
                       md:mt-[-11.5rem] md:-translate-x-[7rem]
                       xl:mt-[-8.5rem] xl:-translate-x-[22.7rem] 
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size20} leading-[120%] font-normal font-inter`}>
                            Predictable Profit Margins
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            By eliminating the variable cost of fees, your profits become incredibly stable. This gives you unprecedented financial clarity to plan and grow your business.
                        </p>

                        {/* Graphup */}
                        <picture className=''>
                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/images/pricing-section2-graphup1-tablet.png"
                                width="95.61"
                                height="88"
                                className=''


                            />
                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/images/pricing-section2-graphup1-tablet.png"
                                width="72.24"
                                height="88"
                                className=''
                            />
                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/images/pricing-section2-graphup1-mobile.png"
                                alt="Graphup1"
                                width={69.35}
                                height={84.48}
                                className={`absolute top-[2rem] right-[-3.0rem]
                                    md:top-[7.3rem] md:right-[21.5rem]
                                    xl:top-[-6rem] xl:right-[20.8rem]
                            `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>

                    <div className={`flex flex-col max-w-[363px] p-[1rem] items-start gap-[1rem] border border-white/70 backdrop-blur-[10px] ${backgroundColors.gybLightGreen50}
                        relative 
                        md:mt-[-3rem] md:translate-x-[8.6rem] 
                        xl:mt-[-14rem] xl:translate-x-[27.6rem] xl:-translate-y-[9.6rem]
                    `}>

                        <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                            } ${fontSizes.size20} leading-[120%] font-normal font-inter`}>
                            A Fair and Transparent System
                        </p>

                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size13} leading-[120%] font-normal font-inter`}>
                            It is the most honest way of doing business. The cost for the convenience of paying by card is covered by the person who uses it, not you. This allows you to keep your base prices competitive for all your customers.
                        </p>

                        {/* TransparentSystem */}
                        <picture className=''>
                            {/* Desktop */}
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/assets/images/pricing-section2-transparentsystem1-tablet.png"
                                width="102.3"
                                height="95"
                                className=''


                            />
                            {/* Tablet */}
                            <source
                                media="(min-width: 768px)"
                                srcSet="/assets/images/pricing-section2-transparentsystem1-tablet.png"
                                width="102.3"
                                height="95"
                                className=''
                            />
                            {/* Mobile (fallback) */}
                            <Image
                                src="/assets/images/pricing-section2-transparentsystem1-mobile.png"
                                alt="TransparentSystem1"
                                width={98.21}
                                height={91.2}
                                className={`absolute top-[5rem] right-[-5.0rem]
                                    md:top-[3rem] md:right-[21.8rem]
                                    xl:top-[9rem] xl:right-[4.8rem]
                            `}
                                quality={100}
                                priority
                            />
                        </picture>
                    </div>

                </div>

                {/* Content - 5 */}
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
    )
}

export default Section2