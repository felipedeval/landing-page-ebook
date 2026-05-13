export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#e3dfd9] py-[14px]"
      style={{ background: 'rgba(244,241,236,.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-5 max-w-[1100px]">
        <div className="flex items-center justify-between gap-4">
          <a
            href="https://felipedeval.com.br"
            className="font-display font-extrabold text-[15px] tracking-tight no-underline"
            aria-label="Felipe Deval — Página inicial"
          >
            Felipe Deval
          </a>
          <a
            href="#form"
            className="text-[13px] font-medium bg-ink text-white px-[18px] py-[9px] rounded-brand no-underline whitespace-nowrap transition-colors duration-150 hover:bg-[#2a2826]"
            aria-label="Baixar ebook gratuito"
          >
            Baixar ebook ↓
          </a>
        </div>
      </div>
    </nav>
  )
}
