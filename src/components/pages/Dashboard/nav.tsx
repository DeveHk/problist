"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, HomeIcon, ListIcon, MenuIcon, PlusIcon, SearchIcon, SettingsIcon } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import axios from "axios"
import { ModeToggle } from "@/components/ui/theme"
import Dragon from "@/components/svg/dragon"
import { DashboardIcon, DashIcon } from "@radix-ui/react-icons"

const Nav = () => {

    const router = useRouter()
    const LogOut = async () => {
        const ret = await axios.get("/api/auth/logout", { withCredentials: true })
        console.log(ret)
        router.push('/')
    }
    return (
        <>
            <header className="sticky top-0 z-30  border-b  bg-background text-gray-900 dark:text-gray-200 px-4 lg:px-2 h-10 flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden mr-4 h-6 w-6 rounded-full">
                            <MenuIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="/"
                                className="group flex h-6 w-6 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                prefetch={false}
                            >
                                <HomeIcon className="h-4 w-4 transition-all group-hover:scale-110" />
                            </Link>
                            <Link href="/dashboard" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                                <DashboardIcon className="h-4 w-4" />
                                Dashborad
                            </Link>
                            <Link href="/dashboard/pa" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                                <PlusIcon className="h-4 w-4" />
                                Create a Problem
                            </Link>
                            <Link
                                href="/dasboard/vp"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                <ListIcon className="h-4 w-4" />
                                View Solved Problems
                            </Link>
                            <Link
                                href="/dashboard/ss"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                <SettingsIcon className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div onClick={() => router.back()} className="flex items-center justify-center rounded-full p-1 bg-gray-700/20 hover:bg-gray-700/50" >
                    <ArrowLeft className="h-4 w-4" />
                </div>


                {/*<Breadcrumb className="hidden md:flex">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard" prefetch={false}>
                                    Dashboard
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>User Dashboard</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>*/}
                {/*<div className="relative ml-auto flex-1 md:grow-0">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>*/}
                <div className=" ml-auto flex flex-row gap-10 justify-center items-center">
                    <nav className="sm:flex hidden ">
                        <div className="ml-auto flex space-x-10">
                            <nav className="flex gap-4 sm:gap-6 justify-center items-center">
                                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Problems
                                </Link>
                                <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Dashboard
                                </Link>
                            </nav>
                        </div>
                    </nav>
                    <div className="flex flex-row gap-4">
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="outline" size="icon" className=" h-6 w-6 p-1 border overflow-hidden rounded-full">
                                                    <Dragon />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">Profile Options</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => LogOut()}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ModeToggle className="w-6 h-6 rounded-full" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav