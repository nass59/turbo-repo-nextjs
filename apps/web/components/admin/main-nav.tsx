"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { routes } from "@/constants/routes"

import { cn } from "@shared/ui"

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams()

  const routeSpace = `${routes.dashboard}/${params.spaceId}`
  const routeSetting = `${routeSpace}/settings`
  const routeBillboard = `${routeSpace}/billboards`
  const routeCategory = `${routeSpace}/categories`

  const navRoutes = [
    {
      href: routeSpace,
      label: "Overview",
      active: pathname === routeSpace,
    },
    {
      href: routeBillboard,
      label: "Billboards",
      active: pathname === routeBillboard,
    },
    {
      href: routeCategory,
      label: "Categories",
      active: pathname === routeCategory,
    },
    {
      href: routeSetting,
      label: "Settings",
      active: pathname === routeSetting,
    },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navRoutes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
