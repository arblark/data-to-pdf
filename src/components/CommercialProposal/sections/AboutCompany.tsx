import React from 'react';
import { Trophy, Award, Star, Building2, Crown, Users } from 'lucide-react';

interface AchievementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Achievement: React.FC<AchievementProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-indigo-400">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-white mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export const AboutCompany: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "CEDIA AWARDS 2023",
      description: "Победитель в номинации Best Home Cinema Level 2, The Excellence Documentation, EMEA"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "CEDIA AWARDS 2024",
      description: "Победитель в номинации Best Home Cinema Level 1, EMEA"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "CEDIA MEMBER",
      description: "Blackroom - член международной CEDIA"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "С 2012 года",
      description: "Проектируем и строим домашние кинотеатры «под ключ»"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "50+ залов премиум-класса",
      description: "Спроектировали и построили в России и за рубежом"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "III–IV уровень сложности",
      description: "Самые высокие уровни оснащения и качества наших кинозалов"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "90К+ подписчиков",
      description: "На нашем YouTube-канале"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        О компании Blackroom
      </h2>

      <div className="space-y-8">
        <p className="text-gray-300 leading-relaxed text-lg">
          Blackroom - эксперт в проектировании и строительстве домашних кинозалов Premium-класса с 2012 года. 
          За это время мы реализовали более 50 высокотехнологичных кинозалов, взяв на себя все работы от создания 
          концепции дизайна до калибровки оборудования.
        </p>

        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Наши достижения говорят сами за себя:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Achievement key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};