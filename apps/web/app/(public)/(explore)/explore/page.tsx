import { ContentContainer } from "@/features/public/common/ui/content-container"
import { Billboard } from "@/features/public/explore/ui/billboard"
import { List } from "@/features/public/explore/ui/list"
import { getBillboard } from "@/features/public/explore/utilities/billboard"
import { getFeaturedItems } from "@/features/public/explore/utilities/item"

export const metadata = {
  title: "Explore",
}

export default async function Page() {
  const billboard = await getBillboard()
  const items = await getFeaturedItems()

  return (
    <>
      {billboard && <Billboard data={billboard} />}
      <ContentContainer withSpaceY>
        <List title="Featured News" items={items} />
      </ContentContainer>
    </>
  )
}
