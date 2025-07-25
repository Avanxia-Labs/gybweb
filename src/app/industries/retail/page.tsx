// /app/industries/reatail/page.tsx
"use client"
import React from 'react'
import Section1 from '@/components/industries/retail/Section1'
import Section2 from '@/components/industries/retail/Section2';
import Section3 from '@/components/industries/retail/Section3';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/providers/ThemeProvider';
import { backgroundColors } from '@/styles/constants';
import Image from 'next/image';

function Industries_Retail() {

    const { theme } = useTheme();
    const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.white}`

    return (
        <div className={`${themeStylesBG} w-full`}>
            <div className=''><Section1 /></div>
            <div className=''><Section2 /></div>
            <div className=''><Section3 /></div>
            <div className=''><Footer /></div>
        </div>
    )
}

export default Industries_Retail 