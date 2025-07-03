"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/sheet";
import { RiFileCopyLine, RiEyeLine, RiEyeOffLine, RiDeleteBinLine, RiRefreshLine, RiEdit2Line } from "@remixicon/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/input";

const fakeApps = [
  { id: 1, name: "Payments API" },
  { id: 2, name: "Sandbox App" },
  { id: 3, name: "Webhook Listener" },
];

const fakeTokens = {
  development: [
    {
      id: 1,
      name: "Dev Token 1",
      value: "dev-1234-xxxx-xxxx-5678",
      app: "Payments API",
      createdAt: "2024-06-01",
      lastUsed: "2024-06-10",
      status: "Active",
    },
    {
      id: 2,
      name: "Dev Token 2",
      value: "dev-9876-xxxx-xxxx-4321",
      app: "Sandbox App",
      createdAt: "2024-05-15",
      lastUsed: "2024-06-09",
      status: "Revoked",
    },
  ],
  production: [
    {
      id: 3,
      name: "Prod Token 1",
      value: "prod-1111-xxxx-xxxx-2222",
      app: "Payments API",
      createdAt: "2024-04-20",
      lastUsed: "2024-06-08",
      status: "Active",
    },
  ],
};

export default function TokensPage() {
  const [tab, setTab] = useState<'development' | 'production'>('development');
  const [showToken, setShowToken] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [showKeySheet, setShowKeySheet] = useState(false);
  const [tempKey, setTempKey] = useState("");

  const tokens = fakeTokens[tab];

  // Gerar uma publicKey fake (random)
  const publicKey = `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA${Math.random().toString(36).substring(2, 18).toUpperCase()}\n${Math.random().toString(36).substring(2, 18).toUpperCase()}\n-----END PUBLIC KEY-----`;
  const [copiedKey, setCopiedKey] = useState(false);

  function handleTabChange(value: string) {
    setTab(value as 'development' | 'production');
  }

  function handleCopy(token: string, id: number) {
    navigator.clipboard.writeText(token);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1200);
  }

  function handleShow(id: number) {
    setShowToken((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleCopyKey() {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 1200);
    }
  }

  function handleSaveKey(e: React.FormEvent) {
    e.preventDefault();
    setTempKey(tempKey);
    setShowKeySheet(false);
  }

  return (
    <div className="flex flex-col gap-8 py-10 px-4 md:px-8 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground">API Tokens</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your development and production tokens for secure API access.</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default">New Token</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Create New Token</SheetTitle>
            </SheetHeader>
            <form className="flex flex-col gap-4 p-4">
              <div>
                <label className="block text-sm font-medium mb-1">Token Name</label>
                <input type="text" className="w-full rounded border px-3 py-2 bg-muted" placeholder="Enter token name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">App</label>
                <Select defaultValue={fakeApps[0].name}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select app" />
                  </SelectTrigger>
                  <SelectContent>
                    {fakeApps.map((app) => (
                      <SelectItem key={app.id} value={app.name}>{app.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Environment</label>
                <Select defaultValue={tab}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" variant="default" className="w-full">Create Token</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
        <TabsList>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
        </TabsList>
        <TabsContent value="development">
          <Card className="rounded-xl mb-4">
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="font-semibold text-lg mb-2">Public Key</div>
              <div className="flex items-center gap-2">
                <Input
                  value={publicKey}
                  readOnly
                />
                <Button size="icon" variant="ghost" onClick={() => {
                  navigator.clipboard.writeText(publicKey);
                  setCopiedKey(true);
                  setTimeout(() => setCopiedKey(false), 1200);
                }} aria-label="Copy public key">
                  <RiFileCopyLine />
                </Button>
                {copiedKey && <span className="text-xs text-green-500 ml-1">Copied!</span>}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl mt-0">
            <CardContent className="p-0">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="px-4 py-2 text-left font-semibold">Name</th>
                    <th className="px-4 py-2 text-left font-semibold">App</th>
                    <th className="px-4 py-2 text-left font-semibold">Token</th>
                    <th className="px-4 py-2 text-left font-semibold">Created</th>
                    <th className="px-4 py-2 text-left font-semibold">Last Used</th>
                    <th className="px-4 py-2 text-left font-semibold">Status</th>
                    <th className="px-4 py-2 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fakeTokens.development.map((token) => (
                    <tr key={token.id} className="border-t last:border-b">
                      <td className="px-4 py-2 whitespace-nowrap">{token.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.app}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2">
                          <span className="font-mono">
                            {showToken[token.id] ? token.value : token.value.replace(/.(?=.{4})/g, "*")}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleShow(token.id)}
                            aria-label={showToken[token.id] ? "Hide token" : "Show token"}
                          >
                            {showToken[token.id] ? <RiEyeOffLine /> : <RiEyeLine />}
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleCopy(token.value, token.id)}
                            aria-label="Copy token"
                          >
                            <RiFileCopyLine />
                          </Button>
                          {copiedId === token.id && (
                            <span className="text-xs text-green-500 ml-1">Copied!</span>
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.createdAt}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.lastUsed}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={
                          token.status === "Active"
                            ? "text-green-500"
                            : token.status === "Revoked"
                            ? "text-red-500"
                            : "text-muted-foreground"
                        }>
                          {token.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap flex gap-1">
                        <Button size="icon" variant="ghost" aria-label="Regenerate">
                          <RiRefreshLine />
                        </Button>
                        <Button size="icon" variant="ghost" aria-label="Revoke">
                          <RiDeleteBinLine />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="production">
          <Card className="rounded-xl mb-4">
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="font-semibold text-lg mb-2">Public Key</div>
              <div className="flex items-center gap-2">
                <Input
                  value={publicKey}
                  readOnly
                />
                <Button size="icon" variant="ghost" onClick={() => {
                  navigator.clipboard.writeText(publicKey);
                  setCopiedKey(true);
                  setTimeout(() => setCopiedKey(false), 1200);
                }} aria-label="Copy public key">
                  <RiFileCopyLine />
                </Button>
                {copiedKey && <span className="text-xs text-green-500 ml-1">Copied!</span>}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl mt-0">
            <CardContent className="p-0">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="px-4 py-2 text-left font-semibold">Name</th>
                    <th className="px-4 py-2 text-left font-semibold">App</th>
                    <th className="px-4 py-2 text-left font-semibold">Token</th>
                    <th className="px-4 py-2 text-left font-semibold">Created</th>
                    <th className="px-4 py-2 text-left font-semibold">Last Used</th>
                    <th className="px-4 py-2 text-left font-semibold">Status</th>
                    <th className="px-4 py-2 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fakeTokens.production.map((token) => (
                    <tr key={token.id} className="border-t last:border-b">
                      <td className="px-4 py-2 whitespace-nowrap">{token.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.app}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2">
                          <span className="font-mono">
                            {showToken[token.id] ? token.value : token.value.replace(/.(?=.{4})/g, "*")}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleShow(token.id)}
                            aria-label={showToken[token.id] ? "Hide token" : "Show token"}
                          >
                            {showToken[token.id] ? <RiEyeOffLine /> : <RiEyeLine />}
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleCopy(token.value, token.id)}
                            aria-label="Copy token"
                          >
                            <RiFileCopyLine />
                          </Button>
                          {copiedId === token.id && (
                            <span className="text-xs text-green-500 ml-1">Copied!</span>
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.createdAt}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{token.lastUsed}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={
                          token.status === "Active"
                            ? "text-green-500"
                            : token.status === "Revoked"
                            ? "text-red-500"
                            : "text-muted-foreground"
                        }>
                          {token.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap flex gap-1">
                        <Button size="icon" variant="ghost" aria-label="Regenerate">
                          <RiRefreshLine />
                        </Button>
                        <Button size="icon" variant="ghost" aria-label="Revoke">
                          <RiDeleteBinLine />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 