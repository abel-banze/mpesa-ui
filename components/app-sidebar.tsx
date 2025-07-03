"use client";

import * as React from "react";
import Link from "next/link";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/sidebar";
import {
  RiSlowDownLine,
  RiLeafLine,
  RiNavigationLine,
  RiSpeakLine,
  RiCodeSSlashLine,
  RiGeminiLine,
  RiLinksLine,
  RiDatabase2Line,
  RiUser3Line,
  RiTeamLine,
  RiSettings3Line,
  RiQuestionLine,
  RiHistoryLine,
  RiKey2Line,
  RiBook2Line,
  RiPlayLine,
  RiBarChart2Line,
  RiNotification3Line,
  RiShieldUserLine,
} from "@remixicon/react";

// This is sample data.
const data = {
  user: {
    name: "Abel Banze",
    email: "abelbartolomeu06@gmail.com",
    avatar:
      "https://avatars.githubusercontent.com/u/72819474?v=4",
  },
  navMain: [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: RiBarChart2Line,
          isActive: true,
        },
        {
          title: "Notifications",
          url: "/notifications",
          icon: RiNotification3Line,
        },
      ],
    },
    {
      title: "Developer",
      items: [
        {
          title: "Apps",
          url: "#",
          icon: RiGeminiLine,
        },
        {
          title: "Tokens",
          url: "/dashboard/tokens",
          icon: RiKey2Line,
        },
        {
          title: "Documentation",
          url: "/docs",
          icon: RiBook2Line,
        },
        {
          title: "Playground",
          url: "#",
          icon: RiPlayLine,
        },
        {
          title: "Usage",
          url: "#",
          icon: RiBarChart2Line,
        },
        {
          title: "History",
          url: "#",
          icon: RiHistoryLine,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Profile",
          url: "#",
          icon: RiUser3Line,
        },
        {
          title: "Teams",
          url: "#",
          icon: RiTeamLine,
        },
        {
          title: "Security",
          icon: RiShieldUserLine,
          submenu: [
            {
              title: "Access Control",
              url: "#",
            },
            {
              title: "API Keys",
              url: "#",
            },
            {
              title: "Audit Logs",
              url: "#",
            },
          ],
        },
        {
          title: "Settings",
          icon: RiSettings3Line,
          submenu: [
            {
              title: "General",
              url: "#",
            },
            {
              title: "Preferences",
              url: "#",
            },
            {
              title: "Billing",
                url: "#",
            },
          ],
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Help Center",
          url: "#",
          icon: RiQuestionLine,
        },
        {
          title: "Contact",
          url: "#",
          icon: RiSpeakLine,
        },
      ],
    },
  ],
};

type SidebarItem = {
  title: string;
  url?: string;
  icon?: React.ComponentType<any>;
  isActive?: boolean;
  submenu?: { title: string; url: string }[];
};

function SidebarLogo() {
  return (
    <div className="flex items-center gap-2 px-6 h-16">
      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="2"/><rect x="9" y="18" width="6" height="2" rx="1"/><rect x="9" y="4" width="6" height="12" rx="1"/></svg>
      </div>
      <span className="font-bold text-lg">M-Pesa</span>
    </div>
  );
}

function SidebarMenuItemCustom({ item }: { item: SidebarItem }) {
  const Icon = item.icon;
  const isActive = item.isActive;
  const content = (
    <>
      {Icon && (
        <Icon className="w-5 h-5" style={{ color: isActive ? '#1AB650' : undefined }} />
      )}
      <span className="truncate">{item.title}</span>
    </>
  );
  return (
    <SidebarMenuItem className="flex items-center gap-3 mb-2">
      {item.url ? (
        <Link href={item.url} className="flex items-center gap-3 w-full h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </SidebarMenuItem>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader className="h-16 max-md:mt-2 mb-2 justify-center">
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent className="-mt-2">
        {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="uppercase text-muted-foreground/65">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItemCustom key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
