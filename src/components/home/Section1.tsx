import React from 'react'
import { textColors, textSize, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';

function Section1() {

    const { theme } = useTheme();

    const themeStylesBG = theme === 'dark' ? 'bg-indigo-200' : `${backgroundColors.gybGreen10}`

    return (
        // Hero
        <div className={`${themeStylesBG} h-screen w-full px-[2.5rem] flex flex-col justify-center rounded-b-[3rem]`}>

            {/* Content */}
            <div id='content' className='flex flex-col xl:flex-row gap-1 max-w-[85rem] items-center'>

                {/* Frame 8 */}
                <div id='frame8' className='flex flex-col gap-[2.5rem] items-start shrink-0 max-w-[47rem]'>

                    <div id='frame11' className='flex flex-col items-start gap-[1.5rem] self-stretch'>
                        <div id='frame9' className='flex flex-col items-start gap-[1rem] self-stretch'>
                            <p className={`${textColors.gybGreen} ${textSize.size25} font-ibm font-bold leading-[120%]`}>GYB, the payment platform</p>
                            <p className={`${textColors.darkGreen} ${textSize.size61} font-ibm font-bold leading-[120%]`}>We Designed Our System To Fuel Your Growth</p>
                        </div>
                        <p className={`${textColors.neutralGrey} ${textSize.size18} font-inter font-normal leading-[120%]`}>With our fair rates, all-in-one tools, and fast deposits, we give you complete control of your finances. Stop giving away your profits and start investing in your success.</p>
                    </div>

                    <div id='frame10' className='flex items-start gap-[1rem]'>
                        <button className={`${buttons.v2Desktop} ${textSize.size16} ${textColors.darkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Lets Start
                        </button>
                        <button className={`${textSize.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Get a Demo
                        </button>
                    </div>
                </div>


                {/* Blur - Desktop */}
                {/* <div className='bg-black w-[43rem] h-[40rem] relative'>
                    <div id='elipse1' className={`absolute w-[26.625rem] h-[26.625rem] shrink-0 rounded-full ${backgroundColors.gybGreen}`}
                        style={{ top: '-2.3438rem', left: '' }}></div>
                    <div id='elipse2' className={`absolute w-[26.625rem] h-[26.625rem] shrink-0 rounded-full bg-[#44BCFF]`}
                        style={{ top: '4.3438rem', left: '12.875rem' }}></div>
                    <div id='elipse3' className={`absolute w-[26.625rem] h-[26.625rem] shrink-0 rounded-full bg-[#FF44EC]`}
                        style={{ top: '-8.9688rem', left: '12.875rem' }}></div>
                </div> */}


                {/* Graph */}
                {/* <div className='relative bg-black w-[40.1875rem] h-[38.18813rem] [filter:drop-shadow(0px_5.332px_10.663px_rgba(2,2,2,0.05))]'>

                    <div id='frame14' className={`absolute right-0 top-[3.53rem] flex w-[13.12925rem] h-[20.79356rem] p-[0.4665rem] pr-[0.27894rem] pl-[0.34556rem] flex-col justify-center items-center shrink-0 rounded-[1.5995rem] border border-[rgba(255,255,255,0.70)] bg-[rgba(227,246,242,0.50)] backdrop-blur-[10.6633491516px]`}>

                    </div>

                    <div id='frame13' className='absolute right-[6.53rem] top-[12.46rem] flex w-[292.176px] h-[332.697px] pt-[17.061px] pr-[11.147px] pb-[17.061px] pl-[10.081px] flex-col justify-center items-center shrink-0 rounded-[25.592px] border border-[rgba(255,255,255,0.70)] bg-[rgba(227,246,242,0.50)] backdrop-blur-[10.6633491516px]'>

                    </div>

                    <div id='frame12' className='absolute top-0 right-[16.85rem] flex w-[21.06013rem] h-[16.06169rem] pt-[1.19963rem] pr-[1.38806rem] pb-[1.26625rem] pl-[1.38806rem] justify-center items-center shrink-0 rounded-[1.5995rem] border border-[rgba(255,255,255,0.70)] bg-[rgba(227,246,242,0.50)] backdrop-blur-[10.6633491516px]'></div>
                </div> */}





            </div>



        </div>


    )
}

export default Section1