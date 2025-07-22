import React from 'react'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'

interface SlideElementProps {
    imageUrl: string,
    title: string,
    subtitle: string,
    onLearnMore: () => void
}

function SlideElement({ imageUrl, title, subtitle, onLearnMore }: SlideElementProps) {

    const { theme } = useTheme();

    return (
        <div className={`w-[17.5rem] md:w-[25rem] min-h-[28rem] p-[2.5rem] flex flex-col items-start gap-[2rem] border rounded-[1.5rem] backdrop-blur-[10px] ${
            theme === 'dark'
                ? 'border-white/60 bg-white/15'
                : 'border-black/10 bg-white/70'
            }`}>
            {/* Image */}
            <div>
                <Image
                    src={imageUrl}
                    alt={'terminal1'}
                    width={93}
                    height={93}
                    className={``}
                    quality={100}
                    priority
                />
            </div>

            {/* Textos */}
            <div className='flex flex-col items-start gap-[1.5rem] self-stretch'>

                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size25} leading-[120%] font-ibm font-semibold`}>{title}</p>

                <div className='flex flex-col items-start gap-[1.5rem] self-stretch'>

                    <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                        } ${fontSizes.size18} leading-[120%] font-inter font-normal`}>{subtitle}</p>

                    {/* Learn More */}
                    {onLearnMore && (
                        <button onClick={onLearnMore} className={`flex items-center justify-center gap-[0.5rem]`}>
                            <p className={`${theme === 'dark' ? textColors.gybGreenDarkMode : textColors.gybGreen
                                } ${fontSizes.size16} leading-[120%] font-inter font-semibold`}>
                                Learn more
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.8538 8.68728L9.35375 13.1873C9.25993 13.2811 9.13268 13.3338 9 13.3338C8.86732 13.3338 8.74007 13.2811 8.64625 13.1873C8.55243 13.0935 8.49972 12.9662 8.49972 12.8335C8.49972 12.7008 8.55243 12.5736 8.64625 12.4798L12.2931 8.83353H2.5C2.36739 8.83353 2.24021 8.78085 2.14645 8.68708C2.05268 8.59332 2 8.46614 2 8.33353C2 8.20092 2.05268 8.07374 2.14645 7.97998C2.24021 7.88621 2.36739 7.83353 2.5 7.83353H12.2931L8.64625 4.18728C8.55243 4.09346 8.49972 3.96621 8.49972 3.83353C8.49972 3.70085 8.55243 3.5736 8.64625 3.47978C8.74007 3.38596 8.86732 3.33325 9 3.33325C9.13268 3.33325 9.25993 3.38596 9.35375 3.47978L13.8538 7.97978C13.9002 8.02622 13.9371 8.08136 13.9623 8.14206C13.9874 8.20276 14.0004 8.26782 14.0004 8.33353C14.0004 8.39924 13.9874 8.4643 13.9623 8.525C13.9371 8.5857 13.9002 8.64084 13.8538 8.68728Z"
                                    fill={
                                        theme === 'dark' ? '#e3f6f2' : "#06AF7F"
                                    } />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SlideElement