
import React, { useState, useEffect } from 'react';
import { 
  Database, 
  ShieldCheck, 
  Lock, 
  Terminal as TerminalIcon, 
  Globe, 
  User, 
  CheckCircle2, 
  AlertTriangle,
  Loader2,
  Zap,
  ChevronRight,
  Shield,
  Clock,
  MessageSquare
} from 'lucide-react';
import MatrixBackground from './components/MatrixBackground.tsx';
import Terminal from './components/Terminal.tsx';
import PhaseOne from './components/PhaseOne.tsx';
import PhaseTwo from './components/PhaseTwo.tsx';
import PhaseThree from './components/PhaseThree.tsx';
import SuccessScreen from './components/SuccessScreen.tsx';

export enum Phase {
  IDENTIFICATION,
  HANDSHAKE,
  VERIFICATION_GATE,
  CODE_INPUT,
  INJECTION_PROGRESS,
  SUCCESS
}

const App: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<Phase>(Phase.IDENTIFICATION);
  const [playerData, setPlayerData] = useState({ id: '', region: 'LATAM' });
  const [activationCode, setActivationCode] = useState('');

  const handleStartHandshake = (id: string, region: string) => {
    setPlayerData({ id, region });
    setCurrentPhase(Phase.HANDSHAKE);
  };

  const handleHandshakeComplete = () => {
    setCurrentPhase(Phase.VERIFICATION_GATE);
  };

  const handleVerificationClick = () => {
    window.open('https://www.google.com/search?q=sonagamerlive', '_blank');
    setCurrentPhase(Phase.CODE_INPUT);
  };

  const handleCodeSubmit = (code: string) => {
    setActivationCode(code);
    setCurrentPhase(Phase.INJECTION_PROGRESS);
  };

  const handleInjectionComplete = () => {
    setCurrentPhase(Phase.SUCCESS);
  };

  const handleReset = () => {
    setPlayerData({ id: '', region: 'LATAM' });
    setActivationCode('');
    setCurrentPhase(Phase.IDENTIFICATION);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-spaceBlack text-white selection:bg-neonCyan/30 font-sans overflow-x-hidden">
      <MatrixBackground />
      <div className="scanline" />
      
      {/* Navigation Web Bar */}
      <nav className="sticky top-0 z-50 bg-spaceBlack/80 backdrop-blur-lg border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-fireOrange w-6 h-6 animate-pulse" />
            <h1 className="font-orbitron text-xl font-bold tracking-tighter text-neonCyan">
              Garena<span className="text-fireOrange">Hub</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-mono text-green-500">SERVER ONLINE</span>
          </div>
        </div>
      </nav>

      <main className="relative z-30 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-8 pt-12">
        
        {/* Left Column: Recent Activity (Web Layout Feature) */}
        <aside className="lg:col-span-3 order-2 lg:order-1 space-y-4">
          <div className="bg-spaceBlack/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
            <h3 className="font-orbitron text-xs font-bold text-neonCyan mb-4 flex items-center gap-2">
              <Clock className="w-3 h-3" /> ACTIVIDAD RECIENTE
            </h3>
            <RecentActivity />
          </div>
          <div className="bg-spaceBlack/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
            <h3 className="font-orbitron text-xs font-bold text-fireOrange mb-4 flex items-center gap-2">
              <Shield className="w-3 h-3" /> SEGURIDAD ACTIVA
            </h3>
            <div className="space-y-2 text-[10px] font-mono text-white/40">
              <p>• AES-256 Encryption</p>
              <p>• Anti-Ban Layer v8.1</p>
              <p>• Proxy Rotativo</p>
            </div>
          </div>
        </aside>

        {/* Center Column: Main Generator */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="mb-8 text-center">
            <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-2 leading-none uppercase italic">
              Generador de <span className="text-neonCyan">Diamantes</span>
            </h2>
            <p className="text-white/40 text-sm font-mono uppercase tracking-[0.3em]">Protocolo 2025 Sincronizado</p>
          </div>

          <div className="w-full transition-all duration-500 ease-in-out">
            {currentPhase === Phase.IDENTIFICATION && <PhaseOne onStart={handleStartHandshake} />}
            {currentPhase === Phase.HANDSHAKE && <Terminal playerData={playerData} onComplete={handleHandshakeComplete} />}
            {currentPhase === Phase.VERIFICATION_GATE && <PhaseTwo onVerify={handleVerificationClick} />}
            {currentPhase === Phase.CODE_INPUT && <PhaseThree onSubmit={handleCodeSubmit} />}
            {currentPhase === Phase.INJECTION_PROGRESS && (
              <div className="bg-spaceBlack/80 backdrop-blur-xl border border-neonCyan/20 p-8 rounded-2xl shadow-2xl">
                <h2 className="font-orbitron text-2xl text-fireOrange mb-8 flex items-center gap-3">
                  <Loader2 className="animate-spin" /> INYECCIÓN WEB...
                </h2>
                <InjectionProgress onComplete={handleInjectionComplete} />
              </div>
            )}
            {currentPhase === Phase.SUCCESS && <SuccessScreen playerData={playerData} onReset={handleReset} />}
          </div>
        </div>

        {/* Right Column: Chat/Testimonials (Web Layout Feature) */}
        <aside className="lg:col-span-3 order-3 space-y-4">
          <div className="bg-spaceBlack/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
            <h3 className="font-orbitron text-xs font-bold text-neonCyan mb-4 flex items-center gap-2">
              <MessageSquare className="w-3 h-3" /> CHAT EN VIVO
            </h3>
            <LiveChat />
          </div>
        </aside>
      </main>

      {/* Web Footer */}
      <footer className="mt-20 border-t border-white/5 bg-spaceBlack/80 p-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-1 font-orbitron font-bold text-xl">GARENA</div>
            <div className="flex items-center gap-1 font-orbitron font-bold text-xl">UNITY</div>
            <div className="flex items-center gap-1 font-orbitron font-bold text-xl">SSL</div>
          </div>
          <p className="text-white/20 text-xs font-mono max-w-2xl mx-auto">
            Este sitio web no está afiliado con Garena ni con Free Fire. Es una herramienta de demostración técnica para protocolos de sincronización de datos. El uso indebido es responsabilidad del usuario.
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-mono text-white/40">
            <a href="#">TÉRMINOS</a>
            <a href="#">PRIVACIDAD</a>
            <a href="#">SOPORTE</a>
          </div>
          <p className="text-[10px] text-white/10">© 2025 GarenaHub Protocol - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const RecentActivity = () => {
  const [activities, setActivities] = useState([
    { user: 'Killer_99', amt: '99k', time: 'hace 2 min', status: 'OK' },
    { user: 'GarenaPro', amt: '50k', time: 'hace 5 min', status: 'OK' },
    { user: 'Diana_FF', amt: '99k', time: 'hace 8 min', status: 'OK' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const users = ['Sombra_X', 'NekoGamer', 'Dragon_ID', 'Fire_Lover', 'Viper99'];
      const amounts = ['20k', '50k', '99k'];
      const newUser = {
        user: users[Math.floor(Math.random() * users.length)],
        amt: amounts[Math.floor(Math.random() * amounts.length)],
        time: 'hace 1 seg',
        status: 'OK'
      };
      setActivities(prev => [newUser, ...prev.slice(0, 4)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {activities.map((act, i) => (
        <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-2 animate-in fade-in slide-in-from-left-2">
          <div>
            <span className="text-neonCyan">{act.user}</span>
            <span className="text-white/30 ml-2">({act.amt})</span>
          </div>
          <div className="text-green-500 font-bold">{act.status}</div>
        </div>
      ))}
    </div>
  );
};

const LiveChat = () => {
  const [msgs] = useState([
    { user: 'Admin', text: '¡Bienvenidos! Nuevo parche inyectado.' },
    { user: 'User44', text: '¿Si funciona? Me acaban de llegar!' },
    { user: 'Gamer_88', text: 'Gracias sonagamerlive por el código.' },
    { user: 'FF_Pro', text: 'Excelente servicio, muy rápido.' },
  ]);

  return (
    <div className="space-y-3 h-48 overflow-y-auto custom-scrollbar pr-2">
      {msgs.map((m, i) => (
        <div key={i} className="text-[10px] font-mono leading-tight">
          <span className={`${m.user === 'Admin' ? 'text-fireOrange' : 'text-neonCyan'} font-bold`}>{m.user}: </span>
          <span className="text-white/60">{m.text}</span>
        </div>
      ))}
    </div>
  );
};

const InjectionProgress: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Iniciando Encriptación...");

  useEffect(() => {
    const statuses = [
      { p: 10, s: "Iniciando Encriptación..." },
      { p: 30, s: "Encriptando Paquetes..." },
      { p: 55, s: "Bypassing Garena Firewall..." },
      { p: 75, s: "Sincronizando Diamantes..." },
      { p: 90, s: "Finalizando Inyección..." },
      { p: 100, s: "¡Sincronización Completada!" },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (Math.random() * 5);
        const currentStatus = statuses.find(st => next >= st.p && next < st.p + 20);
        if (currentStatus) setStatus(currentStatus.s);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return next;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="space-y-6">
      <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/10">
        <div 
          className="h-full bg-gradient-to-r from-neonCyan to-fireOrange transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between items-center font-mono text-xs">
        <span className="text-neonCyan animate-pulse">{status}</span>
        <span className="text-white/40">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default App;
