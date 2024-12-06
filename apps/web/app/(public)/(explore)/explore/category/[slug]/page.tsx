import { notFound } from "next/navigation"

import {
  type PageMetadata,
  type PageProps,
  type StaticParams,
} from "@/types/common"
import { ContentContainer } from "@/features/public/common/ui/content-container"
import { getCategoryPageMetadata } from "@/features/public/explore/metadata/metadata"
import { Billboard } from "@/features/public/explore/ui/billboard"
import { List } from "@/features/public/explore/ui/list"
import {
  getCategory,
  getPageSlugs,
} from "@/features/public/explore/utilities/category"
import { getItemsByCategory } from "@/features/public/explore/utilities/item"

export function generateMetadata({ params }: PageProps): PageMetadata {
  return getCategoryPageMetadata(params.slug) || {}
}

export async function generateStaticParams(): Promise<StaticParams> {
  return await getPageSlugs()
}

export default async function Page({ params }: PageProps) {
  const { slug } = params

  const items = await getItemsByCategory(slug)
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <>
      {category && <Billboard data={category.billboard} />}
      <ContentContainer withSpaceY>
        <List title={`${category.name} Items`} items={items} />
      </ContentContainer>
    </>
  )
}
