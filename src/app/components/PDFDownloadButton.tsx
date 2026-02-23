import { useState } from 'react';
import { Download, Loader2, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFDownloadButtonProps {
  onDownloadAll?: () => Promise<void>;
}

export function PDFDownloadButton({ onDownloadAll }: PDFDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const generateCurrentSlide = async () => {
    setIsGenerating(true);
    setShowMenu(false);
    
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [794, 1123]
      });

      const container = document.getElementById('presentation-container');
      if (!container) {
        throw new Error('Presentation container not found');
      }

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
      pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);

      pdf.save('CSI-Digital-Transformation-Current-Slide.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAllSlides = async () => {
    setIsGenerating(true);
    setShowMenu(false);
    
    try {
      if (onDownloadAll) {
        await onDownloadAll();
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        disabled={isGenerating}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating PDF...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </>
        )}
      </button>

      {showMenu && !isGenerating && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden min-w-[240px]">
          <button
            onClick={generateCurrentSlide}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
          >
            <FileText className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-sm text-slate-800">Current Slide</div>
              <div className="text-xs text-slate-500">Download active slide as PDF</div>
            </div>
          </button>
          <button
            onClick={generateAllSlides}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left border-t border-slate-100"
          >
            <Download className="w-5 h-5 text-purple-600" />
            <div>
              <div className="text-sm text-slate-800">All Slides</div>
              <div className="text-xs text-slate-500">Download complete presentation</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
