import Sidebar from "@/components/Sidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-36 container mx-auto">
      <div className="flex items-start justify-between gap-8">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
}
