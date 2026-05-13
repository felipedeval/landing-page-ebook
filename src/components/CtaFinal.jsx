import { useForm } from '../hooks/useForm'

export default function CtaFinal() {
  const { values, onChange, submitted, loading, error, handleSubmit } = useForm(['email'])

  return (
    <section className="py-16 text-center" aria-labelledby="cta-title">
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div
          className="glass-card rounded-[8px] py-14 px-6"
          style={{ boxShadow: '0 0 60px rgba(56,189,248,0.08)' }}
        >
          <h2
            id="cta-title"
            className="font-display font-extrabold tracking-tighter text-ink leading-none mb-3.5"
            style={{ fontSize: 'clamp(26px, 6vw, 48px)' }}
          >
            Pronto para parar<br />de improvisar?
          </h2>
          <p className="text-mid text-base mb-8">
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
                className="flex-1 bg-white/[.05] border border-line rounded-brand px-4 py-3.5 font-body text-ink placeholder-mid outline-none min-h-[48px] focus:border-brand-red transition-colors"
                style={{ fontSize: 'max(16px, 15px)' }}
                placeholder="seu@email.com"
                required
                autoComplete="email"
                aria-required="true"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-glow bg-brand-red text-[#060c18] border-0 rounded-brand px-6 py-3.5 font-display text-sm font-bold cursor-pointer whitespace-nowrap min-h-[48px] disabled:opacity-60"
                aria-label="Receber ebook gratuito"
              >
                {loading ? 'Enviando…' : 'Quero o ebook →'}
              </button>
            </form>
          ) : (
            <p className="text-brand-red font-medium text-base">
              ✓ Tudo certo! O ebook está a caminho.
            </p>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-2" role="alert">{error}</p>
          )}

          <p className="text-[12px] text-mid/60 mt-3" aria-live="polite">
            {submitted ? '' : 'Sem spam. Seus dados ficam com você.'}
          </p>
        </div>
      </div>
    </section>
  )
}
