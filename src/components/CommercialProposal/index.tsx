import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Logo } from './sections/Logo';
import { TableOfContents } from './sections/TableOfContents';
import { AboutCompany } from './sections/AboutCompany';
import { WhyUs } from './sections/WhyUs';
import { MissionValues } from './sections/MissionValues';
import { Cases } from './sections/Cases';
import { ImplementationStages } from './sections/ImplementationStages';
import { ProjectSummary } from './sections/ProjectSummary';
import { DesignSection } from './sections/DesignSection';
import { SoundproofingSection } from './sections/SoundproofingSection';
import { AcousticSection } from './sections/AcousticSection';
import { FinishingSection } from './sections/FinishingSection';
import { FurnitureSection } from './sections/FurnitureSection';
import { EquipmentSection } from './sections/EquipmentSection';
import { ComparisonTable } from './sections/ComparisonTable';
import { Download, X } from 'lucide-react';

interface EquipmentKlasseData {
  items: string[];
  images: string[];
}

interface CommercialProposalData {
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

interface CommercialProposalProps {
  data: CommercialProposalData;
  onClose: () => void;
}

export const CommercialProposal: React.FC<CommercialProposalProps> = ({ data, onClose }) => {
  const safeData: CommercialProposalData = {
    projectName: data.projectName || '',
    floorArea: data.floorArea || 0,
    initialData: data.initialData || '',
    managerName: data.managerName || '',
    audioSystem: data.audioSystem || '',
    videoSystem: data.videoSystem || '',
    usageScenario: data.usageScenario || '',
    designOption: data.designOption || 'standard',
    designPrice: data.designPrice || 0,
    soundproofing: {
      standard: data.soundproofing?.standard || [],
      professional: data.soundproofing?.professional || [],
    },
    acousticPrice: data.acousticPrice || 0,
    finishing: {
      basic: data.finishing?.basic || [],
      premium: data.finishing?.premium || [],
      luxury: data.finishing?.luxury || []
    },
    selectedFurniture: data.selectedFurniture || [],
    equipment: {
      c_klasse: {
        items: data.equipment?.c_klasse?.items || [],
        images: data.equipment?.c_klasse?.images || [],
      },
      e_klasse: {
        items: data.equipment?.e_klasse?.items || [],
        images: data.equipment?.e_klasse?.images || [],
      },
      s_klasse: {
        items: data.equipment?.s_klasse?.items || [],
        images: data.equipment?.s_klasse?.images || [],
      },
    },
  };

  const proposalRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!proposalRef.current) return;

    const sections = proposalRef.current.children;
    const pdf = new jsPDF('l', 'mm', 'a4', true);
    let isFirstPage = true;

    // Получаем размеры страницы A4 в пикселях (при 96 DPI)
    const a4Width = Math.floor(297 * 96 / 25.4);  // 297мм в пиксели
    const a4Height = Math.floor(210 * 96 / 25.4);  // 210мм в пиксели

    // Подготовим элементы перед конвертацией
    const prepareForPDF = () => {
      const headers = proposalRef.current?.querySelectorAll(
        'h2.bg-gradient-to-r.bg-clip-text.text-transparent'
      );
      headers?.forEach(header => {
        header.classList.remove('bg-gradient-to-r', 'bg-clip-text', 'text-transparent');
        header.classList.add('text-white');
      });

      // Установим фиксированные размеры для каждой секции
      const sections = proposalRef.current?.children;
      if (sections) {
        Array.from(sections).forEach(section => {
          if (section instanceof HTMLElement) {
            section.style.width = `${a4Width}px`;
            section.style.height = `${a4Height}px`;
            section.style.pageBreakAfter = 'always';
            section.style.overflow = 'hidden';
          }
        });
      }
    };

    // Восстановим стили
    const restoreStyles = () => {
      const headers = proposalRef.current?.querySelectorAll('h2.text-white');
      headers?.forEach(header => {
        header.classList.remove('text-white');
        header.classList.add('bg-gradient-to-r', 'bg-clip-text', 'text-transparent');
      });

      // Восстановим оригинальные стили секций
      const sections = proposalRef.current?.children;
      if (sections) {
        Array.from(sections).forEach(section => {
          if (section instanceof HTMLElement) {
            section.style.width = '';
            section.style.height = '';
            section.style.pageBreakAfter = '';
            section.style.overflow = '';
          }
        });
      }
    };

    try {
      prepareForPDF();

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const canvas = await html2canvas(section, {
          logging: false,
          useCORS: true,
          backgroundColor: '#121212',
          allowTaint: true,
          removeContainer: true,
          scale: 2,
          width: a4Width,
          height: a4Height,
          windowWidth: a4Width,
          windowHeight: a4Height
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (!isFirstPage) {
          pdf.addPage();
        }

        pdf.setFillColor(18, 18, 18);
        pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F');
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        isFirstPage = false;
      }

      pdf.save('commercial-proposal.pdf');
    } finally {
      restoreStyles();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-y-auto z-50">
      <div className="sticky top-0 z-10 bg-gray-800 shadow-xl p-4 backdrop-blur-lg bg-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Предпросмотр коммерческого предложения
          </h1>
          <div className="space-x-4">
            <button
              onClick={generatePDF}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all transform hover:scale-105 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="flex items-center space-x-2">
                <Download size={18} />
                <span>Сохранить PDF</span>
              </span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="flex items-center space-x-2">
                <X size={18} />
                <span>Закрыть</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-none mx-auto p-8 space-y-8" ref={proposalRef}>
        <Logo />
        <TableOfContents />
        <AboutCompany />
        <WhyUs />
        <MissionValues />
        <Cases />
        <ImplementationStages />
        <ProjectSummary data={safeData} />
        <DesignSection data={safeData} />
        <SoundproofingSection data={safeData} />
        <AcousticSection data={safeData} />
        <FinishingSection data={safeData} />
        <FurnitureSection data={safeData} />
        <EquipmentSection data={safeData} />
        <ComparisonTable data={safeData} />
      </div>
    </div>
  );
};