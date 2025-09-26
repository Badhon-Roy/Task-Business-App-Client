import Link from "next/link";
import Logo from "@/app/assets/logo.png"
import Image from "next/image";


const SubNavbar = () => {
    return (
        <div className="py-5 xl:px-0 px-4 max-w-[1200px] mx-auto">
            <Link href={'/'}><Image className=" inline-block" src={Logo} alt="Logo" width={120} height={40} /></Link>
        </div>
    );
};

export default SubNavbar;