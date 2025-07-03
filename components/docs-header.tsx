import Link from "next/link";
import { Button } from "@/components/button";
import { Menu, Github, ExternalLink, Smartphone } from "lucide-react";
import UserDropdown from "@/components/user-dropdown";

export default function DocsHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-6">
        <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/docs" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg">M-Pesa Docs</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 ml-8">
          <Link href="/docs" className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</Link>
          <Link href="/docs/api" className="text-sm text-muted-foreground hover:text-white transition-colors">API</Link>
          <Link href="/docs/support" className="text-sm text-muted-foreground hover:text-white transition-colors">Support</Link>
        </nav>
        
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/abel-banze/mpesa-ui" target="_blank" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </Button>

          <UserDropdown />
        </div>
      </div>
    </header>
  );
} 