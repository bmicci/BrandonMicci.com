import React, { memo } from "react";

export const IconCircle = memo(({ children }: { children: React.ReactNode }) => (
  <div className="
    relative flex items-center justify-center
    w-10 h-10 md:w-14 md:h-14
    rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm
    shadow-inner ring-1 ring-white/5
    before:content-[''] before:absolute before:inset-0 before:rounded-full
    before:shadow-[0_0_14px_rgba(0,212,255,0.18)]
    md:before:shadow-[0_0_25px_rgba(0,212,255,0.25)]
  ">
    <div className="relative z-10">{children}</div>
  </div>
));
IconCircle.displayName = "IconCircle";
