import React from 'react';
import { Github, Twitter, Linkedin, TreePine, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-500/20 backdrop-blur-md bg-gradient-to-bl from-black/20">
      <div className="glitch-container max-w-7xl mx-auto py-8 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TreePine className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                Rohit Manohar
              </span>
            </div>
            <p className="text-cyan-100/60 text-sm">
             *Develop *Design *Deploy
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1UMUPQptHICj3ihVFReS2aRGbY0fvTmyR9x2kmE6aHGs/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100/60 hover:text-fuchsia-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Explore DSA sheet topic wise
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100/60 hover:text-fuchsia-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100/60 hover:text-fuchsia-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Community
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100/60 hover:text-fuchsia-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
         
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-cyan-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cyan-100/40 text-sm">
              © {new Date().getFullYear()} Rohit Manohar.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
