import { useScrollReveal } from '../hooks/useScrollReveal'

const checkItems = [
  'Usou Cursor, Claude ou Lovable para construir algo e não sabe o que fazer agora',
  'Tem um app funcionando mas não sabe o que priorizar nem como evoluir',
  'É PO ou PM iniciante e quer processo prático, não teoria de livro',
  'É dev e quer entender produto sem abrir mão do lado técnico',
  'Fundador solo que precisa fazer tudo — e precisa de um sistema',
]

const xItems = [
  'Você quer receita rápida sem nenhum processo',
  'Você acha que a ideia sozinha é suficiente',
  'Você quer mais um framework sem aplicação real',
  'Você prefere terceirizar toda decisão de produto',
]

const bonusItems = [
  'Template de persona completa',
  'Template de user story (Gherkin)',
  'Tabela de backlog MoSCoW',
  'Template de roadmap por horizonte',
  'Prompts prontos para PO com IA',
]

export default function ForWho() {
  const ref = useScrollReveal()

  return (
    <section className="bg-surface border-y border-line py-14 md:py-20" aria-labelledby="forwho-title" ref={ref}>
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* Left */}
          <div>
            <h2
              id="forwho-title"
              className="reveal font-display font-extrabold leading-[1.05] tracking-tight mb-7"
              style={{ fontSize: 'clamp(26px, 5vw, 40px)' }}
            >
              Este ebook é<br />
              pra <em className="not-italic text-brand-red">você</em> se…
            </h2>

            <p className="reveal text-[10px] font-bold tracking-[.12em] uppercase text-mid mb-4">
              Você se encaixa aqui
            </p>

            <ul className="reveal flex flex-col gap-3.5 list-none" aria-label="Quem deve baixar o ebook">
              {checkItems.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-[15px] leading-relaxed text-ink">
                  <span
                    className="check-dot w-5 h-5 rounded-full bg-brand-red flex-shrink-0 mt-0.5 flex items-center justify-center"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div className="h-12" aria-hidden="true" />

            <p className="reveal text-[10px] font-bold tracking-[.12em] uppercase text-mid mb-3">
              Não é pra você se
            </p>

            <ul className="reveal flex flex-col gap-3 list-none" aria-label="Quem não deve baixar o ebook">
              {xItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-mid/60 leading-relaxed">
                  <span className="text-base leading-[1.4] flex-shrink-0" aria-hidden="true">×</span>
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="reveal border-t border-line mt-9 pt-8"
              aria-label="O que você leva com o ebook"
            >
              <p className="text-[10px] font-bold tracking-[.12em] uppercase text-white/28 mb-3.5">
                O que você leva
              </p>
              <div className="flex flex-col gap-2.5" role="list">
                {bonusItems.map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-center text-sm text-mid" role="listitem">
                    <span className="text-brand-red font-bold flex-shrink-0" aria-hidden="true">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
