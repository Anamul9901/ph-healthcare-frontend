import { Button, Container } from "@mui/material"
import Image from "next/image";

const Specialist = async () => {
    const res = await fetch("http://localhost:5001/api/v1/specialties", {
        next: {
            revalidate: 30,
        }
    })
    const specialties = (await res.json())?.data;
    console.log(specialties);;
    return (
        <Container>
            <div className="py-40 space-y-12">
                <div className=" text-start items-center">
                    <h1 className="text-3xl font-medium">Explore Treatments Across Specialties</h1>
                    <h1 className="test-sm text-gray-600">Experienced Doctors Across All Specialties</h1>
                </div>

                <div className="flex justify-center items-center">
                    <div className="flex gap-8 text-center items-center">
                        {
                            specialties?.map((specialties: any) => (
                                <div className="bg-[rgb(245,245,245,1)] p-5 w-[150px] h-[150px] flex flex-col items-center justify-around rounded-md shadow-md hover:border-blue-500 border">
                                    <Image src={specialties?.icon} height={50} width={50} alt={specialties?.title}></Image>
                                    <h1>{specialties?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Button variant="outlined">View All</Button>
                </div>
            </div>
        </Container>
    )
}

export default Specialist
