import type { Metadata } from "next";
import Link from "next/link";
import UserDropdown from "@/components/user-dropdown";

export const metadata: Metadata = {
  title: "Experiment 03 - Crafted.is",
};

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumb";
import { Separator } from "@/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/sidebar";
import { Chart01 } from "@/components/chart-01";
import { Chart02 } from "@/components/chart-02";
import { Chart03 } from "@/components/chart-03";
import { Chart04 } from "@/components/chart-04";
import { Chart05 } from "@/components/chart-05";
import { Chart06 } from "@/components/chart-06";
import { ActionButtons } from "@/components/action-buttons";
import { NavUser } from "@/components/nav-user";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Card, CardContent } from "@/components/card";
import { RiTimeLine, RiDatabase2Line, RiMoneyDollarCircleLine, RiShareForwardLine, RiExchangeDollarLine, RiCheckDoubleLine, RiCloseCircleLine, RiArrowRightUpLine, RiArrowUpSLine, RiArrowDownSLine } from "@remixicon/react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/sheet";
import { Button } from "@/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import {
  RiLogoutCircleLine,
  RiTimer2Line,
  RiUserLine,
  RiFindReplaceLine,
  RiPulseLine,
} from "@remixicon/react";

const user = {
  name: "Mark Bannert",
  email: "mark@bannert.com",
  avatar:
    "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp3/user_itiiaq.png",
};

const stats = [
  {
    label: "API Calls",
    value: "1,204,876",
    diff: "+8%",
    diffColor: "text-green-500",
    icon: RiExchangeDollarLine,
    sub: "vs last week",
  },
  {
    label: "Successful Transactions",
    value: "1,198,320",
    diff: "+7.5%",
    diffColor: "text-green-500",
    icon: RiCheckDoubleLine,
    sub: "vs last week",
  },
  {
    label: "Failed Transactions",
    value: "6,556",
    diff: "-2.1%",
    diffColor: "text-red-500",
    icon: RiCloseCircleLine,
    sub: "vs last week",
  },
  {
    label: "Revenue",
    value: "$12,430",
    diff: "+4.2%",
    diffColor: "text-green-500",
    icon: RiMoneyDollarCircleLine,
    sub: "vs last week",
  },
];

const apps = [
  { name: "Payments API", status: "Active", env: "Live" },
  { name: "Sandbox App", status: "Testing", env: "Test" },
  { name: "Webhook Listener", status: "Active", env: "Live" },
];

const recentOperations = [
  {
    date: "2024-06-10 14:23",
    operation: "C2B Payment",
    app: "Payments API",
    status: "Success",
    value: "$120.00",
  },
  {
    date: "2024-06-10 13:55",
    operation: "Token Generation",
    app: "Sandbox App",
    status: "Success",
    value: "-",
  },
  {
    date: "2024-06-10 13:40",
    operation: "B2C Payout",
    app: "Payments API",
    status: "Failed",
    value: "$500.00",
  },
  {
    date: "2024-06-10 12:10",
    operation: "Webhook Test",
    app: "Webhook Listener",
    status: "Success",
    value: "-",
  },
  {
    date: "2024-06-10 11:45",
    operation: "C2B Payment",
    app: "Payments API",
    status: "Success",
    value: "$75.00",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-5 px-0 md:px-0 w-full max-w-6xl mx-auto">
      {/* Header conforme design fornecido */}
      <header className="dark flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground relative before:absolute before:inset-y-3 before:-left-px before:w-px before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 before:z-50">
        <SidebarTrigger className="-ms-2" />
        <div className="flex items-center gap-8 ml-auto">
          <nav className="flex items-center text-sm font-medium max-sm:hidden">
            <a
              className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
              href="#"
              aria-current
            >
              Dashboard
            </a>
            <a
              className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
              href="#"
            >
              Docs
            </a>
            <a
              className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors [&[aria-current]]:text-sidebar-foreground before:content-['/'] before:px-4 before:text-sidebar-foreground/30 first:before:hidden"
              href="#"
            >
              Playground
            </a>
          </nav>
          <UserDropdown />
        </div>
      </header>

      {/* Stat Cards - novo design */}
      <section className="w-full px-4 md:px-6 lg:px-8 rounded-l-3xl">
        <div className="flex flex-col md:flex-row bg-[#191B20] rounded-2xl border border-[#23242A] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#23242A]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex-1 flex items-center gap-4 px-6 py-6 min-w-[180px]"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#23242A]">
                <stat.icon className="text-green-400" size={32} />
              </span>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="uppercase text-xs text-[#6EE7B7] tracking-widest font-medium mb-1">{stat.label}</span>
                <span className="text-2xl font-bold text-white leading-tight">{stat.value}</span>
                <span className="flex items-center gap-1 text-xs mt-1">
                  {stat.diff.startsWith("-") ? (
                    <RiArrowDownSLine className="text-red-500" size={16} />
                  ) : (
                    <RiArrowUpSLine className="text-green-500" size={16} />
                  )}
                  <span className={stat.diff.startsWith("-") ? "text-red-500" : "text-green-500"}>{stat.diff}</span>
                  <span className="text-[#A1A1AA] ml-1">vs last week</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apps Cards */}
      <section className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Apps</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default">New App</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Create New App</SheetTitle>
              </SheetHeader>
              <form className="flex flex-col gap-4 p-4">
                <div>
                  <label className="block text-sm font-medium mb-1">App Name</label>
                  <input type="text" className="w-full rounded border px-3 py-2 bg-muted" placeholder="Enter app name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Environment</label>
                  <select className="w-full rounded border px-3 py-2 bg-muted">
                    <option value="test">Test</option>
                    <option value="live">Live</option>
                  </select>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" variant="default" className="w-full">Create App</Button>
                  </SheetClose>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {apps.map((app) => (
            <Card key={app.name} className="rounded-xl">
              <CardContent className="flex flex-col gap-2 py-6">
                <span className="text-base font-semibold">{app.name}</span>
                <span className="text-xs text-muted-foreground">Status: {app.status}</span>
                <span className="text-xs text-muted-foreground">Environment: {app.env}</span>
                <Link href={`/apps/${encodeURIComponent(app.name.toLowerCase().replace(/\s+/g, '-'))}`} className="mt-3 inline-block">
                  <Button variant="outline" size="sm">Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Operations Table */}
      <section className="mt-2 px-4 md:px-6 lg:px-8">
        <h2 className="text-lg font-semibold mb-4">Recent Operations</h2>
        <div className="overflow-x-auto rounded-xl border bg-card">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="px-4 py-2 text-left font-semibold">Date</th>
                <th className="px-4 py-2 text-left font-semibold">Operation</th>
                <th className="px-4 py-2 text-left font-semibold">App</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {recentOperations.map((op, i) => (
                <tr key={i} className="border-t last:border-b">
                  <td className="px-4 py-2 whitespace-nowrap">{op.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{op.operation}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{op.app}</td>
                  <td className={`px-4 py-2 whitespace-nowrap font-medium ${op.status === "Success" ? "text-green-500" : "text-red-500"}`}>{op.status}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{op.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
