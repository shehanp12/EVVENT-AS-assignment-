import {
  AiFillDollarCircle,
  AiFillMessage,
  AiOutlinePieChart,
} from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { IoAnalytics } from "react-icons/io5"
import {  BiSolidBox} from "react-icons/bi"
import {  HiLogout} from "react-icons/hi"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dashbordlist } from "@/app/data/dashbordList"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Dashbordlist[]
}
export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <AiOutlinePieChart />
              <div className="px-1 py-2"></div>
              <p className="font-bold">Dashboard</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>

              <p className="font-bold"> Services</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <IoAnalytics />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> Analytics</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AiFillDollarCircle />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> Earnings</p>
            </Button>
          </div>
          <div>
            <hr className="custom-hr" />
          </div>

          <div></div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <CgProfile />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> My Profile</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AiFillMessage />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> My Messages</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
            <BiSolidBox />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> My Orders</p>
            
            </Button>
            <Button variant="ghost" className="w-full justify-start">
            <HiLogout />
              <div className="px-1 py-2"></div>
              <p className="font-bold"> Log out</p>
            
            </Button>
           
          
          </div>
          
        </div>
        {/* <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div> */}
      </div>
    </div>
  )
}
