import { useState, useEffect } from 'react';
import { TitleSlide } from './components/TitleSlide';
import { ExecutiveSummarySlide } from './components/ExecutiveSummarySlide';
import { TechnicalArchitectureSlide } from './components/TechnicalArchitectureSlide';
import { EcosystemSlide } from './components/EcosystemSlide';
import { RoadmapSlide } from './components/RoadmapSlide';
import { BenefitsSlide } from './components/BenefitsSlide';
import { BudgetSlide } from './components/BudgetSlide';
import { MilestonesSlide } from './components/MilestonesSlide';
import { TeamStructureSlide } from './components/TeamStructureSlide';
import { RiskManagementSlide } from './components/RiskManagementSlide';
import { Navigation } from './components/Navigation';
import { PDFDownloadButton } from './components/PDFDownloadButton';
import { KeyboardHint } from './components/KeyboardHint';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const slides = [
    <TitleSlide />,
    <ExecutiveSummarySlide />,
    <TechnicalArchitectureSlide />,
    <EcosystemSlide />,
    <RoadmapSlide />,
    <BenefitsSlide />,
    <BudgetSlide />,
    <MilestonesSlide />,
    <TeamStructureSlide />,
    <RiskManagementSlide />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const downloadAllSlides = async () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [794, 1123]
    });

    const container = document.getElementById('presentation-container');
    if (!container) return;

    const originalSlide = currentSlide;

    for (let i = 0; i < slides.length; i++) {
      // Switch to the slide
      setCurrentSlide(i);
      
      // Wait for the slide to render
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      if (i > 0) {
        pdf.addPage([794, 1123], 'portrait');
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);
    }

    // Restore original slide
    setCurrentSlide(originalSlide);

    pdf.save('CSI-Digital-Transformation-Complete-Proposal.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 md:p-8">
      <KeyboardHint />
      <div className="relative">
        {/* A4 Portrait Container (794px x 1123px at 96dpi) */}
        <div 
          id="presentation-container"
          className="bg-white shadow-2xl overflow-hidden relative"
          style={{ 
            width: '100%', 
            maxWidth: '794px',
            aspectRatio: '794 / 1123'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide Content */}
          <div className="w-full h-full">
            {slides[currentSlide]}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden md:flex">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute -bottom-16 md:-bottom-20 left-0 right-0 flex items-center justify-between">
          <Navigation 
            currentSlide={currentSlide} 
            totalSlides={slides.length}
            onSlideChange={setCurrentSlide}
          />
          <PDFDownloadButton onDownloadAll={downloadAllSlides} />
        </div>
      </div>
    </div>
  );
}

export default App;