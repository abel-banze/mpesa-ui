"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, ChevronRight, Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

export default function DocsSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Close sidebar on route change (for mobile UX)
  useEffect(() => {
    if (!open) return;
    const handler = () => onClose();
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [open, onClose]);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-muted/40 border-r transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      style={{ height: '100vh' }}
    >
      <div className="flex items-center h-16 px-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg">M-Pesa</span>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)] px-4 py-6">
        <nav className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-muted-foreground px-2">Getting Started</h4>
            <Link href="#introduction" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><BookOpen className="w-4 h-4" />Introduction</Link>
            <Link href="#quick-start" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />Quick Start</Link>
            <Link href="#authentication" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />Authentication</Link>
          </div>
          <Separator />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-muted-foreground px-2">SDKs</h4>
            <Link href="#nodejs" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>🟢</span>Node.js</Link>
            <Link href="#python" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>🐍</span>Python</Link>
            <Link href="#php" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>🐘</span>PHP</Link>
            <Link href="#java" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>☕</span>Java</Link>
            <Link href="#csharp" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>🔷</span>C#/.NET</Link>
            <Link href="#go" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><span>🐹</span>Go</Link>
          </div>
          <Separator />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-muted-foreground px-2">API Reference</h4>
            <Link href="#c2b" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />C2B Payments</Link>
            <Link href="#b2c" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />B2C Payments</Link>
            <Link href="#b2b" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />B2B Payments</Link>
            <Link href="#reversal" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />Transaction Reversal</Link>
            <Link href="#query" className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent"><ChevronRight className="w-4 h-4" />Transaction Query</Link>
          </div>
        </nav>
      </ScrollArea>
    </aside>
  );
} 