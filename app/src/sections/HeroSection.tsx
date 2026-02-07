import { Factory, TrendingUp, ShieldAlert, FileText } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/3 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 section-container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Company badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
            <Factory className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Промышленно-финансовый холдинг</span>
          </div>
          
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-slate-900">ООО</span>
              <span className="text-slate-400 mx-3">«</span>
              <span className="text-gradient from-slate-800 via-slate-700 to-slate-800">СтальИнвест</span>
              <span className="text-slate-400 mx-3">»</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 font-light max-w-2xl mx-auto">
              Описание компании для деловой игры
              <span className="block text-lg text-slate-400 mt-2">
                «Корпоративные мошенники vs Форензик-эксперты»
              </span>
            </p>
          </div>
          
          {/* Key metrics cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <div className="card-elevated p-4 space-y-2 hover:shadow-xl transition-shadow">
              <Factory className="w-6 h-6 text-slate-700" />
              <div className="text-2xl font-bold text-slate-800">3</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Завода</div>
            </div>
            <div className="card-elevated p-4 space-y-2 hover:shadow-xl transition-shadow">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <div className="text-2xl font-bold text-slate-800">32<span className="text-sm text-slate-500 ml-1">млрд ₽</span></div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Оборот 2025</div>
            </div>
            <div className="card-elevated p-4 space-y-2 hover:shadow-xl transition-shadow">
              <FileText className="w-6 h-6 text-amber-600" />
              <div className="text-2xl font-bold text-slate-800">15<span className="text-sm text-slate-500 ml-1">млрд ₽</span></div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Долг</div>
            </div>
            <div className="card-elevated p-4 space-y-2 hover:shadow-xl transition-shadow relative overflow-hidden">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <div className="text-2xl font-bold text-red-600">200<span className="text-sm text-red-400 ml-1">млн ₽</span></div>
              <div className="text-xs text-red-500 uppercase tracking-wide">Цель хищений</div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-700">Кризис роста</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-700">Расследование</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
