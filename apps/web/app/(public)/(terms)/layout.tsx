import { type LayoutProps } from "@/types/common"
import { marketingConfig } from "@/config/marketing"
import { ContentContainer } from "@/features/public/common/ui/content-container"
import { PageWrapper } from "@/features/public/common/ui/page-wrapper"

export default function Layout({ children }: LayoutProps) {
  return (
    <PageWrapper mainNavItems={marketingConfig.mainNav}>
      <ContentContainer centered withSpaceY>
        {children}
      </ContentContainer>
    </PageWrapper>
  )
}
