import soundproofingData from '../data/soundproofing.json';
import furnitureData from '../data/furniture.json';
import equipmentData from '../data/equipment.json';

export const calculateSoundproofingPrice = (
  standardIds: string[],
  professionalIds: string[],
): { standard: number; professional: number } => {
  const standardTotal = standardIds.reduce((sum, id) => {
    const item = soundproofingData.standard.find(i => i.id === id);
    return sum + (item?.price || 0);
  }, 0);

  const professionalTotal = professionalIds.reduce((sum, id) => {
    const item = soundproofingData.professional.find(i => i.id === id);
    return sum + (item?.price || 0);
  }, 0);

  return { standard: standardTotal, professional: professionalTotal };
};

export const calculateFurniturePrice = (selectedIds: string[]): number => {
  return selectedIds.reduce((sum, id) => {
    const item = furnitureData.items.find(i => i.id === id);
    return sum + (item?.price || 0);
  }, 0);
};

export const calculateEquipmentPrice = (
  equipment: {
    [key: string]: {
      items: string[];
      images: string[];
    };
  }
): { [key: string]: number } => {
  const prices: { [key: string]: number } = {};

  Object.entries(equipment).forEach(([klassType, data]) => {
    prices[klassType] = data.items.reduce((sum, id) => {
      const item = equipmentData[klassType as keyof typeof equipmentData].items.find(i => i.id === id);
      return sum + (item?.price || 0);
    }, 0);
  });

  return prices;
};

export const calculateTotalPrice = (
  designPrice: number,
  soundproofingPrices: { standard: number; professional: number },
  acousticPrice: number,
  furniturePrice: number,
  equipmentPrices: { [key: string]: number }
): { [key: string]: number } => {
  return {
    c_klasse: designPrice + soundproofingPrices.standard + acousticPrice + furniturePrice + equipmentPrices.c_klasse,
    e_klasse: designPrice + soundproofingPrices.professional + acousticPrice + furniturePrice + equipmentPrices.e_klasse,
    s_klasse: designPrice + soundproofingPrices.professional + acousticPrice + furniturePrice + equipmentPrices.s_klasse
  };
};