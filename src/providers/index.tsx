import { PluginInitContext } from "@/context/PluginInitContext";
import { usePluginInit } from "@/hooks/usePluginInit";
import { ReactNode } from "react";

export const PluginInitContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <PluginInitContext.Provider value={usePluginInit()}>
    {children}
  </PluginInitContext.Provider>
);
