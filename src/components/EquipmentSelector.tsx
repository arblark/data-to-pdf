import equipmentData from '../data/equipment.json';
import { PriceDisplay } from './PriceDisplay';
import { KlassType } from '../types/project';

interface EquipmentSelectorProps {
  selected: {
    [key in KlassType]: {
      items: string[];
      images: string[];
    };
  };
  onUpdate: (klassType: KlassType, selectedItems: string[], selectedImages: string[]) => void;
}

const klassNames = {
  c_klasse: 'C-класс',
  e_klasse: 'E-класс',
  s_klasse: 'S-класс',
};

export const EquipmentSelector: React.FC<EquipmentSelectorProps> = ({ selected, onUpdate }) => {
  const calculateKlassTotal = (klassType: KlassType): number => {
    return selected[klassType].items.reduce((sum, id) => {
      const item = equipmentData[klassType as keyof typeof equipmentData].items.find(i => i.id === id);
      return sum + (item?.price || 0);
    }, 0);
  };

  const handleItemSelect = (klassType: KlassType, itemId: string) => {
    const newSelection = selected[klassType].items.includes(itemId)
      ? selected[klassType].items.filter(id => id !== itemId)
      : [...selected[klassType].items, itemId];
    
    onUpdate(klassType, newSelection, selected[klassType].images);
  };

  const handleImageSelect = (klassType: KlassType, image: string) => {
    const newSelection = selected[klassType].images.includes(image)
      ? selected[klassType].images.filter(img => img !== image)
      : [...selected[klassType].images, image];
    
    onUpdate(klassType, selected[klassType].items, newSelection);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(equipmentData).map(([klassType, data]) => (
        <div key={klassType} className="space-y-4 bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-medium">
            {klassNames[klassType as keyof typeof klassNames]}
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Оборудование</h4>
              {data.items.map(item => (
                <label key={item.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selected[klassType as KlassType].items.includes(item.id)}
                    onChange={() => handleItemSelect(klassType as KlassType, item.id)}
                    className="h-4 w-4 text-indigo-600 rounded"
                  />
                  <span>{item.name} - ₽{item.price.toLocaleString()}</span>
                </label>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Изображения</h4>
              <div className="grid grid-cols-2 gap-2">
                {data.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`${klassType} изображение ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg transition-opacity group-hover:opacity-75"
                    />
                    <input
                      type="checkbox"
                      checked={selected[klassType as KlassType].images.includes(image)}
                      onChange={() => handleImageSelect(klassType as KlassType, image)}
                      className="absolute top-2 right-2 h-4 w-4 text-indigo-600 rounded bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            <PriceDisplay 
              label={`Итого по ${klassNames[klassType as keyof typeof klassNames]}`} 
              price={calculateKlassTotal(klassType as KlassType)} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};