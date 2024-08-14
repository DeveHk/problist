import { Problem } from '@/components/instance/problem'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Problemcard = ({ prob }: { prob: Problem }) => {
    return (
        <Card>
            <CardContent className="py-2 space-y-1">
                <h3 className="text-xl font-bold">{prob?.title || "title NA"}</h3>
                <p className="text-muted-foreground">
                    {prob?.description || "Description NA"}
                </p>
                <Link
                    href={`p/${prob?.id}`}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    View Problem
                </Link>
            </CardContent>
        </Card>
    )
}

export default Problemcard