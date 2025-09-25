import BannerImg from "@/app/assets/banner.png"
import Image from "next/image";
import AppleIcon from "@/app/assets/Apple.png"
import GooglePlayIcon from "@/app/assets/Playstore.png"
import Vector4 from "@/app/assets/Vector (4).png"
import Shadow from "@/app/assets/Ellipse 24.png"
const Banner = () => {
    return (
        <div className="relative">
            <Image className="absolute left-0" src={Shadow} alt="Shadow Img" width={400} height={400} />
            <div className="flex items-center justify-between lg:px-0 px-4 max-w-[1200px] mx-auto">
                <div className="flex-1 relative" >


                    <h2 className="text-[82px] font-bold text-gray-800 leading-[92px]">All Your Jobs <br /> One Smart App</h2>
                    <p className="w-4/5">Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                    <Image className="absolute -top-16 left-66" src={Vector4} alt="Vector Img" width={129} height={134} />

                    <div className="flex gap-[18px]">
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
                <div className="flex-1">
                    <Image src={BannerImg} alt="Banner Image" width={600} height={400} />
                </div>
            </div>
        </div>
    );
};

export default Banner;