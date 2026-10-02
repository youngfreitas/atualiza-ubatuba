import { docHintColor, docHintText } from '../state/helpers';

interface IdentificationProps {
  doc: string;
  onDoc: (value: string) => void;
  docValid: boolean;
  digitsLength: number;
  onGovbr: () => void;
  onNext: () => void;
}

export function Identification({ doc, onDoc, docValid, digitsLength, onGovbr, onNext }: IdentificationProps) {
  const hint = docHintText(digitsLength, docValid);
  const hintColor = docHintColor(docValid);

  return (
    <div className="atu-anim" style={{ padding: '26px 22px' }}>
      <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 24, color: 'var(--text)', margin: '0 0 8px', lineHeight: 1.15 }}>
        Vamos te identificar
      </h2>
      <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 22px', lineHeight: 1.45 }}>
        Entre com o gov.br para buscar seus dados com segurança.
      </p>

      <button
        onClick={onGovbr}
        className="atu-govbr-btn"
        style={{
          width: '100%',
          background: 'var(--blue)',
          color: '#fff',
          border: 'none',
          borderRadius: 15,
          padding: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          cursor: 'pointer',
          boxShadow: '0 8px 20px var(--ring)',
          transition: 'transform .15s, background .2s',
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700 }}>Entrar com</span>
        <span style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em' }}>
          <span style={{ color: '#f4d000' }}>g</span>
          <span style={{ color: '#2ac16a' }}>o</span>
          <span style={{ color: '#ffffff' }}>v</span>
          <span style={{ color: '#f4d000' }}>.</span>
          <span style={{ color: '#ffffff' }}>br</span>
        </span>
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600 }}>ou use seus documentos</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <label htmlFor="atu-doc" style={{ display: 'block', fontSize: 13.5, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
        CPF, CNPJ ou Inscrição Imobiliária
      </label>
      <div style={{ position: 'relative' }}>
        <input
          id="atu-doc"
          value={doc}
          onChange={(e) => onDoc(e.target.value)}
          inputMode="numeric"
          placeholder="000.000.000-00"
          aria-describedby="atu-doc-help"
          className="atu-doc-input"
          style={{
            width: '100%',
            padding: '16px 46px 16px 16px',
            fontSize: 17,
            fontFamily: 'Public Sans',
            borderRadius: 14,
            border: '2px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
          }}
        />
        {docValid && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: 'var(--green)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              animation: 'atu-pop .3s ease',
            }}
          >
            ✓
          </span>
        )}
      </div>
      <p id="atu-doc-help" style={{ fontSize: 12.5, color: hintColor, margin: '9px 2px 0', minHeight: 16 }}>
        {hint}
      </p>

      <button
        onClick={onNext}
        disabled={!docValid}
        style={{
          width: '100%',
          marginTop: 20,
          border: 'none',
          borderRadius: 15,
          padding: 18,
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: 17,
          cursor: 'pointer',
          transition: '.2s',
          background: docValid ? 'var(--green)' : 'var(--border)',
          color: docValid ? '#fff' : 'var(--muted)',
        }}
      >
        Validar e continuar
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          marginTop: 20,
          padding: 13,
          background: 'var(--blue-soft)',
          borderRadius: 13,
        }}
      >
        <span style={{ fontSize: 17 }}>🛡️</span>
        <span style={{ fontSize: 12.5, color: 'var(--text)', lineHeight: 1.4 }}>
          Seus dados são protegidos pela LGPD e usados apenas para atualização cadastral.
        </span>
      </div>
    </div>
  );
}
