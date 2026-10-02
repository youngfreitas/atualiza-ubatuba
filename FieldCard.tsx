import type { ReactNode } from 'react';
import type { Answer } from '../state/types';
import { accentColor, editStyle, okStyle } from '../state/helpers';

interface FieldCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  answer: Answer;
  editing: boolean;
  onChangeValue: (value: string) => void;
  onOk: () => void;
  onEdit: () => void;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
  breakWord?: boolean;
  marginBottom?: number;
}

export function FieldCard({
  icon,
  label,
  value,
  answer,
  editing,
  onChangeValue,
  onOk,
  onEdit,
  inputMode,
  breakWord,
  marginBottom = 13,
}: FieldCardProps) {
  const ok = okStyle(answer);
  const edit = editStyle(answer);
  const accent = accentColor(answer);

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 16,
        marginBottom,
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div
          style={{
            flex: 'none',
            width: 40,
            height: 40,
            borderRadius: 11,
            background: 'var(--blue-soft)',
            color: 'var(--blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {label}
          </div>
          {editing ? (
            <input
              value={value}
              onChange={(e) => onChangeValue(e.target.value)}
              inputMode={inputMode}
              className="atu-field-input"
              style={{
                width: '100%',
                marginTop: 6,
                padding: 11,
                fontSize: 15,
                borderRadius: 10,
                border: '2px solid var(--blue)',
                background: 'var(--surface-2)',
                color: 'var(--text)',
              }}
            />
          ) : (
            <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginTop: 3, wordBreak: breakWord ? 'break-all' : undefined }}>
              {value}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 9, marginTop: 13 }}>
        <button
          onClick={onOk}
          style={{
            flex: 1,
            padding: 11,
            borderRadius: 11,
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            transition: '.15s',
            border: `2px solid ${ok.border}`,
            background: ok.bg,
            color: ok.color,
          }}
        >
          ✓ Está certo
        </button>
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            padding: 11,
            borderRadius: 11,
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            transition: '.15s',
            border: `2px solid ${edit.border}`,
            background: edit.bg,
            color: edit.color,
          }}
        >
          ✎ Corrigir
        </button>
      </div>
    </div>
  );
}
