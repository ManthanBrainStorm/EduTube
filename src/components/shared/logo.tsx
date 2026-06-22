import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
        <Play className="h-3.5 w-3.5 fill-white text-white" />
      </div>
      {showText && (
        <span className="text-lg font-semibold tracking-tight">EduTube</span>
      )}
    </div>
  );
}
