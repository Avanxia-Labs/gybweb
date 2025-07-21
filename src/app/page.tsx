// HOME
'use client'
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Image from 'next/image';
import { useTheme } from '@/providers/ThemeProvider';
import { backgroundColors } from '@/styles/constants';

export default function Home() {

  const {theme} = useTheme();
  const themeStylesBG = theme === 'dark' ? `${backgroundColors.black}` : `${backgroundColors.white}`

  return (
    <div className={`${themeStylesBG} w-full`}>
      <div className=''><Section1 /></div>
      <div className=''><Section2 /></div>
      
      
    </div>
  );
}