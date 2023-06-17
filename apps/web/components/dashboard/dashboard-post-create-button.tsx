"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface PostCreateButtonProps extends ButtonProps {}

const toastReachedLimit = () => {
  return toast({
    title: "Limit of 3 posts reached.",
    description: "Please upgrade to the PRO plan.",
    variant: "destructive",
  })
}

const toastError = () => {
  return toast({
    title: "Something went wrong.",
    description: "Your post was not created. Please try again.",
    variant: "destructive",
  })
}

export const PostCreateButton = ({
  className,
  variant,
  ...props
}: PostCreateButtonProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onClick() {
    setIsLoading(true)

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      return response.status === 402 ? toastReachedLimit() : toastError()
    }

    const post = await response.json()

    if (!post) {
      return toastError()
    }

    // force cache invalidation
    router.refresh()
    router.push(`/editor/${post._id}`)
  }

  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": isLoading },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New post
    </button>
  )
}