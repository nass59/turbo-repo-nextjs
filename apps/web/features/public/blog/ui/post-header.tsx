import { t } from "@/lib/i18n-next"
import { formatDate } from "@/lib/utils"

import { Authors } from "./authors"
import { type Post } from "./post"

type Props = {
  post: Post
}

export const PostHeader = ({ post }: Props) => {
  return (
    <div className="space-y-2">
      <time
        dateTime={post.date}
        className="block text-sm text-muted-foreground"
      >
        {t("date:published-on", { date: formatDate(post.date) })}
      </time>

      <h1 className="font-heading text-3xl leading-tight lg:text-5xl">
        {post.title}
      </h1>

      <Authors authors={post.authors} />
    </div>
  )
}
