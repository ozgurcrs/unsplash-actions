import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-screen bg-gray-100">{children}</div>;
};

export default Layout;
