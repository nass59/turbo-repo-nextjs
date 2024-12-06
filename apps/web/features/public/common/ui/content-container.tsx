import { type PropsWithChildren } from "react"

import { cn } from "@shared/ui"

type Props = PropsWithChildren & {
  className?: string
  centered?: boolean
  withSpaceY?: boolean
}

export const ContentContainer = ({
  className,
  centered = false,
  withSpaceY = false,
  children,
}: Props) => {
  return (
    <div
      className={cn(
        "container relative py-6 lg:py-10",
        {
          "max-w-4xl": centered,
          "space-y-8": withSpaceY,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
