import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { findFirstByUserId } from "@/lib/database/space"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { userId } = auth()

  if (!userId) {
    return redirect("/sign-in")
  }

  const space = await findFirstByUserId(userId)

  if (space) {
    return redirect(`/dashboard/${space._id.toString()}`)
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  )
}
