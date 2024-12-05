export interface SoundproofingItem {
  id: string;
  name: string;
  price: number;
}

export interface EquipmentItem {
  id: string;
  name: string;
  price: number;
}

export interface FurnitureItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface SoundproofingData {
  standard: SoundproofingItem[];
  professional: SoundproofingItem[];
}

export interface EquipmentKlasse {
  items: EquipmentItem[];
  images: string[];
}

export interface EquipmentData {
  c_klasse: EquipmentKlasse;
  e_klasse: EquipmentKlasse;
  s_klasse: EquipmentKlasse;
}

export interface FurnitureData {
  items: FurnitureItem[];
}

export interface EquipmentKlasseData {
  items: string[];
  images: string[];
}

export interface CommercialProposalData {
  projectName: string;
  floorArea: number;
  initialData: string;
  managerName: string;
  audioSystem: string;
  videoSystem: string;
  usageScenario: string;
  designOption: 'standard' | 'premium';
  designPrice: number;
  soundproofing: {
    standard: string[];
    professional: string[];
  };
  acousticPrice: number;
  finishing: {
    basic: string[];
    premium: string[];
    luxury: string[];
  };
  selectedFurniture: string[];
  equipment: {
    c_klasse: EquipmentKlasseData;
    e_klasse: EquipmentKlasseData;
    s_klasse: EquipmentKlasseData;
  };
} 