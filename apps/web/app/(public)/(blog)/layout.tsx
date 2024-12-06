import { type LayoutProps } from "@/types/common"
import { marketingConfig } from "@/config/marketing"
import { PageWrapper } from "@/features/public/common/ui/page-wrapper"

export default function Layout({ children }: LayoutProps) {
  return (
    <PageWrapper mainNavItems={marketingConfig.mainNav}>{children}</PageWrapper>
  )
}
