import Container from "@/components/layout/Container";
import React from "react";

type TDashboardLayout = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: TDashboardLayout) {
  return <Container>{children}</Container>;
}
