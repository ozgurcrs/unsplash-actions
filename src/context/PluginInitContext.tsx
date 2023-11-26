import { usePluginInit } from "@/hooks/usePluginInit";
import { createContext } from "react";

export const PluginInitContext = createContext(
  {} as ReturnType<typeof usePluginInit>
);
