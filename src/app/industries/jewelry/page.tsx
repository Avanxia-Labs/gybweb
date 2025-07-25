// /app/industries/jewelry/page.tsx
"use client"
import React from 'react'
import Section1 from '@/components/industries/jewelry/Section1'
import Section2 from '@/components/industries/jewelry/Section2';
import Section3 from '@/components/industries/jewelry/Section3';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/providers/ThemeProvider';
import { backgroundColors } from '@/styles/constants';

function Industries_Jewelry() {

  const { theme } = useTheme();
  const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.white}`

  return (
    <div className={`${themeStylesBG} w-full`}>
      <div className=''><Section1 /></div>
      <div className=''><Section2 /></div>
      <div className=''><Section3 /></div>
      <div className=''><Footer/></div>
    </div>
  )
}

export default Industries_Jewelry 