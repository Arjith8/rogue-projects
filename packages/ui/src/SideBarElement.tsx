import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SideBarElementProps {
  src: string;
  active: boolean;
}

export function SideBarElement({src, active}: SideBarElementProps){
    const baseClass = "cursor-pointer flex justify-center items-center rounded h-10 w-10 hover:shadow-[0_0_5px_#6E6A86,0_0_10px_#6E6A86] transition-shadow duration-300"
    const className = clsx(baseClass, { 'bg-[#3D3A53]': active})
    return (
        <div className={className}>
           <img src={src} />
        </div>
    )
}
