'use client'
import { Button, Container } from "@mui/material"
import assets from "@/assets"
import gridImage from "@/assets/svgs/grid.svg"
import Image from "next/image"

const HeroSection = () => {
    return (
        <Container>
            <div className="flex justify-center min-h-[70vh] items-center">
                <div className="flex-1 w-[600px] bg-contain bg-no-repeat bg-center" style={{
                    backgroundImage: `url(${gridImage})`,
                }}>
                    <div className="text-5xl font-semibold space-y-3">
                        <p>Healthier Hearts</p>
                        <p>Come From</p>
                        <p className="text-[#1586FD]">Preventive Care</p>
                    </div>
                    <p className="text-sm py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic obcaecati expedita repudiandae magnam nulla quas a dignissimos quisquam cupiditate voluptate earum vero numquam, officiis illo aperiam nihil ipsa id.</p>
                    <div className="flex gap-5">
                        <Button>Make Appointment</Button>
                        <Button variant="outlined">Contact Us</Button>
                    </div>
                </div>

                <div className="flex-1 p-1 flex justify-center relative mt-0">
                    <div className="absolute">
                        <Image width={100} height={100} alt="arrow" src={assets.svgs.arrow}></Image>
                    </div>
                    <div className="flex">

                        <div className="pt-8">
                            <Image src={assets.images.doctor1} width={240} height={380} alt="doctor1"></Image>
                        </div>
                        <div className="pl-4">

                            <Image src={assets.images.doctor2} width={240} height={380} alt="doctor2"></Image>
                        </div>
                        <div className="absolute pt-60 pl-24">

                            <Image src={assets.images.doctor3} width={240} height={380} alt="doctor3"></Image>
                        </div>
                        <div className="absolute mb-0 mr-0 pt-80 pl-80 -z-10">
                            <Image src={assets.images.stethoscope} width={170} height={380} alt="stethscope"></Image>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HeroSection
