import finishingData from '../data/finishing.json';
import { PriceDisplay } from './PriceDisplay';
import { FinishingType } from '../types/project';

interface FinishingItem {
  id: string;
  name: string;
  price: number;
}

interface FinishingData {
  [key: string]: {
    title: string;
    items: FinishingItem[];
  };
}

interface FinishingOptionsProps {
  selected: {
    [key in FinishingType]: string[];
  };
  onUpdate: (type: FinishingType, selectedItems: string[]) => void;
}

export const FinishingOptions: React.FC<FinishingOptionsProps> = ({ selected, onUpdate }) => {
  const calculateBlockTotal = (type: FinishingType): number => {
    return selected[type].reduce((sum: number, id: string) => {
      const item = (finishingData as FinishingData)[type].items.find(item => item.id === id);
      return sum + (item?.price || 0);
    }, 0);
  };

  const renderBlock = (type: FinishingType) => {
    const data = (finishingData as FinishingData)[type];
    const blockTotal = calculateBlockTotal(type);

    return (
      <div className="space-y-4 p-4 bg-white rounded-lg border border-gray-200">
        <h4 className="font-medium">{data.title}</h4>
        {data.items.map(item => (
          <label key={item.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selected[type].includes(item.id)}
              onChange={() => {
                const newSelection = selected[type].includes(item.id)
                  ? selected[type].filter(id => id !== item.id)
                  : [...selected[type], item.id];
                onUpdate(type, newSelection);
              }}
              className="h-4 w-4 text-indigo-600 rounded"
            />
            <span>{item.name} - ₽{item.price.toLocaleString()}</span>
          </label>
        ))}
        <PriceDisplay label={`Итого по ${data.title.toLowerCase()}`} price={blockTotal} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Чистовая отделка</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderBlock('basic')}
        {renderBlock('premium')}
        {renderBlock('luxury')}
      </div>
    </div>
  );
};