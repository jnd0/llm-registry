import { benchmarks, flattenedModels } from "@/lib/registry-data";
import { NavbarClient } from "./navbar-client";

export function Navbar() {
  return (
    <NavbarClient 
      models={flattenedModels}
      benchmarks={benchmarks}
    />
  );
}
