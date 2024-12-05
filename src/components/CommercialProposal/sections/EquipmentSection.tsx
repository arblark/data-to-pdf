import React from 'react';
import { Speaker, Monitor, Tv } from 'lucide-react';
import equipmentData from '../../../data/equipment.json';
import type { EquipmentData, CommercialProposalData } from '../../../types/data';

interface EquipmentSectionProps {
  data: Pick<CommercialProposalData, 'equipment'>;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ data }) => {
  const klassNames = {
    c_klasse: 'C-класс',
    e_klasse: 'E-класс',
    s_klasse: 'S-класс'
  } as const;

  const klassIcons = {
    c_klasse: <Speaker className="w-6 h-6" />,
    e_klasse: <Monitor className="w-6 h-6" />,
    s_klasse: <Tv className="w-6 h-6" />
  };

  const renderKlassSection = (klassType: keyof typeof klassNames) => {
    const items = ((equipmentData as unknown) as EquipmentData)[klassType].items
      .filter(item => data.equipment[klassType].items.includes(item.id));
    const images = data.equipment[klassType].images;
    const total = items.reduce((acc, item) => acc + item.price, 0);

    return (
      <div key={klassType} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
        <div className="flex items-center space-x-3 mb-6">
          <div className="text-indigo-400">
            {klassIcons[klassType as keyof typeof klassIcons]}
          </div>
          <h3 className="text-xl font-semibold text-gray-200">
            {klassNames[klassType as keyof typeof klassNames]}
          </h3>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            {images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${klassType} изображение ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-300">Оборудование</h4>
          <ul className="space-y-3">
            {items.map(item => (
              <li key={item.id} className="flex items-center justify-between text-gray-400">
                <span>{item.name}</span>
                <span>₽{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Стоимость комплекта:</span>
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
        <Speaker className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Оборудование
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(klassNames) as Array<keyof typeof klassNames>).map(renderKlassSection)}
      </div>
    </section>
  );
};