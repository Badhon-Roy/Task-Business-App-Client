/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { registerUser } from "@/app/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// ✅ Validation schema with Zod
const schema = z
    .object({
        first_name: z.string().min(1, { message: "First name is required" }),
        last_name: z.string().min(1, { message: "Last name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        password_confirmation: z.string(),
        terms: z.boolean().refine((val) => val === true, {
            message: "You must agree to the terms",
        }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    });

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_confirmation, setShowPassword_confirmation] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            terms: false,
        },
    });

    const onSubmit = async (data: FieldValues) => {
        const toastLoading = toast.loading("Registering...")
        try {
            const result = await registerUser(data);
            console.log(result);
            if (result?.status === 201) {
                toast.success("Please Verify your email!", { id: toastLoading })
                reset();
                // Redirect to verify page after successful registration
                router.push(`/verify-otp?email=${encodeURIComponent(data?.email)}`);
            }
            else if (result?.status === false) {
                toast.error(result?.message, { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong", { id: toastLoading })
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div>
                <div className="text-center mb-[64px]">
                    <h1 className="text-2xl font-bold text-gray-800">Create your Account</h1>
                    <p className="text-sm text-gray-600 mt-1">When sports Meets smart Tech.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 w-[480px]">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                {...register("first_name")}
                                className={`w-full h-[56px] p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.first_name ? "border-red-500" : "border-gray-300 focus:ring-green-500"
                                    }`}
                            />
                            {errors.first_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                {...register("last_name")}
                                className={`w-full h-[56px] p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.last_name ? "border-red-500" : "border-gray-300 focus:ring-green-500"
                                    }`}
                            />
                            {errors.last_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
                            )}
                        </div>
                    </div>

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
                                showPassword ? <EyeOff /> : <Eye />
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
                                showPassword_confirmation ? <EyeOff /> : <Eye />
                            }
                        </span>
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                        )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-center space-x-2 mb-6">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms")}
                            className={`h-4 w-4 rounded border-gray-300 accent-[#3ba334]  ${errors.terms ? "border-red-500" : "text-green-600 focus:ring-green-500"
                                }`}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to Tech Takes{" "}
                            <a href="#" className="underline">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                            .
                        </label>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                        {isSubmitting ? "Creating..." : "Create Account"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Button */}
                <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <Image
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google Logo"
                        width={40}
                        height={40}
                        className="h-5 w-5"
                    />
                    <span>Continue with Google</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-green-600 hover:underline">
                        Get started
                    </Link>
                </p>
            </div>
        </div>
    );
}
