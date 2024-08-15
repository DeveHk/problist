import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { ListIcon, PlusIcon, SettingsIcon } from "lucide-react"

export default function SideNav() {
    return (

        <aside className="sticky left-0 top-10   flex-col  z-10  hidden max-w-10 border-r bg-background sm:flex" style={{ height: "calc(100vh - 40px)" }}>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/pa"
                                className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-7 md:w-7"
                                prefetch={false}
                            >
                                <PlusIcon className="h-4 w-4" />
                                <span className="sr-only">Post a new problem</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Post a new problem</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dasboard/vp"
                                className="flex h-6 w-6  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-7 md:w-7"
                                prefetch={false}
                            >
                                <ListIcon className="h-5 w-5" />
                                <span className="sr-only">View Solved Problems</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">View Solved Problems</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/ss"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                prefetch={false}
                            >
                                <SettingsIcon className="h-4 w-4" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}

