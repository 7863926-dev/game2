import { 
  Search, 
  Mail, 
  FileSearch, 
  Building2, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Shield,
  Lock,
  Eye,
  AlertOctagon
} from 'lucide-react';

interface Trigger {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  priority: 'high' | 'medium' | 'critical';
}

const triggers: Trigger[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Анонимный донос (март 2025)',
    description: 'Письмо в совет директоров от «бывшего сотрудника цеха №2»',
    details: [
      'Фото поддельных сертификатов',
      'Переписка Громова с подрядчиками',
      'Упоминание криптокошельков и сумм в USDT'
    ],
    priority: 'critical'
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: 'Несоответствия в отчётности',
    description: 'Аудиторы «KPMG-Урал» обнаружили аномалии при проверке для рефинансирования долга',
    details: [
      'Расхождения: +15% «потерь» между производством и отгрузкой',
      'Повторяющиеся платежи на счета в «Тинькофф» и «Сбер»',
      'Одинаковые комментарии: «ремонтные работы»'
    ],
    priority: 'high'
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Давление регуляторов',
    description: 'Банк России запросил данные о подозрительных операциях',
    details: [
      'Запрос через систему «Финсерч»',
      'Требование раскрытия информации о контрагентах',
      'Угроза блокировки счетов'
    ],
    priority: 'high'
  }
];

const powers = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Полный доступ к системам',
    description: 'SAP S/4HANA, корпоративная почта, камеры наблюдения'
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Право изъятия',
    description: 'Документы и электронные носители'
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Анализ блокчейна',
    description: 'Привлечение хакеров легализовано по ст. 13 ФЗ «О цифровых активах»'
  }
];

const restrictions = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Срок расследования',
    description: 'До 1 декабря 2025'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Конфиденциальность',
    description: 'Отчёт только совету директоров и регуляторам'
  }
];

export function ForensicHiringSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="section-container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Найм Форензик-Экспертов</h2>
            <p className="text-slate-500">Условия и полномочия расследования</p>
          </div>
        </div>

        {/* Triggers */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-red-500" />
            Триггеры для расследования
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {triggers.map((trigger, idx) => (
              <div 
                key={idx}
                className={`card-elevated p-5 border-t-4 transition-all duration-300 hover:shadow-xl
                  ${trigger.priority === 'critical' ? 'border-t-red-500' : ''}
                  ${trigger.priority === 'high' ? 'border-t-amber-500' : ''}
                  ${trigger.priority === 'medium' ? 'border-t-blue-500' : ''}
                `}
              >
                <div className={`p-2 rounded-lg inline-flex mb-3
                  ${trigger.priority === 'critical' ? 'bg-red-100 text-red-600' : ''}
                  ${trigger.priority === 'high' ? 'bg-amber-100 text-amber-600' : ''}
                  ${trigger.priority === 'medium' ? 'bg-blue-100 text-blue-600' : ''}
                `}>
                  {trigger.icon}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{trigger.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{trigger.description}</p>
                <ul className="space-y-1">
                  {trigger.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0
                        ${trigger.priority === 'critical' ? 'bg-red-500' : ''}
                        ${trigger.priority === 'high' ? 'bg-amber-500' : ''}
                        ${trigger.priority === 'medium' ? 'bg-blue-500' : ''}
                      `} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contractor selection */}
        <div className="bg-blue-900 rounded-xl p-6 text-white mb-8">
          <h3 className="text-lg font-semibold mb-4">Процесс найма</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-blue-200 text-sm mb-2">Выбор подрядчика</div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Проведён тендер с участием трёх компаний. Победу одержала екатеринбургская 
                фирма <span className="text-white font-medium">«Forensic Ural»</span> — 
                специализация на делах с криптовалютой.
              </p>
            </div>
            <div>
              <div className="text-blue-200 text-sm mb-2">Стоимость контракта</div>
              <div className="text-3xl font-bold text-white">18 <span className="text-lg font-normal text-blue-200">млн ₽</span></div>
              <div className="text-blue-300 text-xs mt-1">С учётом инфляции 2025</div>
            </div>
          </div>
        </div>

        {/* Powers and restrictions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Powers */}
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Полномочия экспертов
            </h3>
            <div className="space-y-4">
              {powers.map((power, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 flex-shrink-0">
                    {power.icon}
                  </div>
                  <div>
                    <div className="font-medium text-emerald-900">{power.title}</div>
                    <div className="text-sm text-emerald-700">{power.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restrictions */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Ограничения
            </h3>
            <div className="space-y-4">
              {restrictions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-amber-900">{item.title}</div>
                    <div className="text-sm text-amber-700">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game context */}
        <div className="mt-8 bg-slate-800 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Связь с игровыми механиками</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-blue-300 text-sm mb-2">Контекст для Экспертов</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong>Анализ блокчейна:</strong> Обусловлен переводом 45 млн ₽ в USDT через Binance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong>Проверка складов:</strong> Ответ на аномалии в списаниях «брака»</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-red-300 text-sm mb-2">Контекст для Мошенников</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Инсценировка кибератаки:</strong> Попытка объяснить удаление логов из SAP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Подкуп аудиторов:</strong> Реакция на давление «Forensic Ural»</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
