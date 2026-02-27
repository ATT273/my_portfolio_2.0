import type { NavigationItem } from "../types";
import { Blocks, BookUser, CodeXml, UserRound } from "lucide-react";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { key: "home", label: "Home", icon: null },
  { key: "about", label: "About", icon: UserRound },
  { key: "projects", label: "Projects", icon: Blocks },
  { key: "exp", label: "Experience", icon: BookUser },
  { key: "skills", label: "Skills", icon: CodeXml },
];
