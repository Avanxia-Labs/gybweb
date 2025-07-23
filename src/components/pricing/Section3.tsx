import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import { CaretRightIcon, CaretLeftIcon } from '@/libs/Icons'
import SlideElement from '../ui/SlideElement'
import { useSwipeable } from 'react-swipeable'
import { useState } from 'react'


function Section3() {

    const router = useRouter()

    const { theme } = useTheme();

    /**
     *  Estado para saber qué slide está activo
     */
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideData = [
        {
            imageUrl: '/assets/svgs/pricing-slide-1.svg',
            title: 'Legal Offices',
            subtitle: "The importance of your Trust Account",
            path: '/payments'
        },
        {
            imageUrl: '/assets/svgs/pricing-slide-2.svg',
            title: 'Jewelry',
            subtitle: "Secure and profitable payments",
            path: '/payments'
        },
        {
            imageUrl: '/assets/svgs/pricing-slide-3.svg',
            title: 'Health Care',
            subtitle: "Focus on your patients",
            path: '/payments'
        },
        {
            imageUrl: '/assets/svgs/pricing-slide-4.svg',
            title: 'Retail',
            subtitle: 'Every second and every penny',
            path: '/invoicing'
        }
    ];

    const totalSlides = slideData.length;

    /**
     * Funciones para manejar la navegacion
     * @function handlePrev
     * @function handleNext
     */
    const handlePrev = () => {
        // Si estamos en el primer slide (índice 0), vamos al último. Si no, retrocedemos uno
        setCurrentIndex((prevIndex) => (
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        ))
    }
    const handleNext = () => {
        // Si estamos en el último slide, vamos al primero (índice 0). Si no, avanzamos uno.
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    /**
     * Configuración para el deslizamiento táctil (y con ratón).
     */
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),       // Deslizar a la izquierda va al siguiente slide
        onSwipedRight: () => handlePrev(),      // Deslizar a la derecha va al slide anterior
        //preventDefaultTouchmoveEvent: true,     // Evita que la página se desplace verticalmente mientras se desliza horizontalmente
        trackMouse: true                        // Permite arrastrar con el ratón en dispositivos de escritorio
    });

    //bg-[url('/assets/images/backgrounds/bg-home-section4.png')]

    // Configuración de imágenes de background
    const bgTheme = `bg-[url('/assets/images/backgrounds/bg-pricing-section3-mobile.png')] md:bg-[url('/assets/images/backgrounds/bg-pricing-section3-tablet.png')] xl:bg-[url('/assets/images/backgrounds/bg-pricing-section3-desktop.png')]`

    return (
        <div className={`border relative rounded-b-[3rem]
            ${bgTheme} bg-center bg-cover bg-no-repeat 
            flex flex-col justify-center items-center self-stretch gap-[4rem] px-[1.75rem] py-[5rem] 
            md:gap-[6rem]  md:px-[2.5rem] md:py-[7.5rem]
            xl:gap-[6rem] xl:min-h-screen xl:py-[9.5rem]
            overflow-hidden`}
        >
            {/* Elemento 1 */}
            <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                    Step into the future of business
                </p>

                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                    } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                    GYB can grow your business friction-free, enhancing customer retention with cutting-edge and tailored technologies across Industries.
                </p>

            </div>

            {/* Slide */}
            <div className={`w-full max-w-[1440px] p-3 flex flex-col items-center gap-[1.5rem]`}>

                {/* Contenedor del Slide */}
                <div {...handlers}
                    className={`overflow-hidden flex flex-row w-full items-center self-stretch gap-[1.5rem] md:gap-[2rem]`}
                >
                    {
                        slideData.map((slide, index) => (
                            <div
                                key={index}
                                className='transition-transform duration-500 ease-in-out'
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                <SlideElement
                                    imageUrl={slide.imageUrl}
                                    title={slide.title}
                                    subtitle={slide.subtitle}
                                    onLearnMore={() => router.push(slide.path)} />
                            </div>
                        ))
                    }
                </div>

                {/* Buttons de navegacion */}
                <div className='flex px-[0.5rem] items-center gap-[1rem] self-stretch xl:gap-[1.5rem] xl:max-w-[62.5rem]'>

                    <button
                        onClick={handlePrev}
                        className={`flex p-[0.5rem] justify-center items-center border rounded-lg ${theme === 'dark'
                            ? 'border-white/15 bg-white/20'
                            : 'border-black/10 bg-white/50'
                            }`}>
                        <CaretLeftIcon className={`${theme === 'dark' ? textColors.gybGreenDarkMode : textColors.gybGreen
                            }`} />
                    </button>

                    <button
                        onClick={handleNext}
                        className={`flex p-[0.5rem] justify-center items-center border rounded-lg ${theme === 'dark'
                            ? 'border-white/15 bg-white/20'
                            : 'border-black/10 bg-white/50'
                            }`}>
                        <CaretRightIcon className={`${theme === 'dark' ? textColors.gybGreenDarkMode : textColors.gybGreen
                            }`} />
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Section3