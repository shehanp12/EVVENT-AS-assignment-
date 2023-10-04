import Link from "next/link"
import { BsChat, BsPlus } from "react-icons/bs"
import { GrNotification } from "react-icons/gr"
import { FcManager } from "react-icons/fc"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="row-span-1 flex"></div>

        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row">
                <BsPlus />
                <div className="flex cursor-not-allowed items-center text-sm font-medium opacity-80">
                  Add Services
                </div>
              </div>
            </Link>
            <div className="px-4"></div>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-4"></div>
              <BsChat />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <GrNotification />
            </Link>
            <div className="px-2"></div>
            <FcManager/>
          </nav>
        </div>
      </div>
    </header>
  )
}
