import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { image } from 'framer-motion/client';


// Komponen utama Dashboard dengan layout dan sidebar
export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
    <DashboardContent/>
    </AuthenticatedLayout>
  );
}



// Konten dashboard
const DashboardContent = () => {
    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="p-4 bg-gray-200 rounded-xl border border-gray-500">
          <div className='flex flex-row justify-between gap-8 p-8'>
            <img src="image/foto1.png" alt="" className='w-full max-w-md'/>
            <div className='flex flex-col justify-center'>
              <h1 className='font-extrabold text-2xl'>Selamat Pagi, Admin!</h1>
              <p className='text-sm font-light'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className='flex flex-row gap-4 mt-4'>
                <Link href='#' className='bg-neutral-200 p-2 rounded-xl'>
                  Baca Buku
                </Link>
                <Link href='#' className='bg-[#A78B61] p-2 rounded-xl text-white'>
                  Pinjam Buku
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* Dashboard Info Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-bold">Info Dashboard Buku</h1>
              <p className="text-sm text-gray-600">
                Dashboard informasi buku total buku dipinjam, buku sedang dipinjam, buku dikembalikan, buku rusak
              </p>
            </div>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              Kelola
            </button>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            
            <div className="bg-[#6B8E7B] p-6 rounded-2xl text-white flex flex-col items-center justify-center">
            <div className='flex items-center space-x-4'>
                <img src="/icon/BookShelf.svg" alt=""className='w-12 h-12 mb-2' />
                <div className="text-5xl font-bold mb-4">78</div>
            </div>
                <div className="text-sm">Total buku dipinjam</div>
            </div>
  
            <div className="bg-[#1D4B4A] p-6 rounded-2xl text-white flex flex-col items-center justify-center">
            <div className='flex items-center space-x-4'>
                <img src="/icon/Book.svg" alt=""className='w-12 h-12 mb-2' />
                <div className="text-5xl font-bold mb-4">19</div>
            </div>
                <div className="text-sm">Sedang dipinjam</div>
            </div>
  
            <div className="bg-[#FFCC8F] p-6 rounded-2xl text-white flex flex-col items-center justify-center">
            <div className='flex items-center space-x-4'>
                <img src="/icon/Repository.svg" alt=""className='w-12 h-12 mb-2' />
                <div className="text-5xl font-bold mb-4">19</div>
            </div>
                <div className="text-sm">Buku dikembalikan</div>
            </div>
  
            <div className="bg-[#B65F74] p-6 rounded-2xl text-white flex flex-col items-center justify-center">
            <div className='flex items-center space-x-4'>
                <img src="/icon/RemoveBook.svg" alt=""className='w-12 h-12 mb-2' />
                <div className="text-5xl font-bold mb-4">19</div>
            </div>
                <div className="text-sm">Buku rusak</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  