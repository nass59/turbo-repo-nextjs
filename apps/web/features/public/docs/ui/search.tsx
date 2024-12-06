"use client"

import { t } from "@/lib/i18n-next"
import { Input, toast } from "@shared/ui"

export const Search = () => {
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    toast({
      title: t("toast:title:not-implemented"),
      description: t("toast:desc:not-implemented"),
    })
  }

  return (
    <div className="hidden lg:flex">
      <form onSubmit={onSubmit} className="relative w-full">
        <Input
          type="search"
          placeholder={t("input:search-doc")}
          className="h-8 w-full sm:w-64 sm:pr-12"
        />
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100 sm:flex">
          <span>⌘</span>k
        </kbd>
      </form>
    </div>
  )
}
