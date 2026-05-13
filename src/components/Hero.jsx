import FormCard from './FormCard'

export default function Hero() {
  return (
    <section
      className="py-14 md:py-20"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_440px] md:gap-16 md:items-start">

          {/* Left: Copy */}
          <div className="anim-hero">
            <p
              className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[.12em] uppercase text-brand-red mb-5"
              aria-label="Tipo de conteúdo: Ebook gratuito"
            >
              Ebook gratuito
            </p>

            <h1
              id="hero-title"
              className="font-display font-extrabold leading-[.98] tracking-tighter mb-5"
              style={{ fontSize: 'clamp(36px, 10vw, 68px)' }}
            >
              Do vibe code<br />
              ao <em className="not-italic text-brand-red">produto</em><br />
              que funciona
            </h1>

            <p
              className="text-mid font-light max-w-[520px] leading-[1.65] mb-8"
              style={{ fontSize: 'clamp(16px, 3vw, 18px)' }}
            >
              O guia para quem construiu com IA e não sabe o que fazer agora.{' '}
              <strong className="text-ink font-medium">Da ideia ao backlog estruturado</strong> — com personas,
              user stories e MVP.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <FormCard />
          </div>

        </div>
      </div>
    </section>
  )
}
