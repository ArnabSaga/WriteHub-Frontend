import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { adminRoutes } from "@/routes/adminRoutes";
import { userRoutes } from "@/routes/userRoutes";

// This is sample data.
const data = {
  logo: {
    url: "/",
    src: "/logo.svg",
    alt: "WriteHub logo",
    title: "WriteHub",
  },
  navMain: [
    {
      title: "WriteHub",
      items: [
        {
          title: "User Dashboard",
          url: "/dashboard",
        },
        {
          title: "Admin Dashboard",
          url: "/admin-dashboard",
        },
      ],
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let routes = [];
  switch (user.role) {
    case "admin":
      routes = adminRoutes;
      break;
    case "user":
      routes = userRoutes;
      break;

    default:
      routes = [];
      break;
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <div className="flex items-center gap-3 px-4 py-4 border-b-2">
          <Link href={data.logo.url} className="flex items-center gap-3">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-lg font-semibold">{data.logo.title}</span>
          </Link>
        </div>

        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
