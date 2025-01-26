import { Search } from 'lucide-react'
import * as React from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function SearchBox(){
    return (
        <div className="p-2 col-span-1 grid grid-rows-[3rem_1fr] gap-y-2">
            <div className="w-full bg-[#1f1d2e] border-[#2a2837] p-2 grid grid-cols-[2rem_1fr] items-center row-span-1">
                <Search className="w-5 h-5 text-[#6e6a86] "/>
                <input className="text-xl text-[#6e6a86] placeholder-[#6e6a86] bg-inherit focus:outline-none" placeholder="tetetet"/>
            </div>
            <div className="w-full p-5 row-span-1 bg-[#1f1d2e]">Hello</div>
            <ScrollAreaDemo/>

        </div>
    )
}

const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaDemo = () => (
	<ScrollArea.Root className="ScrollAreaRoot">
		<ScrollArea.Viewport className="ScrollAreaViewport">
			<div style={{ padding: "15px 20px" }}>
				<div className="Text">Tags</div>
				{TAGS.map((tag) => (
					<div className="Tag" key={tag}>
						{tag}
					</div>
				))}
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar
			className="ScrollAreaScrollbar"
			orientation="vertical"
		>
			<ScrollArea.Thumb className="ScrollAreaThumb" />
		</ScrollArea.Scrollbar>
		<ScrollArea.Scrollbar
			className="ScrollAreaScrollbar"
			orientation="horizontal"
		>
			<ScrollArea.Thumb className="ScrollAreaThumb" />
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner className="ScrollAreaCorner" />
	</ScrollArea.Root>
);
