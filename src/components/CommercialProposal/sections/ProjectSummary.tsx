import React from 'react';
import { FileText, User, LayoutPanelTop, Speaker, Monitor } from 'lucide-react';
import type { CommercialProposalData } from '../../../types/data';

interface ProjectSummaryProps {
  data: Pick<CommercialProposalData, 
    | 'projectName'
    | 'floorArea'
    | 'initialData'
    | 'managerName'
    | 'audioSystem'
    | 'videoSystem'
    | 'usageScenario'
  >;
}

export const ProjectSummary: React.FC<ProjectSummaryProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white">
      <div className="flex items-center space-x-4 mb-8">
        <FileText className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Резюме проекта
        </h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-3 mb-2">
              <LayoutPanelTop className="w-5 h-5 text-indigo-400" />
              <h3 className="font-medium text-gray-300">Название объекта</h3>
            </div>
            <p className="text-lg text-white">{data.projectName}</p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-3 mb-2">
              <Monitor className="w-5 h-5 text-indigo-400" />
              <h3 className="font-medium text-gray-300">Площадь помещения</h3>
            </div>
            <p className="text-lg text-white">{data.floorArea} м²</p>
          </div>
        </div>

        <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="font-medium text-gray-300">Исходные данные</h3>
          </div>
          <p className="text-lg text-white">{data.initialData}</p>
        </div>

        <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3 mb-2">
            <User className="w-5 h-5 text-indigo-400" />
            <h3 className="font-medium text-gray-300">Менеджер проекта</h3>
          </div>
          <p className="text-lg text-white">{data.managerName}</p>
        </div>

        <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3 mb-2">
            <Speaker className="w-5 h-5 text-indigo-400" />
            <h3 className="font-medium text-gray-300">Предполагаемое решение</h3>
          </div>
          <ul className="space-y-2 text-white">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Аудиосистема: {data.audioSystem}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Видеосистема: {data.videoSystem}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Сценарий использования: {data.usageScenario}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};