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

const dashboard = () => {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>User Dashboard</CardTitle>
                        <CardDescription>Manage your user account and activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Total Problems</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">24</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Solved Problems</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">18</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Pending Problems</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">6</div>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Activity</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Problem</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Created At</TableHead>
                                                <TableHead>Updated At</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    <Link href="#" className="hover:underline" prefetch={false}>
                                                        Implement a sorting algorithm
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Pending</Badge>
                                                </TableCell>
                                                <TableCell>2023-04-15</TableCell>
                                                <TableCell>2023-04-16</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    <Link href="#" className="hover:underline" prefetch={false}>
                                                        Design a user authentication system
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">Solved</Badge>
                                                </TableCell>
                                                <TableCell>2023-03-28</TableCell>
                                                <TableCell>2023-03-30</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    <Link href="#" className="hover:underline" prefetch={false}>
                                                        Optimize a database query
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">Solved</Badge>
                                                </TableCell>
                                                <TableCell>2023-02-10</TableCell>
                                                <TableCell>2023-02-12</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    <Link href="#" className="hover:underline" prefetch={false}>
                                                        Implement a real-time chat application
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Pending</Badge>
                                                </TableCell>
                                                <TableCell>2023-01-25</TableCell>
                                                <TableCell>2023-01-27</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default dashboard