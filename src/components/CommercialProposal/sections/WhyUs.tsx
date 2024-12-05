import React from 'react';
import { Award, Star, Globe, Lightbulb, Shield, UserCog, Lock } from 'lucide-react';

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors group">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-indigo-400 group-hover:text-indigo-300 transition-colors mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const WhyUs: React.FC = () => {
  const advantages = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Опыт и узнаваемость',
      description: [
        'Более 12 лет занимаемся только кинозалами',
        'Создали первое в России сообщество о домашних кинотеатрах'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Международное признание',
      description: [
        'Члены CEDIA, с филиалами в Москве, Дубае и Ташкенте'
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Инновации и качество',
      description: [
        'Лучший в РФ шоурум и демонстрационный кинозал Dolby Atmos 9.1.6'
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Экспертиза',
      description: [
        'Постоянное повышение квалификации инженеров',
        'Единственная компания с сертифицированным аудио и видео калибровщиком (высшие сертификаты от HAA и ISF)'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Эксклюзивность',
      description: [
        'Эксклюзивные представители в РФ Голландского бренда уникальной ленточной акустики Alcons Audio',
        'Разрабатываем и производим целый набор уникальных продуктов для домашних кинозалов'
      ]
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: 'Индивидуальный подход',
      description: [
        'Вертикальная интеграция всех этапов работ "под ключ"',
        'Личный контроль собственника всех процессов',
        'Создание полноценного умного дома в рамках кинозала',
        'Улучшенные условия гарантии - 2 года на работы'
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Приватность',
      description: [
        'Полная конфиденциальность всех проектов и клиентов',
        'Строгое соблюдение NDA и политики безопасности'
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Почему стоит выбрать именно нас
      </h2>
      
      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
        Blackroom - это не просто компания, а создатель Rolls-Royce в мире кинозалов. 
        Мы предлагаем уникальный опыт и непревзойденное качество:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {advantages.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
    </section>
  );
};