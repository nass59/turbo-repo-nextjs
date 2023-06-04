import { DashboardHeader } from "@/components/dashboard/dashboard-header-page"
import { PostCreateButton } from "@/components/dashboard/dashboard-post-create-button"
import { PostItem } from "@/components/dashboard/dashboard-post-item"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function loading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
