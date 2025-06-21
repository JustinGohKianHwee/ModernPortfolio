// src/lib/utils.js
import clsx from "clsx";

/**
 * A tiny wrapper around clsx for merging className strings
 * and filtering out falsy values.
 *
 * Usage: cn("p-4", isActive && "bg-blue-500", extraClasses)
 */
export function cn(...args) {
  return clsx(...args);
}
