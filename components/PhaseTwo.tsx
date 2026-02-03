
import React from 'react';
import { Lock, ShieldCheck, ExternalLink, Info } from 'lucide-react';

interface PhaseTwoProps {
  onVerify: () => void;
}

const PhaseTwo: React.FC<PhaseTwoProps> = ({ onVerify }) => {
  return (
    <div className="bg-spaceBlack/80 backdrop-blur-xl border border-fireOrange/30 p-8 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500 text-center">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Lock className="w-16 h-16 text-fireOrange" />
          <div className="absolute inset-0 animate-ping opacity-20">
            <Lock className="w-16 h-16 text-fireOrange" />
          </div>
        </div>
      </div>

      <h2 className="font-orbitron text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Verificación Humana Requerida</h2>
      <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto">
        Para evitar la sobrecarga del servidor por bots automatizados, debes obtener manualmente un código de activación en nuestro portal de socios.
      </p>

      <div className="bg-white/5 rounded-xl p-4 text-left border border-white/10 space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="bg-neonCyan/20 p-1.5 rounded text-neonCyan font-bold text-xs mt-0.5">1</div>
          <p className="text-xs text-white/70">Haz clic en el botón <b>"OBTENER CÓDIGO DE ACTIVACIÓN"</b> abajo.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-neonCyan/20 p-1.5 rounded text-neonCyan font-bold text-xs mt-0.5">2</div>
          <p className="text-xs text-white/70">Busca <b>"sonagamerlive"</b> en los resultados de Google.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-neonCyan/20 p-1.5 rounded text-neonCyan font-bold text-xs mt-0.5">3</div>
          <p className="text-xs text-white/70">Abre el primer artículo y baja hasta el final para encontrar tu código de 10 dígitos.</p>
        </div>
      </div>

      <button 
        onClick={onVerify}
        className="w-full bg-fireOrange hover:bg-white hover:text-fireOrange text-white font-orbitron font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.4)] flex items-center justify-center gap-2"
      >
        OBTENER CÓDIGO DE ACTIVACIÓN
        <ExternalLink className="w-5 h-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/30 font-mono">
        <ShieldCheck className="w-3 h-3" />
        PROTEGIDO POR GOOGLE_VERIFY_SERVICES
      </div>
    </div>
  );
};

export default PhaseTwo;
