import type { ReactNode } from 'react';
import { FieldCard } from '../components/FieldCard';
import { MailIcon, PersonIcon, PhoneIcon, PinIcon } from '../components/Icons';
import type { FieldKey } from '../state/types';
import type { AppState } from '../state/useAppState';

type DataReviewProps = Pick<AppState, 'values' | 'answers' | 'setValue' | 'setAnswer'>;

interface FieldConfig {
  key: FieldKey;
  label: string;
  icon: ReactNode;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
  breakWord?: boolean;
}

const FIELDS: FieldConfig[] = [
  { key: 'nome', label: 'Nome completo', icon: <PersonIcon /> },
  { key: 'endereco', label: 'Endereço', icon: <PinIcon /> },
  { key: 'telefone', label: 'Telefone / Celular', icon: <PhoneIcon />, inputMode: 'tel' },
  { key: 'email', label: 'E-mail', icon: <MailIcon />, inputMode: 'email', breakWord: true },
];

export function DataReview({ values, answers, setValue, setAnswer }: DataReviewProps) {
  return (
    <div className="atu-anim" style={{ padding: '24px 20px 12px' }}>
      <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 23, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.15 }}>
        Confira seus dados
      </h2>
      <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.45 }}>
        Está tudo certo? Confirme cada item ou toque em <strong style={{ color: 'var(--text)' }}>Corrigir</strong>.
      </p>

      {FIELDS.map(({ key, label, icon, inputMode, breakWord }, i) => (
        <FieldCard
          key={key}
          icon={icon}
          label={label}
          value={values[key]}
          answer={answers[key]}
          editing={answers[key] === 'edit'}
          onChangeValue={(v) => setValue(key, v)}
          onOk={() => setAnswer(key, 'ok')}
          onEdit={() => setAnswer(key, 'edit')}
          inputMode={inputMode}
          breakWord={breakWord}
          marginBottom={i === FIELDS.length - 1 ? 6 : undefined}
        />
      ))}
    </div>
  );
}
