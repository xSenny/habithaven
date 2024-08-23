'use client'
import { auth } from "@/lib/auth";
import ProfileButton from "../auth/profile-button";
import { BsChatSquareQuote } from "react-icons/bs";
import Link from "next/link";
import { Coins, Trophy } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/actions/auth.action'


const Navbar = () => {

  
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUser(),
  });

  return (
    <header className="bg-muted/40 border-b px-8 p-4 ml-64">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Habit Haven</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Coins className="w-5 h-5 text-yellow-500" />
            <span>{isLoading ? 'loading' : data?.coins}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Trophy className="w-5 h-5 text-purple-500" />
            <span>{isLoading ? 'loading' : data?.trophies}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
