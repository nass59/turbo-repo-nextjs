import { NextResponse } from "next/server"
import { z } from "zod"

import { errorResponse } from "@/lib/api-response/api-responses"
import { createPost, findPostsForUser } from "@/lib/database/post"

const postCreateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
})

// @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  try {
    // const session = await getServerSession(authOptions)

    // if (!session) {
    //   return accessDeniedResponse()
    // }

    // const { user } = session

    // if (!user.email) {
    //   return accessDeniedResponse()
    // }

    const posts = await findPostsForUser("test@email.com")

    return NextResponse.json(posts)
  } catch (error) {
    return errorResponse(error)
  }
}

// @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions)

    // if (!session) {
    //   return accessDeniedResponse()
    // }

    // const { user } = session

    // if (!user.email) {
    //   return accessDeniedResponse()
    // }

    const json = await req.json()
    const body = postCreateSchema.parse(json)
    const post = await createPost(body, "user.email")

    return NextResponse.json(post)
  } catch (error) {
    return errorResponse(error)
  }
}
