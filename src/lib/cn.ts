import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class merge helper — conflict হলে শেষের class জেতে
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
