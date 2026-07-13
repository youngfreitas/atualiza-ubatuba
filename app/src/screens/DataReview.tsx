import { FieldCard } from '../components/FieldCard';
import { MailIcon, PersonIcon, PhoneIcon, PinIcon } from '../components/Icons';
import type { AppState } from '../state/useAppState';

type DataReviewProps = Pick<AppState, 'values' | 'answers' | 'setValue' | 'setAnswer'>;

export function DataReview({ values, answers, setValue, setAnswer }: DataReviewProps) {
  return (
    <div className="atu-anim" style={{ padding: '24px 20px 12px' }}>
      <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 23, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.15 }}>
        Confira seus dados
      </h2>
      <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.45 }}>
        Está tudo certo? Confirme cada item ou toque em <strong style={{ color: 'var(--text)' }}>Corrigir</strong>.
      </p>

      <FieldCard
        icon={<PersonIcon />}
        label="Nome completo"
        value={values.nome}
        answer={answers.nome}
        editing={answers.nome === 'edit'}
        onChangeValue={(v) => setValue('nome', v)}
        onOk={() => setAnswer('nome', 'ok')}
        onEdit={() => setAnswer('nome', 'edit')}
      />

      <FieldCard
        icon={<PinIcon />}
        label="Endereço"
        value={values.endereco}
        answer={answers.endereco}
        editing={answers.endereco === 'edit'}
        onChangeValue={(v) => setValue('endereco', v)}
        onOk={() => setAnswer('endereco', 'ok')}
        onEdit={() => setAnswer('endereco', 'edit')}
      />

      <FieldCard
        icon={<PhoneIcon />}
        label="Telefone / Celular"
        value={values.telefone}
        answer={answers.telefone}
        editing={answers.telefone === 'edit'}
        onChangeValue={(v) => setValue('telefone', v)}
        onOk={() => setAnswer('telefone', 'ok')}
        onEdit={() => setAnswer('telefone', 'edit')}
        inputMode="tel"
      />

      <FieldCard
        icon={<MailIcon />}
        label="E-mail"
        value={values.email}
        answer={answers.email}
        editing={answers.email === 'edit'}
        onChangeValue={(v) => setValue('email', v)}
        onOk={() => setAnswer('email', 'ok')}
        onEdit={() => setAnswer('email', 'edit')}
        inputMode="email"
        breakWord
        marginBottom={6}
      />
    </div>
  );
}
