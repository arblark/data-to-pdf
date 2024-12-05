import React from 'react';
import furnitureData from '../data/furniture.json';

interface FurnitureSelectorProps {
  selected: string[];
  onSelect: (selectedItems: string[]) => void;
}

export const FurnitureSelector: React.FC<FurnitureSelectorProps> = ({ selected, onSelect }) => {
  const handleSelect = (id: string) => {
    const newSelection = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    onSelect(newSelection);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {furnitureData.items.map(item => (
        <div key={item.id} className="border rounded-lg p-4 space-y-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover rounded"
          />
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="font-medium">₽{item.price.toLocaleString()}</p>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => handleSelect(item.id)}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="text-sm">Выбрать</span>
          </label>
        </div>
      ))}
    </div>
  );
};