import React from 'react';

interface Stage {
  title: string;
  number: number;
}

const Stage: React.FC<Stage> = ({ title, number }) => (
  <div className="flex items-center space-x-4">
    <div className="relative">
      <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-lg font-medium text-indigo-400">
        {number}
      </div>
      {number < 7 && (
        <div className="absolute top-10 left-1/2 w-0.5 h-8 bg-gray-700 -translate-x-1/2" />
      )}
    </div>
    <div className="flex-grow p-4 bg-gray-800/50 rounded-xl border border-gray-700">
      <p className="font-medium text-gray-300">
        {title}
      </p>
    </div>
  </div>
);

export const ImplementationStages: React.FC = () => {
  const stages = [
    'Проектирование',
    'Поставка оборудования',
    'Черновая отделка',
    'Акустическое оформление',
    'Поставка мебели',
    'Чистовая отделка',
    'Установка, монтаж, пусконаладка оборудования'
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Этапы Реализации Проекта
      </h2>
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <Stage 
            key={index}
            title={stage}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
};