import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { t } from "@/lib/i18n-next"
import { Button } from "@shared/ui"

export const HeaderActions = () => {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-2">
        {/* Dashboard */}
        <Button asChild>
          <Link href="/dashboard">{t("nav.go-to-dashboard")}</Link>
        </Button>

        {/* Github */}
        <Button asChild size="icon" variant="outline">
          <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
            <GitHubLogoIcon className="size-4" />
            <span className="sr-only">{t("brand.github")}</span>
          </Link>
        </Button>
      </nav>
    </div>
  )
}
