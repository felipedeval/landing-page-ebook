import { useForm } from '../hooks/useForm'

export default function FormCard() {
  const { values, onChange, submitted, loading, error, handleSubmit } = useForm(['name', 'email'])

  return (
    <div
      id="form"
      className="bg-ink text-white rounded-brand p-8 relative md:p-10 md:sticky md:top-20"
      role="region"
      aria-label="Formulário para receber o ebook"
    >
      <span
        className="absolute -top-[11px] left-7 bg-brand-red text-white text-[10px] font-bold tracking-[.1em] uppercase px-[10px] py-[3px] rounded-[2px]"
        aria-hidden="true"
      >
        100% GRÁTIS
      </span>

      <h2 className="font-display font-bold text-xl leading-tight mb-1.5">
        Receba o ebook agora
      </h2>
      <p className="text-[13px] text-white/50 leading-relaxed mb-6">
        8 módulos. Templates prontos. Casos reais. O processo que funciona — sem enrolação.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-2.5 mb-3">
            <label className="sr-only" htmlFor="hero-name">Seu nome</label>
            <input
              type="text"
              id="hero-name"
              name="name"
              value={values.name}
              onChange={onChange}
              className="bg-white/[.07] border border-white/[.14] rounded-brand px-4 py-3 font-body text-base text-white placeholder-white/30 outline-none w-full transition-colors duration-200 focus:border-brand-red/70"
              style={{ fontSize: 'max(16px, 15px)' }}
              placeholder="Seu nome"
              required
              autoComplete="given-name"
              aria-required="true"
            />
            <label className="sr-only" htmlFor="hero-email">Seu email</label>
            <input
              type="email"
              id="hero-email"
              name="email"
              value={values.email}
              onChange={onChange}
              className="bg-white/[.07] border border-white/[.14] rounded-brand px-4 py-3 font-body text-base text-white placeholder-white/30 outline-none w-full transition-colors duration-200 focus:border-brand-red/70"
              style={{ fontSize: 'max(16px, 15px)' }}
              placeholder="Seu melhor email"
              required
              autoComplete="email"
              aria-required="true"
              aria-describedby="hero-privacy"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red text-white border-0 rounded-brand py-4 font-display text-sm font-bold tracking-[.02em] cursor-pointer min-h-[48px] transition-opacity duration-200 hover:opacity-90 active:scale-[.98] disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Enviar formulário e receber o ebook gratuitamente"
          >
            {loading ? 'Enviando…' : 'Quero o ebook gratuito →'}
          </button>

          {error && (
            <p className="text-red-400 text-[13px] mt-2 text-center" role="alert">
              {error}
            </p>
          )}
        </form>
      ) : (
        <div
          className="bg-green-500/[.12] border border-green-400/30 rounded-brand p-[18px] text-center text-green-400 text-sm font-medium leading-relaxed"
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          ✓ Ebook a caminho! Verifique sua caixa de entrada.
        </div>
      )}

      <p className="text-[11px] text-white/25 mt-3 leading-relaxed" id="hero-privacy">
        Sem spam. Cancele quando quiser. Seus dados ficam com você.
      </p>
    </div>
  )
}
