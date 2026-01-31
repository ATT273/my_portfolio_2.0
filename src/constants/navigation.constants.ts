import type { NavigationItem } from "../types";
import { Blocks, BookUser, CodeXml, Folder, UserRound } from "lucide-react";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { key: "home", label: "Home", icon: null },
  { key: "about", label: "About", icon: UserRound },
  { key: "exp", label: "Experience", icon: BookUser },
  { key: "works", label: "Works", icon: Folder },
  { key: "projects", label: "Projects", icon: Blocks },
  { key: "skills", label: "Skills", icon: CodeXml },
];
