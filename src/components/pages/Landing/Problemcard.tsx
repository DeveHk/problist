import { Problem } from '@/components/instance/problem'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Problemcard = ({ prob }: { prob: Problem }) => {
    console.log(prob)
    return (
        <Card>
            {/*href={`p/${prob?.id}`} */}
            <CardContent className="p-6  space-y-4">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">{prob?.title || "title NA"}</h3>
                    <Link
                        href={prob.link || "sdas"}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        View Problem
                    </Link>
                </div>
                <Markdown className={"markdown md:h-44 h-32 overflow-y-scroll no-scrollbar text-muted-foreground"} remarkPlugins={[remarkGfm]}>
                    {prob?.description || "Description NA"}
                </Markdown>

            </CardContent>
        </Card>
    )
}

export default Problemcard