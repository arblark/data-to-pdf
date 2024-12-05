import React from 'react';
import { Play } from 'lucide-react';

export const Logo: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black text-white p-16 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(126,34,206,0.12),transparent)]" />
      
      <div className="relative z-10 text-center space-y-6">
        <div className="flex justify-center items-center space-x-4">
          <Play className="w-12 h-12 text-indigo-400" />
          <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            KINO
          </h1>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-medium text-gray-300">
            Комплексное коммерческое предложение на создание частного кинозала
          </h2>
          <div className="inline-block px-4 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
            Дата составления: {currentDate}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600" />
      </div>
    </section>
  );
};