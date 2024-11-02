import React from 'react';
import { Code, Sparkles } from 'lucide-react';

export function ProfileSection() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Profile Image positioned above the pentagon */}
      <div className="relative mb- z-10">
        <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-violet-500 shadow-lg">
          <img
            src="./rohit.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Pentagon-shaped box */}


      {/* Profile Content */}
      <div className="text-center z-20 mt-8">
        <div className="inline-flex items-center space-x-2 mb-4">
          <Code className="w-5 h-5 text-violet-400" />
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Rohit Manohar
          </h1>
          <Sparkles className="w-5 h-5 text-violet-400" />
        </div>

        <div className="mb-6 space-y-2">
          <p className="text-lg font-medium text-violet-300">
            Web Developer & Web Designer
          </p>
          <p className="text-sm text-violet-400/80">
            Building the future with code and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {['Frontend', 'Web Design', 'DSA'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full glass-effect text-sm font-medium text-violet-300
                hover:bg-white/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
