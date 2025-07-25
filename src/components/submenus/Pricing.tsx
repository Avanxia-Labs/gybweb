"use client"
import React from 'react'
import { backgroundColors, submenus } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import NavbarItem from '../ui/NavbarItem'
import { CoinsIcon, HandCoinsIcon } from '@/libs/Icons'
import Link from 'next/link'


function Pricing() {

    const { theme } = useTheme();

    const bgTheme = theme === 'dark' ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(255,255,255,0.5)]'

    return (
        <div id='submenu/pricing' className={`${bgTheme} flex p-[2.5rem] justify-center items-start gap-[0.5rem] self-stretch backdrop-blur-[50px] max-w-[98.5vw] `}>

            <div id='submenu/group' className='flex max-w-[34rem] items-start grow shrink-0 basis-0'>
                <div id='column' className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Pricing Models</p>
                    <div id='Frame6' className='flex items-start gap-[2.5rem]'>

                        <Link href={"/pricing"}>
                            <NavbarItem
                                icon={CoinsIcon}
                                title={'Interchange Plus'}
                                subtitle={'Fair Pricing, real savings'}
                            />
                        </Link>


                        <Link href={"/pricing"}>
                            <NavbarItem
                                icon={HandCoinsIcon}
                                title={'Pass-through Cost'}
                                subtitle={'Transparency and fairness'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing