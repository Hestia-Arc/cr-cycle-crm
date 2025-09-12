"use client";

import { Building, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "leads",
    path: "/dashboard/leads",
    icon: User,
  },
  {
    name: "properties",
    path: "/dashboard/properties",
    icon: Building,
  },

  // {
  //   name: "contacts",
  //   path: "/dashboard/contacts",
  //   icon: User,
  // },
  // {
  //   name: "schedules",
  //   path: "/dashboard/schedules",
  //   icon: Calendar,
  // },
  {
    name: "settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const listStyle =
  "flex items-center gap-3 capitalize text-[#fff] text-[14px] p-2 rounded-xs";

function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      side="left"
      collapsible="icon"
      className=" rounded-[10px] text-[#fff]"
    >
      <SidebarHeader>
        {/* <Avatar /> */}
        <div className="h-[50px] w-full flex flex-col items-center gap-2">
          <Link
            href="../"
            // style={{ color: colors.primary[600] }}
            className="text-[18px] mr-auto"
          >
            CR-CYCLE
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <SidebarMenuItem key={`${item.name}-${item.path}`}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path}
                        className={`${listStyle} ${
                          isActive &&
                          `bg-[#f5f5f5] !text-[#6099f7] !font-medium`
                        }`}
                      >
                        <item.icon />
                        <span className=" capitalize">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem></SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
