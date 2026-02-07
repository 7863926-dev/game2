import { useState } from 'react';
import { 
  AlertOctagon, 
  Users, 
  FileX, 
  Cpu, 
  ArrowRight, 
  Wallet, 
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FraudScheme {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  mechanism: string[];
  amount: string;
  warning: string;
}

const fraudSchemes: FraudScheme[] = [
  {
    id: 'contractors',
    title: 'Фиктивные подрядчики',
    icon: <Users className="w-6 h-6" />,
    description: 'Созданы фирмы-однодневки («МеталлСервис-2025», «ПромРесурс-Урал»), зарегистрированные на подставных лицах.',
    mechanism: [
      'Договоры на «модернизацию» по ценам на 40–60% выше рыночных',
      'Акты выполненных работ подписываются подкупленными инженерами',
      'Деньги выводятся через криптобиржи (Binance, Bybit) в Monero и Tether',
      'Офшоры: Армения, ОАЭ'
    ],
    amount: '110 млн ₽ (2024)',
    warning: 'Цена замены датчиков: 12 млн ₽ при реальной стоимости 7 млн ₽'
  },
  {
    id: 'materials',
    title: 'Махинации с сырьём',
    icon: <FileX className="w-6 h-6" />,
    description: 'Списание металла как «брак» и тайная продажа через чёрных дилеров. Фальсификация сертификатов.',
    mechanism: [
      '20–25% произведённой стали списывается как «брак»',
      'Тайная продажа через чёрных дилеров в Казахстан',
      'Партии дешёвой китайской стали маркируются как «российская премиальная AISI 304»',
      'Поддельные QR-коды на сертификатах'
    ],
    amount: '90 млн ₽ (6 мес. 2025)',
    warning: 'Аномалия: +15% «потерь» между объёмами производства и отгрузки'
  },
  {
    id: 'it',
    title: 'IT-прикрытие',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Дмитрий Козлов внедрил «теневую бухгалтерию» в ERP-систему SAP S/4HANA.',
    mechanism: [
      'Теневая бухгалтерия в обновлённой ERP-системе',
      'Регулярное удаление логов переводов',
      'Использование VPN для имитации активности хакеров',
      'Миксеры (Tornado Cash) для отмывания криптовалюты'
    ],
    amount: 'Скрытие следов',
    warning: 'Транзакции почти невидимы из-за офшорных юрисдикций'
  }
];

const corruptionCases = [
  {
    role: 'Начальник отдела безопасности',
    bribe: '700 тыс. ₽/мес',
    forWhat: 'Игнорирование нарушений'
  },
  {
    role: 'Главбух Ирина Семёнова',
    bribe: 'Сохранение должности',
    forWhat: 'Подделка платёжек и актов сверки'
  }
];

export function FraudSchemeSection() {
  const [expandedScheme, setExpandedScheme] = useState<string | null>('contractors');

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 text-white">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <AlertOctagon className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Схема мошенничества</h2>
            <p className="text-slate-400">Предпосылки и механизмы (2023–2025)</p>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            Предпосылки (2023–2024)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-red-300">Финансовый прессинг</div>
              <p className="text-sm text-slate-400">
                Кредиторы (Сбербанк, ВТБ) требовали погашения долга, угрожая банкротством
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-amber-300">Давление акционеров</div>
              <p className="text-sm text-slate-400">
                Миноритарии (фонд «КапиталЪ-2025») настаивали на дивидендах, несмотря на убытки
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-orange-300">Падение морали</div>
              <p className="text-sm text-slate-400">
                Зарплаты заморожены с 2022, утечка кадров в конкурирующие компании
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-sm text-slate-300">
              <span className="text-red-400 font-medium">Решение руководства:</span> Финансовый директор 
              Павел Громов предложил <span className="text-red-400">«креативные схемы»</span> для улучшения 
              отчётности и получения новых кредитов под залог активов.
            </p>
          </div>
        </div>

        {/* Fraud schemes */}
        <div className="space-y-4 mb-10">
          {fraudSchemes.map((scheme) => (
            <div 
              key={scheme.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                    {scheme.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">{scheme.title}</h3>
                    <p className="text-sm text-slate-400 line-clamp-1">{scheme.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                    <Wallet className="w-4 h-4 mr-2" />
                    {scheme.amount}
                  </span>
                  {expandedScheme === scheme.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              {expandedScheme === scheme.id && (
                <div className="px-5 pb-5 border-t border-slate-700 pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-3">Механизм:</h4>
                      <ul className="space-y-2">
                        {scheme.mechanism.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                            <ArrowRight className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertOctagon className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-red-300">Тревожный сигнал</span>
                      </div>
                      <p className="text-sm text-red-200/80">{scheme.warning}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Corruption cases */}
        <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-amber-200 mb-4">Подкуп и давление</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {corruptionCases.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-4">
                <div>
                  <div className="font-medium text-slate-200">{item.role}</div>
                  <div className="text-sm text-slate-400">{item.forWhat}</div>
                </div>
                <div className="text-right">
                  <div className="text-amber-400 font-semibold">{item.bribe}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total amount */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-red-600 rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Wallet className="w-8 h-8 text-white" />
            <div>
              <div className="text-red-100 text-sm">Объём хищений</div>
              <div className="text-white text-2xl font-bold">200 млн ₽ к декабрю 2025</div>
            </div>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">110</div>
              <div className="text-red-100 text-sm">млн ₽ (2024)</div>
            </div>
            <div className="text-red-300 text-2xl">+</div>
            <div>
              <div className="text-3xl font-bold text-white">90</div>
              <div className="text-red-100 text-sm">млн ₽ (6 мес. 2025)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
