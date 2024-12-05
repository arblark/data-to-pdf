import { useState } from 'react';
import { ProjectInfo } from './components/ProjectInfo';
import { SystemSelector } from './components/SystemSelector';
import { DesignOptions } from './components/DesignOptions';
import { SoundproofingOptions } from './components/SoundproofingOptions';
import { FinishingOptions } from './components/FinishingOptions';
import { FurnitureSelector } from './components/FurnitureSelector';
import { EquipmentSelector } from './components/EquipmentSelector';
import { CommercialProposal } from './components/CommercialProposal';
import { generateRandomData } from './utils/random';
import audioSystems from './data/audioSystems.json';
import videoSystems from './data/videoSystems.json';
import usageScenarios from './data/usageScenarios.json';
import { ProjectData, DesignOptionType, KlassType, FinishingType } from './types/project';

function App() {
  const [projectData, setProjectData] = useState<ProjectData>({
    projectName: '',
    floorArea: 0,
    initialData: '',
    managerName: 'Иван Петров',
    audioSystem: '',
    videoSystem: '',
    usageScenario: '',
    designOption: 'standard' as DesignOptionType,
    designPrice: 0,
    soundproofing: {
      standard: [] as string[],
      professional: [] as string[]
    },
    acousticPrice: 0,
    finishing: {
      basic: [] as string[],
      premium: [] as string[],
      luxury: [] as string[]
    },
    selectedFurniture: [] as string[],
    equipment: {
      c_klasse: { items: [] as string[], images: [] as string[] },
      e_klasse: { items: [] as string[], images: [] as string[] },
      s_klasse: { items: [] as string[], images: [] as string[] }
    },
    showPreview: false
  });

  const handleProjectInfoUpdate = (data: { projectName: string; floorArea: number; initialData: string }) => {
    setProjectData(prev => ({
      ...prev,
      ...data
    }));
  };

  const handleAudioSystemSelect = (value: string) => {
    setProjectData(prev => ({ ...prev, audioSystem: value }));
  };

  const handleVideoSystemSelect = (value: string) => {
    setProjectData(prev => ({ ...prev, videoSystem: value }));
  };

  const handleUsageScenarioSelect = (value: string) => {
    setProjectData(prev => ({ ...prev, usageScenario: value }));
  };

  const handleDesignSelect = (option: DesignOptionType, price: number) => {
    setProjectData(prev => ({
      ...prev,
      designOption: option,
      designPrice: price
    }));
  };

  const handleSoundproofingUpdate = (standard: string[], professional: string[]) => {
    setProjectData(prev => ({
      ...prev,
      soundproofing: { standard, professional }
    }));
  };

  const handleAcousticPriceUpdate = (price: number) => {
    setProjectData(prev => ({ ...prev, acousticPrice: price }));
  };

  const handleFinishingUpdate = (type: FinishingType, selectedItems: string[]) => {
    setProjectData(prev => ({
      ...prev,
      finishing: {
        ...prev.finishing,
        [type]: selectedItems
      }
    }));
  };

  const handleFurnitureSelect = (selectedItems: string[]) => {
    setProjectData(prev => ({
      ...prev,
      selectedFurniture: selectedItems
    }));
  };

  const handleEquipmentUpdate = (
    klassType: KlassType,
    selectedItems: string[],
    selectedImages: string[]
  ) => {
    setProjectData(prev => ({
      ...prev,
      equipment: {
        ...prev.equipment,
        [klassType]: {
          items: selectedItems,
          images: selectedImages
        }
      }
    }));
  };

  const handleRandomFill = () => {
    const randomData = generateRandomData();
    setProjectData(prev => ({
      ...prev,
      ...randomData
    }));
  };

  const handlePreviewToggle = () => {
    setProjectData(prev => ({
      ...prev,
      showPreview: !prev.showPreview
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleRandomFill}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Заполнить случайными данными
          </button>
          <button
            onClick={handlePreviewToggle}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Предпросмотр КП
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <ProjectInfo
            onUpdate={handleProjectInfoUpdate}
            data={{
              projectName: projectData.projectName,
              floorArea: projectData.floorArea,
              initialData: projectData.initialData
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SystemSelector
            title="Аудиосистема"
            options={audioSystems.presets}
            value={projectData.audioSystem}
            onSelect={handleAudioSystemSelect}
          />
          <SystemSelector
            title="Видеосистема"
            options={videoSystems.presets}
            value={projectData.videoSystem}
            onSelect={handleVideoSystemSelect}
          />
          <SystemSelector
            title="Сценарий использования"
            options={usageScenarios.presets}
            value={projectData.usageScenario}
            onSelect={handleUsageScenarioSelect}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <DesignOptions
            floorArea={projectData.floorArea}
            selectedOption={projectData.designOption}
            onSelect={handleDesignSelect}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <SoundproofingOptions
            selected={projectData.soundproofing}
            onUpdate={handleSoundproofingUpdate}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Акустическое оформление</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Стоимость акустического оформления</span>
              <input
                type="number"
                value={projectData.acousticPrice}
                onChange={(e) => handleAcousticPriceUpdate(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                min="0"
              />
            </label>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FinishingOptions
            selected={projectData.finishing}
            onUpdate={handleFinishingUpdate}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Мебель</h2>
          <FurnitureSelector
            selected={projectData.selectedFurniture}
            onSelect={handleFurnitureSelect}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Оборудование</h2>
          <EquipmentSelector
            selected={projectData.equipment}
            onUpdate={handleEquipmentUpdate}
          />
        </div>
      </div>

      {projectData.showPreview && (
        <CommercialProposal
          data={projectData}
          onClose={handlePreviewToggle}
        />
      )}
    </div>
  );
}

export default App;