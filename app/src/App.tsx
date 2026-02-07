import { HeroSection } from './sections/HeroSection';
import { HistorySection } from './sections/HistorySection';
import { CrisisSection } from './sections/CrisisSection';
import { FraudSchemeSection } from './sections/FraudSchemeSection';
import { ForensicHiringSection } from './sections/ForensicHiringSection';
import { FlowDiagramSection } from './sections/FlowDiagramSection';
import { Factory, Shield, Scale } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Factory className="w-6 h-6 text-slate-700" />
              <span className="font-semibold text-slate-800">СтальИнвест</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#history" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">История</a>
              <a href="#crisis" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Кризис</a>
              <a href="#fraud" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Мошенничество</a>
              <a href="#forensic" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Расследование</a>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-slate-500" />
              <span className="text-sm text-slate-500 hidden sm:inline">Деловая игра</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection />
        
        <div id="history">
          <HistorySection />
        </div>
        
        <div id="crisis">
          <CrisisSection />
        </div>
        
        <FlowDiagramSection />
        
        <div id="fraud">
          <FraudSchemeSection />
        </div>
        
        <div id="forensic">
          <ForensicHiringSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Factory className="w-5 h-5 text-slate-300" />
                <span className="font-semibold text-slate-200">ООО «СтальИнвест»</span>
              </div>
              <p className="text-sm leading-relaxed">
                Промышленно-финансовый холдинг в сфере металлургии, поставок и инвестиционных проектов.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Деловая игра</h4>
              <p className="text-sm leading-relaxed">
                «Корпоративные мошенники vs Форензик-эксперты» — образовательная бизнес-симуляция 
                для изучения методов выявления и расследования корпоративного мошенничества.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p>Екатеринбург, Свердловская область</p>
                <p>3 производственные площадки</p>
                <p>2,000 сотрудников</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2025 ООО «СтальИнвест». Материалы подготовлены для образовательных целей.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500">Forensic Ural — официальный подрядчик</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
