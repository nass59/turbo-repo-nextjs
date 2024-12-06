import { type SidebarNavItem } from "types"

import { SidebarItems } from "./sidebar-items"

type Props = {
  items: SidebarNavItem[]
}

export const Sidebar = ({ items }: Props) => {
  if (!items) {
    return null
  }

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 space-y-8 overflow-y-auto border-r py-6 pr-2 md:sticky md:block">
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <h4 className="px-3 text-sm font-bold">{item.title}</h4>
          {item.items && <SidebarItems items={item.items} />}
        </div>
      ))}
    </aside>
  )
}
