import Link from "next/link"

import { Avatar, AvatarImage } from "@shared/ui"

export type Author = {
  name: string
  twitter: string
  avatar: string
}

type Props = {
  authors: Author[]
}

export const Authors = ({ authors }: Props) => {
  return (
    <div className="flex space-x-4">
      {authors.map((author, index) => (
        <Link
          key={index}
          href={`https://twitter.com/${author.twitter}`}
          className="flex items-center space-x-2 text-sm"
        >
          <Avatar size="md">
            <AvatarImage src={author.avatar} alt={author.name} />
          </Avatar>

          <div className="flex-1 text-left leading-tight">
            <p className="font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">@{author.twitter}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
