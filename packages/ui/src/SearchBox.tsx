import { Search } from 'lucide-react'

export function SearchBox(){
    return (
        <div className="p-2 col-span-1 grid grid-rows-[3rem_1fr] gap-y-2">
            <div className="w-full bg-[#1f1d2e] border-[#2a2837] p-2 grid grid-cols-[2rem_1fr] items-center row-span-1">
                <Search className="w-5 h-5 text-[#6e6a86] "/>
                <input className="text-xl text-[#6e6a86] placeholder-[#6e6a86] bg-inherit focus:outline-none" placeholder="tetetet"/>
            </div>
            <div className="w-full p-5 row-span-1 bg-[#1f1d2e]">Hello</div>
        </div>
    )
}

const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);
