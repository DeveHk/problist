import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const legacy = () => {
    return (
        <div><section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Problem Categories</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Explore a variety of data structures and algorithms to improve your problem-solving skills.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <BracketsIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Arrays</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <ListTreeIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Linked Lists</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <SquareStackIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Stacks</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <TicketIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Queues</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <TreesIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Trees</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center space-y-2">
                            <GitGraphIcon className="h-8 w-8" />
                            <h3 className="text-lg font-bold">Graphs</h3>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
            <section id="progress" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Progress</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Track your progress and see how you&apos;re improving over time.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card>
                            <CardContent className="space-y-4">
                                <h3 className="text-xl font-bold">Problems Solved</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-bold">42</span>
                                    <span className="text-muted-foreground">/ 100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2.5">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "42%" }} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-4">
                                <h3 className="text-xl font-bold">Difficulty Level</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-bold">3.2</span>
                                    <span className="text-muted-foreground">/ 5</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2.5">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "64%" }} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-4">
                                <h3 className="text-xl font-bold">Time Spent</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-bold">120</span>
                                    <span className="text-muted-foreground">hrs</span>
                                </div>
                                <div className="w-" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section></div>
    )
}

export default legacy

function BracketsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 3h3v18h-3" />
            <path d="M8 21H5V3h3" />
        </svg>
    )
}


function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function GitGraphIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="5" cy="6" r="3" />
            <path d="M5 9v6" />
            <circle cx="5" cy="18" r="3" />
            <path d="M12 3v18" />
            <circle cx="19" cy="6" r="3" />
            <path d="M16 15.7A9 9 0 0 0 19 9" />
        </svg>
    )
}


function ListTreeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12h-8" />
            <path d="M21 6H8" />
            <path d="M21 18h-8" />
            <path d="M3 6v4c0 1.1.9 2 2 2h3" />
            <path d="M3 10v6c0 1.1.9 2 2 2h3" />
        </svg>
    )
}


function SquareStackIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
            <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
            <rect width="8" height="8" x="14" y="14" rx="2" />
        </svg>
    )
}


function TicketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
        </svg>
    )
}


function TreesIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
            <path d="M7 16v6" />
            <path d="M13 19v3" />
            <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
        </svg>
    )
}