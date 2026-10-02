import './theme.css';
import { Header } from './components/Header';
import { Stepper } from './components/Stepper';
import { Footer } from './components/Footer';
import { Welcome } from './screens/Welcome';
import { Identification } from './screens/Identification';
import { DataReview } from './screens/DataReview';
import { Review } from './screens/Review';
import { Success } from './screens/Success';
import { useAppState } from './state/useAppState';

export function App() {
  const app = useAppState();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 22,
        background: 'radial-gradient(circle at 30% 0%, #eaf2fc, #cbdcee 70%)',
      }}
    >
      <div
        className="atu-root"
        data-theme={app.dark ? 'dark' : 'light'}
        style={{
          width: 'min(432px, 100%)',
          height: 'min(824px, 96vh)',
          background: 'var(--bg)',
          borderRadius: 38,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
          border: '1px solid var(--border)',
          position: 'relative',
          transition: 'background .25s',
        }}
      >
        <Header dark={app.dark} onToggleDark={app.toggleDark} />

        <Stepper show={app.showStepper} stepLabel={app.stepLabel} stepNum={app.stepNum} progressPct={app.progressPct} />

        <main className="atu-scroll" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {app.step === 0 && (
            <Welcome mascotName={app.mascotName} minutes={app.minutes} social={app.social} onStart={app.start} />
          )}
          {app.step === 1 && (
            <Identification
              doc={app.doc}
              onDoc={app.onDoc}
              docValid={app.docValid}
              digitsLength={app.digitsLength}
              onGovbr={app.chooseGovbr}
              onNext={app.next}
            />
          )}
          {app.step === 2 && (
            <DataReview values={app.values} answers={app.answers} setValue={app.setValue} setAnswer={app.setAnswer} />
          )}
          {app.step === 3 && <Review values={app.values} answers={app.answers} back={app.back} />}
          {app.step === 4 && (
            <Success
              confetti={app.confetti}
              firstName={app.firstName}
              protocol={app.protocol}
              today={app.today}
              socialNext={app.socialNext}
              onRestart={app.restart}
            />
          )}
        </main>

        <Footer
          show={app.showCta}
          onBack={app.back}
          onNext={app.next}
          ctaBlocked={app.ctaBlocked}
          ctaLabel={app.ctaLabel}
        />
      </div>
    </div>
  );
}
