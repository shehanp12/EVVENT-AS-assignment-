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
                        <div className="py-1"></div>
                        <div className="space-between flex items-center">
                          <TabsList>
                            <TabsTrigger
                              style={{
                                background: "rgb(253 164 175)",
                                color: "rgb(76 5 25);",
                              }}
                              value="music"
                              className="relative"
                            >
                              Overview
                            </TabsTrigger>
                            <TabsTrigger value="podcasts">
                              Transaction List
                            </TabsTrigger>
                          </TabsList>
                          <div className="ml-auto mr-4"></div>
                        </div>
                      </TabsContent>
                    </div>

                    <div className="grid grid-cols-3 ">
                      <div className="">
                        <ServiceCard
                          title="Active Services"
                          serviceNumber="24"
                        />
                      </div>
                      <div className="px-8">
                      <ServiceCard
                          title="Active Services"
                          serviceNumber="24"
                        />
                      </div>
                      <div className="">
                      <ServiceCard
                          title="Active Services"
                          serviceNumber="24"
                        />
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
