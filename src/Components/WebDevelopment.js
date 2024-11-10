import React from "react";

import {
  Server,
  Globe,
  Search,
  Database,
  Network,
  Lock,
  Bot,
} from "lucide-react";

function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How the Web Works?
          </h1>
          <p className="text-xl text-center text-blue-200 max-w-3xl mx-auto">
            To all who call themselves web developers, do you know how the web
            works?
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Web Servers Section */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Server className="w-10 h-10 text-blue-400" />
                <h2 className="text-3xl font-bold">Web Servers</h2>
              </div>
              <p className="text-lg text-blue-100">
                The web is powered by web servers, which are powerful computers
                connected to the internet 24/7. These servers store and serve
                web pages, files, and data. When you access a website, you're
                essentially requesting data from these servers.
              </p>
              <p className="text-lg text-blue-100">
                It is a software and hardware that uses HTTP (Hypertext Transfer
                Protocol) and other protocols to respond to client requests made
                over the World Wide Web.
              </p>
              <p className="text-lg text-blue-100">
                Each web server has a unique IP (Internet Protocol) address,
                which is a series of numbers like 192.158.1.38. However, since
                IP addresses are not user-friendly, we use domain names.{" "}<span className="font-bold">Domain names</span> are human-readable addresses mapped to IP addresses, making it easier for people to access websites.
              </p>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">IP Address Example:</span>
                  <code className="bg-white/10 px-3 py-1 rounded">
                    192.158.1.38
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">Domain Example:</span>
                  <code className="bg-white/10 px-3 py-1 rounded">
                    example.com
                  </code>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                alt="Server Infrastructure"
                className="rounded-lg shadow-2xl relative"
              />
            </div>
          </div>
        </section>

        {/* URL Structure Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Understanding URLs
          </h2>
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-lg text-blue-100 mb-8">
              A URL is the complete address used to access a specific resource
              on the internet. It includes the protocol, domain name, path,
              query, and fragment, specifying the exact location of a resource
              on a server.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-4 py-2 bg-blue-500/20 rounded-lg">
                  https://
                </span>
                <span className="px-4 py-2 bg-purple-500/20 rounded-lg">
                  www.example.com
                </span>
                <span className="px-4 py-2 bg-pink-500/20 rounded-lg">
                  /path
                </span>
                <span className="px-4 py-2 bg-indigo-500/20 rounded-lg">
                  /page
                </span>
                <span className="px-4 py-2 bg-blue-500/20 rounded-lg">
                  ?query=value
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Request Process Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Requesting a Web Page
            <p className="text-base font-normal text-blue-100">
            When you enter a URL into your web browser (like Chrome, Firefox etc), here’s what happens:
            </p>
          </h2>
         
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col items-center text-center">
                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  1. DNS Resolution
                </h3>
                <p className="text-blue-200">
                  The browser sends a request to a DNS server to translate the
                  domain name into an IP address
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col items-center text-center">
                <Lock className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  2. HTTP/HTTPS Request
                </h3>
                <p className="text-blue-200">
                  The browser sends an HTTP/HTTPS request to the web server
                  located at the resolved IP address
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col items-center text-center">
                <Database className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  3. Server Response
                </h3>
                <p className="text-blue-200">
                  The web server processes the request and sends back the
                  requested web page with HTML, CSS, and JavaScript
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Page Rendering Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Rendering the Web Page
          </h2>
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-lg text-blue-100 mb-6">
              The browser receives the server's response and starts rendering
              the web page. It processes the HTML structure, applies CSS for
              styling, and executes JavaScript for interactivity. Additional
              assets like images, videos, and fonts are also loaded as specified
              in the HTML.
            </p>
          </div>
        </section>

        {/* Search Engine Section */}
        <section className="mb-20">
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <Bot className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Indexing</h2>
            </div>
            <p className="text-lg text-blue-200 mb-6">
              Search engines like Google, Bing etc crawl the web by following
              links and indexing web pages. They use automated programs called
              bots or spiders to gather information about web pages, which helps
              in ranking and displaying relevant results to users' search
              queries.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Web Crawling</h3>
                <p className="text-blue-200">
                  Automated bots discover and scan web pages
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Data Collection</h3>
                <p className="text-blue-200">
                  Content is analyzed and stored in databases
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Search Results</h3>
                <p className="text-blue-200">
                  Information is organized for user searches
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            Understanding these fundamentals is crucial for modern web
            development
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WebDevelopment;
