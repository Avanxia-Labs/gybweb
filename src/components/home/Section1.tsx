import React from 'react'
import { textColors, fontSizes, buttons, backgroundColors, posicionamientos, layout, elementosHomeHero, badges } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import Image from 'next/image';
import Navbar from '../layout/Navbar';

function Section1() {

    const { theme } = useTheme();

    const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.gybGreen10}`

    return (
        // Hero
        <div className={`${themeStylesBG} ${layout.homeHero} relative rounded-b-[3rem] h-[86rem] md:h-[82rem] xl:h-screen overflow-hidden`}>
            
            <div className=' w-full absolute top-0'>
                <Navbar/>
            </div>
            

            {/* Content */}
            <div id='content' className='relative  flex xl:max-w-[85rem] items-center  self-stretch'>

                {/* Text */}
                <div id='Text' className='flex flex-col items-start flex-1 gap-[1.75rem] md:gap-[2.5rem] xl:max-w-[46rem] xl:flex-shrink-0'>

                    <div id='frame11' className='flex flex-col items-start self-stretch gap-[1rem] md:gap-[1.5rem]'>
                        <div id='frame9' className='flex flex-col items-start self-stretch gap-[0.75rem] md:gap-[1rem]'>
                            <p className={`${theme === 'dark' ? textColors.gybGreen : textColors.gybGreen
                                } ${fontSizes.size25} font-ibm font-bold leading-[120%]`}>GYB, the payment platform</p>
                            <p className={`${theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                                } ${fontSizes.size61} font-ibm font-bold leading-[120%]`}>We Designed Our System To Fuel Your Growth</p>
                        </div>
                        <p className={`${theme === 'dark' ? textColors.gray30_dark : textColors.gray30
                            } ${fontSizes.size18} font-inter font-normal leading-[120%] self-stretch`}>With our fair rates, all-in-one tools, and fast deposits, we give you complete control of your finances. Stop giving away your profits and start investing in your success.</p>
                    </div>

                    <div id='frame10' className='flex items-start gap-[1rem]'>
                        <button className={`${buttons.v2Desktop} ${fontSizes.size16} ${textColors.gybDarkGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Lets Start
                        </button>
                        <button className={`${fontSizes.size16} ${buttons.v1Desktop} ${textColors.gybGreen} font-inter font-bold leading-[120%] hover:opacity-80 transition-opacity`}>
                            Get a Demo
                        </button>
                    </div>
                </div>

                {/* Right Side with Blur */}
                <div className={`absolute ${posicionamientos.blurHomev2} w-[43.625rem] h-[39.93rem] `}>

                    {/* BLUR */}
                    {/* Lo envuelvo en otro div relativo para poder poner 
                    las elipses absolutas en forma de triangulo */}
                    <div className='w-full h-full relative'>

                        <div id='elipse1' className={`absolute left-0 bottom-[7rem]  w-[26.625rem] h-[26.625rem] flex-shrink-0 rounded-full blur-[250px] ${backgroundColors.gybGreen}`}></div>

                        <div id='elipse2' className={`absolute right-0 bottom-0 w-[26.625rem] h-[26.625rem] flex-shrink-0 rounded-full blur-[250px] ${backgroundColors.legacy210}`}></div>

                        <div id='elipse3' className={`absolute right-[3rem] top-0 w-[26.625rem] h-[26.625rem] flex-shrink-0 rounded-full blur-[250px] ${backgroundColors.legacy23}`}></div>


                    </div>


                </div>

                {/* Graph stuffs -- border border-[#FF44EC] -- */}
                <div className={`absolute  ${posicionamientos.graphHome}`}>

                    {/* Graph */}
                    {/* Lo envuelvo en otro div relativo para poder poner 
                    los elementos internos absolutos con respecto al Graph*/}
                    <div className='w-full h-full relative'>

                        <div id='frame14' className={`absolute right-0 top-[14.9rem] md:top-[3.53rem] flex w-[13.12925rem] h-[20.79356rem] flex-col justify-center items-center shrink-0 py-[0.4665rem] pl-[0.34556rem] pr-[0.27894rem] ${elementosHomeHero.bgFrames}`}>
                            <Image
                                src="/assets/images/newPaymentPlans.png"
                                alt="New Payment Plans"
                                width={200.08}
                                height={317.77}
                                className={`shrink-0`}
                                quality={100}
                                priority
                            />
                        </div>

                        <div id='frame13' className={`absolute right-[7.03rem] bottom-[5.93rem] md:right-[6.53rem] md:bottom-[4.93rem] flex flex-col justify-center items-center shrink-0 w-[18.261rem] h-[20.79356rem] py-[1.06631rem] pl-[0.63006rem] pr-[0.69669rem] ${elementosHomeHero.bgFrames}`}>
                            <Image
                                src="/assets/images/SelectPaymentMethod.png"
                                alt="SelectPaymentMethod"
                                width={270.94}
                                height={298.57}
                                className={`shrink-0`}
                                quality={100}
                                priority
                            />
                        </div>

                        <div id='frame12' className={`absolute top-0.9 left-0 md:top-0 md:left-[3.67rem] flex justify-center items-center shrink-0 w-[21.06013rem] h-[16.06169rem] px-[1.38806rem] pt-[1.19963rem] pb-[1.26625rem] ${elementosHomeHero.bgFrames}`}>
                            <Image
                                src="/assets/images/RevenueAndTransactions.png"
                                alt="Revenue And Transactions"
                                width={292.54}
                                height={217.53}
                                className={`shrink-0`}
                                quality={100}
                                priority
                            />
                        </div>

                        <Image
                            id='AvatarWoman'
                            src="/assets/images/AvatarWoman.png"
                            alt="AvatarWoman"
                            width={92}
                            height={92}
                            className={`absolute top-[10.7rem] left-[18.8rem] md:top-[13.3rem] md:left-[12.3rem] shrink-0`}
                            quality={100}
                            priority
                        />

                        <Image
                            id='AvatarMan'
                            src="/assets/images/AvatarMan.png"
                            alt="AvatarMan"
                            width={92}
                            height={92}
                            className={`absolute top-[22.9rem] left-[2.46rem] md:top-[24.5rem] md:left-[6.4rem] shrink-0`}
                            quality={100}
                            priority
                        />

                        <div id='Frame15' className={`absolute left-[0.44rem] bottom-[29.2rem] md:left-0 md:bottom-[15.7rem] inline-flex justify-center items-center py-[0.48088rem] pl-[0.85138rem] pr-[0.68619rem] ${badges.homeHeroFrame15}`}>
                            <div id='Frame1297' className='flex items-center gap-[0.38rem]'>
                                <p className={`${textColors.gray50} ${fontSizes.size10} font-normal`}>Customers</p>
                                <p className={`${textColors.gray50} ${fontSizes.size10} font-normal`}>/</p>
                                <p className={`${textColors.text2} ${fontSizes.size10} font-normal`}>Emily Johnson</p>
                                <div id='tag' className={`${backgroundColors.gybGreen} ${textColors.white} font-bold px-[0.25rem] py-0.5rem rounded-full text-[0.6875rem]`}>Active</div>
                            </div>
                        </div>

                        <div id='Frame16' className={`absolute left-[1.87rem] bottom-[2.07rem] md:left-[7.93rem] md:bottom-[1.57rem] inline-flex justify-center items-center py-[0.48088rem] pl-[0.85138rem] pr-[0.68619rem] ${badges.homeHeroFrame15}`}>
                            <div id='Title' className='flex items-center gap-[0.87rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.1781 2.53705C6.83675 2.53705 2.49123 6.88257 2.49123 12.2239C2.49123 17.5652 6.83675 21.9107 12.1781 21.9107C17.5194 21.9107 21.8649 17.5652 21.8649 12.2239C21.8649 6.88257 17.5194 2.53705 12.1781 2.53705ZM12.1781 19.9734C7.90521 19.9734 4.4286 16.4968 4.4286 12.2239C4.4286 7.95103 7.90521 4.47442 12.1781 4.47442C16.4509 4.47442 19.9276 7.95103 19.9276 12.2239C19.9276 16.4968 16.4509 19.9734 12.1781 19.9734Z" fill="#1FCD9C" />
                                    <path d="M10.2398 13.7612L8.01276 11.5381L6.64498 12.9098L10.2417 16.4987L16.7377 10.0027L15.368 8.63301L10.2398 13.7612Z" fill="#1FCD9C" />
                                </svg>
                                <p className={`${fontSizes.size13} ${textColors.text2} font-semibold leading-[1.31875rem]`}>Payment Successful</p>
                            </div>
                        </div>

                        <div id='Frame17' className={`absolute right-[0.33rem] bottom-0 md:right-[3.33rem] md:bottom-0 inline-flex justify-center items-center py-[0.48088rem] pl-[0.85138rem] pr-[0.68619rem] ${badges.homeHeroFrame15}`}>
                            <div id='Title' className='flex items-center gap-[0.87rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.1781 2.53705C6.83675 2.53705 2.49123 6.88257 2.49123 12.2239C2.49123 17.5652 6.83675 21.9107 12.1781 21.9107C17.5194 21.9107 21.8649 17.5652 21.8649 12.2239C21.8649 6.88257 17.5194 2.53705 12.1781 2.53705ZM12.1781 19.9734C7.90521 19.9734 4.4286 16.4968 4.4286 12.2239C4.4286 7.95103 7.90521 4.47442 12.1781 4.47442C16.4509 4.47442 19.9276 7.95103 19.9276 12.2239C19.9276 16.4968 16.4509 19.9734 12.1781 19.9734Z" fill="#1FCD9C" />
                                    <path d="M10.2398 13.7612L8.01276 11.5381L6.64498 12.9098L10.2417 16.4987L16.7377 10.0027L15.368 8.63301L10.2398 13.7612Z" fill="#1FCD9C" />
                                </svg>
                                <p className={`${fontSizes.size13} ${textColors.text2} font-semibold leading-[1.31875rem]`}>Response Submited Succesfully</p>
                            </div>
                        </div>

                        <Image
                            src="/assets/svgs/moneyBag.svg"
                            alt="Money Bag"
                            width={59.76}
                            height={73.58}
                            className={`absolute right-[4.5rem] bottom-[8.23rem] md:right-[4.13rem] md:bottom-[7.11rem] shrink-0`}
                            quality={100}
                            priority
                        />

                        <Image
                            src="/assets/svgs/store1.svg"
                            alt="Store"
                            width={78.75}
                            height={76.78}
                            className={`absolute right-[4.12rem] top-0 md:right-[9.74rem] md:top-[0.6rem] shrink-0`}
                            quality={100}
                            priority
                        />

                        <Image
                            src="/assets/svgs/card2.svg"
                            alt="Card 1"
                            width={75.62}
                            height={65.05}
                            className={`absolute left-[3.93rem] top-[15.6rem] md:left-[2.84rem] md:top-[16.7rem] shrink-0`}
                            quality={100}
                            priority
                        />

                    </div>
                </div>





            </div>

            


        </div>


    )
}

export default Section1