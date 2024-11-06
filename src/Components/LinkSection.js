import React from 'react';
import { LinkCard } from './LinkCard';

export function LinkSection() {
  const links = [
    {
      title: 'Portfolio',
      description: 'A showcase of my work and personal projects',
      url: 'https://here-one.vercel.app/',
      icon: <img src="/portfolio.png" alt="Portfolio Icon" className="w-9 h-9" />,
    },
    {
      title: 'GitHub',
      description: 'Browse my code repositories and contributions',
      url: 'https://github.com/rohitmanohar2108',
      icon: <img src="/github.png" alt="GitHub Icon" className="w-9 h-9" />,
    },
    {
      title: 'LinkedIn',
      description: 'View my professional background and connect with me',
      url: 'https://www.linkedin.com/in/rohit-manohar-80b949207/',
      icon: <img src="/linkedin.png" alt="LinkedIn Icon" className="w-9 h-9" />,
    },
    {
      title: 'Twitter',
      description: 'Follow me for updates on tech and development',
      url: 'https://twitter.com/yourusername',
      icon: <img src="/twitter.png" alt="Twitter Icon" className="w-9 h-9" />,
    },
    {
      title: 'Latest Projects',
      description: 'Explore my recent cloud-native and software projects',
      url: 'https://github.com/yourusername/cloud-projects',
      icon: <img src="/project.png" alt="Projects Icon" className="w-9 h-9" />,
    },
    {
      title: 'Contact Me',
      description: 'Reach out for collaboration or inquiries',
      url: 'mailto:manoharrohit372@gmail.com',
      icon: <img src="/gmail.png" alt="Mail Icon" className="w-9 h-9" />,
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
