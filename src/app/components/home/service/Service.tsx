import Frame1 from "@/app/assets/Frame 2147227474.png"
import Image from "next/image";
import ServiceBannerImg from "@/app/assets/Rectangle 161124259.png"
import OwnerBannerImg from "@/app/assets/Rectangle 161124261.png"
import EmployeeBannerImg from "@/app/assets/Rectangle 161124259 (1).png"
import Frame2 from "@/app/assets/Frame 2147227452.png"
import Frame3 from "@/app/assets/Frame 2147227451.png"
import Frame4 from "@/app/assets/Frame 2147227453.png"
import Vector1 from "@/app/assets/Ellipse 21.png"



const Service = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-32 xl:px-0 px-4 relative">
            <Image className="xl:block hidden absolute -right-12 top-32" src={Frame2} alt="Frame 2" width={305} height={800} />
            <Image className="xl:block hidden absolute top-36 left-62" src={Frame3} alt="Frame 2" width={340} height={800} />
            <Image className="xl:block hidden absolute top-36 left-24" src={Frame4} alt="Frame 2" width={221} height={124} />

            <div className="relative text-center">
                <h2 className="lg:text-[48px] md:text-[36px] text-[30px] font-bold relative z-10 text-gray-800">Build for Everyone</h2>
                <Image
                    className="lg:block hidden absolute lg:top-14 top-8 lg:left-1/2 lg:right-0 right-0 z-0 lg:w-[240px] w-[180px]" src={Frame1} alt="Frame 1" width={240} height={12}
                />

                <p className="text-[14px] mt-2 text-gray-600">
                    Whether you&apos;re booking services, managing tasks, or running operations, we&apos;ve <br />
                    designed the perfect experience for you.
                </p>
            </div>
            <div className="my-16 flex lg:flex-row flex-col-reverse justify-between items-center">
                <div className="flex-1">
                    <p className="border rounded-full border-[#3BA334] text-[#3BA334] font-semibold flex text-[14px] justify-center items-center w-[79px] h-[27px]">Users</p>
                    <h2 className="lg:text-[24px] text-[20px] text-gray-800 font-bold my-4 lg:w-3/4">Book services, track progress and stay updated</h2>
                    <p className="lg:text-[18px] text-gray-600 w-4/5 mb-4">Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#3ba334] pl-4 mb-3">Book services in seconds</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#75bf70] pl-4 mb-3">Track real-time job updates</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#afdaad] pl-4">Schedule appointments at your convenience</p>
                </div>
                <div className="flex-1 relative lg:mb-0 mb-8" >
                    <Image src={ServiceBannerImg} alt="Service Banner Image" width={800} height={400} />
                    <Image className="xl:block hidden absolute -right-20 -bottom-30 -z-20" src={Vector1} alt="Vector Img" width={500} height={730} />

                    <div className="absolute bottom-0 left-0 w-full lg:h-32 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

                </div>

            </div>
            <div className="lg:flex justify-between items-center my-4">
                <div className="flex-1 relative lg:mb-0 mb-8" >
                    <Image src={OwnerBannerImg} alt="Owner Banner Image" width={800} height={400} />
                    <Image className=" xl:block hidden absolute -left-30 top-0 rotate-180 -z-20" src={Vector1} alt="Vector Img" width={500} height={730} />
                    <div className="absolute bottom-0 left-0 w-full lg:h-32 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

                </div>
                <div className="flex-1">
                    <p className="border rounded-full border-[#3BA334] text-[#3BA334] font-semibold flex text-[14px] justify-center items-center w-[154px] h-[27px]">Business Owners</p>
                    <h2 className="lg:text-[24px] text-[20px] text-gray-800 font-bold my-4 lg:w-3/4">Assign jobs, monitor performance, and streamline operations.</h2>
                    <p className="lg:text-[18px] text-gray-600 w-4/5 mb-4">Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#3ba334] pl-4 mb-3">Assign jobs to the right team member</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#75bf70] pl-4 mb-3">Monitor performance in real time</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#afdaad] pl-4">Manage clients and services seamlessly</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center">

                <div className="flex-1">
                    <p className="border rounded-full border-[#3BA334] text-[#3BA334] font-semibold flex text-[14px] justify-center items-center w-[113px] h-[27px]">Employees</p>
                    <h2 className="lg:text-[24px] text-[20px] text-gray-800 font-bold my-4 lg:w-3/4">See tasks, track time, and navigate routes with ease.</h2>
                    <p className="lg:text-[18px] text-gray-600 w-4/5 mb-4">Everything you need to manage your workday from job assignments to optimized routes and time logging.</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#3ba334] pl-4 mb-3">Assign jobs to the right team member</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#75bf70] pl-4 mb-3">Monitor performance in real time</p>
                    <p className="lg:text-[18px] font-medium text-gray-900 border-l-2 border-[#afdaad] pl-4">Manage clients and services seamlessly</p>
                </div>
                <div className="flex-1 relative lg:mb-0 mb-8" >
                    <Image src={EmployeeBannerImg} alt="Employee Banner Image" width={800} height={400} />
                    <Image className="xl:block hidden absolute -right-20 -bottom-30 -z-20" src={Vector1} alt="Vector Img" width={500} height={730} />
                    <div className="absolute bottom-0 left-0 w-full lg:h-32 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

                </div>
            </div>

        </div>
    );
};

export default Service;