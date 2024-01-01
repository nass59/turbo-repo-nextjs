import { type ComponentProps } from "react"
import { UserButton } from "@clerk/nextjs"

import { routes } from "@/constants/routes"
import { parseData } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

import { getAllSpaces } from "../utilities/space"
import { getCurrentUserId } from "../utilities/user"
import { MainNav } from "./main-nav"
import { SpaceSwitcher } from "./space-switcher"

const NavbarSection = ({ children }: ComponentProps<"div">) => {
  return <div className="flex items-center space-x-4">{children}</div>
}

export const Navbar = async () => {
  const userId = getCurrentUserId()
  const spaces = await getAllSpaces(userId)

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <NavbarSection>
          <SpaceSwitcher items={parseData(spaces)} />
          <MainNav />
        </NavbarSection>

        <NavbarSection>
          <ThemeToggle />
          <UserButton afterSignOutUrl={routes.home} />
        </NavbarSection>
      </div>
    </header>
  )
}
