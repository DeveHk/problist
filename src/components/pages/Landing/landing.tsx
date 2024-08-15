
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Problem } from "@/components/instance/problem"
import Problemcard from "./Problemcard"
const problems: Problem[] = [
    {
        title: "P1",
        id: "1",
        addedDate: new Date(),
        link: "hhhhh",
        userId: "as",
    }
]
export default function Landing() {
    return (
        <div className="container py-6 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 ">
                {
                    problems.map((prob: Problem, i) => (<Problemcard key={i} prob={prob} />)
                    )
                }
            </div>
        </div>

    )
}
