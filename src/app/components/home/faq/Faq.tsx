"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqData = [
    {
        question: "Is the app free to use?",
        answer:
            "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
        question: "Can I assign multiple employees to one job?",
        answer:
            "Yes, our platform allows you to easily assign multiple team members to a single job or project to ensure efficient collaboration.",
    },
    {
        question: "Does it work on both mobile and desktop?",
        answer:
            "Yes, our application is fully responsive and optimized for both desktop browsers and mobile devices, so you can work from anywhere.",
    },
    {
        question: "Is GPS tracking always on?",
        answer:
            "GPS tracking is only active during work hours or when an employee is actively logged into a job. It is not always on and can be toggled off by the user.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1200px] mx-auto mt-32 mb-4 xl:px-0 px-4">
            <div className="text-center">
                <h2 className="lg:text-[48px] md:text-[36px] text-[30px] font-bold relative z-10 text-gray-800">Frequently Asked Questions</h2>

                <p className="text-[14px] mt-2 text-gray-600">
                    Quick answers to help you get the most out of our app.
                </p>
            </div>

            <div className="space-y-5 mt-[60px]">
                {faqData?.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#c7e6c5] rounded-2xl shadow-sm transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none"
                        >
                            <h3 className="text-base font-semibold text-gray-800">
                                {faq?.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="cursor-pointer"
                            >
                                {
                                    openIndex === index ? <Minus size={24} className="text-gray-600" /> : <Plus size={24} className="text-gray-600" />    
                                }
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className="lg:px-14 px-8 pb-6 text-gray-600 text-[14px] leading-relaxed">
                                        {faq?.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}