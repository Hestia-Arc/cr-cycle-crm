"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Search, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "properties",
    path: "/dashboard/properties",
    icon: Home,
  },
  {
    name: "leads",
    path: "/dashboard/leads",
    icon: Home,
  },
  {
    name: "contacts",
    path: "/dashboard/contacts",
    icon: User,
  },
  {
    name: "schedules",
    path: "/dashboard/schedules",
    icon: Calendar,
  },
  {
    name: "settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

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
        <div className=" min-h-[120px] w-full flex flex-col items-center gap-2">
          <div className="h-[100px] w-[100px] rounded-full bg-stone-500"></div>
          <h3 className="text-[18px]">Faith Gates</h3>
          <p className="text-[#7f7f7f] text-[12px]">Real Estate Developer</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.path}>
                      <item.icon />
                      <span className=" capitalize">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
