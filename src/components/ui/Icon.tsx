import React, { memo } from "react";
import * as L from "lucide-react";

type Name =
  | "sparkle" | "brain" | "layers" | "target" | "badge"
  | "globe" | "barchart" | "linechart" | "network" | "cloud"
  | "mail" | "file" | "download" | "external-link";

const MAP: Record<Name, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  sparkle: L.Sparkles,
  brain: L.Brain,
  layers: L.Layers,
  target: L.Target,
  badge: L.BadgeCheck ?? L.Badge,
  globe: L.Globe,
  barchart: L.BarChart3,
  linechart: L.LineChart,
  network: L.Network,
  cloud: L.Cloud,
  mail: L.Mail,
  file: L.FileText,
  download: L.Download,
  "external-link": L.ExternalLink,
};

export type IconProps = {
  name: Name;
  size?: "sm" | "md" | "lg";
  className?: string;
  gradient?: boolean; // cyan→blue gradient
  stroke?: number;    // 1 | 1.5 | 2
};

const sizeCN = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };

export const Icon = memo(({ name, size="md", className="", gradient=true, stroke=2 }: IconProps) => {
  const Cmp = MAP[name];
  const paint = gradient
    ? "text-cyan-400"
    : "text-cyan-400";
  return <Cmp className={`${sizeCN[size]} ${paint} ${className}`} strokeWidth={stroke} />;
});
Icon.displayName = "Icon";
