import React from 'react';
import { Github, Linkedin, X, Mail, Code, Briefcase } from 'lucide-react';
import { LinkCard } from './LinkCard';

export function LinkSection() {
  const links = [
    {
      title: 'Portfolio',
      description: 'A showcase of my work and personal projects',
      url: 'https://here-one.vercel.app/',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'GitHub',
      description: 'Browse my code repositories and contributions',
      url: 'https://github.com/rohitmanohar2108',
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: 'LinkedIn',
      description: 'View my professional background and connect with me',
      url: 'https://www.linkedin.com/in/rohit-manohar-80b949207/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: 'Twitter',
      description: 'Follow me for updates on tech and development',
      url: 'https://dev.to',
      icon: <X className="w-5 h-5" />,
    },
    {
      title: 'Latest Projects',
      description: 'Explore my recent cloud-native and software projects',
      url: 'https://github.com/yourusername/cloud-projects',
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'Contact Me',
      description: 'Reach out for collaboration or inquiries',
      url: 'mailto:manoharrohit372@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    }
  ];

  return (
    <div className="w-full space-y-4">
      {links.map((link, index) => (
        <LinkCard
          key={link.title}
          {...link}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
