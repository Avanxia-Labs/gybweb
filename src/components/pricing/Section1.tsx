import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, posicionamientos, layout, elementosHomeHero, badges } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import Navbar from '../layout/Navbar';
import { CheckIcon, InfoIcon } from '@/libs/Icons'
import MyButton from '@/components/ui/MyButton'


function Section1() {

    const { theme } = useTheme();

    const handleClick = () => { console.log("CLICKED") }

    // Configuración de imágenes de background
    const bgTheme = `bg-[url('/assets/images/backgrounds/bg-pricing-mobile.png')] md:bg-[url('/assets/images/backgrounds/bg-pricing-tablet.png')] xl:bg-[url('/assets/images/backgrounds/bg-pricing-desktop.png')]`


    return (
        <div className={`${bgTheme} bg-center bg-cover bg-no-repeat relative flex justify-center rounded-b-[3rem]  xl:min-h-screen overflow-hidden py-[6.5rem] px-[1.75rem]
      md:py-[11rem]
    `}>

            <div className=' w-full absolute top-0 max-w-'>
                <Navbar />
            </div>

            <div id='content' className={`w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[5rem]`}>

                {/* Elemento - 1 */}
                <div className={`w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`italic font-normal leading-[120%] font-ibm ${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } ${fontSizes.size25}`}>Interchange Plus</p>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        Fair Pricing, Real Savings
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Stop paying mysterious and high fees that punish your growth. With our Interchange Plus model, we give you complete transparency on what you pay for every transaction. It's our promise of honesty: a pricing structure designed for you to keep more of what you earn.
                    </p>

                    <div className={`flex flex-row items-center gap-[1rem]`}>
                        <button className={`${buttons.v2Desktop} ${fontSizes.size16} ${textColors.gybDarkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Lets Start
                        </button>
                        <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Get a Demo
                        </button>
                    </div>

                </div>

                {/* Elemento - 2 */}
                <div className={` w-full flex flex-col items-center py-[1.75rem] gap-[5rem] xl:px-[1.75rem]`}>

                    {/* Upper Part  */}
                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size39} max-w-[1000px] leading-[120%] font-ibm text-center`}>
                        The advantages that transform your finances</p>

                    {/* Bottom Part  */}
                    <div className={`flex flex-col gap-[2.5rem] md:gap-[4rem] xl:gap-[2rem]`}>

                        {/* Imagen 1 con bloque de texto 1 */}
                        <div className={` flex flex-col justify-center items-start self-stretch gap-[1.75rem] 
                            md:gap-[2.5rem] xl:flex-row xl:gap-[0.5rem]`}>
                            
                            {/* Imagen */}
                            <picture className='block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/pricing-section1-image1-desktop.png"
                                    width="504"
                                    height="504"
                                    className=''
                                
                                
                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/pricing-section1-image1-tablet.png"
                                    width="688"
                                    height="400"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/pricing-section1-image1-mobile.png"
                                    alt="Image1"
                                    width={334}
                                    height={240}
                                    className="" 
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            {/* Bloque de textos */}
                            <div className={`flex w-full flex-col items-start justify-center gap-[1.5rem] self-stretch
                                    md:gap-[2rem]
                                `}>

                                {/* Bloque - 1 */}
                                <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size31} font-ibm font-semibold leading-[120%]`}>
                                        Radical Transparency
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                        You know exactly what you pay.
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
                                            The real, non-negotiable Interchange cost set by the card networks (Visa, MasterCard, etc.) is passed through directly. 
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            A service margin (+) is simply added on top.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            This margin includes a small, fixed fee for our technology and support.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            No hidden fees or black boxes.
                                        </p>

                                    </div>
                                </div>

                                <MyButton text='Know more' onClick={handleClick} />

                            </div>

                        </div>

                        {/* Imagen 2 con bloque de texto 2 */}
                        <div className={` flex flex-col justify-center items-start self-stretch gap-[1.75rem] 
                            md:gap-[2.5rem] xl:flex-row xl:gap-[0.5rem]`}>
                            
                            {/* Imagen */}
                            <picture className='order-1 xl:order-2 block w-full xl:ml-[4rem]'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/pricing-section1-image2-desktop.png"
                                    width="504"
                                    height="504"
                                    className=''
                                
                                
                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/pricing-section1-image2-tablet.png"
                                    width="688"
                                    height="400"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/pricing-section1-image2-mobile.png"
                                    alt="Image1"
                                    width={334}
                                    height={240}
                                    className="" 
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            {/* Bloque de textos */}
                            <div className={`order-2 xl:order-1 flex w-full flex-col items-start justify-center gap-[1.5rem] self-stretch
                                    md:gap-[2rem]
                                `}>

                                {/* Bloque - 1 */}
                                <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size31} font-ibm font-semibold leading-[120%]`}>
                                        Automatic Savings on Every Card
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                        Pay what the card really costs
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
                                            Not all cards cost the same to process — debit cards are much cheaper than premium credit cards.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            With flat-rate pricing, you always pay the highest rate, no matter the card.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            Interchange Plus lets you benefit from lower-cost cards, passing the savings directly to you.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            Reduce the cost of each specific transaction when a cheaper card is used.
                                        </p>

                                    </div>
                                </div>

                                <MyButton text='Know more' onClick={handleClick} />

                            </div>

                        </div>


                        {/* Imagen 3 con bloque de texto 3 */}
                        <div className={` flex flex-col justify-center items-start self-stretch gap-[1.75rem] 
                            md:gap-[2.5rem] xl:flex-row xl:gap-[0.5rem]`}>
                            
                            {/* Imagen */}
                            <picture className='block w-full'>
                                {/* Desktop */}
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet="/assets/images/pricing-section1-image3-desktop.png"
                                    width="504"
                                    height="504"
                                    className=''
                                
                                
                                />
                                {/* Tablet */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/pricing-section1-image3-tablet.png"
                                    width="688"
                                    height="400"
                                    className=''
                                />
                                {/* Mobile (fallback) */}
                                <Image
                                    src="/assets/images/pricing-section1-image3-mobile.png"
                                    alt="Image1"
                                    width={334}
                                    height={240}
                                    className="" 
                                    //className="bg-indigo-200 shrink-0 !w-full !h-auto"
                                    quality={100}
                                    priority
                                />
                            </picture>

                            {/* Bloque de textos */}
                            <div className={`flex w-full flex-col items-start justify-center gap-[1.5rem] self-stretch
                                    md:gap-[2rem]
                                `}>

                                {/* Bloque - 1 */}
                                <div className={`flex flex-col items-start self-stretch gap-[0.75rem]
                                        md:gap-[1rem]
                                    `}>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size31} font-ibm font-semibold leading-[120%]`}>
                                        A Model that Rewards Your Success
                                    </p>

                                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                        } ${fontSizes.size25} font-ibm italic leading-[120%]`}>
                                        Grow more, pay less
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
                                            As your business grows and you process more volume, your average “effective rate” decreases.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            We don't penalize you for selling more — quite the opposite.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            Our pricing structure is built so that the more successful you are, the more you save on fees.
                                        </p>

                                    </div>

                                    <div className={`flex flex-row items-start gap-[1.5rem] self-stretch
                                            md:gap-[2rem]
                                        `}>
                                        <CheckIcon className={`${textColors.gybGreen} shrink-0`} />

                                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                                            } ${fontSizes.size18} font-inter leading-[120%]`}>
                                            True partnership designed to support and reward your growth.
                                        </p>

                                    </div>
                                </div>

                                <MyButton text='Know more' onClick={handleClick} />

                            </div>

                        </div>
                    </div>
                </div>

                {/* Elemento - 3 */}
                <div className={`w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size31} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        The smart decision for your business
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        Interchange Plus isn't just a pricing model; it's our philosophy. We believe you deserve to pay a fair price that reflects the actual cost of each transaction, not an inflated fee that only benefits the processor. It's time to take control and maximize your profits.
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

export default Section1