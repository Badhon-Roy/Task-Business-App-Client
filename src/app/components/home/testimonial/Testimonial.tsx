import UserImg from "@/app/assets/Ellipse 452.png"
import User2Img from "@/app/assets/Ellipse 452 (1).png"
import User3Img from "@/app/assets/Ellipse 452 (2).png"
import Image from "next/image";
const Testimonial = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-32 mb-4 lg:px-0 px-4">
            <div className="text-center">
                <h2 className="text-[48px] font-bold relative z-10 text-gray-800">What Our Users Are Saying</h2>

                <p className="text-[14px] mt-2 text-gray-600">
                    Real stories from clients, employees, and business owners who use <br /> our app every day.
                </p>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div className="bg-white rounded-[22px] p-6 shadow-xl shadow-[#f4fbf4] border border-gray-100">
                    <div className="flex gap-[14px] items-center">
                        <Image src={UserImg} alt="User" width={48} height={48} />
                        <div>
                            <p className="text-[16px] font-bold text-gray-800">Farzana H.</p>
                            <p className="text-[14px] text-gray-600">Owner, CleanPro Services</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-6">This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.</p>
                </div>
                <div className="bg-white rounded-[22px] p-6 shadow-xl shadow-[#f4fbf4] border border-gray-100">
                    <div className="flex gap-[14px] items-center">
                        <Image src={User2Img} alt="User" width={48} height={48} />
                        <div>
                            <p className="text-[16px] font-bold text-gray-800">Ahmed R.</p>
                            <p className="text-[14px] text-gray-600">Technician</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-6">I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.</p>
                </div>
                <div className="bg-white rounded-[22px] p-6 shadow-xl shadow-[#f4fbf4] border border-gray-100">
                    <div className="flex gap-[14px] items-center">
                        <Image src={User3Img} alt="User" width={48} height={48} />
                        <div>
                            <p className="text-[16px] font-bold text-gray-800">Farzana H.</p>
                            <p className="text-[14px] text-gray-600">Rafiq M., Homeowner</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-6">As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;