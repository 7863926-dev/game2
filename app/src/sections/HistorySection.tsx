import { useState } from 'react';
import { Calendar, TrendingUp, Building2, AlertTriangle } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  phase: 'growth' | 'crisis' | 'stable';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1992–2000',
    title: 'Основание и становление',
    description: 'Создание в Екатеринбурге как предприятие по переработке металлолома. Основатель Виктор Семёнов воспользовался хаосом постсоветской приватизации.',
    details: [
      '1998: Преодоление кризиса дефолта за счёт экспорта',
      '2000: Поглощение завода «УралМеталл»',
      'Появление первого доменного цеха'
    ],
    icon: <Building2 className="w-5 h-5" />,
    phase: 'stable'
  },
  {
    year: '2001–2015',
    title: 'Эпоха роста',
    description: 'Вертикальная интеграция холдинга. Приобретение лицензий на добычу руды, запуск электроплавильного комплекса, выход на международные рынки.',
    details: [
      '2005: Лицензии на добычу железной руды',
      '2010: Электроплавильный комплекс 1.2 млн тонн/год',
      '2013: Экспорт в ЕС и ЮВА — 20% продукции',
      '4 производственных площадки, 3,500 сотрудников'
    ],
    icon: <TrendingUp className="w-5 h-5" />,
    phase: 'growth'
  },
  {
    year: '2020–2026',
    title: 'Кризис и перестройка',
    description: 'Санкционное давление, падение спроса, конкуренция с Азией. Оптимизация затрат, сокращение штата, переход на нишевую продукцию.',
    details: [
      'Запрет на поставки в ЕС для дочернего предприятия',
      'Штат сокращён с 3,500 до 2,000 человек',
      '2024: Убыток 5.1 млрд рублей',
      'Долг 15 млрд рублей реструктурирован под 12%'
    ],
    icon: <AlertTriangle className="w-5 h-5" />,
    phase: 'crisis'
  }
];

export function HistorySection() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-slate-100 rounded-lg">
            <Calendar className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">История компании</h2>
            <p className="text-slate-500">Три десятилетия на рынке металлургии</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-emerald-400 to-red-400 hidden md:block" />
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="relative md:pl-16"
                onMouseEnter={() => setActiveEvent(index)}
                onMouseLeave={() => setActiveEvent(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 hidden md:flex
                  ${event.phase === 'growth' ? 'bg-emerald-100 border-emerald-400 text-emerald-700' : ''}
                  ${event.phase === 'crisis' ? 'bg-red-100 border-red-400 text-red-700' : ''}
                  ${event.phase === 'stable' ? 'bg-slate-100 border-slate-400 text-slate-700' : ''}
                  ${activeEvent === index ? 'scale-110 shadow-lg' : ''}
                `}>
                  {event.icon}
                </div>

                {/* Content card */}
                <div className={`card-elevated p-6 transition-all duration-300 cursor-pointer
                  ${activeEvent === index ? 'shadow-xl translate-x-2' : ''}
                `}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold
                          ${event.phase === 'growth' ? 'bg-emerald-100 text-emerald-700' : ''}
                          ${event.phase === 'crisis' ? 'bg-red-100 text-red-700' : ''}
                          ${event.phase === 'stable' ? 'bg-slate-100 text-slate-700' : ''}
                        `}>
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800">{event.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">{event.description}</p>
                      <ul className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                              ${event.phase === 'growth' ? 'bg-emerald-500' : ''}
                              ${event.phase === 'crisis' ? 'bg-red-500' : ''}
                              ${event.phase === 'stable' ? 'bg-slate-500' : ''}
                            `} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-slate-800">33</div>
            <div className="text-sm text-slate-500">Года на рынке</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-emerald-700">15%</div>
            <div className="text-sm text-emerald-600">Доля рынка Урала</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-amber-700">7</div>
            <div className="text-sm text-amber-600">Регионов складов</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-700">2,000</div>
            <div className="text-sm text-blue-600">Сотрудников</div>
          </div>
        </div>
      </div>
    </section>
  );
}
