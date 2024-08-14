"use client"
import { ModeToggle } from '@/components/ui/theme'
import { CodeIcon } from '@radix-ui/react-icons'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
const Nav = () => {
    const router = useRouter()
    return (
        <header className=" text-gray-900 dark:text-gray-200 px-4 lg:px-6 h-14 flex items-center">
            <div onClick={() => router.back()} className="flex items-center justify-center rounded-full p-2 bg-gray-700/20 hover:bg-gray-700/50" >
                <ArrowLeft />
            </div>
            <div className="ml-auto flex space-x-10">
                <ModeToggle />
            </div>
        </header>
    )
}

export default Nav