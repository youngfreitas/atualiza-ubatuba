import type { Answer, FieldStatus, Tag } from './types';

export function maskCpf(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function docHintText(digitsLength: number, valid: boolean): string {
  if (valid) return '✓ Documento válido';
  return digitsLength > 0 ? 'Continue digitando…' : 'Digite os números do seu documento.';
}

export function docHintColor(valid: boolean): string {
  return valid ? 'var(--green-strong)' : 'var(--muted)';
}

export function okStyle(answer: Answer): FieldStatus {
  const on = answer === 'ok';
  return {
    border: on ? 'var(--green)' : 'var(--border)',
    bg: on ? 'var(--green-soft)' : 'var(--surface-2)',
    color: on ? 'var(--green-strong)' : 'var(--muted)',
  };
}

export function editStyle(answer: Answer): FieldStatus {
  const on = answer === 'edit';
  return {
    border: on ? 'var(--blue)' : 'var(--border)',
    bg: on ? 'var(--blue-soft)' : 'var(--surface-2)',
    color: on ? 'var(--blue)' : 'var(--muted)',
  };
}

export function accentColor(answer: Answer): string {
  return answer === 'edit' ? 'var(--blue)' : answer === 'ok' ? 'var(--green)' : 'var(--border)';
}

export function tagFor(answer: Answer): Tag {
  if (answer === 'edit') return { label: 'Atualizado', color: 'var(--blue)', bg: 'var(--blue-soft)' };
  return { label: 'Confirmado', color: 'var(--green-strong)', bg: 'var(--green-soft)' };
}

const CONFETTI_COLORS = ['#0B5FBF', '#1E9E5A', '#f4d000', '#4c9bee', '#34c078'];

export interface ConfettiPiece {
  left: string;
  size: number;
  color: string;
  radius: string;
  duration: string;
  delay: string;
}

export function generateConfetti(count = 26): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => {
    const left = `${Math.round((i * 37 + 11) % 100)}%`;
    const duration = `${(1.8 + (i % 5) * 0.35).toFixed(2)}s`;
    const delay = `${((i % 7) * 0.18).toFixed(2)}s`;
    const size = 7 + (i % 4) * 2;
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const radius = i % 2 ? '50%' : '2px';
    return { left, size, color, radius, duration, delay };
  });
}
