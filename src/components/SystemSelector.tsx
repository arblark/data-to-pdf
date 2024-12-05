import React from 'react';

interface Option {
  id: string;
  name: string;
  description: string;
}

interface SystemSelectorProps {
  title: string;
  options: Option[];
  value: string;
  onSelect: (value: string) => void;
}

export const SystemSelector: React.FC<SystemSelectorProps> = ({ title, options, value, onSelect }) => {
  const [customValue, setCustomValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (newValue !== 'custom') {
      onSelect(newValue);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCustomValue(newValue);
    onSelect(newValue);
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <label className="block text-sm font-medium text-gray-700">
        {title}
        <select
          value={value === customValue ? 'custom' : value}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Выберите вариант</option>
          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
          <option value="custom">Свой вариант</option>
        </select>
      </label>

      {value === customValue && (
        <input
          type="text"
          value={customValue}
          onChange={handleCustomChange}
          placeholder="Введите свой вариант"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      )}

      {value && value !== customValue && (
        <p className="text-sm text-gray-600">
          {options.find(opt => opt.name === value)?.description}
        </p>
      )}
    </div>
  );
};