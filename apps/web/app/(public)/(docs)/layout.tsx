import { type LayoutProps } from "@/types/common"
import { docsConfig } from "@/config/docs"
import { marketingConfig } from "@/config/marketing"
import { Footer } from "@/features/public/common/ui/footer/footer"
import { Header } from "@/features/public/common/ui/header/header"
import { Breadcrumb } from "@/features/public/docs/ui/breadcrumb"
import { Search } from "@/features/public/docs/ui/search"
import { Sidebar } from "@/features/public/docs/ui/sidebar"

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header
        mainNavItems={marketingConfig.mainNav}
        sidebarNavItems={docsConfig.sidebarNav}
      >
        <Search />
      </Header>

      <div className="container flex-1 md:grid md:grid-cols-[240px_1fr] md:gap-10">
        <Sidebar items={docsConfig.sidebarNav} />
        <div className="space-y-4 py-4">
          <Breadcrumb />
          {children}
        </div>
      </div>

      <Footer />
    </>
  )
}
