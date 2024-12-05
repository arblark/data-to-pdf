import { DesignOptionType } from '../types/project';
import audioSystems from '../data/audioSystems.json';
import videoSystems from '../data/videoSystems.json';
import usageScenarios from '../data/usageScenarios.json';
import soundproofingData from '../data/soundproofing.json';
import furnitureData from '../data/furniture.json';
import equipmentData from '../data/equipment.json';

const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomData = () => {
  // Project Info
  const projectNames = ['Домашний кинотеатр Премиум', 'Медиа-центр Элит', 'Игровая комната Люкс'];
  const projectName = getRandomItem(projectNames);
  const floorArea = getRandomNumber(30, 150);
  const initialData = 'Проект для создания современного развлекатеьного пространства';

  // Systems
  const audioSystem = getRandomItem(audioSystems.presets).name;
  const videoSystem = getRandomItem(videoSystems.presets).name;
  const usageScenario = getRandomItem(usageScenarios.presets).name;

  // Design
  const designOptions: DesignOptionType[] = ['standard', 'premium'];
  const designOption = getRandomItem(designOptions) as DesignOptionType;
  const designPrice = floorArea * (designOption === 'standard' ? 5000 : 7000);

  // Soundproofing
  const standardItems = getRandomItems(
    soundproofingData.standard.map(item => item.id),
    getRandomNumber(2, 4)
  );
  const professionalItems = getRandomItems(
    soundproofingData.professional.map(item => item.id),
    getRandomNumber(2, 4)
  );

  // Acoustic Price
  const acousticPrice = getRandomNumber(100000, 500000);

  // Furniture
  const selectedFurniture = getRandomItems(
    furnitureData.items.map(item => item.id),
    getRandomNumber(2, 4)
  );

  // Equipment
  const equipment = {
    c_klasse: {
      items: getRandomItems(
        equipmentData.c_klasse.items.map(item => item.id),
        getRandomNumber(2, 3)
      ),
      images: getRandomItems(equipmentData.c_klasse.images, getRandomNumber(1, 2))
    },
    e_klasse: {
      items: getRandomItems(
        equipmentData.e_klasse.items.map(item => item.id),
        getRandomNumber(2, 3)
      ),
      images: getRandomItems(equipmentData.e_klasse.images, getRandomNumber(1, 2))
    },
    s_klasse: {
      items: getRandomItems(
        equipmentData.s_klasse.items.map(item => item.id),
        getRandomNumber(2, 3)
      ),
      images: getRandomItems(equipmentData.s_klasse.images, getRandomNumber(1, 2))
    }
  };

  return {
    projectName,
    floorArea,
    initialData,
    audioSystem,
    videoSystem,
    usageScenario,
    managerName: 'Иван Петров',
    designOption,
    designPrice,
    soundproofing: {
      standard: standardItems,
      professional: professionalItems
    },
    acousticPrice,
    selectedFurniture,
    equipment
  };
};