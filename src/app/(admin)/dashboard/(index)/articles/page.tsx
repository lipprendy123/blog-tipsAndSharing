import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ArticlesPage() {
  return (
    <div className="space-y-4">
    <div className="text-right">
        <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/dashboard/categories/create">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Articles
                </span>
            </Link>
        </Button>
    </div>
    <Card>
        <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>
                Manage your articles and view their sales performance.
            </CardDescription>
        </CardHeader>
        <CardContent>
         {/* <DataTable columns={columns} data={data} /> */}
        </CardContent>
    </Card>
</div>
  )
}
