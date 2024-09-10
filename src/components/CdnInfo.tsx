"use client";

import { usePathname } from "next/navigation";
import Info from "./Info";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const skipHeaderRoutes = ["/login", "/register", "/update-password", "/forgot-password", "/verify-OTP"];

  if (skipHeaderRoutes.includes(pathname)) {
    return null;
  }

  return (
    <>
      <Info />
    </>
  );
};

export default ConditionalFooter;
