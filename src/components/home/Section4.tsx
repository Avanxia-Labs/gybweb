import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import { CaretRightIcon, CaretLeftIcon } from '@/libs/Icons'
import SlideElement from '../ui/SlideElement'
import { useSwipeable } from 'react-swipeable'
import { useState } from 'react'


function Section4() {

    const router = useRouter()

    const { theme } = useTheme();

    /**
     *  Estado para saber qué slide está activo
     */
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideData = [
        {
            imageUrl: '/assets/images/terminal1.png',
            title: 'Virtual Terminal',
            subtitle: "Instantly take payments by phone or send secure payment links via email and SMS. It is the ultimate tool for remote payments, designed for speed and convenience.",
            path: '/payments'
        },
        {
            imageUrl: '/assets/images/paymentplan1.png',
            title: 'Payment Plans',
            subtitle: "Secure high-value projects by dividing the total cost into automatic installments. Remove the price barrier and make it easier for your customers.",
            path: '/payments'
        },
        {
            imageUrl: '/assets/images/subscription1.png',
            title: 'Subscriptions',
            subtitle: "Build a stable and predictable cash flow with automatic recurring payments. Ideal for memberships, retainers, or any ongoing service you offer.",
            path: '/payments'
        },
        {
            imageUrl: '/assets/images/dispute1.png',
            title: 'Advanced Dispute Module',
            subtitle: 'Anticipate and respond to chargebacks with an arsenal of tools. Protect your revenue and win disputes with a system designed to give you complete control.',
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


    return (
        <div className={`relative 
            bg-[url('/assets/images/backgrounds/bg-home-section4.png')] bg-center bg-cover bg-no-repeat 
            flex flex-col justify-center items-center self-stretch gap-[4rem] px-[1.75rem] py-[5rem] 
            md:gap-[6rem]  md:px-[2.5rem] md:py-[7.5rem]
            xl:gap-[6rem] xl:min-h-screen xl:py-[9.5rem]
            overflow-hidden`}
        >
            {/* Elemento 1 */}
            <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                    More than a payment processor, your growth ecosystem
                </p>

                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                    } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                    We centralize all the tools you need to manage and scale your service business, all perfectly integrated.
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

            {/* Elemento 3 */}
            <div className={` w-full max-w-[1440px] flex flex-col items-center gap-[1.75rem] md:gap-[2.5rem]`}>

                <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size49} max-w-[1000px] leading-[120%] font-semibold font-ibm text-center`}>
                    Join the future of payments for services
                </p>

                <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                    } ${fontSizes.size18} max-w-[750px] leading-[120%] font-normal font-inter text-center`}>
                    Hundreds of businesses like yours have already chosen a smarter, fairer way to manage their finances. We invite you to discover how our unified platform and transparent rates can fuel your growth and give you the peace of mind you deserve.
                </p>

                <div className={`flex flex-row items-center gap-[1rem]`}>
                    <button className={`${buttons.v2Desktop} ${fontSizes.size16} ${textColors.gybDarkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                        Get a Demo
                    </button>
                    <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                        Chat with Us
                    </button>
                </div>

            </div>

            <div id='Imagen' className={`w-full max-w-[1440]`}>
                <Image
                    className=''
                    src={'/assets/svgs/screens_crop1.svg'}
                    alt={'HomeSection4'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />

                {/* <Image
                    className='absolute left-[0.55rem] top-[10.94rem]'
                    src={'/assets/svgs/calendarup.svg'}
                    alt={'CalendarUp'}
                    width={183.9}
                    height={149}
                />

                <Image
                    className='absolute left-[58.05rem] top-[20.37rem]'
                    src={'/assets/svgs/paymentinvoice.svg'}
                    alt={'paymentinvoice'}
                    width={183.9}
                    height={149}
                /> */}


            </div>



        </div>
    )
}

export default Section4