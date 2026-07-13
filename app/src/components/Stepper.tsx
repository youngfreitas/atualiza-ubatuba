interface StepperProps {
  show: boolean;
  stepLabel: string;
  stepNum: number;
  progressPct: string;
}

export function Stepper({ show, stepLabel, stepNum, progressPct }: StepperProps) {
  if (!show) return null;
  return (
    <div style={{ flex: 'none', padding: '14px 18px 4px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {stepLabel}
        </span>
        <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--muted)' }}>Etapa {stepNum} de 3</span>
      </div>
      <div style={{ height: 8, borderRadius: 99, background: 'var(--surface-2)', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <div
          style={{
            height: '100%',
            width: progressPct,
            background: 'linear-gradient(90deg,var(--blue),var(--green))',
            borderRadius: 99,
            transition: 'width .5s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </div>
    </div>
  );
}
