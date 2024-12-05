import React from 'react';
import { Music } from 'lucide-react';
import type { CommercialProposalData } from '../../../types/data';

interface AcousticSectionProps {
  data: Pick<CommercialProposalData, 'acousticPrice'>;
}

export const AcousticSection: React.FC<AcousticSectionProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <Music className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Акустическое оформление зала
        </h2>
      </div>

      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Акустическое оформление включает в себя комплекс мер по оптимизации звучания помещения,
          включая установку звукопоглощающих панелей, диффузоров и резонаторов.
        </p>

        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Стоимость акустического оформления:</span>
            <span className="text-2xl font-bold text-indigo-400">
            ₽{data.acousticPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};