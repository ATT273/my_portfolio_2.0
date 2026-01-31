import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";

export type PageAnchor = "home" | "about" | "skills" | "projects" | "contact" | "exp" | "works";
export type NavigationItem = {
  key: PageAnchor;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | null;
};
