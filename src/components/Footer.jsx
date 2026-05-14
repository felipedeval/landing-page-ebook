export default function Footer() {
  return (
    <footer
      className="py-6 border-t border-line text-[13px] text-mid text-center bg-paper"
      role="contentinfo"
    >
      <div className="container mx-auto px-5 max-w-[1100px]">
        <p>
          © 2026 Felipe Deval ·{' '}
          {/* <a href="/privacidade" className="no-underline hover:text-ink transition-colors">
            Política de Privacidade
          </a>{' '}
          ·{' '} */}
          <a
            href="https://www.linkedin.com/in/felipe-deval-386510b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
            aria-label="LinkedIn de Felipe Deval (abre em nova aba)"
          >
            LinkedIn
          </a>{' '}
          ·{' '}
          <a
            href="https://www.youtube.com/@felipedeval-fd"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
            aria-label="Canal YouTube de Felipe Deval (abre em nova aba)"
          >
            YouTube
          </a>{' '}
          ·{' '}
          <a
            href="https://www.instagram.com/felipedeval/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
            aria-label="Instagram de Felipe Deval (abre em nova aba)"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  )
}
