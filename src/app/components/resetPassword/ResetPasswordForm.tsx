/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { forgotPassword } from "@/app/services/authService";
import { useRouter } from "next/navigation";

// ✅ Validation schema with Zod
const schema = z
    .object({
        email: z.string().email({ message: "Invalid email address" })
    })

export default function ResetPasswordForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
        },
    });
    const router = useRouter();

    const onSubmit = async (data: any) => {
        const toastLoading = toast.loading("Resetting...")
        try {
            const result = await forgotPassword(data?.email);
            console.log(result);
            if (result?.status === 201 || result?.status === true) {
                toast.success(result?.message, { id: toastLoading })
                reset();
                // Redirect to forgot verify otp page after successful password reset request
                router.push(`/forgot-verify-otp?email=${encodeURIComponent(data?.email)}`);
            }
            else if (result?.status === false || result?.status === 401) {
                toast.error(result?.message, { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong", { id: toastLoading })
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] w-[480px] mx-auto">
            <div>
                <Link href={'/login'} className="text-[#3ba334] hover:underline font-medium text-sm flex items-center mb-8">
                    <ChevronLeft size={14} className="mr-2" />
                    Back
                </Link>
                <div className="text-start mb-[64px]">
                    <h1 className="text-2xl font-bold text-gray-800">Forgot your password?</h1>
                    <p className="text-sm text-gray-600 mt-4">Please enter the email address associated with your account, and we&apos;ll email you a link to reset your password.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register("email")}
                            className={`w-full  h-[56px] p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : "border-gray-300 focus:ring-green-500"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                        {isSubmitting ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}
