import { ListChecks } from 'lucide-react';

export const TableOfContents: React.FC = () => {
  const sections = [
    'О компании',
    'Почему стоит выбрать именно нас',
    'Наша миссия и ценности',
    'Наши кейсы',
    'Этапы реализации проекта',
    'Что мы предлагаем вам',
    'Предварительный расчет стоимости оборудования и работ «под ключ»',
    'Контакты'
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <ListChecks className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Содержание
        </h2>
      </div>

      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Добро пожаловать в мир премиальных домашних кинозалов от компании Blackroom.
        </p>

        <div className="space-y-3">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 group hover:bg-gray-800/50 p-2 rounded-lg transition-colors"
            >
              <span className="text-indigo-400 font-medium">{index + 1}.</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {section}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};