"use client"
import { SideBar } from "@repo/ui/SideBar"
import { SearchBox } from "@repo/ui/SearchBox"
import { Search, Clock, Filter} from 'lucide-react'

export default function test(){
    return (
        <div className="h-screen w-screen grid grid-cols-[1fr_3.5rem] gap-1 bg-[#191724]">
            <SearchBox/>
            <SideBar />
        </div>
    )
}

