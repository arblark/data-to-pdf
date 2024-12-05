import React from 'react';
import { Volume2 } from 'lucide-react';
import soundproofingData from '../../../data/soundproofing.json';

interface SoundproofingSectionProps {
  data: {
    soundproofing: {
      standard: string[];
      professional: string[];
    };
  };
}

export const SoundproofingSection: React.FC<SoundproofingSectionProps> = ({ data }) => {
  const getItemName = (id: string, type: 'standard' | 'professional') => {
    const item = soundproofingData[type].find(item => item.id === id);
    return item ? item.name : '';
  };

  const prices = {
    standard: data.soundproofing.standard.reduce((acc, id) => {
      const item = soundproofingData.standard.find(item => item.id === id);
      return acc + (item?.price || 0);
    }, 0),
    professional: data.soundproofing.professional.reduce((acc, id) => {
      const item = soundproofingData.professional.find(item => item.id === id);
      return acc + (item?.price || 0);
    }, 0)
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <Volume2 className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Звукоизоляция
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Стандартная звукоизоляция</h3>
            <ul className="space-y-3">
              {data.soundproofing.standard.map((id) => (
                <li key={id} className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>{getItemName(id, 'standard')}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Стоимость:</span>
                <span className="text-xl font-bold text-indigo-400">
                  ₽{prices.standard.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Профессиональная звукоизоляция</h3>
            <ul className="space-y-3">
              {data.soundproofing.professional.map((id) => (
                <li key={id} className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>{getItemName(id, 'professional')}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Стоимость:</span>
                <span className="text-xl font-bold text-indigo-400">
                  ₽{prices.professional.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};