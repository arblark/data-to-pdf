import React from 'react';
import { PencilRuler } from 'lucide-react';
import type { CommercialProposalData } from '../../../types/data';

interface DesignSectionProps {
  data: Pick<CommercialProposalData, 'designOption' | 'designPrice'>;
}

export const DesignSection: React.FC<DesignSectionProps> = ({ data }) => {
  const designType = data.designOption === 'standard' ? 'Стандартный' : 'Премиум';
  const pricePerMeter = data.designOption === 'standard' ? '5,000' : '7,000';

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <PencilRuler className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Проектирование
        </h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-200">{designType} проект</h3>
            <span className="px-4 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm">
              ₽{pricePerMeter} за м²
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
            <span className="text-gray-300">Итоговая стоимость проектирования:</span>
            <span className="text-2xl font-bold text-indigo-400">
              ₽{data.designPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};