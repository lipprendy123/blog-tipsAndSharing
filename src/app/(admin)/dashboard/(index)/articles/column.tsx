'use client'



import { Post } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: 'authorName',
        header: 'Author'
    },
]