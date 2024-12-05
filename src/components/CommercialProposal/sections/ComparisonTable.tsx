import React from 'react';
import { Scale } from 'lucide-react';
import soundproofingData from '../../../data/soundproofing.json';
import equipmentData from '../../../data/equipment.json';
import furnitureData from '../../../data/furniture.json';
import type { 
  CommercialProposalData,
  SoundproofingData,
  EquipmentData,
  FurnitureData
} from '../../../types/data';

interface ComparisonTableProps {
  data: CommercialProposalData;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const calculateSoundproofingPrice = (type: 'standard' | 'professional') => {
    return data.soundproofing[type].reduce((acc, id) => {
      const item = ((soundproofingData as unknown) as SoundproofingData)[type]
        .find(item => item.id === id);
      return acc + (item?.price || 0);
    }, 0);
  };

  const calculateEquipmentPrice = (klassType: keyof EquipmentData) => {
    const items = data.equipment[klassType].items;
    return items.reduce((acc, id) => {
      const item = ((equipmentData as unknown) as EquipmentData)[klassType].items
        .find(item => item.id === id);
      return acc + (item?.price || 0);
    }, 0);
  };

  const calculateFurniturePrice = () => {
    return data.selectedFurniture.reduce((acc, id) => {
      const item = ((furnitureData as unknown) as FurnitureData).items
        .find(item => item.id === id);
      return acc + (item?.price || 0);
    }, 0);
  };

  const furniturePrice = calculateFurniturePrice();

  const rows = [
    {
      title: 'Акустическая звукоизоляционная оболочка кинозала',
      c: calculateSoundproofingPrice('standard'),
      e: calculateSoundproofingPrice('professional'),
      s: calculateSoundproofingPrice('professional')
    },
    {
      title: 'Внутреннее акустическое оформление зала',
      c: data.acousticPrice,
      e: data.acousticPrice,
      s: data.acousticPrice
    },
    {
      title: 'Чистовая отделка',
      c: 200000,
      e: 350000,
      s: 500000
    },
    {
      title: 'Комплект специализированной мебели',
      c: furniturePrice,
      e: furniturePrice,
      s: furniturePrice
    },
    {
      title: 'Оборудование кинозала',
      c: calculateEquipmentPrice('c_klasse'),
      e: calculateEquipmentPrice('e_klasse'),
      s: calculateEquipmentPrice('s_klasse')
    }
  ];

  const totals = {
    c: rows.reduce((acc, row) => acc + row.c, 0),
    e: rows.reduce((acc, row) => acc + row.e, 0),
    s: rows.reduce((acc, row) => acc + row.s, 0)
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <Scale className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Сравнение комплектаций
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-6 text-left text-gray-400 font-medium">Наименование</th>
              <th className="py-4 px-6 text-right text-gray-400 font-medium">C-класс</th>
              <th className="py-4 px-6 text-right text-gray-400 font-medium">E-класс</th>
              <th className="py-4 px-6 text-right text-gray-400 font-medium">S-класс</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
              >
                <td className="py-4 px-6 text-gray-300">{row.title}</td>
                <td className="py-4 px-6 text-right text-gray-400">₽{row.c.toLocaleString()}</td>
                <td className="py-4 px-6 text-right text-gray-400">₽{row.e.toLocaleString()}</td>
                <td className="py-4 px-6 text-right text-gray-400">₽{row.s.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-gray-800/50">
              <td className="py-4 px-6 font-semibold text-white">Итоговая стоимость</td>
              <td className="py-4 px-6 text-right font-bold text-indigo-400">
                ₽{totals.c.toLocaleString()}
              </td>
              <td className="py-4 px-6 text-right font-bold text-indigo-400">
                ₽{totals.e.toLocaleString()}
              </td>
              <td className="py-4 px-6 text-right font-bold text-indigo-400">
                ₽{totals.s.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};