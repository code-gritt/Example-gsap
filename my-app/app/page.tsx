"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <Link href="/variation/one">
            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200">
              Variation One
            </button>
          </Link>
          <Link href="/variation/two">
            <button className="w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-200">
              Variation Two
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
