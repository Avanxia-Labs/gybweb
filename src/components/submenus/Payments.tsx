"use client"
import React from 'react'
import { submenus } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import NavbarItem from '../ui/NavbarItem'
import { 
    CoinVerticalIcon, 
    CardholderIcon, 
    BrowserIcon, 
    PresentationChartIcon, 
    MapPinAreaIcon, 
    CurrencyDollarIcon,
    ChatCenteredTextIcon,
    EnvelopeSimpleOpenIcon,
    TagIcon,
    CashRegisterIcon,
    MoneyIcon,
    CreditCardIcon,
    BinocularsIcon
} from '@/libs/Icons'


function Payments() {

    const { theme } = useTheme();

    const bgTheme = theme === 'dark' ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(255,255,255,0.5)]'

    return (
        <div id='submenu/payments' className={`${bgTheme} flex p-[2.5rem]  justify-center items-start gap-[0.5rem] self-stretch backdrop-blur-[50px] max-w-[98.5vw]`}>

            <div id='submenu/group' className='grid grid-cols-5 gap-[2rem]'>

                {/* Elemento 1 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Plans</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={CoinVerticalIcon}
                            title={'Payment Plans'}
                            subtitle={'Secure big projects'}
                        />

                        <NavbarItem
                            icon={CardholderIcon}
                            title={'Subscriptions'}
                            subtitle={'Month-to-month revenue'}
                        />
                    </div>
                </div>

                {/* Elemento 2 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Elements</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={BrowserIcon}
                            title={'Virtual Terminal'}
                            subtitle={'Fair Pricing, real savings'}
                        />

                        <NavbarItem
                            icon={PresentationChartIcon}
                            title={'Customizable Reports'}
                            subtitle={'Transparency and fairness'}
                        />

                        <NavbarItem
                            icon={MapPinAreaIcon}
                            title={'Advanced System Tracker'}
                            subtitle={'Intelligence monitoring'}
                        />

                        <NavbarItem
                            icon={CurrencyDollarIcon}
                            title={'IVR Payments'}
                            subtitle={'Advance-level technology'}
                        />
                    </div>
                </div>

                {/* Elemento 3 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Payment Pages</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={ChatCenteredTextIcon}
                            title={'SMS'}
                            subtitle={'Direct shortcut to get paid'}
                        />

                        <NavbarItem
                            icon={EnvelopeSimpleOpenIcon}
                            title={'Email'}
                            subtitle={'Invoices with a Pay button'}
                        />
                    </div>
                </div>

                {/* Elemento 4 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Point-of-sale</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={TagIcon}
                            title={'Point-of-Sale'}
                            subtitle={'Fair Pricing, real savings'}
                        />

                        <NavbarItem
                            icon={CashRegisterIcon}
                            title={'Payment Hardware'}
                            subtitle={'Transparency and fairness'}
                        />
                    </div>
                </div>

                {/* Elemento 5 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Payment Methods</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={MoneyIcon}
                            title={'Cash Management'}
                            subtitle={'Fair Pricing, real savings'}
                        />

                        <NavbarItem
                            icon={CreditCardIcon}
                            title={'Debit and Credit Card'}
                            subtitle={'Transparency and fairness'}
                        />

                        <NavbarItem
                            icon={BinocularsIcon}
                            title={'ACH Payments'}
                            subtitle={'Transparency and fairness'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payments