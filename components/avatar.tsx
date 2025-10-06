import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  size?: number;
  className?: string;
};

export function Avatar({ size = 140, className }: AvatarProps) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-sm", className)}>
      <Image
        src="/headshot.jpg"
        alt="Portrait of Ethan G. Hall"
        width={size}
        height={size}
        priority
        className="rounded-2xl object-cover"
      />
    </div>
  );
}
