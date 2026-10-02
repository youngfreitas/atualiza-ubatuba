import { CheckBigIcon, SealIcon } from '../components/Icons';
import type { ConfettiPiece } from '../state/helpers';

interface SuccessProps {
  confetti: ConfettiPiece[];
  firstName: string;
  protocol: string;
  today: string;
  socialNext: string;
  onRestart: () => void;
}

interface ActionButtonProps {
  variant: 'primary' | 'secondary';
  className: string;
  emoji: string;
  label: string;
}

function ActionButton({ variant, className, emoji, label }: ActionButtonProps) {
  const primary = variant === 'primary';
  return (
    <button
      className={className}
      style={{
        flex: 1,
        background: primary ? 'var(--blue)' : 'var(--surface)',
        color: primary ? '#fff' : 'var(--text)',
        border: primary ? 'none' : '1px solid var(--border)',
        borderRadius: 14,
        padding: '15px 8px',
        fontFamily: 'Nunito',
        fontWeight: 800,
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        transition: '.2s',
      }}
    >
      <span style={{ fontSize: 19 }}>{emoji}</span>
      {label}
    </button>
  );
}

export function Success({ confetti, firstName, protocol, today, socialNext, onRestart }: SuccessProps) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '36px 24px 26px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: '0 0 auto 0', height: 0, pointerEvents: 'none' }} aria-hidden="true">
        {confetti.map((c, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: c.left,
              width: c.size,
              height: c.size + 3,
              background: c.color,
              borderRadius: c.radius,
              animation: `atu-confetti ${c.duration} linear ${c.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', marginTop: 8 }}>
        <span
          style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid var(--green)', animation: 'atu-ring 1.6s ease-out infinite' }}
          aria-hidden="true"
        />
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: '50%',
            background: 'var(--green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 30px rgba(30,158,90,.4)',
            animation: 'atu-pop .55s ease both',
          }}
        >
          <CheckBigIcon />
        </div>
      </div>

      <div style={{ marginTop: 20, fontSize: 34 }} aria-hidden="true">
        🎉
      </div>
      <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 27, color: 'var(--text)', margin: '6px 0 6px', lineHeight: 1.15 }}>
        Cadastro atualizado!
      </h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 18px', lineHeight: 1.5, maxWidth: 290 }}>
        Obrigado por manter seus dados em dia, <strong style={{ color: 'var(--text)' }}>{firstName}</strong>. A Prefeitura de Ubatuba agradece! 💚
      </p>

      <div
        style={{
          width: '100%',
          background: 'var(--green-soft)',
          border: '1.5px solid var(--green)',
          borderRadius: 16,
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 13,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            flex: 'none',
            width: 46,
            height: 46,
            borderRadius: 12,
            background: 'var(--green)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SealIcon />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: 15, color: 'var(--green-strong)' }}>Selo de Cadastro Válido</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
            Protocolo {protocol} · {today}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', gap: 10, marginBottom: 18 }}>
        <ActionButton variant="primary" className="atu-btn-download" emoji="📄" label="Baixar comprovante" />
        <ActionButton variant="secondary" className="atu-btn-share" emoji="📤" label="Compartilhar" />
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          width: '100%',
          padding: 13,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 13,
          fontSize: 13,
          color: 'var(--muted)',
          marginBottom: 14,
        }}
      >
        Você é o morador nº <strong style={{ color: 'var(--green-strong)' }}>{socialNext}</strong> a atualizar o cadastro este ano. 🙌
      </div>
      <button
        onClick={onRestart}
        style={{ background: 'transparent', border: 'none', color: 'var(--muted)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
      >
        Voltar ao início
      </button>
    </div>
  );
}
