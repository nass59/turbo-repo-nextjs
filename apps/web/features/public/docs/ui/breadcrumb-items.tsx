"use client"

import { Fragment } from "react"
import { usePathname } from "next/navigation"

export const BreadcrumbItems = () => {
  const pathname = usePathname()

  if (!pathname) {
    return null
  }

  const segments = pathname.split("/").slice(2)

  return (
    <div className="flex space-x-2">
      {segments.map((segment) => (
        <Fragment key={segment}>
          <span key={segment} className="rounded-full text-slate-900">
            {segment}
          </span>
          <span className="text-slate-600">/</span>
        </Fragment>
      ))}
    </div>
  )
}
