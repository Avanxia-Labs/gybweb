// HOME
'use client'
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Image from 'next/image';

export default function Home() {

  return (
    <div className=''>
      <Section1 />
      <Section2 />
    </div>
  );
}