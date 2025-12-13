import React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}