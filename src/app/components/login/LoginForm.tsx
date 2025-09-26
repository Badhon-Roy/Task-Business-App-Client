/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { loginUser } from "@/app/services/authService";
import { useRouter } from "next/navigation";

// ✅ Validation schema with Zod
const schema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        remember_me: z.boolean().optional(),
    })

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            remember_me: false,
        },
    });

    const onSubmit = async (data: any) => {
        const toastLoading = toast.loading("Logging...")
        try {
            const result = await loginUser(data);
            if (result?.status === 201 || result?.status === true) {
                toast.success(result?.message, { id: toastLoading })
                reset();
                // Redirect to home page after successful login
                router.push("/");
            }
            else if (result?.status === false || result?.status === 401) {
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
                    <h1 className="text-2xl font-bold text-gray-800">Welcome to ScapeSync</h1>
                    <p className="text-sm text-gray-600 mt-1">Please share your login details so you can access the website.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 w-[480px]">
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

                    {/* remember_me */}
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2 mb-6">
                            <input
                                type="checkbox"
                                id="remember_me"
                                {...register("remember_me")}
                                className={`h-4 w-4 rounded border-gray-300 accent-[#3ba334]  ${errors.remember_me ? "border-red-500" : "text-green-600 focus:ring-green-500"
                                    }`}
                            />
                            <label htmlFor="remember_me" className="text-sm text-gray-600">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <Link href={'/resetPassword'} className="text-[#3ba334] hover:underline font-medium text-sm">Forgot password?</Link>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                        {isSubmitting ? "Logging..." : "Login"}
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
                    <span>Log in with Google</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-[#3ba334] hover:underline font-medium">
                        Get started
                    </Link>
                </p>
            </div>
        </div>
    );
}
