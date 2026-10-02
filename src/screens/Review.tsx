import { tagFor } from '../state/helpers';
import type { AppState } from '../state/useAppState';

type ReviewProps = Pick<AppState, 'values' | 'answers' | 'back'>;

interface RowProps {
  label: string;
  value: string;
  tag: ReturnType<typeof tagFor>;
  last?: boolean;
  breakWord?: boolean;
}

function Row({ label, value, tag, last, breakWord }: RowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '15px 16px',
        borderBottom: last ? undefined : '1px solid var(--border)',
      }}
    >
      <span
        style={{
          flex: 'none',
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: 'var(--green)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
        }}
      >
        ✓
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11.5, color: 'var(--muted)', fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 15.5, color: 'var(--text)', fontWeight: 600, wordBreak: breakWord ? 'break-all' : undefined }}>{value}</div>
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color: tag.color, background: tag.bg, padding: '4px 9px', borderRadius: 99 }}>
        {tag.label}
      </span>
    </div>
  );
}

export function Review({ values, answers, back }: ReviewProps) {
  return (
    <div className="atu-anim" style={{ padding: '26px 22px' }}>
      <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 24, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.15 }}>
        Quase lá! Confirme o resumo
      </h2>
      <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.45 }}>Revise as informações antes de enviar.</p>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
        <Row label="NOME" value={values.nome} tag={tagFor(answers.nome)} />
        <Row label="ENDEREÇO" value={values.endereco} tag={tagFor(answers.endereco)} />
        <Row label="TELEFONE" value={values.telefone} tag={tagFor(answers.telefone)} />
        <Row label="E-MAIL" value={values.email} tag={tagFor(answers.email)} breakWord last />
      </div>

      <button
        onClick={back}
        className="atu-review-back"
        style={{
          width: '100%',
          marginTop: 16,
          background: 'transparent',
          border: '2px solid var(--border)',
          borderRadius: 14,
          padding: 14,
          fontWeight: 700,
          fontSize: 14.5,
          color: 'var(--muted)',
          cursor: 'pointer',
        }}
      >
        ← Voltar e editar
      </button>
    </div>
  );
}
