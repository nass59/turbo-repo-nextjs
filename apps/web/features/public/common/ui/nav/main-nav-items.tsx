import { type PropsWithChildren } from "react"
import { usePathname } from "next/navigation"
import { type MainNavItem as TypeMainNavItem } from "@/types"

import { MainNavItem } from "./main-nav-item"

type Props = PropsWithChildren & {
  className?: string
  items?: TypeMainNavItem[]
}

const isActive = (href: string, pathName: string | null) => {
  const path = pathName?.split("/")

  return path && path.length === 1
    ? href === pathName
    : String(pathName).startsWith(String(href))
}

export const MainNavItems = ({ className, items, ...props }: Props) => {
  const pathName = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <nav className={className} {...props}>
      {items.map((item, index) => (
        <MainNavItem
          key={index}
          item={item}
          isActive={isActive(item.href, pathName)}
        />
      ))}
    </nav>
  )
}
