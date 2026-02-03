
import React, { useState } from 'react';
import { KeyRound, ShieldAlert, ArrowRight } from 'lucide-react';

interface PhaseThreeProps {
  onSubmit: (code: string) => void;
}

const PhaseThree: React.FC<PhaseThreeProps> = ({ onSubmit }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const VALID_CODE = '2025199707';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      setError('Error: Código Requerido.');
    } else if (code.length < 10) {
      setError('Error: El código debe tener 10 dígitos.');
    } else if (code !== VALID_CODE) {
      setError('Error: Código de activación incorrecto o expirado.');
    } else {
      onSubmit(code);
    }
  };

  return (
    <div className="bg-spaceBlack/80 backdrop-blur-xl border border-neonCyan/20 p-8 rounded-2xl shadow-2xl animate-in slide-in-from-right-8 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <KeyRound className="w-8 h-8 text-neonCyan" />
        <h2 className="font-orbitron text-xl font-bold text-white uppercase">Activación Final</h2>
      </div>

      <p className="text-xs text-white/50 mb-6 font-mono leading-relaxed">
        Ingresa el código de 10 dígitos encontrado en el portal de SonaGamer para iniciar la secuencia de inyección de paquetes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <input 
            type="text"
            maxLength={10}
            placeholder="Ingresa el código"
            value={code}
            onChange={(e) => {
              setCode(e.target.value.replace(/\D/g, ''));
              setError('');
            }}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center text-2xl font-mono tracking-[0.3em] text-neonCyan placeholder:text-white/10 placeholder:tracking-normal focus:outline-none focus:border-neonCyan transition-all shadow-inner"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg flex items-center gap-2 text-red-400 text-xs font-mono">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <button 
          type="submit"
          className="w-full bg-white/10 hover:bg-neonCyan hover:text-spaceBlack text-white font-orbitron font-bold py-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-neonCyan flex items-center justify-center gap-2 group"
        >
          CONFIRMAR E INYECTAR
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default PhaseThree;
