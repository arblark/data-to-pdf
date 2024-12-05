import React from 'react';
import soundproofingData from '../data/soundproofing.json';
import { PriceDisplay } from './PriceDisplay';

interface SoundproofingOptionsProps {
  selected: {
    standard: string[];
    professional: string[];
  };
  onUpdate: (standard: string[], professional: string[]) => void;
}

export const SoundproofingOptions: React.FC<SoundproofingOptionsProps> = ({ 
  selected,
  onUpdate 
}) => {
  const handleStandardChange = (id: string) => {
    const newSelection = selected.standard.includes(id)
      ? selected.standard.filter(item => item !== id)
      : [...selected.standard, id];
    onUpdate(newSelection, selected.professional);
  };

  const handleProfessionalChange = (id: string) => {
    const newSelection = selected.professional.includes(id)
      ? selected.professional.filter(item => item !== id)
      : [...selected.professional, id];
    onUpdate(selected.standard, newSelection);
  };

  const calculateBlockTotal = (selectedIds: string[], items: typeof soundproofingData.standard) => {
    return selectedIds.reduce((sum, id) => {
      const item = items.find(i => i.id === id);
      return sum + (item?.price || 0);
    }, 0);
  };

  const standardTotal = calculateBlockTotal(selected.standard, soundproofingData.standard);
  const professionalTotal = calculateBlockTotal(selected.professional, soundproofingData.professional);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Звукоизоляция</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 bg-white rounded-lg border border-gray-200">
          <h4 className="font-medium">Стандартная звукоизоляция</h4>
          {soundproofingData.standard.map(item => (
            <label key={item.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selected.standard.includes(item.id)}
                onChange={() => handleStandardChange(item.id)}
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <span>{item.name} - ₽{item.price.toLocaleString()}</span>
            </label>
          ))}
          <PriceDisplay label="Итого по стандартной звукоизоляции" price={standardTotal} />
        </div>

        <div className="space-y-4 p-4 bg-white rounded-lg border border-gray-200">
          <h4 className="font-medium">Профессиональная звукоизоляция</h4>
          {soundproofingData.professional.map(item => (
            <label key={item.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selected.professional.includes(item.id)}
                onChange={() => handleProfessionalChange(item.id)}
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <span>{item.name} - ₽{item.price.toLocaleString()}</span>
            </label>
          ))}
          <PriceDisplay label="Итого по профессиональной звукоизоляции" price={professionalTotal} />
        </div>
      </div>
    </div>
  );
};