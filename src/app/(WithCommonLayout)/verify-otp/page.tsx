"use client";
import VerifyOtp from "@/app/components/verifyOtp/VerifyOtp";
import SubNavbar from "@/app/shared/SubNavbar";
import { Suspense } from "react";

 
const VerifyPage = () => {
    return (
        <div>
            <SubNavbar/>
            <Suspense fallback={<p>Loading...</p>}>
            <VerifyOtp/>
            </Suspense>
            
        </div>
    );
};

export default VerifyPage;