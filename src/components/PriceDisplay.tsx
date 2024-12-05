import React from 'react';

interface PriceDisplayProps {
  label: string;
  price: number;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ label, price }) => {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-gray-700">{label}:</span>
        <span className="text-lg font-semibold text-indigo-600">
          ₽{price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};