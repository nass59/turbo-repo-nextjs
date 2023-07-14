"use client"

import { useEffect, useState } from "react"

import { StoreModal } from "@/components/admin/modals/store-modal"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Trick to avoid hydratation error during server side rendering
  // The server will not have modal open but the client will
  if (!isMounted) {
    return null
  }

  // Here we are in client side and we can display the modal
  return (
    <>
      <StoreModal />
    </>
  )
}
