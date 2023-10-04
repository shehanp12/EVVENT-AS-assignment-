import Link from "next/link"

import { siteConfig } from "@/config/site"



import { ServiceCard } from "@/components/ui/Cards/servicesCard"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

import { dashbordlists } from "./data/dashbordList"

export default function IndexPage() {
  return (
    <>
    <div className="hidden md:block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar playlists={dashbordlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="music" className="h-full space-y-6">
                  <div className="flex items-center ">
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >

                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Dashboard
                        </h2>
                      </div>
                      <div className="space-between flex items-center">
                        <TabsList>
                          <TabsTrigger value="music" className="relative">
                            Music
                          </TabsTrigger>
                          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                          <TabsTrigger value="live" disabled>
                            Live
                          </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto mr-4"></div>
                      </div>
                    </TabsContent>
                  </div>

                  <div className="flex items-stretch">
                    <div className="">
                      <ServiceCard />
                    </div>
                    <div className="px-8">
                      <ServiceCard />
                    </div>
                    <div className="">
                      <ServiceCard />
                    </div>
                  </div>
                  <div className=" flex-start; ">
                    <Card className="col-span-3">
                      <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                          You made 265 sales this month.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="row">
                        <div className="grid grid-cols-4 gap-4">
                          <div className="...">01</div>
                          <div className="...">02</div>
                          <div className="...">03</div>
                          <div className="...">03</div>
                          {/* <div class="col-span-2 ...">04</div>
<div class="...">05</div>
<div class="...">06</div>
<div class="col-span-2 ...">07</div> */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Tabs>
              </div>
              <div className="space-between flex items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </>
)
}
  

