import { useForm } from '../hooks/useForm'

export default function CtaFinal() {
  const { values, onChange, submitted, loading, handleSubmit } = useForm(['email'])

  return (
    <section className="bg-brand-red py-16 text-center" aria-labelledby="cta-title">
      <div className="container mx-auto px-5 max-w-[1100px]">
        <h2
          id="cta-title"
          className="font-display font-extrabold tracking-tighter text-white leading-none mb-3.5"
          style={{ fontSize: 'clamp(26px, 6vw, 48px)' }}
        >
          Pronto para parar<br />de improvisar?
        </h2>
        <p className="text-white/70 text-base mb-8">
          Baixe agora. Gratuito. Sem cartão. Sem enrolação.
        </p>

        {!submitted ? (
          <form
            className="flex flex-col gap-2 max-w-[460px] mx-auto sm:flex-row"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Formulário de captura de email"
          >
            <label className="sr-only" htmlFor="cta-email">Seu email</label>
            <input
              type="email"
              id="cta-email"
              name="email"
              value={values.email}
              onChange={onChange}
              className="flex-1 bg-white/15 border border-white/30 rounded-brand px-4 py-3.5 font-body text-white placeholder-white/50 outline-none min-h-[48px] focus:border-white transition-colors"
              style={{ fontSize: 'max(16px, 15px)' }}
              placeholder="seu@email.com"
              required
              autoComplete="email"
              aria-required="true"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-brand-red border-0 rounded-brand px-6 py-3.5 font-display text-sm font-bold cursor-pointer whitespace-nowrap min-h-[48px] transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
              aria-label="Receber ebook gratuito"
            >
              {loading ? 'Enviando…' : 'Quero o ebook →'}
            </button>
          </form>
        ) : (
          <p className="text-white font-medium text-base">
            ✓ Tudo certo! O ebook está a caminho.
          </p>
        )}

        <p className="text-[12px] text-white/40 mt-3" aria-live="polite">
          {submitted ? '' : 'Sem spam. Seus dados ficam com você.'}
        </p>
      </div>
    </section>
  )
}
