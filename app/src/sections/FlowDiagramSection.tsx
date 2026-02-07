import { Factory, ArrowRight, Users, FileText, Wallet, Shield, Database, AlertTriangle } from 'lucide-react';

export function FlowDiagramSection() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Структура и потоки</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Схема денежных потоков, контрактных цепочек и точек контроля в холдинге «СтальИнвест»
          </p>
        </div>

        {/* Flow diagram */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 lg:p-10">
          {/* Top level - Production */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800 text-white rounded-xl p-6 w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-6 h-6 text-slate-400" />
                <h3 className="font-semibold">Производственный блок</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-xs text-slate-400">Завода</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs text-slate-400">Складов</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-2xl font-bold">2K</div>
                  <div className="text-xs text-slate-400">Рабочих</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows down */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-16">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-emerald-500 rotate-90" />
                <span className="text-xs text-emerald-600 font-medium mt-1">Продукция</span>
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-amber-500 rotate-90" />
                <span className="text-xs text-amber-600 font-medium mt-1">«Брак»</span>
              </div>
            </div>
          </div>

          {/* Middle level - Sales & Fraud */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Legal sales */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800">Официальные продажи</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Госзаказы</span>
                  <span className="font-medium text-emerald-800">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Экспорт (без ЕС)</span>
                  <span className="font-medium text-emerald-800">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Внутренний рынок</span>
                  <span className="font-medium text-emerald-800">30%</span>
                </div>
              </div>
            </div>

            {/* Gray sales */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Серые потоки</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-red-700">«Брак» → Казахстан</span>
                  <span className="font-medium text-red-800">20-25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-700">Фиктивные подрядчики</span>
                  <span className="font-medium text-red-800">+40-60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-700">Фальсификаты</span>
                  <span className="font-medium text-red-800">QR-коды</span>
                </div>
              </div>
            </div>
          </div>

          {/* Money flow */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 bg-slate-100 rounded-full px-6 py-3">
              <Wallet className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600">Денежные потоки</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Официальные</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Крипта → Офшоры</span>
              </div>
            </div>
          </div>

          {/* Bottom level - Control & Fraud */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Management */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Руководство</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="text-blue-700">Алексей Воронов — Гендиректор</li>
                <li className="text-blue-700">Павел Громов — Финансовый директор</li>
                <li className="text-blue-700">Дмитрий Козлов — IT-директор</li>
              </ul>
            </div>

            {/* IT Systems */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">IT-системы</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="text-purple-700">SAP S/4HANA (ERP)</li>
                <li className="text-purple-700">«Теневая бухгалтерия»</li>
                <li className="text-red-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  Удаление логов
                </li>
              </ul>
            </div>

            {/* Control points */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Точки контроля</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="text-amber-700">Внутренний аудит (раз в 2 года)</li>
                <li className="text-amber-700">Кибербезопасность (внешние угрозы)</li>
                <li className="text-red-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  Forensic Ural (найм 2025)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk indicators */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-500 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Риск мошенничества</div>
            <div className="text-lg font-bold text-red-600">Высокий</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Прозрачность</div>
            <div className="text-lg font-bold text-amber-600">Низкая</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Контроль</div>
            <div className="text-lg font-bold text-blue-600">Ослаблен</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-500 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Расследование</div>
            <div className="text-lg font-bold text-emerald-600">Активно</div>
          </div>
        </div>
      </div>
    </section>
  );
}
