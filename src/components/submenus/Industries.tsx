"use client"
import React from 'react'
import { submenus } from '@/styles/constants'
import { useTheme } from '@/providers/ThemeProvider'
import NavbarItem from '../ui/NavbarItem'
import {
    GavelIcon,
    SketchLogoIcon,
    HeartbeatIcon,
    StorefrontIcon
} from '@/libs/Icons'


function Industries() {

    const { theme } = useTheme();

    const bgTheme = theme === 'dark' ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(255,255,255,0.5)]'

    return (
        <div id='submenu/payments' className={`${bgTheme} flex p-[2.5rem]  justify-center items-start gap-[0.5rem] self-stretch backdrop-blur-[50px] max-w-[98.5vw]`}>
            
            <div id='submenu/group' className='grid grid-cols-4 gap-[2rem]'>
                
                {/* Elemento 1 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label}`}>Industries</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={GavelIcon}
                            title={'Legal Offices'}
                            subtitle={'The importance of your Trust Account'}
                        />
                    </div>
                </div>

                {/* Elemento 2 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label} opacity-0`}>.</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={SketchLogoIcon}
                            title={'Jewelry'}
                            subtitle={'Secure and profitable payments'}
                        />
                    </div>
                </div>

                {/* Elemento 3 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label} opacity-0`}>.</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={HeartbeatIcon}
                            title={'Health Care'}
                            subtitle={'Focus on your patients'}
                        />
                    </div>
                </div>

                {/* Elemento 4 */}
                <div className='flex flex-col items-start gap-[1.5rem] grow shrink-0 basis-0'>
                    <p className={`${submenus.label} opacity-0`}>.</p>
                    <div id='Frame6' className='flex flex-col items-start gap-[2.5rem]'>
                        <NavbarItem
                            icon={StorefrontIcon}
                            title={'Retail'}
                            subtitle={'Every second and every penny'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries