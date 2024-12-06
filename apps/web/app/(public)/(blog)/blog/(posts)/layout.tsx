import { type LayoutProps } from "@/types/common"
import { BackLink } from "@/features/public/blog/ui/back-link"
import { ContentContainer } from "@/features/public/common/ui/content-container"

/**
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <ContentContainer centered>
      <BackLink className="absolute left-[-150px] top-20 hidden xl:inline-flex" />
      <article className="m-auto max-w-3xl space-y-8">
        {children}
        <hr />

        <div className="flex justify-center">
          <BackLink />
        </div>
      </article>
    </ContentContainer>
  )
}
