const stats = [
  { num: '6',    numSuffix: '',    label: 'produtos digitais\ngerenciados hoje' },
  { num: '15',   numSuffix: '+',   label: 'anos como\nQA Engineer' },
  { num: '245',  numSuffix: '',    label: 'testes E2E\nautomatizados' },
  { num: '8',    numSuffix: '',    label: 'módulos com\ncases reais' },
  { num: '0',    numSuffix: 'R$',  label: 'custo pra\nvocê agora' },
]

export default function ProofStrip() {
  return (
    <div
      className="border-t border-b border-line py-6 my-12 overflow-x-auto md:my-14"
      role="region"
      aria-label="Credenciais do autor"
    >
      <div className="flex min-w-max" role="list">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col gap-0.5 px-7 ${i !== stats.length - 1 ? 'border-r border-line' : ''} ${i === 0 ? 'pl-0' : ''}`}
            role="listitem"
          >
            <span className="font-display font-extrabold text-[26px] leading-none tracking-[-0.05em]">
              <span className="text-brand-red">{s.num}</span>
              {s.numSuffix && <span className="text-brand-red">{s.numSuffix}</span>}
            </span>
            <span className="text-xs text-mid leading-[1.3] whitespace-pre-line">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
