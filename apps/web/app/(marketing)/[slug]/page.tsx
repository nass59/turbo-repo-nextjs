import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { allPages } from "contentlayer/generated"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"

interface PageProps {
  params: {
    slug: string
  }
}

function getPageFromParams(params: PageProps["params"]) {
  const page = allPages.find((page) => page.slug === params.slug)

  return page || null
}

export function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPageFromParams(params)

  if (!page) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", page.title)
  ogUrl.searchParams.set("type", siteConfig.name)
  ogUrl.searchParams.set("mode", "light")

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogUrl.toString()],
    },
  }
}

// @see https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export function generateStaticParams(): PageProps["params"][] {
  return allPages.map((page) => ({ slug: page.slug }))
}

export default function Page({ params }: PageProps) {
  const page = getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {page.title}
        </h1>

        {page.description && (
          <p className="text-xl text-muted-foreground">{page.description}</p>
        )}
      </div>

      <hr className="my-4" />

      <Mdx code={page.body.code} />
    </article>
  )
}
