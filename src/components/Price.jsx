export default function Price({ onCTA }) {
  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#D97757] font-semibold text-sm uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Два формата участия</h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Можно записаться одному в открытую группу — или взять формат под свою команду.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">

          {/* Track 1: Групповая */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-[#D97757]/20 border border-[#D97757]/40 rounded-full px-3 py-1 text-xs text-[#D97757] font-semibold mb-5 self-start">
              ПОПУЛЯРНОЕ
            </div>
            <p className="text-white/50 text-sm mb-1">Групповая запись</p>
            <h3 className="text-2xl font-bold text-white mb-2">Открытый практикум</h3>
            <div className="text-5xl font-bold text-[#D97757] mt-4 mb-1">50 000 ₸</div>
            <p className="text-white/40 text-sm mb-8">за участника · 3 часа практики</p>

            <ul className="space-y-2 text-sm text-white/70 mb-8 flex-1">
              {[
                'В группе до 20 человек',
                'Расписание с открытыми датами',
                'Помощь тренера на месте',
                'Базовые промпты и инструкции',
                'Оплата через Kaspi (по чеку)',
              ].map(i => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#D97757] mt-0.5">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-[#D97757] hover:bg-[#c4674a] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
            >
              Записаться в группу →
            </button>
          </div>

          {/* Track 2: Индивидуально */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/70 font-semibold mb-5 self-start">
              ДЛЯ КОМАНД
            </div>
            <p className="text-white/50 text-sm mb-1">Индивидуально</p>
            <h3 className="text-2xl font-bold text-white mb-2">Под вашу команду</h3>
            <div className="text-5xl font-bold text-white mt-4 mb-1">от 50 000 ₸</div>
            <p className="text-white/40 text-sm mb-8">обсуждается лично</p>

            <ul className="space-y-2 text-sm text-white/70 mb-8 flex-1">
              {[
                'Программа под задачи компании',
                'Удобное время и место',
                'Размер группы согласуем',
                'Углублённые модули по запросу',
                'Стоимость и оплату обсудим в звонке',
              ].map(i => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
            >
              Обсудить индивидуально →
            </button>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs">
          Не входит: еда и напитки в кафе · подписка Claude Pro · другие платные AI-инструменты · личный ноутбук
        </p>
      </div>
    </section>
  )
}
