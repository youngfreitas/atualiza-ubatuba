import mascote from '../assets/caicarinha.webp';

interface WelcomeProps {
  mascotName: string;
  minutes: number;
  social: string;
  onStart: () => void;
}

interface InfoCardProps {
  emoji: string;
  title: string;
  caption: string;
}

function InfoCard({ emoji, title, caption }: InfoCardProps) {
  return (
    <div
      style={{
        flex: 1,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: '15px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <span style={{ fontSize: 24 }}>{emoji}</span>
      <span style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: 18, color: 'var(--text)' }}>{title}</span>
      <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{caption}</span>
    </div>
  );
}

function Dot({ color, overlap }: { color: string; overlap?: boolean }) {
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: color,
        border: '2px solid var(--surface)',
        marginLeft: overlap ? -8 : undefined,
      }}
    />
  );
}

export function Welcome({ mascotName, minutes, social, onStart }: WelcomeProps) {
  return (
    <div
      className="atu-anim"
      style={{ padding: '30px 22px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '100%' }}
    >
      <div style={{ position: 'relative', marginTop: 6, animation: 'atu-float 4s ease-in-out infinite' }}>
        <div
          style={{
            width: 112,
            height: 112,
            borderRadius: '50%',
            background: 'linear-gradient(150deg,var(--blue),var(--blue-strong))',
            overflow: 'hidden',
            boxShadow: '0 12px 28px var(--ring)',
          }}
        >
          <img
            src={mascote}
            alt={mascotName}
            width={112}
            height={112}
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            right: -6,
            bottom: -4,
            background: 'var(--green)',
            color: '#fff',
            fontSize: 16,
            width: 34,
            height: 34,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid var(--surface)',
          }}
        >
          👋
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          fontFamily: 'Nunito',
          fontWeight: 700,
          fontSize: 13,
          color: 'var(--green-strong)',
          background: 'var(--green-soft)',
          padding: '6px 14px',
          borderRadius: 99,
        }}
      >
        Olá! Eu sou o {mascotName}, seu guia por aqui
      </div>

      <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 30, lineHeight: 1.12, color: 'var(--text)', margin: '16px 0 10px' }}>
        Atualize seu cadastro em poucos minutos
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.5, color: 'var(--muted)', margin: '0 0 22px', maxWidth: 300 }}>
        Manter seus dados em dia garante que você receba avisos e benefícios da Prefeitura. É rápido e seguro.
      </p>

      <div style={{ display: 'flex', gap: 12, width: '100%', marginBottom: 24 }}>
        <InfoCard emoji="⏱️" title={`${minutes} min`} caption="tempo estimado" />
        <InfoCard emoji="🔒" title="Seguro" caption="login gov.br" />
      </div>

      <div style={{ flex: 1 }} />

      <button
        onClick={onStart}
        className="atu-cta-primary"
        style={{
          width: '100%',
          background: 'var(--green)',
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: 19,
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: 19,
          cursor: 'pointer',
          boxShadow: '0 10px 22px rgba(30,158,90,.34)',
          transition: 'transform .15s, background .2s',
        }}
      >
        Começar agora →
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 15, color: 'var(--muted)', fontSize: 13 }}>
        <span style={{ display: 'flex' }} aria-hidden="true">
          <Dot color="var(--blue)" />
          <Dot color="var(--green)" overlap />
          <Dot color="var(--blue-strong)" overlap />
        </span>
        <span>
          Mais de <strong style={{ color: 'var(--text)' }}>{social}</strong> moradores já atualizaram
        </span>
      </div>
    </div>
  );
}
