/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { forgotVerifyOtp, resendOtp } from "@/app/services/authService";
import { toast } from "sonner";

export default function ForgotVerifyOtp() {
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const router = useRouter();

    const handleChange = (index: number, value: string) => {
        if (!/^[0-9]*$/.test(value)) return; // only numbers
        const newOtp = [...otpValues];
        newOtp[index] = value;
        setOtpValues(newOtp);

        // auto-focus next input
        if (value && index < 5) inputRefs.current[index + 1]?.focus();

        // clear error when user types
        setError("");
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async () => {
        const otp = otpValues.join("");
        if (otp.length < 6) {
            setError("Please enter all 6 digits of OTP");
            return;
        }
        setIsSubmitting(true);
        const toastLoading = toast.loading("Checking...")

        try {
            console.log("Entered OTP:", otp, email);
            setError(""); // clear error

            const result = await forgotVerifyOtp(email, otp);
            console.log("OTP verification result:", result);

            if (result?.status === true || result?.status === 201) {
                toast.success(result?.message || "OTP verified successfully", { id: toastLoading })
                setIsSubmitting(false);

                // Redirect to update password page after successful OTP verification
                localStorage.setItem("forgotPasswordToken", result?.data?.token);
                router.push(`/update-password?email=${encodeURIComponent(email)}`);
            }
            if (result?.status === 404) {
                toast.error(result?.message, { id: toastLoading })
                setError(result?.message || "Invalid OTP");
                setIsSubmitting(false);
                return;
            }


        } catch (err: any) {
            setError(err?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <div className="max-w-md w-full">
                {/* Back link */}
                <Link href="/register" className="text-[#3ba334] hover:underline font-medium text-sm flex items-center mb-8">
                    <ChevronLeft size={14} className="mr-2" /> Back
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Enter the 6-digit OTP</h1>
                    <p className="text-gray-600 mt-2 text-sm">
                        We&apos;ve sent a 6-digit code to your email. Please enter it below to verify your account.
                    </p>
                </div>

                {/* OTP inputs */}
                <div className="space-y-6">
                    <div className="flex justify-between gap-2">
                        {otpValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={value}
                                ref={(el) => {
                                    inputRefs.current[index] = el!;
                                }}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-green-500
                  ${error ? "border-red-500" : "border-gray-300"}`}
                            />
                        ))}
                    </div>

                    {/* Show form error here */}
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                        {isSubmitting ? "Verifying..." : "Verify"}
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                    Didn&apos;t receive the code?{" "}
                    <button
                        type="button"
                        className="text-green-600 hover:underline cursor-pointer font-medium"
                        onClick={async () => {
                            if (!email) return;
                            const toastLoading = toast.loading("Sending...")
                            try {
                                const result = await resendOtp(email);
                                console.log(result);
                                if (result.status === 201 || result.status === 200) {
                                    toast.success(result.message, { id: toastLoading })
                                } else {
                                    alert(result.message || "Failed to resend OTP");
                                }
                            } catch (error: any) {
                                 toast.error(error.message || "Something went wrong", { id: toastLoading })
                            }
                        }}
                    >
                        Resend OTP
                    </button>
                </p>
            </div>
        </div>
    );
}
