import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
   
    <div className="flex items-center gap-6 md:gap-10 ">
      <Card className="bg-rose-600">
        <CardHeader className="h-1 justify-center">
          <div className="font-medium text-white">evvent.no</div>
        </CardHeader>
      </Card>
      <div className="px-8"></div>

      {items?.length ? (
        <nav className="flex gap-10">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium ",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
    
  )
}
