// --- components/ui/button.tsx ---
export function Button({ children, className = '', ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// --- components/ui/card.tsx ---
export function Card({ children, className = '', ...props }: any) {
  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: any) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

// --- app/page.tsx ---
'use client';

import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Github, Cpu, Zap, Wifi, Sun, Wrench, Mail, FileText, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { title: 'Project 1', description: 'Engineering project 1' },
    { title: 'Project 2', description: 'Engineering project 2' },
  ];

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <h1 className='text-4xl mb-6'>Kyle's Engineering Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((proj, idx) => (
          <Card key={idx} className='hover:scale-105 transition-transform'>
            <CardContent>
              <h2 className='text-xl font-bold'>{proj.title}</h2>
              <p className='mt-2'>{proj.description}</p>
              <Button className='mt-4' onClick={() => setActiveProject(idx)}>
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {activeProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'
        >
          <div className='bg-gray-900 p-6 rounded-2xl max-w-xl w-full'>
            <h2 className='text-2xl font-bold'>{projects[activeProject].title}</h2>
            <p className='mt-4'>{projects[activeProject].description}</p>
            <Button className='mt-6' onClick={() => setActiveProject(null)}>
              Close
            </Button>
          </div>
        </motion.div>
      )}
    <