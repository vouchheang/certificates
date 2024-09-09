"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  const skipHeaderRoutes = ["/login", "/register"];

  if (skipHeaderRoutes.includes(pathname)) {
    return null;
  }

  return <Header />;
};

export default ConditionalHeader;
