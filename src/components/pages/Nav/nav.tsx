"use client"
import { useAuth } from '@/app/hook/use-auth'
import { ModeToggle } from '@/components/ui/theme'
import { CodeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
const Nav = () => {
    const { islogin, isLoading, error } = useAuth()
    return (
        <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <CodeIcon className="size-6" />
                <span className="sr-only">DSA Tracker</span>
                <span> DSA Problem Tracker</span>
            </Link>
            <div className="ml-auto flex space-x-10">
                <nav className="flex gap-4 sm:gap-6 justify-center items-center">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Problems
                    </Link>{isLoading == false && (islogin ? (<Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Dashboard
                    </Link>) :
                        (<Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                            Login
                        </Link>))}
                </nav>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Nav