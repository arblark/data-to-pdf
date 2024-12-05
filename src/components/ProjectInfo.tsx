import React from 'react';

interface ProjectInfoProps {
  onUpdate: (data: {
    projectName: string;
    floorArea: number;
    initialData: string;
  }) => void;
  data: {
    projectName: string;
    floorArea: number;
    initialData: string;
  };
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ onUpdate, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    onUpdate({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Название объекта
          <input
            type="text"
            name="projectName"
            value={data.projectName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Введите название объекта"
          />
        </label>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Площадь помещения (м²)
          <input
            type="number"
            name="floorArea"
            value={data.floorArea}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Введите площадь"
            min="0"
          />
        </label>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Исходные данные
          <textarea
            name="initialData"
            value={data.initialData}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={3}
            placeholder="Опишите исходные данные проекта"
          />
        </label>
      </div>
    </div>
  );
};