interface FooterProps {
  show: boolean;
  onBack: () => void;
  onNext: () => void;
  ctaBlocked: boolean;
  ctaLabel: string;
}

export function Footer({ show, onBack, onNext, ctaBlocked, ctaLabel }: FooterProps) {
  if (!show) return null;
  return (
    <footer
      style={{
        flex: 'none',
        padding: '14px 18px calc(14px + env(safe-area-inset-bottom))',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        gap: 12,
        alignItems: 'center',
      }}
    >
      <button
        onClick={onBack}
        aria-label="Voltar"
        className="atu-footer-back"
        style={{
          flex: 'none',
          width: 52,
          height: 52,
          borderRadius: 14,
          border: '2px solid var(--border)',
          background: 'var(--surface-2)',
          color: 'var(--text)',
          fontSize: 20,
          cursor: 'pointer',
        }}
      >
        ←
      </button>
      <button
        onClick={onNext}
        disabled={ctaBlocked}
        style={{
          flex: 1,
          border: 'none',
          borderRadius: 14,
          padding: 17,
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: 17,
          cursor: 'pointer',
          transition: '.2s',
          background: !ctaBlocked ? 'var(--green)' : 'var(--border)',
          color: !ctaBlocked ? '#fff' : 'var(--muted)',
          boxShadow: !ctaBlocked ? '0 8px 20px rgba(30,158,90,.32)' : 'none',
        }}
      >
        {ctaLabel}
      </button>
    </footer>
  );
}
