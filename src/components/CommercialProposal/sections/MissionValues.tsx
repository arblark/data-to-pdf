import React from 'react';
import { Target, Package, Shield, Palette } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-indigo-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const MissionValues: React.FC = () => {
  const values = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Комплексность',
      description: 'Мы предоставляем полный спектр услуг от проектирования до реализации.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Надежность',
      description: 'Наши решения проверены временем и соответствуют высочайшим стандартам качества.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Эстетика',
      description: 'Мы создаем не просто функциональные, но и визуально привлекательные и стильные кинозалы.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="space-y-8">
        <div className="p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30">
          <div className="flex items-center space-x-4 mb-4">
            <Target className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">
              Наша Миссия
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Мы делаем жизнь людей ярче и счастливее, создавая инновационные домашние кинозалы 
            и превращая каждый просмотр в незабываемое событие. Мы открываем новые грани эмоций 
            и впечатлений, делясь нашими экспертными знаниями, передовыми технологиями и чувством прекрасного.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Наши Ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Value key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};