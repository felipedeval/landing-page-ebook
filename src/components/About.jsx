import { useScrollReveal } from '../hooks/useScrollReveal'
import photo from '../../resources/images/Gemini_Generated_Image_vm74l4vm74l4vm74_Original_SnapseedCopy.jpg'

const credentials = [
  '245 testes E2E com Playwright + N8N + AI Agents',
  'PO do Filmelier, Noverama e outros produtos internos',
  'Co-fundador do Trilhamentor — SaaS em construção ao vivo',
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="py-14 md:py-20" aria-labelledby="about-title" ref={ref}>
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16 md:items-start">

          {/* Foto */}
          <div className="reveal">
            <div className="rounded-brand aspect-[4/5] relative overflow-hidden">
              <img
                src={photo}
                alt="Felipe Deval — Senior QA Engineer e Product Owner"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-[-1px] right-[-1px] bg-brand-red text-white font-display font-extrabold text-xs px-3.5 py-2.5 rounded-brand text-center leading-[1.3]">
                PO + QA<br />15 anos
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="sec-label reveal flex items-center gap-2.5 text-[10px] font-bold tracking-[.14em] uppercase text-brand-red mb-4">
              Quem escreveu
            </p>
            <h2
              id="about-title"
              className="reveal font-display font-extrabold tracking-tight leading-[1.05] mb-10 max-w-[480px]"
              style={{ fontSize: 'clamp(24px, 5vw, 40px)' }}
            >
              Escrito por quem gerencia produto no mundo real
            </h2>

            <p className="reveal text-base text-mid leading-[1.7] mb-3.5">
              Sou <strong className="text-ink font-medium">Senior QA Engineer e Product Owner</strong> há mais de 15 anos.
              Hoje gerencio seis produtos digitais — incluindo{' '}
              <strong className="text-ink font-medium">Filmelier</strong>, portal de recomendação de filmes em três idiomas,
              e <strong className="text-ink font-medium">Noverama</strong>, o primeiro portal do mundo especializado em
              novelas e doramas internacionais.
            </p>

            <p className="reveal text-base text-mid leading-[1.7] mb-3.5">
              Em paralelo, sou co-fundador do <strong className="text-ink font-medium">Trilhamentor</strong>, um SaaS que
              estou construindo ao vivo — e que serve de caso real em todo conteúdo que produzo.
            </p>

            <p className="reveal text-base text-mid leading-[1.7]">
              Este ebook não é teoria. É o processo que uso todo dia para priorizar,
              estruturar e evoluir produtos com usuário real e stakeholder exigente.
            </p>

            <ul className="reveal flex flex-col gap-2 mt-5 list-none" aria-label="Credenciais de Felipe Deval">
              {credentials.map((c, i) => (
                <li key={i} className="flex gap-2.5 items-start text-[13px] text-mid leading-[1.4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0 mt-1" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
