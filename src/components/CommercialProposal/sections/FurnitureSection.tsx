import React from 'react';
import { Sofa } from 'lucide-react';
import furnitureData from '../../../data/furniture.json';
import type { FurnitureData } from '../../../types/data';

interface FurnitureSectionProps {
  data: {
    selectedFurniture: string[];
  };
}

export const FurnitureSection: React.FC<FurnitureSectionProps> = ({ data }) => {
  const selectedItems = (furnitureData as FurnitureData).items
    .filter((item) => data.selectedFurniture.includes(item.id));

  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <Sofa className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Мебель
        </h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedItems.map(item => (
            <div key={item.id} className="group bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg text-gray-200">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-indigo-400 font-medium">Стоимость:</span>
                  <span className="text-lg font-bold text-white">
                    ₽{item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Общая стоимость мебели:</span>
            <span className="text-2xl font-bold text-indigo-400">
              ₽{total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};