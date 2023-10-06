import { ChevronRightIcon, CircleIcon, PlusIcon, StarIcon } from "lucide-react"

import { Button } from "../button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu"
import { Separator } from "../separator"

export function ServiceCard(props: any) {
  return (
    <div className="grid ">
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{props.title}</CardTitle>
            <div className="px-8"></div>
           
            <CardDescription>
              <p className="text-1xl font-bold text-black "
            > <span className="text-3xl">{props.serviceNumber}</span> Services</p>
           </CardDescription>
           
          </div>
          <div className="ml-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  style={{ background: "white" }}
                  className="px-2 "
                >
                  <ChevronRightIcon className="h-4 w-4 text-secondary-foreground"  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Future Ideas
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusIcon className="mr-2 h-4 w-4" /> Create List
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">Last Month</div>
            <div className="flex items-center">
             <p className="font-bold text-black">15</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
