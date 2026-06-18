import { useState } from 'react'
import { FaFire, FaWalking } from 'react-icons/fa'
import { FaScaleBalanced, FaHeartPulse } from 'react-icons/fa6'

export default function TranzioDashboard() {
  const [weight, setWeight] = useState('')
  const [logs, setLogs] = useState([72.5])
  
  const handleQuickLog = (e) => {
    e.preventDefault()
    if (!weight || isNaN(weight)) return
    setLogs([...logs, parseFloat(weight)])
    setWeight('')
  }

  const currentWeight = logs[logs.length - 1]

  const stats = [
    {
      title: "Calories",
      value: "2,340",
      unit: "kcal",
      sub: "Today",
      color: "text-orange-500",
      glow: "shadow-orange-500/10",
      icon: <FaFire size={24} />
    },
    {
      title: "Steps",
      value: "10,240",
      unit: "",
      sub: "Today",
      color: "text-primary",
      glow: "shadow-primary/10",
      icon: <FaWalking size={24} />
    },
    {
      title: "Weight",
      value: currentWeight.toFixed(1),
      unit: "kg",
      sub: "Latest Log",
      color: "text-secondary",
      glow: "shadow-secondary/10",
      icon: <FaScaleBalanced size={24} />
    },
    {
      title: "BMI Score",
      value: "21.6",
      unit: "",
      sub: "Normal",
      color: "text-emerald-400",
      glow: "shadow-emerald-500/10",
      icon: <FaHeartPulse size={24} />
    }
  ]

  return (
    <div className="w-full bg-[#090e18] rounded-3xl border border-white/5 p-6 md:p-8 relative overflow-hidden shadow-glass select-none text-left">
      
      {/* Background radial corner light glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

      {/* Header section */}
      <div className="dashboard-header flex justify-between items-center mb-8 pb-6 border-b border-white/5">
        <div>
          <span className="text-xs text-zinc-400/60 font-semibold uppercase tracking-wider block">System Showcase</span>
          <div className="flex items-center gap-2.5 mt-1.5">
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">Alex! 👋</h3>
            <span className="px-2.5 py-0.5 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">
              Active Session
            </span>
          </div>
          <span className="text-xs text-zinc-400/40 font-bold tracking-wider mt-1.5 block uppercase">TRANZIO FITNESS ECOSYSTEM</span>
        </div>
        <div className="dashboard-avatar w-12 h-12 rounded-full border border-primary/30 overflow-hidden bg-zinc-800 flex items-center justify-center text-xl">
          💪
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`bg-[#05070d]/50 border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-primary/20 transition-all ${stat.glow}`}
          >
            <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full blur-xl -z-10 opacity-30 group-hover:scale-125 transition-transform" />
            <div className={`${stat.color} mb-3`}>{stat.icon}</div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-2xl font-black font-display text-white">{stat.value}</span>
              {stat.unit && <span className="text-xs text-zinc-500 font-bold">{stat.unit}</span>}
            </div>
            <p className="text-[10px] text-zinc-400/40 font-bold tracking-wider uppercase mt-1">{stat.title}</p>
            <p className={`text-[10px] mt-0.5 font-bold ${stat.title === 'BMI Score' ? stat.color : 'text-zinc-500'}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom row: Quick Weight Log & Trends Callout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-t border-white/5 pt-6">
        
        {/* Quick weight log */}
        <form onSubmit={handleQuickLog} className="md:col-span-8 flex flex-col sm:flex-row gap-3 w-full bg-[#05070d]/40 p-3 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 px-3">
            <FaScaleBalanced className="text-primary" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider whitespace-nowrap">Interactive Simulation</span>
          </div>
          <div className="flex-grow flex items-center bg-black/40 border border-white/5 px-4 py-2 rounded-xl">
            <input 
              type="text" 
              placeholder="e.g. 72.5" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-transparent text-sm font-bold text-white outline-none placeholder-zinc-700"
            />
            <span className="text-xs text-zinc-500 font-bold ml-2">kg</span>
          </div>
          <button 
            type="submit"
            className="bg-primary hover:bg-primary/80 hover:scale-105 active:scale-95 text-black text-xs font-extrabold px-6 py-2.5 rounded-xl transition-all"
          >
            Log
          </button>
        </form>

        {/* Sync Status */}
        <div className="md:col-span-4 flex items-center justify-end gap-2 px-2 text-zinc-500 font-semibold text-right">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Cloud Database</span>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5 font-bold justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live connection
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}
