export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-line py-[14px]"
      style={{ background: 'rgba(6,12,24,.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div className="flex items-center justify-between gap-4">
          <a
            href="https://felipedeval.com.br"
            className="font-display font-extrabold text-[15px] tracking-tight no-underline text-ink"
            aria-label="Felipe Deval — Página inicial"
          >
            Felipe Deval
          </a>
          <a
            href="#form"
            className="text-[13px] font-medium bg-brand-red text-white px-[18px] py-[9px] rounded-brand no-underline whitespace-nowrap transition-opacity duration-150 hover:opacity-85"
            aria-label="Baixar ebook gratuito"
          >
            Baixar ebook ↓
          </a>
        </div>
      </div>
    </nav>
  )
}
