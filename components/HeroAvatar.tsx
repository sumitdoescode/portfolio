import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroAvatar = () => {
    return (
        <Avatar className="size-44 relative">
            <AvatarImage src="/main/avatar.jpg" alt="@sumit" />
            <AvatarFallback className="text-2xl font-bold">SR</AvatarFallback>

            {/* Green dot */}
            <span className="absolute bottom-4 right-4 flex size-4">
                {/* Ping animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

                {/* Solid dot */}
                <span className="relative inline-flex size-4 rounded-full bg-green-600 border-2 border-background"></span>
            </span>
        </Avatar>
    );
};

export default HeroAvatar;
