import Flower from "@/app/assets/Group (1).png"
import SubNavbar from "@/app/shared/SubNavbar";
import Image from "next/image";
import Link from "next/link";
const PasswordChangedSuccessfullyPage = () => {
    return (
        <div>
            <SubNavbar />
            <div className="flex justify-center items-center min-h-[80vh] w-[506px] mx-auto">
                <div>
                    <Image src={Flower} alt="flower" className="mx-auto mt-10" width={332} height={328} />
                    <div className="mb-[40px] mt-10">
                        <h1 className="text-2xl font-bold text-gray-800">Password Changed Successfully!</h1>
                        <p className="text-sm text-gray-600 mt-1">Your account is set up! Just verify your email to get started.</p>
                    </div>
                    <Link href={'/login'}>
                        <button
                            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Go To Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordChangedSuccessfullyPage;