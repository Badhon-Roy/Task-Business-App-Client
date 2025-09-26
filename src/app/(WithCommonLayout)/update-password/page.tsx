"use client";

import UpdatePasswordForm from "@/app/components/updatePassword/UpdatePasswordForm";
import SubNavbar from "@/app/shared/SubNavbar";
import { Suspense } from "react";


const UpdatePasswordPage = () => {
    return (
        <div>
            <SubNavbar />
            <Suspense fallback={<p>Loading...</p>}>
                <UpdatePasswordForm />
            </Suspense>

        </div>
    );
};

export default UpdatePasswordPage;