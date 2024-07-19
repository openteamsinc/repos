"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadCDN/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useEffect, useState } from "react"

export const HomePageAvatar = ({ name, profileImage }: { name: string, profileImage: string }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    // Open URL in a new window
    const openNewWindow = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        window.open(url, '_blank', '');
    }

    if (!isMounted) {
        return <span>{name}</span>
    }

    return <div>
        <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger onClick={(e) => openNewWindow(e, `https://github.com/${name}`)}>
                <Avatar className="w-10 h-10">
                    <AvatarImage src={profileImage} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="bg-black bg-opacity-80 text-white w-max text-center z-90 p-2">
                {name}
            </HoverCardContent>
        </HoverCard>
    </div>
}