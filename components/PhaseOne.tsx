
import React, { useState } from 'react';
import { Database, User, Globe, ChevronRight, ShieldCheck } from 'lucide-react';

interface PhaseOneProps {
  onStart: (id: string, region: string) => void;
}

const PhaseOne: React.FC<PhaseOneProps> = ({ onStart }) => {
  const [playerId, setPlayerId] = useState('');
  const [region, setRegion] = useState('LATAM');
  const [error, setError] = useState('');

  const regions = ['LATAM', 'Norteamérica', 'Europa', 'Asia', 'Medio Oriente'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerId.length < 5) {
      setError('Formato de ID de jugador inválido (mín. 5 dígitos)');
      return;
    }
    onStart(playerId, region);
  };

  return (
    <div className="bg-spaceBlack/60 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-neonCyan/20 rounded-2xl border border-neonCyan/40">
            <Database className="w-8 h-8 text-neonCyan" />
          </div>
          <div>
            <h2 className="font-orbitron text-xl font-black text-white uppercase tracking-tight">Panel de Control</h2>
            <p className="text-[10px] text-white/30 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-500" /> CONEXIÓN SEGURA ACTIVA
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-[10px] font-orbitron font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
              <User className="w-3 h-3 text-neonCyan" /> ID DE JUGADOR
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ingresa ID..."
                value={playerId}
                onChange={(e) => {
                  setPlayerId(e.target.value.replace(/\D/g, ''));
                  setError('');
                }}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-neonCyan placeholder:text-white/10 focus:outline-none focus:border-neonCyan transition-all font-mono text-lg shadow-inner"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-orbitron font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
              <Globe className="w-3 h-3 text-neonCyan" /> REGIÓN
            </label>
            <div className="relative group">
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/80 focus:outline-none focus:border-neonCyan transition-all font-mono appearance-none text-lg cursor-pointer"
              >
                {regions.map(r => <option key={r} value={r} className="bg-spaceBlack">{r}</option>)}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-neonCyan transition-colors">
                ▼
              </div>
            </div>
          </div>
        </div>

        {error && (
          <p className="bg-red-500/10 border border-red-500/20 py-2 px-4 rounded-xl text-red-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {error}
          </p>
        )}

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full group relative overflow-hidden bg-neonCyan hover:bg-white text-spaceBlack font-orbitron font-black py-5 rounded-2xl transition-all duration-300 animate-pulse-cyan flex items-center justify-center gap-3 text-lg uppercase tracking-widest shadow-[0_0_30px_rgba(0,242,255,0.2)]"
          >
            INICIAR PROTOCOLO WEB
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </form>
      
      <div className="mt-8 flex justify-center gap-4">
        <div className="flex items-center gap-2 text-[9px] font-mono text-white/20">
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          NO REQUERIMOS CONTRASEÑA
        </div>
        <div className="flex items-center gap-2 text-[9px] font-mono text-white/20">
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          SOPORTE 24/7
        </div>
      </div>
    </div>
  );
};

export default PhaseOne;
