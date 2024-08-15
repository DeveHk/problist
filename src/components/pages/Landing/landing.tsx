"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Problem } from "@/components/instance/problem"
import Problemcard from "./Problemcard"
import { useProblem } from "@/app/hook/get-problems"

export default function Landing() {
    const { isLoading, problems, error } = useProblem()
    return (
        <div className="container py-6 px-4 md:px-6">
            {!isLoading && (
                problems && problems.length === 0 ? (
                    <div className="flex w-full justify-center my-10 ">
                        <div className="font-semibold text-2xl">NO PROBLEMS AVAILABLE TO SHOW RIGHT NOW, BE THE FIRST ONE TO POST!!</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {problems.map((prob: Problem, i: number) => (
                            <Problemcard key={i} prob={prob} />
                        ))}
                    </div>
                )
            )}
        </div>


    )
}
