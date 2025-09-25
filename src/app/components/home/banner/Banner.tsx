import BannerImg from "@/app/assets/banner.png"
import Image from "next/image";
import AppleIcon from "@/app/assets/Apple.png"
import GooglePlayIcon from "@/app/assets/Playstore.png"
import Vector1 from "@/app/assets/Vector 7621.png"
import Vector2 from "@/app/assets/Vector (4).png"
import Shadow from "@/app/assets/Ellipse 24.png"
import Frame3 from "@/app/assets/Frame 781 (1).png"
import Frame4 from "@/app/assets/Frame 781 (2).png"
import Frame1 from "@/app/assets/Frame 781.png"
import Frame2 from "@/app/assets/Frame 782.png"
import Vector3 from "@/app/assets/Ellipse 21.png"

const Banner = () => {
    return (
       <div>
         <div className="relative">
            <Image className="absolute left-0" src={Shadow} alt="Shadow Img" width={400} height={400} />
            <Image className="absolute right-0 lg:-bottom-20 md:bottom-50 -bottom-20" src={Vector3} alt="Vector Img" width={500} height={730} />
            <div className="flex lg:flex-row flex-col-reverse  items-center justify-between xl:px-0 px-4 mt-8 max-w-[1200px] mx-auto">
                <div className="flex-1 relative" >


                    <h2 className="xl:text-[82px] lg:text-[62px] md:text-[56px] text-[46px]  font-bold text-gray-800 lg:leading-[92px] md:leading-[60px] leading-[50px] lg:text-start text-center lg:mt-0 mt-10 lg:w-full md:w-4/5 w-full md:mx-auto">All Your Jobs One Smart App</h2>
                    <p className="md:w-4/5 lg:text-start text-center mt-8 w-full">Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                    <Image className="absolute xl:-top-15 lg:-top-14 xl:left-62 top-0 lg:left-45 lg:right-0 md:left-78 right-28 lg:w-[129px] w-[80px]" src={Vector2} alt="Vector Img" width={129} height={134} />
                    <Image className="absolute xl:top-[172px] xl:left-[166px] lg:top-[162px] lg:left-[88px] md:top-39 top-34 md:right-56 right-0 xl:w-[420px] lg:w-[350px] w-[250px]" src={Vector1} alt="Vector Img" width={300} height={100} />

                    <div className="flex lg:justify-start justify-center gap-[18px]">
                        <button className="border border-[#abdaa9] rounded-[6px] flex items-center gap-3 px-4 py-2 hover:bg-[#abdaa9]/10 transition mt-[64px]">
                            <Image src={AppleIcon} alt="Apple Icon" width={30} height={30} />
                            <div className="text-left leading-tight">
                                <p className="text-[9px]">Download on the</p>
                                <p className="text-[18px] font-semibold">App Store</p>
                            </div>
                        </button>
                        <button className="border border-[#abdaa9] rounded-[6px] flex items-center gap-3 px-4 py-2 hover:bg-[#abdaa9]/10 transition mt-[64px]">
                            <Image src={GooglePlayIcon} alt="Google Play Store Icon" width={30} height={30} />
                            <div className="text-left leading-tight">
                                <p className="text-[9px]">Download on the</p>
                                <p className="text-[18px] font-semibold">Google Play</p>
                            </div>
                        </button>
                    </div>

                </div>
                <div className="flex-1 relative">
                    <Image src={BannerImg} alt="Banner Image" width={600} height={400} />
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-20 grid lg:grid-cols-4 grid-cols-2 lg:gap-9 gap-4 xl:px-0 px-4">
            <div className="border-r pr-4 border-gray-100">
                <Image src={Frame1} alt="Frame 1" width={43} height={43}/>
                <h2 className="text-gray-800 text-lg font-bold">Easy Service Booking</h2>
                <p className="text-[14px] text-gray-600">Streamlined booking process for clients with service catalogs and availability.</p>
            </div>
            <div className="lg:border-r pr-4 border-gray-100">
                <Image src={Frame2} alt="Frame 1" width={43} height={43}/>
                <h2 className="text-gray-800 text-lg font-bold">Real-Time Tracking</h2>
                <p className="text-[14px] text-gray-600">Monitor job progress, employee hours, and project timelines with live updates.</p>
            </div>
            <div className="border-r pr-4 border-gray-100">
                <Image src={Frame3} alt="Frame 1" width={43} height={43}/>
                <h2 className="text-gray-800 text-lg font-bold">Performance Analytics</h2>
                <p className="text-[14px] text-gray-600">Comprehensive reporting and insights to improve business operations and efficiency.</p>
            </div>
            <div>
                <Image src={Frame4} alt="Frame 1" width={43} height={43}/>
                <h2 className="text-gray-800 text-lg font-bold">Secure & Reliable</h2>
                <p className="text-[14px] text-gray-600">Enterprise-grade security with 99.9% uptime guarantee and data protection.</p>
            </div>
        </div>
       </div>
    );
};

export default Banner;