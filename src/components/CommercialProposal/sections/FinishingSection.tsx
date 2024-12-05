import React from 'react';
import { Paintbrush } from 'lucide-react';
import finishingData from '../../../data/finishing.json';
import type { CommercialProposalData } from '../../../types/data';

interface FinishingBlock {
  id: string;
  name: string;
  price: number;
}

interface FinishingData {
  [key: string]: {
    title: string;
    items: FinishingBlock[];
  };
}

interface FinishingSectionProps {
  data: Pick<CommercialProposalData, 'finishing'>;
}

export const FinishingSection: React.FC<FinishingSectionProps> = ({ data }) => {
  const renderBlock = (type: 'basic' | 'premium' | 'luxury') => {
    const typedFinishingData = finishingData as FinishingData;
    
    const items = typedFinishingData[type].items.filter(item => 
      data.finishing[type].includes(item.id)
    );
    
    const total = items.reduce((acc, item) => acc + item.price, 0);

    if (items.length === 0) return null;

    return (
      <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          {typedFinishingData[type].title}
        </h3>
        <ul className="space-y-3">
          {items.map(item => (
            <li key={item.id} className="flex items-center space-x-2 text-gray-300">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>{item.name}</span>
              <span className="ml-auto text-gray-400">₽{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Итого:</span>
            <span className="text-xl font-bold text-indigo-400">
              ₽{total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <Paintbrush className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Чистовая отделка
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['basic', 'premium', 'luxury'].map(type => 
          renderBlock(type as 'basic' | 'premium' | 'luxury')
        )}
      </div>
    </section>
  );
};