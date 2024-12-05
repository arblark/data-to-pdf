import { DesignOptionType } from '../types/project';

interface DesignOptionsProps {
  floorArea: number;
  selectedOption: string;
  onSelect: (option: DesignOptionType, price: number) => void;
}

export const DesignOptions: React.FC<DesignOptionsProps> = ({ 
  floorArea, 
  selectedOption,
  onSelect 
}) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    const price = option === 'standard' ? floorArea * 5000 : floorArea * 7000;
    onSelect(option as DesignOptionType, price);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Варианты проектирования</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="relative flex flex-col p-4 cursor-pointer bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="design"
              value="standard"
              checked={selectedOption === 'standard'}
              onChange={handleOptionChange}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="font-medium">Стандартный проект</span>
          </div>
          <p className="mt-2 text-sm text-gray-600 pl-7">
            ₽5,000 за м² • Базовое проектирование
          </p>
        </label>

        <label className="relative flex flex-col p-4 cursor-pointer bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="design"
              value="premium"
              checked={selectedOption === 'premium'}
              onChange={handleOptionChange}
              className="h-4 w-4 text-indigo-600"
            />
            <span className="font-medium">Премиум проект</span>
          </div>
          <p className="mt-2 text-sm text-gray-600 pl-7">
            ₽7,000 за м² • Расширенное проектирование
          </p>
        </label>
      </div>
    </div>
  );
};