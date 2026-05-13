import { useScrollReveal } from '../hooks/useScrollReveal'

const modules = [
  {
    num: 'Módulo 01',
    name: 'O que é um produto digital de verdade',
    sub: 'A diferença entre app que existe e produto que funciona — antes de qualquer linha de código.',
  },
  {
    num: 'Módulo 02',
    name: 'Personas e ICP na prática',
    sub: 'Como criar personas que não são ficção. Caso real: Rafael e Marina do Trilhamentor.',
  },
  {
    num: 'Módulo 03',
    name: 'Backlog e user stories',
    sub: 'Formato Gherkin que a IA consegue implementar sem retrabalho. Template incluso.',
  },
  {
    num: 'Módulo 04',
    name: 'MVP e priorização sem achismo',
    sub: 'MoSCoW na prática. O que entrou e saiu do MVP do Trilhamentor — e o raciocínio.',
  },
  {
    num: 'Módulo 05',
    name: 'Arquitetura de produto',
    sub: 'O que o PO precisa entender de tech sem codar. Entidades, estados e fluxo de pagamento.',
  },
  {
    num: 'Módulo 06',
    name: 'Roadmap e visão de futuro',
    sub: 'Como versionar o produto (v0, v1, v2) com critérios reais. Quando pivotar vs persistir.',
  },
  {
    num: 'Módulo 07',
    name: 'QA para fundadores',
    sub: 'O módulo que nenhum curso de produto ensina. Checklist antes de cada deploy — sem stress.',
  },
  {
    num: 'Módulo 08',
    name: 'Gestão com IA — o PO aumentado',
    sub: 'Prompts que uso todo dia para gerar user stories, test cases e relatórios automaticamente.',
  },
]

export default function Modules() {
  const ref = useScrollReveal()

  return (
    <section className="py-14 md:py-20" aria-labelledby="modules-title" ref={ref}>
      <div className="container mx-auto px-5 max-w-[1100px]">
        <p className="sec-label reveal flex items-center gap-2.5 text-[10px] font-bold tracking-[.14em] uppercase text-brand-red mb-4">
          Conteúdo do ebook
        </p>
        <h2
          id="modules-title"
          className="reveal font-display font-extrabold tracking-tight leading-[1.05] mb-10 max-w-[600px]"
          style={{ fontSize: 'clamp(24px, 5vw, 40px)' }}
        >
          8 módulos. Do problema ao produto que não falha.
        </h2>

        <div
          className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {modules.map((mod, i) => (
            <article
              key={i}
              className="reveal glass-card p-6 rounded-brand cursor-default group"
              role="listitem"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <p className="font-display font-bold text-[10px] tracking-[.1em] text-mid mb-2.5 transition-colors duration-200 group-hover:text-brand-red">
                {mod.num}
              </p>
              <h3 className="font-display font-bold text-[15px] leading-tight mb-2">
                {mod.name}
              </h3>
              <p className="text-[13px] text-mid leading-relaxed">
                {mod.sub}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
