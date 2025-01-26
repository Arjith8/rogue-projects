"use client"
import { SideBarElement } from "./SideBarElement.tsx"
import { useState } from "react"

export function SideBar(){
    const [activeId, setActiveId] = useState(1)
    return (
        <div className="absolute right-0 top-0 border border-[#3C3855] h-full p-2 space-y-2 col-span-1">
            <SideBarElement active={1 === activeId} src="/all.svg" onClick={() => { setActiveId(1) }} />
            <SideBarElement active={2===activeId} src = "/django.svg" onClick={() => { setActiveId(2) }} />
            <SideBarElement active={3===activeId} src = "/celery.svg" onClick={() => { setActiveId(3) }} />
        </div>
    )
}

