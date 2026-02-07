import { AlertTriangle, TrendingDown, Users, Zap, Ship, Building } from 'lucide-react';

interface CrisisFactor {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  color: 'red' | 'amber' | 'orange';
}

const crisisFactors: CrisisFactor[] = [
  {
    icon: <Building className="w-5 h-5" />,
    title: 'Санкционное давление',
    description: 'Запрет на поставки в ЕС для дочернего предприятия «СтальИнвест-Экспорт» из-за геополитических ограничений',
    impact: 'Потеря 20% экспортного рынка',
    color: 'red'
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: 'Падение спроса',
    description: 'Сокращение госзаказов на строительную арматуру в связи с завершением инфраструктурных проектов',
    impact: 'Снижение выручки на 30%',
    color: 'amber'
  },
  {
    icon: <Ship className="w-5 h-5" />,
    title: 'Конкуренция с Азией',
    description: 'Дешёвый китайский прокат захватил 35% рынка, курс рубля ослаб до 90 ₽/$',
    impact: 'Рост себестоимости на 25%',
    color: 'orange'
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Утечка кадров',
    description: 'Зарплаты заморожены с 2022 года, ключевые специалисты уходят к конкурентам',
    impact: 'Штат сокращён на 43%',
    color: 'red'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Рост издержек',
    description: 'Увеличение цен на электроэнергию и логистику, реструктуризация долга под 12%',
    impact: 'Убыток 5.1 млрд ₽ в 2024',
    color: 'red'
  }
];

export function CrisisSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Кризис и перестройка</h2>
            <p className="text-slate-500">Факторы, приведшие к нестабильности</p>
          </div>
        </div>

        {/* Intro text */}
        <div className="mb-10 max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed">
            С 2020 года «СтальИнвест» столкнулся с комплексом взаимосвязанных проблем. 
            Внешне компания сохраняет позиции крупного игрока, но внутренняя ситуация 
            характеризуется <span className="text-red-600 font-medium">перманентным финансовым прессингом</span> и 
            <span className="text-red-600 font-medium"> управленческой турбулентностью</span>.
          </p>
        </div>

        {/* Crisis factors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {crisisFactors.map((factor, index) => (
            <div 
              key={index}
              className={`card-elevated p-5 border-l-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${factor.color === 'red' ? 'border-l-red-500' : ''}
                ${factor.color === 'amber' ? 'border-l-amber-500' : ''}
                ${factor.color === 'orange' ? 'border-l-orange-500' : ''}
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg flex-shrink-0
                  ${factor.color === 'red' ? 'bg-red-100 text-red-600' : ''}
                  ${factor.color === 'amber' ? 'bg-amber-100 text-amber-600' : ''}
                  ${factor.color === 'orange' ? 'bg-orange-100 text-orange-600' : ''}
                `}>
                  {factor.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-2">{factor.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{factor.description}</p>
                  <div className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium
                    ${factor.color === 'red' ? 'bg-red-50 text-red-700' : ''}
                    ${factor.color === 'amber' ? 'bg-amber-50 text-amber-700' : ''}
                    ${factor.color === 'orange' ? 'bg-orange-50 text-orange-700' : ''}
                  `}>
                    {factor.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Management response */}
        <div className="bg-slate-800 rounded-xl p-6 lg:p-8 text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Building className="w-5 h-5 text-slate-400" />
            Реакция руководства
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-sm text-slate-400 uppercase tracking-wide">Оптимизация</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Массовые сокращения персонала. Штат уменьшен с 3,500 до 2,000 человек к 2023 году. 
                Заморозка зарплат с 2022 года.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-slate-400 uppercase tracking-wide">Диверсификация</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Переход на нишевую продукцию: трубы для СПГ-проектов, нержавеющая сталь 
                для медицинского оборудования.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-slate-400 uppercase tracking-wide">Реструктуризация</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Долг в 15 млрд рублей реструктурирован в 2024 под 12% годовых. 
                Давление от Сбербанка и ВТБ.
              </p>
            </div>
          </div>
        </div>

        {/* Current state summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Оборот 2025</div>
            <div className="text-2xl font-bold text-slate-800">32 <span className="text-sm font-normal text-slate-500">млрд ₽</span></div>
            <div className="text-xs text-red-500 mt-1">↓ 29% с 2015</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Долг</div>
            <div className="text-2xl font-bold text-red-600">15 <span className="text-sm font-normal text-slate-500">млрд ₽</span></div>
            <div className="text-xs text-amber-600 mt-1">12% годовых</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Волатильность</div>
            <div className="text-2xl font-bold text-slate-800">87–92 <span className="text-sm font-normal text-slate-500">₽/$</span></div>
            <div className="text-xs text-amber-600 mt-1">Нестабильность</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Курс доллара</div>
            <div className="text-2xl font-bold text-slate-800">90 <span className="text-sm font-normal text-slate-500">₽/$</span></div>
            <div className="text-xs text-slate-400 mt-1">Средний 2024-2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
