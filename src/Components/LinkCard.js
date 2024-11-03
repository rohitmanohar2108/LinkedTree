import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  delay: number;
}

export function LinkCard({ title, description, url, icon, delay }: LinkCardProps) {
  return (
    <a
      id="cards"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-xl p-4 transition-all duration-300 bg-gradient-to-tl from-purple-950/50 to-black/50
        hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg border border-white/20"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Horizontal sweeping line effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
        scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />

      <div className="flex items-start space-x-4 relative z-10">
        <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400
          group-hover:bg-violet-500/30 transition-colors duration-300">
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-violet-200 group-hover:text-violet-100">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-violet-400 transform group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <p className="text-sm text-violet-400/80 group-hover:text-violet-300/90">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
