import Logo from "@/app/assets/logo.png"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 xl:px-0 px-4 max-w-[1200px] mx-auto">
            <Image src={Logo} alt="Logo" width={120} height={40} />
            <button className="lg:w-[142px] w-[120px] h-[45px] bg-[#3BA334] rounded-lg text-white drop-shadow-sm drop-shadow-[#3BA334]">Get Started</button>
        </div>
    );
};

export default Navbar;