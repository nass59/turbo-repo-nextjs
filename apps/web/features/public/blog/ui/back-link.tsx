import Link from "next/link"
import { ChevronLeftIcon } from "@radix-ui/react-icons"

import { routes } from "@/constants/routes"
import { t } from "@/lib/i18n-next"
import { buttonVariants, cn } from "@shared/ui"

type Props = {
  className?: string
}

export const BackLink = ({ className }: Props) => {
  return (
    <Link
      href={routes.blog}
      className={cn(buttonVariants({ variant: "ghost" }), className)}
    >
      <ChevronLeftIcon className="mr-2 size-4" />
      {t("nav:see-all-posts")}
    </Link>
  )
}
