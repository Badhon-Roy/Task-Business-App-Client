"use server"

import { FieldValues } from "react-hook-form"

export const registerUser = async (userData: FieldValues) => {

    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("password_confirmation", userData.password_confirmation);
    formData.append("terms", userData.terms ? "true" : "false");



    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        body: formData
    })
    const data = await res.json();
    return data;
}

export const loginUser = async (userData: FieldValues) => {
    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("remember_me", userData.remember_me ? "true" : "false");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        body: formData,
    });

    const data = await res.json();
    return data;
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", otp);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify_otp`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const resendOtp = async (email: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resend_otp`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};


