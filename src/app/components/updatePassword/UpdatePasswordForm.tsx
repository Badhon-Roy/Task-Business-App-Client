/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { loginUser, resetPassword } from "@/app/services/authService";
import { useRouter, useSearchParams } from "next/navigation";

// ✅ Validation schema with Zod
const schema = z
    .object({
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        password_confirmation: z.string(),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    });

export default function UpdatePasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_confirmation, setShowPassword_confirmation] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const [token, setToken] = useState("");

    useEffect(() => {
        const savedToken = localStorage.getItem("forgotPasswordToken");
        if (savedToken) {
            setToken(savedToken);
        } else {
            toast.error("Invalid or expired token");
            // redirect back to forgot password page
            router.push(`/forgot-verify-otp?email=${encodeURIComponent(email)}`);
        }
    }, [email, router]);


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            password: "",
            password_confirmation: "",
        },
    });

    const onSubmit = async (data: any) => {
        const toastLoading = toast.loading("Resetting password...");
        try {
            const result = await resetPassword(data?.password, data?.password_confirmation, token);

            console.log(result);

            if (result?.status === 201 || result?.status === 200) {
                toast.success(result?.message || "Password reset successfully!", { id: toastLoading });
                reset();

                // remove forgot password token from localStorage
                localStorage.removeItem("forgotPasswordToken");

                // Redirect to password changed successfully page
                router.push("/password-changed-successfully");
            } else {
                toast.error(result?.message || "Failed to reset password", { id: toastLoading });
            }
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong", { id: toastLoading });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="w-[480px]">
                <div className="mb-[64px]">
                    <h1 className="text-2xl font-bold text-gray-800">Enter your new password.</h1>
                    <p className="text-sm text-gray-600 mt-1">Please enter the email address associated with your account, and we&apos;ll email you a link to reset your password.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("password")}
                            className={`w-full h-[56px] p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? "border-red-500" : "border-gray-300 focus:ring-green-500"
                                }`}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                        >
                            {
                                showPassword ? <Eye /> : <EyeOff />
                            }
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            type={showPassword_confirmation ? "text" : "password"}
                            placeholder="Confirm Password"
                            {...register("password_confirmation")}
                            className={`w-full h-[56px] p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${errors.password_confirmation ? "border-red-500" : "border-gray-300 focus:ring-green-500"
                                }`}
                        />
                        <span
                            onClick={() => setShowPassword_confirmation(!showPassword_confirmation)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                        >
                            {
                                showPassword_confirmation ? <Eye /> : <EyeOff />
                            }
                        </span>
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                        {isSubmitting ? "Updating..." : "Update Password"}
                    </button>
                </form>



                <p className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link href={`forgot-verify-otp?email=${email}`} className="text-[#3ba334] hover:underline font-medium">
                        Back
                    </Link>
                </p>
            </div>
        </div>
    );
}
