"use client"

import Image from "next/image"
import { BellIcon } from "@radix-ui/react-icons"
import OgImage from "public/og-light.jpg"

import { siteConfig } from "@/config/site"
import { t } from "@/lib/i18n-next"
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui"

export const Help = () => {
  return (
    <Popover>
      <PopoverTrigger className="fixed bottom-4 right-8 inline-flex size-10 items-center justify-center rounded-full border bg-slate-900 text-white">
        <BellIcon className="size-5" />
        <span className="sr-only">{t("a11y:toggle")}</span>
      </PopoverTrigger>
      <PopoverContent className="mb-1 mr-8 w-[300px] bg-slate-900 p-4 text-sm text-white">
        <div className="grid gap-4">
          <Image
            src={OgImage}
            alt={t("a11y:screenshot")}
            className="overflow-hidden rounded-sm"
          />
          <p>{t("desc:wip")}</p>
          <p>
            {t.rich("action:follow", {
              link: (chunks) => (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-b-white"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
