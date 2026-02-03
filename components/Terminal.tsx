
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  playerData: { id: string; region: string };
  onComplete: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ playerData, onComplete }) => {
  // Iniciamos con un log para evitar pantalla negra inicial
  const [logs, setLogs] = useState<string[]>(['> SYSTEM_INITIALIZING...']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminalScripts = [
      `> STABLISHING SECURE UPLINK TO NODE: ${playerData.region.toUpperCase()}`,
      `> TUNNELING THROUGH PROXY: 185.22.102.4...`,
      `> HANDSHAKE PROTOCOL: INITIALIZED`,
      `> TARGET_ID ACQUIRED: ${playerData.id}`,
      `> BYPASSING FIREWALL... [99%]`,
      `> STATUS: ACCESS GRANTED`,
      `> SEARCHING DIAMOND_RESERVE_POOL...`,
      `> WARNING: HUMAN_VERIFICATION_REQUIRED`,
      `> PREPARING VERIFICATION GATEWAY...`
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < terminalScripts.length) {
        const nextLog = terminalScripts[current];
        if (nextLog) {
          setLogs(prev => [...prev, nextLog]);
        }
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 400 + Math.random() * 400);

    return () => clearInterval(interval);
  }, [playerData, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-[#050709] border border-neonCyan/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.2)] animate-in fade-in zoom-in-95 duration-300">
      <div className="bg-neonCyan/10 px-4 py-2 border-b border-neonCyan/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-neonCyan" />
          <span className="font-mono text-[10px] text-neonCyan tracking-widest uppercase font-bold">Protocol Terminal v4.0</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="p-4 h-72 overflow-y-auto font-mono text-xs md:text-sm space-y-1.5 bg-spaceBlack/90 custom-scrollbar"
      >
        {logs.map((log, i) => {
          // Verificación defensiva para asegurar que log sea una cadena
          const logText = log || '';
          const isSuccess = logText.includes('GRANTED') || logText.includes('ACQUIRED');
          const isWarning = logText.includes('WARNING');
          
          return (
            <div 
              key={i} 
              className={`${isSuccess ? 'text-green-400 font-bold' : isWarning ? 'text-fireOrange animate-pulse' : 'text-neonCyan/80'}`}
            >
              {logText}
            </div>
          );
        })}
        <div className="flex items-center gap-1">
          <span className="text-neonCyan animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
