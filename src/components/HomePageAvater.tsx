import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadCDN/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export const HomePageAvatar = ({ name, profileImage }: { name: string, profileImage: string }) => {
    return <div>
        <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
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