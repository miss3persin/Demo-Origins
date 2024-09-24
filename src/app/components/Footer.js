import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='pt-20 pb-10 w-full flex flex-col items-center justify-center gap-8'>
        <p className='text-gray-900 text-sm lg:text-base dark:text-[#ACA992]'>Novel and Website Created by miss3persin</p>
        <div className='flex gap-8 items-center justify-center'>
            <div><Link href='https://t.me/miss3persin' target='_blank'><Image src='/telegram.png' alt='telegram' width={30} height={30}/></Link></div>
            <div><Link href='https://www.instagram.com/this_is_segun/' target='_blank'><Image src='/instagram.png' alt='instagram' width={30} height={30}/></Link></div>
            <div><Link href='https://x.com/miss3persin' target='_blank'><Image src='/X.png' alt='X' width={30} height={30}/></Link></div>
        </div>
    </div>
  )
}
