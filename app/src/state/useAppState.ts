import { useMemo, useState } from 'react';
import type { Answer, Answers, FieldKey, Values } from './types';
import { generateConfetti, maskCpf } from './helpers';
import { APP_CONFIG } from './config';

const INITIAL_VALUES: Values = {
  nome: 'Maria Aparecida dos Santos',
  endereco: 'Rua das Gaivotas, 128 — Perequê-Açu',
  telefone: '(12) 99765-4321',
  email: 'maria.santos@email.com',
};

const INITIAL_ANSWERS: Answers = { nome: null, endereco: null, telefone: null, email: null };

const STEP_LABELS = ['', 'Identificação', 'Seus dados', 'Confirmação'];
const PROGRESS_BY_STEP = ['0%', '20%', '62%', '92%', '100%'];

export function useAppState() {
  const [step, setStep] = useState(0);
  const [dark, setDark] = useState(false);
  const [doc, setDoc] = useState('');
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [values, setValues] = useState<Values>(INITIAL_VALUES);

  const digits = doc.replace(/\D/g, '');
  const docValid = digits.length === 11;
  const answered = (Object.keys(answers) as FieldKey[]).every((k) => answers[k] !== null);

  const confetti = useMemo(() => (step === 4 ? generateConfetti() : []), [step]);

  const stepClamped = Math.min(step, 3);
  const showCta = step === 2 || step === 3;
  const ctaBlocked = step === 2 ? !answered : false;
  const ctaLabel = step === 2 ? (answered ? 'Confirmar e continuar →' : 'Confirme todos os itens') : 'Enviar atualização ✓';

  return {
    step,
    dark,
    toggleDark: () => setDark((d) => !d),

    showStepper: step >= 1 && step <= 3,
    stepNum: stepClamped,
    stepLabel: STEP_LABELS[stepClamped],
    progressPct: PROGRESS_BY_STEP[step],

    doc,
    onDoc: (raw: string) => setDoc(maskCpf(raw)),
    docValid,
    digitsLength: digits.length,

    values,
    setValue: (field: FieldKey, value: string) => setValues((v) => ({ ...v, [field]: value })),
    answers,
    setAnswer: (field: FieldKey, answer: Answer) => setAnswers((a) => ({ ...a, [field]: answer })),
    answered,

    showCta,
    ctaBlocked,
    ctaLabel,
    ctaActive: !ctaBlocked,

    start: () => setStep(1),
    next: () => setStep((s) => Math.min(s + 1, 4)),
    back: () => setStep((s) => Math.max(s - 1, 0)),
    restart: () => {
      setStep(0);
      setDoc('');
      setAnswers(INITIAL_ANSWERS);
    },
    chooseGovbr: () => setStep(2),

    confetti,
    firstName: values.nome.split(' ')[0] || 'morador',
    protocol: 'UBA-2026-48213',
    today: new Date().toLocaleDateString('pt-BR'),

    social: APP_CONFIG.social.toLocaleString('pt-BR'),
    socialNext: (APP_CONFIG.social + 1).toLocaleString('pt-BR'),
    minutes: APP_CONFIG.minutes,
    mascotName: APP_CONFIG.mascotName,
  };
}

export type AppState = ReturnType<typeof useAppState>;
