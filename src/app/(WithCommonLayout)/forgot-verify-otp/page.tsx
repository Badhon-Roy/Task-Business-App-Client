"use client";
import ForgotVerifyOtp from "@/app/components/forgotVerifyOtp/ForgotVerifyOtp";
import SubNavbar from "@/app/shared/SubNavbar";
import { Suspense } from "react";


const ForgetVerifyOtpPage = () => {
    return (
        <div>
            <SubNavbar />
            <Suspense fallback={<p>Loading...</p>}>
                <ForgotVerifyOtp />
            </Suspense>
        </div>
    );
};

export default ForgetVerifyOtpPage;