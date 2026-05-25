"use client";

import React from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form className="space-x-4" action={loginAction}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-ray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
