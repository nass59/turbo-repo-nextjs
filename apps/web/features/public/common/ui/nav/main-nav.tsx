"use client"

import { useState, type PropsWithChildren } from "react"
import { Cross2Icon, RocketIcon } from "@radix-ui/react-icons"

import { type MainNavItem as TypeMainNavItem } from "types"
import { t } from "@/lib/i18n-next"
import { Button } from "@shared/ui"
import { Logo } from "@/components/logo"

import { MainNavItems } from "./main-nav-items"
import { MobileNav } from "./mobile-nav"

type Props = PropsWithChildren & {
  items?: TypeMainNavItem[]
}

export const MainNav = ({ items, children }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggle = () => setShowMobileMenu(!showMobileMenu)
  const close = () => setShowMobileMenu(false)

  return (
    <div className="flex gap-6">
      <Logo />

      <MainNavItems className="hidden gap-2 md:flex" items={items} />

      <Button
        className="space-x-2 md:hidden"
        size="md"
        variant="ghost"
        onClick={toggle}
      >
        {showMobileMenu ? (
          <Cross2Icon className="size-5" />
        ) : (
          <RocketIcon className="size-5" />
        )}
        <span className="font-bold">{t("nav.menu")}</span>
      </Button>

      {showMobileMenu && items && (
        <MobileNav close={close} items={items}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
