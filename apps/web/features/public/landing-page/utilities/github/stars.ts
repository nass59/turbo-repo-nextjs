import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"

type JsonResponse = {
  stargazers_count: number
}

// Revalidate the API every hour
const API_REVALIDATE = 3600

const getResponse = async () => {
  try {
    const response = await fetch(siteConfig.links.api_github, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
      },
      next: { revalidate: API_REVALIDATE },
    })

    if (!response?.ok) {
      return null
    }

    return (await response.json()) as JsonResponse
  } catch (error) {
    return null
  }
}

export const getGithubStars = async () => {
  const response = await getResponse()

  return response?.stargazers_count
}
