import LogoImg from "@/app/assets/logo2.png"
import AppleIcon from "@/app/assets/Apple (1).png"
import GooglePlayIcon from "@/app/assets/Playstore.png"
import Image from "next/image";
import YouTubeIcon from "@/app/assets/youtube.png"
import XIcon from "@/app/assets/x.png"
import FacebookIcon from "@/app/assets/facebook.png"
import InstagramIcon from "@/app/assets/instagram.png"

const Footer = () => {
    return (
        <div className="mt-32 relative bg-[#0F3B34]">
            <div className="max-w-[1200px] mx-auto xl:px-0 px-4">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 py-16 items-center justify-center">
                    <div className="flex-1">
                        <Image className="lg:w-[270px] w-[150px]" src={LogoImg} alt="logo" width={270} height={76} />
                    </div>
                    <p className="font-medium text-[#CFD8D6] flex-1">Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.</p>
                    <div className="flex gap-[18px] flex-1">
                        <button className="border border-[#abdaa9] rounded-[6px] flex items-center gap-3 px-4 py-2 hover:bg-[#abdaa9]/10 transition">
                            <Image src={AppleIcon} alt="Apple Icon" width={30} height={30} />
                            <div className="text-left leading-tight text-white">
                                <p className="text-[9px]">Download on the</p>
                                <p className="text-[18px] font-semibold">App Store</p>
                            </div>
                        </button>
                        <button className="border border-[#abdaa9] rounded-[6px] flex items-center gap-3 px-4 py-2 hover:bg-[#abdaa9]/10 transition">
                            <Image src={GooglePlayIcon} alt="Google Play Store Icon" width={30} height={30} />
                            <div className="text-left leading-tight text-white">
                                <p className="text-[9px]">Download on the</p>
                                <p className="text-[18px] font-semibold">Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex lg:justify-start justify-center gap-8 mb-8">
                    <Image src={YouTubeIcon} alt="youtube_icon" width={24} height={24}/>
                    <Image src={XIcon} alt="x_icon" width={24} height={24}/>
                    <Image src={FacebookIcon} alt="facebook_icon" width={24} height={24}/>
                    <Image src={InstagramIcon} alt="instagram_icon" width={24} height={24}/>
                </div>
            </div>
            <div className="border-t-2 border-[#42645e] lg:px-0 px-4">
                <p className="text-[#42645e] max-w-[1200px] mx-auto py-4">&copy; 2021-2025, ScapeSync. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;