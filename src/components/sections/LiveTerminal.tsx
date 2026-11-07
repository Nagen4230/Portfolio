import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, RefreshCw, CheckCircle2 } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'cmd' | 'output' | 'success' | 'highlight' | 'comment';
  delay?: number;
}

const TERMINAL_SCRIPTS = [
  {
    title: "candidate_eval.py",
    runtime: "Python 3.12 (CPython)",
    lines: [
      { text: "# Universiti Malaya (UM) Software Engineering Profile", type: "comment" },
      { text: "class EngineeringCandidate:", type: "cmd" },
      { text: '    name = "Nagendran Murugan"', type: "output" },
      { text: '    university = "Universiti Malaya (UM)"', type: "output" },
      { text: "    matriculation_cgpa = 4.00  # Perfect Score", type: "highlight" },
      { text: '    spm_results = "10 Straight As (7 A+, 1 A, 2 A-)"', type: "highlight" },
      { text: '    primary_language = "Python (Proficient)"', type: "output" },
      { text: '    current_learning = ["Java (OOP)", "AI-Assisted Tools", "Git/GitHub"]', type: "highlight" },
      { text: ">>> nagendran = EngineeringCandidate()", type: "cmd" },
      { text: "[OK] Candidate loaded: State-Level Competitive Coding Winner (2nd Runner-Up)", type: "success" },
    ] as TerminalLine[]
  },
  {
    title: "JavaLearningDemo.java",
    runtime: "OpenJDK 21 (javac)",
    lines: [
      { text: "// Currently learning Object-Oriented Java Programming", type: "comment" },
      { text: "public class JavaLearningDemo {", type: "cmd" },
      { text: "    public static void main(String[] args) {", type: "cmd" },
      { text: '        String track = "Software Engineering @ Universiti Malaya";', type: "output" },
      { text: '        String focus = "OOP Principles, Classes & Data Structures";', type: "highlight" },
      { text: '        System.out.println("Status: Active Learning in Progress");', type: "output" },
      { text: "    }", type: "cmd" },
      { text: "}", type: "cmd" },
      { text: "[BUILD SUCCESS] javac compiled JavaLearningDemo.class in 86ms", type: "success" },
    ] as TerminalLine[]
  },
  {
    title: "dev_workflow.sh",
    runtime: "Git 2.45 / Vite",
    lines: [
      { text: "# Version Control & AI-Assisted Development Pipeline", type: "comment" },
      { text: "$ git status", type: "cmd" },
      { text: "On branch main: Your branch is up to date with 'origin/main'.", type: "output" },
      { text: "$ python -m pytest tests/", type: "cmd" },
      { text: "  PASS  test_career_navigator_diagnostic.py (100% passed)", type: "highlight" },
      { text: "$ git commit -m 'feat: optimize python & java developer stack'", type: "cmd" },
      { text: "[main 4c892a1] Updated portfolio and verified live web build", type: "success" },
      { text: "$ echo 'Ready for Software Engineering Internships'", type: "cmd" },
      { text: "[STATUS] Available for Summer 2027 Engineering Internships", type: "success" },
    ] as TerminalLine[]
  }
];

export const LiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentScript = TERMINAL_SCRIPTS[activeTab];

  // Auto typing simulator effect
  useEffect(() => {
    setVisibleCount(0);
    setIsRunning(true);
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setVisibleCount(current);
      if (current >= currentScript.lines.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 180);

    return () => clearInterval(interval);
  }, [activeTab, currentScript]);

  const handleRestart = () => {
    setVisibleCount(0);
    setIsRunning(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleCount(current);
      if (current >= currentScript.lines.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 180);
  };

  return (
    <div className="w-full rounded-2xl glass-card overflow-hidden border border-neutral-800 shadow-2xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0e0e14]/90 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-crimson-600 inline-block shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-gold-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
          <div className="flex items-center gap-2 ml-3 text-xs font-mono text-neutral-400">
            <TerminalIcon className="w-3.5 h-3.5 text-crimson-500" />
            <span className="text-neutral-200 font-semibold">{currentScript.title}</span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-neutral-900 text-gold-400 text-[10px] border border-gold-500/20">
              {currentScript.runtime}
            </span>
          </div>
        </div>

        {/* Script Selection Tabs & Run button */}
        <div className="flex items-center gap-1 sm:gap-2">
          {TERMINAL_SCRIPTS.map((script, idx) => (
            <button
              key={script.title}
              onClick={() => setActiveTab(idx)}
              className={`text-xs px-2.5 py-1 rounded-md transition-all font-mono ${
                activeTab === idx
                  ? 'bg-crimson-600/30 text-crimson-400 border border-crimson-500/40'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
              }`}
            >
              Tab {idx + 1}
            </button>
          ))}
          <button
            onClick={handleRestart}
            title="Rerun script"
            className="p-1.5 ml-1 rounded-md bg-neutral-800/80 hover:bg-crimson-600/20 hover:text-crimson-400 text-neutral-400 transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin text-gold-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div
        ref={scrollRef}
        className="p-5 font-mono text-xs sm:text-sm bg-[#060608]/95 min-h-[290px] max-h-[360px] overflow-y-auto leading-relaxed space-y-1.5"
      >
        {currentScript.lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="flex items-start gap-2 animate-fadeIn">
            <span className="text-neutral-600 select-none text-[11px] w-6 text-right shrink-0">
              {i + 1}
            </span>

            {line.type === 'comment' && (
              <span className="text-neutral-500 italic">{line.text}</span>
            )}
            {line.type === 'cmd' && (
              <span className="text-neutral-200">
                <span className="text-crimson-500 font-bold mr-1.5">$</span>
                {line.text}
              </span>
            )}
            {line.type === 'output' && (
              <span className="text-neutral-400 pl-4">{line.text}</span>
            )}
            {line.type === 'highlight' && (
              <span className="text-gold-400 pl-4 font-medium glow-text-gold">{line.text}</span>
            )}
            {line.type === 'success' && (
              <span className="text-emerald-400 pl-2 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {line.text}
              </span>
            )}
          </div>
        ))}

        {isRunning && (
          <div className="flex items-center gap-2 pl-8 pt-1">
            <span className="w-2.5 h-4 bg-crimson-500 animate-pulse inline-block" />
            <span className="text-xs text-neutral-500 font-mono">executing runtime...</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Indicator */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#09090d] border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>STATUS: ONLINE & INTERACTIVE</span>
        </div>
        <div className="text-neutral-500 hidden sm:block">
          CORE STACK: PYTHON • JAVA (LEARNING) • AI TOOLS • GIT
        </div>
      </div>
    </div>
  );
};
