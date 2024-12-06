import Link from "next/link"
import { ExitIcon } from "@radix-ui/react-icons"

import { routes } from "@/constants/routes"
import { buttonVariants, cn } from "@shared/ui"

export const NavbarActions = () => {
  return (
    <div className="flex">
      <Link
        href={routes.home}
        className={cn(buttonVariants({ variant: "default", size: "xs" }))}
      >
        <ExitIcon className="mr-2 size-5" />
        Exit
      </Link>
    </div>
  )
}
