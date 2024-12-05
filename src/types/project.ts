export type DesignOptionType = 'standard' | 'premium';
export type KlassType = 'c_klasse' | 'e_klasse' | 's_klasse';
export type FinishingType = 'basic' | 'premium' | 'luxury';

export interface Equipment {
  items: string[];
  images: string[];
}

export interface ProjectData {
  projectName: string;
  floorArea: number;
  initialData: string;
  managerName: string;
  audioSystem: string;
  videoSystem: string;
  usageScenario: string;
  designOption: DesignOptionType;
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
    c_klasse: Equipment;
    e_klasse: Equipment;
    s_klasse: Equipment;
  };
  showPreview: boolean;
} 