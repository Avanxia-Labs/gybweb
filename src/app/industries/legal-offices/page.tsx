// /app/industries/legal-offices/page.tsx
"use client"
import React from 'react'
import Section1 from '@/components/industries/Section1'
import Section2 from '@/components/industries/Section2';
import Section3 from '@/components/industries/Section3';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/providers/ThemeProvider';
import { backgroundColors } from '@/styles/constants';

function Industries() {

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

export default Industries 