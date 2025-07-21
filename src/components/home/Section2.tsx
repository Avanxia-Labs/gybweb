import React from 'react'
import { textColors, badges, fontSizes, buttons, backgroundColors } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'

function Section2() {

    const {theme} = useTheme();
    

    return (
        <div className={` h-screen w-full px-[2.5rem] py-[7.5rem] flex justify-center overflow-hidden`}>

            <div id='container' className=' w-full max-w-[58rem] flex flex-col items-center gap-[2.5rem]'>

                <div id='Frame1299' className='flex flex-col gap-[1rem] items-center'>
                    <p className={`italic font-normal leading-[120%] font-ibm ${
                        theme === 'dark' ? textColors.gray50_dark : textColors.gray50
                    } ${fontSizes.size25}`}>The 4 Pillars of GYB</p>
                    <p className={`font-bold text-center leading-[120%] font-ibm ${
                        theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                    } ${fontSizes.size49}`}>Your business deserves more than just a payment processor... </p>
                </div>

                <div id='Frame1300' className='flex flex-row gap-[1rem]'>
                    <div className={`${badges.v1Desktop}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.4466 12.4688L19.4466 4.96875C19.3805 4.80355 19.2579 4.66721 19.1006 4.58409C18.9433 4.50097 18.7615 4.47648 18.5878 4.515L12.75 5.8125V3.75C12.75 3.55109 12.671 3.36032 12.5303 3.21967C12.3897 3.07902 12.1989 3 12 3C11.8011 3 11.6103 3.07902 11.4697 3.21967C11.329 3.36032 11.25 3.55109 11.25 3.75V6.14813L5.08689 7.51781C4.96806 7.54406 4.85741 7.59883 4.76447 7.67739C4.67153 7.75595 4.59911 7.85595 4.55345 7.96875V7.97437L1.55345 15.4688C1.51756 15.5581 1.49941 15.6537 1.50001 15.75C1.50001 17.9353 3.80064 18.75 5.25001 18.75C6.69939 18.75 9.00001 17.9353 9.00001 15.75C9.00062 15.6537 8.98247 15.5581 8.94658 15.4688L6.27376 8.79094L11.25 7.6875V19.5H9.75001C9.5511 19.5 9.36034 19.579 9.21968 19.7197C9.07903 19.8603 9.00001 20.0511 9.00001 20.25C9.00001 20.4489 9.07903 20.6397 9.21968 20.7803C9.36034 20.921 9.5511 21 9.75001 21H14.25C14.4489 21 14.6397 20.921 14.7803 20.7803C14.921 20.6397 15 20.4489 15 20.25C15 20.0511 14.921 19.8603 14.7803 19.7197C14.6397 19.579 14.4489 19.5 14.25 19.5H12.75V7.35187L17.5313 6.29062L15.0535 12.4688C15.0176 12.5581 14.9994 12.6537 15 12.75C15 14.9353 17.3006 15.75 18.75 15.75C20.1994 15.75 22.5 14.9353 22.5 12.75C22.5006 12.6537 22.4825 12.5581 22.4466 12.4688ZM5.25001 17.25C4.54408 17.25 3.11626 16.9116 3.00658 15.8775L5.25001 10.2694L7.49345 15.8775C7.38376 16.9116 5.95595 17.25 5.25001 17.25ZM18.75 14.25C18.0441 14.25 16.6163 13.9116 16.5066 12.8775L18.75 7.26937L20.9935 12.8775C20.8838 13.9116 19.456 14.25 18.75 14.25Z" fill="#0F1413" />
                        </svg>
                        <p className={`${fontSizes.size16} ${
                            theme === 'dark' ? textColors.black90 : textColors.black90
                        } font-inter text-base font-bold leading-[120%]`}>
                            Fair Pricing
                        </p>
                    </div>

                    <div className={`${badges.v2Desktop}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.3637 9C18.3703 8.87719 18.375 8.75344 18.375 8.625C18.375 6.93425 17.7033 5.31274 16.5078 4.11719C15.3123 2.92165 13.6907 2.25 12 2.25C10.3092 2.25 8.68773 2.92165 7.49218 4.11719C6.29664 5.31274 5.62499 6.93425 5.62499 8.625C5.62499 8.74969 5.62499 8.87344 5.63624 9C4.86694 9.39368 4.18572 9.93966 3.63396 10.6048C3.08221 11.2699 2.67143 12.0402 2.4266 12.869C2.18177 13.6977 2.108 14.5676 2.20976 15.4258C2.31153 16.2839 2.5867 17.1125 3.01857 17.861C3.45045 18.6095 4.02999 19.2624 4.722 19.78C5.41401 20.2976 6.20403 20.6691 7.04406 20.872C7.88409 21.0748 8.7566 21.1047 9.60855 20.9599C10.4605 20.8152 11.2741 20.4987 12 20.0297C12.7258 20.4987 13.5395 20.8152 14.3914 20.9599C15.2434 21.1047 16.1159 21.0748 16.9559 20.872C17.7959 20.6691 18.586 20.2976 19.278 19.78C19.97 19.2624 20.5495 18.6095 20.9814 17.861C21.4133 17.1125 21.6885 16.2839 21.7902 15.4258C21.892 14.5676 21.8182 13.6977 21.5734 12.869C21.3285 12.0402 20.9178 11.2699 20.366 10.6048C19.8143 9.93966 19.133 9.39368 18.3637 9ZM12 18.1378C11.0896 17.268 10.5519 16.079 10.5 14.8209C11.4826 15.0597 12.508 15.0597 13.4906 14.8209C13.4412 16.0777 12.907 17.2665 12 18.1378ZM12 13.5C11.5537 13.4999 11.1095 13.4383 10.68 13.3172C10.9151 12.4775 11.3709 11.7161 12 11.1122C12.6291 11.7161 13.0849 12.4775 13.32 13.3172C12.8904 13.4383 12.4463 13.4999 12 13.5ZM9.3028 12.6834C8.3304 12.036 7.62176 11.062 7.30499 9.9375C8.45347 9.61341 9.68102 9.72285 10.7541 10.245C10.0937 10.9388 9.59771 11.7721 9.3028 12.6834ZM13.2459 10.2403C14.3195 9.71973 15.5471 9.61196 16.695 9.9375C16.3792 11.0637 15.6705 12.0395 14.6972 12.6881C14.4035 11.7735 13.9075 10.9368 13.2459 10.2403ZM12 3.75C13.2593 3.75038 14.4697 4.23747 15.3782 5.10947C16.2867 5.98146 16.823 7.17087 16.875 8.42906C16.0508 8.22859 15.1947 8.19531 14.3574 8.33122C13.5201 8.46712 12.7185 8.76943 12 9.22031C11.2821 8.77006 10.4813 8.46808 9.64485 8.33219C8.80839 8.1963 7.9532 8.22924 7.12968 8.42906C7.18165 7.17167 7.7173 5.98296 8.62481 5.11109C9.53232 4.23922 10.7415 3.75159 12 3.75ZM3.74999 14.625C3.75039 13.8214 3.94943 13.0304 4.32938 12.3224C4.70934 11.6143 5.25843 11.0112 5.9278 10.5666C6.43919 12.1477 7.54474 13.4684 9.01124 14.25C9.00468 14.3728 8.99999 14.4966 8.99999 14.625C8.9993 16.2577 9.62747 17.8279 10.7541 19.0097C10.0109 19.3705 9.18829 19.5365 8.3634 19.4922C7.5385 19.4478 6.73841 19.1946 6.03821 18.7563C5.33802 18.3179 4.76069 17.7089 4.36044 16.9862C3.96019 16.2636 3.75013 15.4511 3.74999 14.625ZM15.375 19.5C14.6372 19.5009 13.909 19.3332 13.2459 19.0097C14.3725 17.8279 15.0007 16.2577 15 14.625C15 14.5003 14.9953 14.3766 14.9887 14.25C16.456 13.4675 17.5616 12.1454 18.0722 10.5628C18.9449 11.1419 19.608 11.9866 19.9631 12.9719C20.3183 13.9573 20.3467 15.0308 20.044 16.0335C19.7414 17.0362 19.1239 17.9148 18.283 18.5392C17.442 19.1635 16.4224 19.5004 15.375 19.5Z" fill="#0F1413" />
                        </svg>
                        <p className={`${fontSizes.size16} ${
                            theme === 'dark' ? textColors.black90 : textColors.black90
                        } font-inter text-base font-bold leading-[120%]`}>
                            All-In-One
                        </p>
                    </div>

                    <div className={`${badges.v3Desktop}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.25 12.75V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75ZM12 17.25C12.2225 17.25 12.44 17.184 12.625 17.0604C12.81 16.9368 12.9542 16.7611 13.0394 16.5555C13.1245 16.35 13.1468 16.1238 13.1034 15.9055C13.06 15.6873 12.9528 15.4868 12.7955 15.3295C12.6382 15.1722 12.4377 15.065 12.2195 15.0216C12.0012 14.9782 11.775 15.0005 11.5695 15.0856C11.3639 15.1708 11.1882 15.315 11.0646 15.5C10.941 15.685 10.875 15.9025 10.875 16.125C10.875 16.4234 10.9935 16.7095 11.2045 16.9205C11.4155 17.1315 11.7016 17.25 12 17.25ZM21 5.25V10.5C21 15.4425 18.6075 18.4378 16.6003 20.0803C14.4384 21.8484 12.2878 22.4494 12.1941 22.4738C12.0652 22.5088 11.9292 22.5088 11.8003 22.4738C11.7066 22.4494 9.55875 21.8484 7.39406 20.0803C5.3925 18.4378 3 15.4425 3 10.5V5.25C3 4.85218 3.15804 4.47064 3.43934 4.18934C3.72064 3.90804 4.10218 3.75 4.5 3.75H19.5C19.8978 3.75 20.2794 3.90804 20.5607 4.18934C20.842 4.47064 21 4.85218 21 5.25ZM19.5 5.25H4.5V10.5C4.5 13.9969 5.79562 16.8291 8.35031 18.9197C9.43805 19.8093 10.6733 20.5013 12 20.9644C13.3443 20.4931 14.595 19.7886 15.6947 18.8831C18.2194 16.7962 19.5 13.9753 19.5 10.5V5.25Z" fill="#0F1413" />
                        </svg>
                        <p className={`${fontSizes.size16} ${
                            theme === 'dark' ? textColors.black90 : textColors.black90
                        } font-inter text-base font-bold leading-[120%]`}>
                            Fraud Management
                        </p>
                    </div>

                    <div className={`${badges.v4Desktop}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 3.75V9.75C18.0001 9.84852 17.9807 9.94609 17.9431 10.0371C17.9055 10.1282 17.8503 10.2109 17.7806 10.2806L12.75 15.3103V19.9397L14.4694 18.2194C14.6101 18.0786 14.801 17.9996 15 17.9996C15.199 17.9996 15.3899 18.0786 15.5306 18.2194C15.6714 18.3601 15.7504 18.551 15.7504 18.75C15.7504 18.949 15.6714 19.1399 15.5306 19.2806L12.5306 22.2806C12.461 22.3504 12.3783 22.4057 12.2872 22.4434C12.1962 22.4812 12.0986 22.5006 12 22.5006C11.9014 22.5006 11.8038 22.4812 11.7128 22.4434C11.6217 22.4057 11.539 22.3504 11.4694 22.2806L8.46937 19.2806C8.32864 19.1399 8.24958 18.949 8.24958 18.75C8.24958 18.551 8.32864 18.3601 8.46937 18.2194C8.61011 18.0786 8.80098 17.9996 9 17.9996C9.19902 17.9996 9.3899 18.0786 9.53063 18.2194L11.25 19.9397V15.3103L6.21937 10.2806C6.14975 10.2109 6.09454 10.1282 6.0569 10.0371C6.01926 9.94609 5.99992 9.84852 6 9.75V3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3C6.94891 3 7.13968 3.07902 7.28033 3.21967C7.42098 3.36032 7.5 3.55109 7.5 3.75V9.43969L12 13.9397L16.5 9.43969V3.75C16.5 3.55109 16.579 3.36032 16.7197 3.21967C16.8603 3.07902 17.0511 3 17.25 3C17.4489 3 17.6397 3.07902 17.7803 3.21967C17.921 3.36032 18 3.55109 18 3.75Z" fill="#0F1413" />
                        </svg>
                        <p className={`${fontSizes.size16} ${
                            theme === 'dark' ? textColors.black90 : textColors.black90
                        } font-inter text-base font-bold leading-[120%]`}>
                            Omnichannel
                        </p>
                    </div>
                </div>

                <div id='Graph' className='relative w-[76.45rem] h-[32.18rem]'>
                    <img className={`absolute top-[3.44rem] left-[8.65rem]`} src={`/assets/svgs/Tablet.svg`} />

                    <div id='Frame12' className={`absolute top-[4.12rem] flex w-[20.35463rem] p-10 flex-col items-start gap-6 rounded-[1.5995rem] border border-[rgba(255,255,255,0.70)] bg-[linear-gradient(92deg,rgba(110,149,255,0.25)_0%,rgba(216,218,255,0.25)_100.01%)] backdrop-blur-[10.663349151611328px]`}>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size10} font-normal leading-[120%] tracking-[0.1875rem] uppercase`}>Fair Pricing</p>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size13} font-normal leading-[120%]`}>Ditch the flat-rate fees that punish your success. With our Interchange Plus model, your rate goes down as your business grows.</p>
                    </div>

                    <div id='Frame1301' className={`absolute top-[17.62rem] left-[14.19rem] flex w-[20.35463rem] p-[2.5rem] flex-col items-start gap-[1.5rem] rounded-[1.5995rem] border-[1.066px] border-white/70 bg-gradient-to-r from-[rgba(141,109,255,0.25)] to-[rgba(244,228,255,0.25)] backdrop-blur-[10.663349151611328px]`}>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size10} font-normal leading-[120%] tracking-[0.1875rem] uppercase`}>All-in-one platform</p>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size13} font-normal leading-[120%]`}>Manage payments, customers, subscriptions, and reports. All from a single dashboard, without switching between apps.</p>
                    </div>

                    <div id='Frame1302' className={`absolute top-[2.12rem] right-[10.31rem] flex w-[20.35463rem] p-[2.5rem] flex-col items-start gap-[1.5rem] rounded-[1.5995rem] border-[1.066px] border-white/70 bg-gradient-to-r from-[rgba(255,140,176,0.25)] to-[rgba(253,228,255,0.25)] backdrop-blur-[10.663349151611328px]`}>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size10} font-normal leading-[120%] tracking-[0.1875rem] uppercase`}>fraud management tools</p>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size13} font-normal leading-[120%]`}>Stop reacting to fraud, start anticipating it. Our advanced tools give you the control to stop disputes before they happen.</p>
                    </div>

                    <div id='Frame1303' className={`absolute top-[16.62rem] right-[2.7rem] flex w-[20.35463rem] p-[2.5rem] flex-col items-start gap-[1.5rem] rounded-[1.5995rem] border-[1.066px] border-white/70 bg-gradient-to-r from-[rgba(255,101,99,0.25)] to-[rgba(249,239,226,0.25)] backdrop-blur-[10.663349151611328px]`}>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size10} font-normal leading-[120%] tracking-[0.1875rem] uppercase`}>Omnichannel platform</p>
                        <p className={`${
                            theme === 'dark' ? textColors.gybDarkGreen_dark : textColors.gybDarkGreen
                        } font-inter ${fontSizes.size13} font-normal leading-[120%]`}>Accept payments in your store, on your website, or by phone, and manage everything from a single smart platform.</p>
                    </div>

                    <img className={`absolute top-[0.6rem] left-[11.88rem]`} src={`/assets/svgs/price1.svg`} />

                    <img className={`absolute top-[23.66rem] left-[8.83rem]`} src={`/assets/svgs/allinone1.svg`} />

                    <img className={`absolute top-0 right-[8.23rem]`} src={`/assets/svgs/shield1.svg`} />

                    <img className={`absolute top-[22.19rem] right-0`} src={`/assets/svgs/phone_and_card_1.svg`} />
                </div>

                <button className={`${buttons.cta}`}>
                    <p className={`${textColors.gybGreen} ${fontSizes.size16} font-inter font-bold leading-[120%]`}>
                        Chat with us to learn more
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.3538 8.35378L9.85375 12.8538C9.75993 12.9476 9.63268 13.0003 9.5 13.0003C9.36732 13.0003 9.24007 12.9476 9.14625 12.8538C9.05243 12.76 8.99972 12.6327 8.99972 12.5C8.99972 12.3674 9.05243 12.2401 9.14625 12.1463L12.7931 8.50003H3C2.86739 8.50003 2.74021 8.44736 2.64645 8.35359C2.55268 8.25982 2.5 8.13264 2.5 8.00003C2.5 7.86743 2.55268 7.74025 2.64645 7.64648C2.74021 7.55271 2.86739 7.50003 3 7.50003H12.7931L9.14625 3.85378C9.05243 3.75996 8.99972 3.63272 8.99972 3.50003C8.99972 3.36735 9.05243 3.2401 9.14625 3.14628C9.24007 3.05246 9.36732 2.99976 9.5 2.99976C9.63268 2.99976 9.75993 3.05246 9.85375 3.14628L14.3538 7.64628C14.4002 7.69272 14.4371 7.74786 14.4623 7.80856C14.4874 7.86926 14.5004 7.93433 14.5004 8.00003C14.5004 8.06574 14.4874 8.1308 14.4623 8.1915C14.4371 8.2522 14.4002 8.30735 14.3538 8.35378Z" fill="#06AF7F" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Section2