import Link from "next/link"
import { RocketIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { routes } from "@/constants/routes"
import { Button } from "@shared/ui"

export const Logo = ({ ...props }) => {
  return (
    <Button asChild size="xs" variant="ghost">
      <Link className="hidden space-x-2 md:flex" href={routes.home} {...props}>
        <RocketIcon className="size-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
    </Button>
  )
}
