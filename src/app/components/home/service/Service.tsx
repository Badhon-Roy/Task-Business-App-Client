import Frame1 from "@/app/assets/Frame 2147227474.png"
import Image from "next/image";
import ServiceBannerImg from "@/app/assets/Rectangle 161124259.png"
import Frame2 from "@/app/assets/Frame 2147227452.png"
import Frame3 from "@/app/assets/Frame 2147227451.png"


const Service = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-32 lg:px-0 px-4 relative">
            <Image className="absolute -right-10 top-32" src={Frame2} alt="Frame 2" width={300} height={800} />
            <Image className="absolute top-36 left-96" src={Frame3} alt="Frame 2" width={200} height={400} />

            <div className="relative text-center">
                <h2 className="text-[48px] font-bold relative z-10 text-gray-800">Build for Everyone</h2>
                <Image
                    className="absolute top-14 left-1/2 z-0" src={Frame1} alt="Frame 1" width={240} height={12}
                />

                <p className="text-[14px] mt-2 text-gray-600">
                    Whether you&apos;re booking services, managing tasks, or running operations, we&apos;ve <br />
                    designed the perfect experience for you.
                </p>
            </div>
            <div className="my-16 flex justify-between items-center">
                <div className="flex-1">
                    <p className="border rounded-full border-[#3BA334] text-[#3BA334] font-semibold flex text-[14px] justify-center items-center w-[79px] h-[27px]">Users</p>
                    <h2 className="text-[24px] text-gray-800 font-bold my-4">Book services, track progress <br /> and stay updated</h2>
                    <p className="text-[18px] text-gray-600 w-4/5 mb-4">Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>
                    <p className="text-[18px] font-medium text-gray-900 border-l-2 border-[#3ba334] pl-4 mb-3">Book services in seconds</p>
                    <p className="text-[18px] font-medium text-gray-900 border-l-2 border-[#75bf70] pl-4 mb-3">Track real-time job updates</p>
                    <p className="text-[18px] font-medium text-gray-900 border-l-2 border-[#afdaad] pl-4">Schedule appointments at your convenience</p>
                </div>
                <div className="flex-1 relative" >
                    <Image className="mx-auto mt-6" src={ServiceBannerImg} alt="Service Banner Image" width={800} height={400} />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

                </div>

            </div>

        </div>
    );
};

export default Service;