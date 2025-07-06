import Image from 'next/image'
import React from 'react'
import facebookIcon from "@/assets/landing_page/facebook.png"
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#111A22] text-white p-8 text-center'>
            <div className='max-w-7xl mx-auto items-center'>
                <div className='flex gap-8 justify-center'>
                    <a href="">Health Plans</a>
                    <a href="">Medicine</a>
                    <a href="">Diagonostics</a>
                    <a href="">NGOs</a>
                </div>
                <div className='flex justify-center gap-4 py-8'>
                    <Image width={30} height={30} src={facebookIcon} alt='Facebook'></Image>
                    <Image width={30} height={30} src={facebookIcon} alt='Facebook'></Image>
                    <Image width={30} height={30} src={facebookIcon} alt='Facebook'></Image>
                    <Image width={30} height={30} src={facebookIcon} alt='Facebook'></Image>
                </div>
                <div className='border-b-[1px] border-dashed'></div>
                <div className='py-4 flex justify-between items-center'>
                    <p>&copy;2024 Ph HealthCare. All Rights Reserved.</p>
                    <Typography variant="h4" component={Link} href="/" fontWeight={600}>
                        P<Box component="span" color="primary.main">H</Box> Health Care
                    </Typography>
                    <p>Privacy Policy! Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
