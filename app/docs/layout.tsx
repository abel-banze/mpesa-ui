'use client'

import DocsSidebar from "@/components/docs-sidebar";
import DocsHeader from "@/components/docs-header";
import { useState } from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen w-full">
      <DocsHeader onMenuClick={() => setSidebarOpen((v) => !v)} />
      <DocsSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 px-4 md:px-12 py-10 max-w-7xl mx-auto w-full lg:pl-64">
        {children}
      </main>
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
} 