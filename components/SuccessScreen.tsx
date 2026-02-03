
import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Info, Sparkles, Loader2, Zap } from 'lucide-react';

interface SuccessScreenProps {
  playerData: { id: string; region: string };
  onReset: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ playerData, onReset }) => {
  const [isFinishing, setIsFinishing] = useState(false);

  const handleFinalize = () => {
    setIsFinishing(true);
    // Esperar 2.5 segundos mostrando el mensaje de éxito antes de reiniciar
    setTimeout(() => {
      onReset();
    }, 2500);
  };

  if (isFinishing) {
    return (
      <div className="bg-spaceBlack/90 backdrop-blur-3xl border-4 border-neonCyan p-10 rounded-3xl shadow-[0_0_80px_rgba(0,242,255,0.4)] animate-in zoom-in-95 duration-500 text-center">
        <div className="relative inline-block mb-6">
          <Zap className="w-20 h-20 text-neonCyan mx-auto animate-pulse" />
          <div className="absolute inset-0 animate-ping opacity-20">
            <Zap className="w-20 h-20 text-neonCyan" />
          </div>
        </div>
        <h2 className="font-orbitron text-3xl font-black text-white mb-2 uppercase tracking-tighter">
          ¡OPERACIÓN EXITOSA!
        </h2>
        <p className="font-mono text-neonCyan text-sm mb-8 bg-neonCyan/10 p-4 rounded-xl border border-neonCyan/30">
          PROTOCOLO FINALIZADO CORRECTAMENTE. <br/>
          SERÁS REDIRIGIDO AL MENÚ PRINCIPAL...
        </p>
        <div className="flex items-center justify-center gap-3 font-mono text-xs text-white/50">
          <Loader2 className="animate-spin h-4 w-4 text-neonCyan" />
          ESTABLECIENDO NUEVA SESIÓN...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-spaceBlack/90 backdrop-blur-2xl border border-green-500/40 p-8 md:p-12 rounded-3xl shadow-[0_0_60px_rgba(34,197,94,0.3)] animate-in zoom-in-110 duration-700 text-center relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent shadow-[0_0_15px_#22c55e]" />
      
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="bg-green-500 rounded-full p-5 shadow-[0_0_40px_#22c55e] relative z-10">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
          <Sparkles className="absolute -top-4 -right-4 text-fireOrange w-8 h-8 animate-bounce" />
          <div className="absolute inset-0 animate-ping rounded-full bg-green-500/20" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-orbitron text-4xl font-black text-neonCyan mb-1 tracking-tighter drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
          ¡FELICIDADES!
        </h2>
        <p className="font-orbitron text-lg font-bold text-white uppercase tracking-widest">
          Transferencia Confirmada
        </p>
      </div>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8 inline-block relative group transition-all hover:scale-105">
        <div className="flex items-center justify-center gap-2 mb-2 text-white/50 font-mono text-xs uppercase tracking-tighter">
          <span>USUARIO OBJETIVO:</span>
          <span className="text-neonCyan font-bold">{playerData.id}</span>
        </div>
        <div className="text-4xl font-orbitron font-black text-white flex items-center justify-center gap-2">
          99,999 <span className="text-sm font-bold text-fireOrange bg-fireOrange/10 px-2 py-1 rounded">DIAMANTES</span>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-spaceBlack font-mono text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap">
          ESTADO: INYECTADO
        </div>
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm mx-auto font-medium">
        Los recursos han sido sincronizados con éxito. Aparecerán en tu cuenta de <span className="text-neonCyan font-bold">{playerData.region}</span> en un periodo máximo de <span className="text-fireOrange font-bold underline">24 horas</span>.
      </p>

      <div className="bg-fireOrange/10 rounded-xl p-4 flex items-start gap-3 text-left border border-fireOrange/30">
        <div className="p-1 bg-fireOrange/20 rounded-full shrink-0">
          <Info className="w-4 h-4 text-fireOrange" />
        </div>
        <p className="text-[11px] text-white/60 leading-tight">
          <b className="text-white uppercase">Aviso de Seguridad:</b> No cierres sesión ni realices nuevas solicitudes de inyección durante el periodo de sincronización para evitar bloqueos por parte de Garena.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-[10px] font-mono text-green-500/60 uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          SESSION_VERIFIED: {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </div>
        <button 
          onClick={handleFinalize}
          className="bg-white/5 hover:bg-neonCyan hover:text-spaceBlack hover:border-neonCyan transition-all text-[10px] px-8 py-3 rounded-full border border-white/20 font-orbitron font-bold uppercase tracking-widest active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
        >
          Finalizar Protocolo
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
