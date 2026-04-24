import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const MobileOverlay = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 mobile-overlay-backdrop animate-fade-in">
      <div className="relative max-w-sm mx-4 text-center animate-scale-in">
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xl text-gray-900 mb-2">
              Mobile Experience
            </p>
           
          </div>
          
          <p className="mt-4 text-2xl font-bold text-[var(--kaiku-blue)]">
            Unlock full access on web version!
          </p>
        </div>
      </div>
    </div>
  );
};
