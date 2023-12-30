import { redirect } from "next/navigation"
import { auth, UserButton } from "@clerk/nextjs"

import { routes } from "@/constants/routes"
import { findAllSpacesByUserId } from "@/lib/database/space"
import { parseData } from "@/lib/utils"
import MainNav from "@/components/admin/main-nav"
import SpaceSwitcher from "@/components/admin/space-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar: React.FC = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect(routes.signIn)
  }

  const spaces = await findAllSpacesByUserId(userId)

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <SpaceSwitcher items={parseData(spaces)} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl={routes.home} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
