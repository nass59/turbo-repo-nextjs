import Link from "next/link"
import { type MainNavItem as TypeMainNavItem } from "@/types"

import { Button, cn } from "@shared/ui"

type Props = {
  isActive: boolean
  item: TypeMainNavItem
}

/**
 * MainNavItem component renders a navigation item as a button.
 */
export const MainNavItem = ({ isActive, item, ...props }: Props) => {
  const { disabled, href, title } = item

  if (disabled) {
    return null
  }

  return (
    <Button
      asChild
      className={cn({
        "text-foreground": isActive,
        "text-muted-foreground": !isActive,
      })}
      size="xs"
      variant="ghost"
      {...props}
    >
      <Link href={href}>{title}</Link>
    </Button>
  )
}
