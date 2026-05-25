"use client";
import React from "react";
import { logoutAction } from "../actions/auth";
import { redirect, useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();

      // the redirect happens in the server action
      // this client-side redirect is a fallback in case the server action fails
      // redirect("/login");
      router.push("/login");
      router.refresh(); // Refresh the page to update the UI after logout
      // this only works in client components, in server components the redirect is handled by the server action
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
