import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import Navbar from '../layout/Navbar';
import { CheckIcon, InfoIcon } from '@/libs/Icons'
import MyButton from '@/components/ui/MyButton'


function Section1() {

    const { theme } = useTheme();

    const handleClick = () => { console.log("CLICKED") }

    // Configuración de imágenes de background
    //const bgTheme = `bg-[url('/assets/images/backgrounds/bg-industries-section1.png')] md:bg-[url('/assets/images/backgrounds/bg-pricing-tablet.png')] xl:bg-[url('/assets/images/backgrounds/bg-pricing-desktop.png')]`


    return (
        <div className={`
            
            border-b relative flex justify-center rounded-b-[3rem] overflow-hidden pt-[6.5rem] pb-[3.5rem] px-[1.75rem] ${theme === 'dark' ? `${backgroundColors.gybDarkGreen} border-b-[#0f1413]` : `${backgroundColors.gybLightGreen} border-b-[#e3f6f2]`
            }
            md:pt-[11rem] md:pb-[5rem] md:px-[2.5rem]
            xl:pt-[11rem] xl:pb-[7.5rem] xl:px-[2.5rem]
        `}>


            <div className=' w-full absolute top-0 max-w-'>
                <Navbar />
            </div>

            <div id='content' className={` relative w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[5rem]`}>

                {/* Imagen de fondo absoluta */}
                {/* <Image
                    src="/assets/images/backgrounds/bg-industries-section1.png"
                    alt="Background"
                    width={814}
                    height={830}
                    className="absolute bottom-[0rem] left-[3rem]"
                    priority
                /> */}

                {/* Elemento - 1 */}
                <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                    <p className={`italic font-normal leading-[120%] font-ibm ${theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                        } ${fontSizes.size25}`}>Industries</p>

                    <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                        Payment solutions tailored to your business
                    </p>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                        No two businesses are the same — that is why we offer flexible, scalable payment solutions designed to fit your unique needs. Whether you are just starting out or scaling fast, we have got you covered.
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



            </div>
        </div>
    )
}

export default Section1