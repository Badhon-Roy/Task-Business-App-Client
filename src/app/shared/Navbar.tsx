import Logo from "@/app/assets/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 xl:px-0 px-4 max-w-[1200px] mx-auto">
            <Link href={'/'}><Image src={Logo} alt="Logo" width={120} height={40} /></Link>
            <Link href={'/login'}>
                <button className="lg:w-[142px] w-[120px] h-[45px] bg-[#3BA334] rounded-lg text-white drop-shadow-sm drop-shadow-[#3BA334]">Get Started</button>
            </Link>
        </div>
    );
};

export default Navbar;