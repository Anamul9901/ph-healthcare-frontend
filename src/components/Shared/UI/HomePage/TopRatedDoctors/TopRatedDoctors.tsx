import { Button, Container } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const TopRatedDoctors = async () => {
    const res = await fetch("http://localhost:5001/api/v1/doctor?page=1&limit=3");
    const { data: doctors } = await res.json();
    console.log(doctors);
    return (
        <div className="bg-[rgba(20,20,20,0.1)] flex flex-col justify-center items-center [clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)]">
            <Container>
                <div className="flex flex-col justify-center items-center py-64">
                    <div className="text-center max-w-xl">
                        <h1 className="text-2xl font-semibold">Our Top Rated Doctors</h1>
                        <p className="text-slate-500">
                            Access to expert physicians and surgeons, advanced technologies,
                        </p>
                        <p className="text-slate-500">
                            and top-quality surgery facilities right here.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-6">
                        {
                            doctors?.map((doctor: any) => (
                                <div className="bg-neutral-100 w-[350px] rounded-md">
                                    <div>
                                        <Image className="rounded-t-md" src={doctor?.profilePhoto} height={350} width={350} alt={doctor?.name}></Image>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h1 className="text-xl">{doctor?.name}</h1>
                                        <h1 className="text-sm">{doctor?.qualification}, {doctor?.designation}</h1>
                                        <h1 className="text-sm"><LocationOnIcon />{" "}{doctor?.address}</h1>
                                        <div className="flex justify-between">
                                            <Button>Book now</Button>
                                            <Button variant="outlined">View profile</Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="pt-4">

                        <Button variant="outlined">View All</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopRatedDoctors;
