"use client";


import { useState } from "react";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Copy, Download, ExternalLink, Github, Smartphone, Star, BookOpen, Code, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sdks = [
    { name: "Node.js", description: "Official M-Pesa SDK for Node.js applications", version: "v2.1.0", downloads: "15.2k", language: "JavaScript", icon: "🟢" },
    { name: "Python", description: "Python SDK for M-Pesa API integration", version: "v1.8.3", downloads: "8.7k", language: "Python", icon: "🐍" },
    { name: "PHP", description: "PHP SDK for seamless M-Pesa integration", version: "v3.0.1", downloads: "12.1k", language: "PHP", icon: "🐘" },
    { name: "Java", description: "Java SDK for enterprise M-Pesa solutions", version: "v2.5.0", downloads: "6.3k", language: "Java", icon: "☕" },
    { name: "C#/.NET", description: ".NET SDK for Windows and cross-platform apps", version: "v1.9.2", downloads: "4.8k", language: "C#", icon: "🔷" },
    { name: "Go", description: "Lightweight Go SDK for high-performance apps", version: "v1.4.1", downloads: "3.2k", language: "Go", icon: "🐹" },
  ];

  const codeExamples = {
    nodejs: `npm install mpesa-mz-sdk\n\nconst { MPesa } = require('mpesa-vodacom-mz');\n\nconst mpesa = new MPesa({\n  apiKey: 'your-api-key',\n  publicKey: 'your-public-key',\n  serviceProviderCode: 'your-service-provider-code',\n  environment: 'sandbox' // or 'production'\n});\n\n// C2B Payment\nconst payment = await mpesa.c2b({\n  amount: 100,\n  msisdn: '258840000000',\n  reference: 'REF123',\n  thirdPartyReference: 'TXN456'\n});\n\nconsole.log(payment);`,
    python: `pip install mpesa-mz-sdk\n\nfrom mpesa_vodacom_mz import MPesa\n\nmpesa = MPesa(\n    api_key='your-api-key',\n    public_key='your-public-key',\n    service_provider_code='your-service-provider-code',\n    environment='sandbox'\n)\n\n# C2B Payment\npayment = mpesa.c2b(\n    amount=100,\n    msisdn='258840000000',\n    reference='REF123',\n    third_party_reference='TXN456'\n)\n\nprint(payment)`,
    php: `composer require vodacom/mpesa-mz\n\n<?php\nrequire_once 'vendor/autoload.php';\n\nuse Vodacom\\MPesa\\MPesa;\n\n$mpesa = new MPesa([\n    'apiKey' => 'your-api-key',\n    'publicKey' => 'your-public-key',\n    'serviceProviderCode' => 'your-service-provider-code',\n    'environment' => 'sandbox'\n]);\n\n// C2B Payment\n$payment = $mpesa->c2b([\n    'amount' => 100,\n    'msisdn' => '258840000000',\n    'reference' => 'REF123',\n    'thirdPartyReference' => 'TXN456'\n]);\n\nvar_dump($payment);`,
    java: `<dependency>\n    <groupId>com.vodacom</groupId>\n    <artifactId>mpesa-mz</artifactId>\n    <version>2.5.0</version>\n</dependency>\n\nimport com.vodacom.mpesa.MPesa;\nimport com.vodacom.mpesa.models.C2BRequest;\n\nMPesa mpesa = new MPesa.Builder()\n    .apiKey("your-api-key")\n    .publicKey("your-public-key")\n    .serviceProviderCode("your-service-provider-code")\n    .environment("sandbox")\n    .build();\n\n// C2B Payment\nC2BRequest request = new C2BRequest()\n    .amount(100)\n    .msisdn("258840000000")\n    .reference("REF123")\n    .thirdPartyReference("TXN456");\n\nMPesaResponse response = mpesa.c2b(request);\nSystem.out.println(response);`,
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <section id="introduction" className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">M-Pesa Developer Documentation</h1>
              <p className="text-xl text-muted-foreground">Vodacom Mozambique</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Integrate M-Pesa mobile money services into your applications with our comprehensive SDKs and APIs.
            Enable secure payments, transfers, and financial services for millions of users across Mozambique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Code className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Multiple SDKs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Choose from 6+ official SDKs supporting popular programming languages and frameworks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle className="text-lg">Production Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Battle-tested SDKs used by thousands of developers in production environments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Comprehensive Docs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Detailed documentation, code examples, and guides to get you started quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Quick Start */}
      <section id="quick-start" className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
          <p className="text-muted-foreground">
            Get started with M-Pesa integration in just a few steps. Choose your preferred programming language
            and follow the guide.
          </p>
        </div>
        <Tabs defaultValue="nodejs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nodejs">Node.js</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="php">PHP</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
          </TabsList>
          {Object.entries(codeExamples).map(([key, code]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{code}</code>
                </pre>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2 bg-transparent"
                  onClick={() => copyToClipboard(code, key)}
                >
                  {copiedCode === key ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      {/* SDKs Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Official SDKs</h2>
          <p className="text-muted-foreground">
            Choose from our collection of official SDKs, each tailored for specific programming languages and use
            cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdks.map((sdk, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sdk.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{sdk.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {sdk.version}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{sdk.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{sdk.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Install
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Authentication */}
      <section id="authentication" className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Authentication</h2>
          <p className="text-muted-foreground">
            M-Pesa API uses API keys and public key encryption for secure authentication.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>API Credentials</CardTitle>
            <CardDescription>
              You'll need the following credentials to authenticate with the M-Pesa API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">API Key</h4>
                <p className="text-sm text-muted-foreground">Your unique API key for authentication</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Public Key</h4>
                <p className="text-sm text-muted-foreground">Public key for encrypting sensitive data</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Service Provider Code</h4>
                <p className="text-sm text-muted-foreground">Your assigned service provider identifier</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Environment</h4>
                <p className="text-sm text-muted-foreground">
                  Sandbox for testing, Production for live transactions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      {/* API Endpoints */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">API Endpoints</h2>
          <p className="text-muted-foreground">Core M-Pesa API endpoints for different transaction types.</p>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>C2B (Customer to Business)</CardTitle>
                <Badge>POST</Badge>
              </div>
              <CardDescription>Accept payments from customers to your business account</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">/ipg/v1x/c2bPayment/singleStage/</code>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>B2C (Business to Customer)</CardTitle>
                <Badge>POST</Badge>
              </div>
              <CardDescription>Send payments from your business to customer accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">/ipg/v1x/b2cPayment/</code>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>B2B (Business to Business)</CardTitle>
                <Badge>POST</Badge>
              </div>
              <CardDescription>Transfer funds between business accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">/ipg/v1x/b2bPayment/</code>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Transaction Status</CardTitle>
                <Badge variant="secondary">GET</Badge>
              </div>
              <CardDescription>Query the status of any transaction</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">/ipg/v1x/queryTransactionStatus/</code>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Support */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Support & Resources</h2>
          <p className="text-muted-foreground">
            Get help and find additional resources for your M-Pesa integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Developer Support</CardTitle>
              <CardDescription>Get technical support from our developer team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Contact Support
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Forum</CardTitle>
              <CardDescription>Join the developer community and share knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Join Forum
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 