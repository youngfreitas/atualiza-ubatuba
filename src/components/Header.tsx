import brasao from '../assets/brasao-ubatuba.png';

interface HeaderProps {
  dark: boolean;
  onToggleDark: () => void;
}

export function Header({ dark, onToggleDark }: HeaderProps) {
  return (
    <header
      style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '15px 18px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <img src={brasao} alt="Brasão da Prefeitura de Ubatuba" style={{ width: 34, height: 34, objectFit: 'contain' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 16, color: 'var(--text)', lineHeight: 1 }}>
          Atualiza <span style={{ color: 'var(--blue)' }}>Ubatuba</span>
        </div>
        <div style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.02em', marginTop: 2 }}>
          Secretaria Municipal de Fazenda
        </div>
      </div>
      <button
        onClick={onToggleDark}
        aria-label="Alternar modo escuro"
        className="atu-theme-toggle"
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          border: '1px solid var(--border)',
          background: 'var(--surface-2)',
          color: 'var(--text)',
          fontSize: 16,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {dark ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
