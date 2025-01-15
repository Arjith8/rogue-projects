"use client"
import { SideBarElement } from "@repo/ui/SideBarElement"
import { useState } from "react"

export default function test(){
    const [activeId, setActiveId] = useState(1)
    function activeIdSetter(id: number){
        setActiveId(id)
    }
    return (
        <div className="h-screen w-screen">
            <div className="absolute right-0 border border-[#3C3855] h-full  w-14 p-2 flex flex-col space-y-2 ">
                <SideBarElement active={1===activeId} src = "/all.svg" />
                <SideBarElement active={2===activeId} src = "/django.svg"/>
                <SideBarElement active={3===activeId} src = "/celery.svg"/>
            </div>
        </div>
    )
}
