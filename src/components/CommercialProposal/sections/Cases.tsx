import React from 'react';
import { Users, Speaker, Projector, MapPin, Paintbrush, Trophy } from 'lucide-react';

interface CaseSpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface CaseProps {
  title: string;
  description: string;
  image: string;
  specs: CaseSpec[];
  award?: string;
}

const Case: React.FC<CaseProps> = ({ title, description, image, specs, award }) => (
  <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      {award && (
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-indigo-500/90 px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-medium">{award}</span>
        </div>
      )}
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {specs.map((spec, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="text-indigo-400">{spec.icon}</div>
            <div>
              <span className="text-sm text-gray-400">{spec.label}: </span>
              <span className="text-sm text-gray-300">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const Cases: React.FC = () => {
  const cases: CaseProps[] = [
    {
      title: '«Stingray»',
      description: 'Кинозал расположен в подвале частного жилого дома. Восьмиугольное помещение в форма ската, звездное небо, зрительская зона из 10 креселреклайнеров в алькантаре, лазерный проектор и бескомпромиссная аудиосистема с 8 сабвуферами - всё для полного погружения в любимый фильм!',
      image: '/images/cases/stingray.jpg',
      specs: [
        { icon: <Users className="w-4 h-4" />, label: 'Площадь', value: '62 м²' },
        { icon: <Users className="w-4 h-4" />, label: 'Места', value: '10' },
        { icon: <Speaker className="w-4 h-4" />, label: 'Аудио', value: 'Dolby Atmos 9.8.4' },
        { icon: <Projector className="w-4 h-4" />, label: 'Видео', value: 'JVC 4K + Stewart' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Расположение', value: 'МО' },
        { icon: <Paintbrush className="w-4 h-4" />, label: 'Стиль', value: 'Современный' }
      ],
      award: 'Best Home Cinema, EMEA'
    },
    {
      title: '«Павловская Слобода»',
      description: 'Потрясающий кинозал на 3 зрительских ряда с DCI-проектором и пространственной аудиосистемой выполнен в современном стиле. Все кинооборудование расположено в проекционном помещении, организованном в задней части комнаты, и не мешает наслаждаться любимым кино.',
      image: '/images/cases/pavlovskaya.jpg',
      specs: [
        { icon: <Users className="w-4 h-4" />, label: 'Площадь', value: '75 м²' },
        { icon: <Users className="w-4 h-4" />, label: 'Места', value: '14' },
        { icon: <Speaker className="w-4 h-4" />, label: 'Аудио', value: 'Dolby Atmos 9.8.6' },
        { icon: <Projector className="w-4 h-4" />, label: 'Видео', value: 'Barco + Stewart' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Расположение', value: 'МО' },
        { icon: <Paintbrush className="w-4 h-4" />, label: 'Стиль', value: 'Современный' }
      ]
    },
    {
      title: '«Серебряные Ключи»',
      description: 'Кинозал / ночной караоке и диско клуб - настоящая мужская берлога в современном стиле с элементами китч. Передовая электроника, продуманная акустика помещения, уникальнейшая сложная отделка из натурального мрамора, оникса, латуни и других премиальных материалов вам гарантированы незабываемые впечатления!',
      image: '/images/cases/serebryanie.jpg',
      specs: [
        { icon: <Users className="w-4 h-4" />, label: 'Площадь', value: '48 м²' },
        { icon: <Users className="w-4 h-4" />, label: 'Места', value: '10' },
        { icon: <Speaker className="w-4 h-4" />, label: 'Аудио', value: 'Dolby Atmos 7.8.4' },
        { icon: <Projector className="w-4 h-4" />, label: 'Видео', value: 'JVC + Stewart' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Расположение', value: 'МО' },
        { icon: <Paintbrush className="w-4 h-4" />, label: 'Стиль', value: 'Современный' }
      ]
    },
    {
      title: '«Шульгино»',
      description: 'Современный кинозал на 3 зрительских ряда с 4К-проектором и могучей пространственной аудиосистемой выполнен в классическом стиле. Продуманная акустика помещения, 8 сабвуферов, удобные диваны и большой широкоформатный экран обеспечивают полное погружение в любимые фильмы.',
      image: '/images/cases/shulgino.jpg',
      specs: [
        { icon: <Users className="w-4 h-4" />, label: 'Площадь', value: '34 м²' },
        { icon: <Users className="w-4 h-4" />, label: 'Места', value: '14' },
        { icon: <Speaker className="w-4 h-4" />, label: 'Аудио', value: 'Dolby Atmos 9.8.6' },
        { icon: <Projector className="w-4 h-4" />, label: 'Видео', value: 'Sony' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Расположение', value: 'МО' },
        { icon: <Paintbrush className="w-4 h-4" />, label: 'Стиль', value: 'Классика' }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Наши кейсы
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cases.map((case_, index) => (
          <Case key={index} {...case_} />
        ))}
      </div>
    </section>
  );
};