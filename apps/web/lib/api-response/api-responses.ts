import { z } from "zod"

const RESPONSE_OK = 200
const RESPONSE_ACCESS_DENIED = 403
const RESPONSE_EMPTY_RESPONSE = 204
const RESPONSE_UNPROCESSABLE_ENTITY = 422
const RESPONSE_ERROR = 500

export const successResponse = () => {
  return new Response(null, { status: RESPONSE_OK })
}

export const accessDeniedResponse = () => {
  return new Response("Unauthorized", { status: RESPONSE_ACCESS_DENIED })
}

export const emptyResponse = () => {
  return new Response(null, { status: RESPONSE_EMPTY_RESPONSE })
}

export const errorResponse = (error: Error | z.ZodError | unknown) => {
  if (error instanceof z.ZodError) {
    return new Response(JSON.stringify(error.issues), {
      status: RESPONSE_UNPROCESSABLE_ENTITY,
    })
  }

  return new Response(null, { status: RESPONSE_ERROR })
}
