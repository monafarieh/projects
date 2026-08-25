'use client';

import { useEffect, useMemo, useState } from 'react';

type PatternKey = 'single' | 'domino' | 'corner' | 'plus';
type Point = [number, number];
type Pattern = { key: PatternKey; name: string; cells: Point[]; rotations: number };
type Move = { pattern: PatternKey; x: number; y: number; rotation?: number };
type Level = { id: number; size: number; target: number[]; initial: number[]; inventory: Record<PatternKey, number>; label: string };

const patterns: Pattern[] = [
  { key: 'single', name: 'Dot', cells: [[0, 0]], rotations: 1 },
  { key: 'domino', name: 'Line', cells: [[0, 0], [1, 0]], rotations: 2 },
  { key: 'corner', name: 'Corner', cells: [[0, 0], [1, 0], [0, 1]], rotations: 4 },
  { key: 'plus', name: 'Pulse', cells: [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]], rotations: 1 },
];
const rotate = ([x, y]: Point, turns: number): Point => { let px = x; let py = y; for (let i = 0; i < turns; i++) [px, py] = [-py, px]; return [px, py]; };
const cellsFor = (key: PatternKey, x: number, y: number, rotation: number, size: number) => {
  const pattern = patterns.find((item) => item.key === key)!;
  return pattern.cells.map((cell) => rotate(cell, rotation)).map(([dx, dy]) => [x + dx, y + dy] as Point).filter(([cx, cy]) => cx >= 0 && cy >= 0 && cx < size && cy < size);
};
const seeded = (seed: number) => { let value = seed * 9301 + 49297; return () => { value = (value * 9301 + 49297) % 233280; return value / 233280; }; };

function buildLevel(id: number): Level {
  const rand = seeded(id + 17); const size = id < 7 ? 4 : id < 18 ? 5 : 6;
  const target = Array.from({ length: size * size }, (_, index) => { const x = index % size; const y = Math.floor(index / size); const center = Math.abs(x - (size - 1) / 2) + Math.abs(y - (size - 1) / 2); return ((rand() > 0.64) !== (center < size / 2.5 && id % 3 === 0)) ? 1 : 0; });
  const solution: Move[] = []; const sequence: PatternKey[] = id < 4 ? ['single'] : id < 8 ? ['domino', 'single'] : id < 15 ? ['corner', 'domino', 'single'] : ['plus', 'corner', 'domino', 'single']; const count = Math.min(3 + Math.floor(id / 3), 10);
  for (let n = 0; n < count; n++) { const pattern = sequence[Math.floor(rand() * sequence.length)]; const def = patterns.find((item) => item.key === pattern)!; let move: Move; do { const margin = pattern === 'plus' ? 1 : 0; move = { pattern, x: margin + Math.floor(rand() * (size - margin * 2)), y: margin + Math.floor(rand() * (size - margin * 2)), rotation: Math.floor(rand() * def.rotations) }; } while (cellsFor(pattern, move.x, move.y, move.rotation ?? 0, size).length !== def.cells.length); solution.push(move); }
  const initial = [...target]; const inventory: Record<PatternKey, number> = { single: 0, domino: 0, corner: 0, plus: 0 };
  solution.forEach((move) => { inventory[move.pattern] += 1; cellsFor(move.pattern, move.x, move.y, move.rotation ?? 0, size).forEach(([x, y]) => { initial[y * size + x] ^= 1; }); });
  const labels = ['First light', 'Small shifts', 'Two directions', 'Corners awake', 'Careful rhythm', 'Tight fit', 'Mirror work', 'Split decision', 'Quiet geometry', 'A wider reach', 'Soft pressure', 'Hidden path', 'Cross current', 'Less is more', 'Fold the field', 'Balanced risk', 'The long turn', 'Signal bloom', 'Close quarters', 'Bright maze', 'Deep pattern', 'False symmetry', 'Four moves ahead', 'Pulse logic', 'Last clean edge', 'Glass lattice', 'Wild alignment', 'Night circuit', 'Master craft', 'The final shape'];
  return { id, size, target, initial, inventory, label: labels[id - 1] };
}
const levels = Array.from({ length: 30 }, (_, index) => buildLevel(index + 1));

export default function Home() {
  const [levelId, setLevelId] = useState(1); const [board, setBoard] = useState<number[]>(levels[0].initial); const [charges, setCharges] = useState(levels[0].inventory); const [selected, setSelected] = useState<PatternKey>('single'); const [rotation, setRotation] = useState(0); const [history, setHistory] = useState<{ board: number[]; charges: Record<PatternKey, number> }[]>([]); const [hover, setHover] = useState<Point | null>(null); const [complete, setComplete] = useState(false);
  const level = levels[levelId - 1]; const pattern = patterns.find((item) => item.key === selected)!; const preview = useMemo(() => hover ? cellsFor(selected, hover[0], hover[1], rotation, level.size) : [], [hover, selected, rotation, level.size]);
  const load = (id: number) => { const next = levels[id - 1]; setLevelId(id); setBoard(next.initial); setCharges(next.inventory); setSelected(next.inventory.single ? 'single' : 'domino'); setRotation(0); setHistory([]); setComplete(false); setHover(null); };
  useEffect(() => { const saved = Number(localStorage.getItem('flipcraft-progress') || 1); if (saved > 1 && saved <= 30) load(saved); }, []);
  const place = (x: number, y: number) => { if (complete || charges[selected] < 1) return; const affected = cellsFor(selected, x, y, rotation, level.size); if (affected.length !== pattern.cells.length) return; setHistory((past) => [...past, { board: [...board], charges: { ...charges } }]); const next = [...board]; affected.forEach(([cx, cy]) => { next[cy * level.size + cx] ^= 1; }); const nextCharges = { ...charges, [selected]: charges[selected] - 1 }; setBoard(next); setCharges(nextCharges); if (next.every((cell, index) => cell === level.target[index])) { setComplete(true); localStorage.setItem('flipcraft-progress', String(Math.max(levelId, Number(localStorage.getItem('flipcraft-progress') || 1)))); } };
  const undo = () => { const previous = history.at(-1); if (!previous) return; setBoard(previous.board); setCharges(previous.charges); setHistory((past) => past.slice(0, -1)); }; const reset = () => load(levelId); const rotatePattern = () => setRotation((current) => (current + 1) % pattern.rotations);
  return <main className="game-shell"><header className="topbar"><a className="brand" href="#top" onClick={(event) => { event.preventDefault(); load(1); }}><span>F</span> FLIPCRAFT</a><div className="progress">{String(levelId).padStart(2, '0')} <i /> 30</div><button className="plain" onClick={() => document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' })}>Levels</button></header><section id="top" className="game-area"><div className="stage-head"><div><p className="eyebrow">LEVEL {String(levelId).padStart(2, '0')}</p><h1>{level.label}</h1></div><div className="goal"><span>MAKE THIS</span><MiniGrid state={level.target} size={level.size} /></div></div><div className="board-wrap"><div className="board" style={{ gridTemplateColumns: `repeat(${level.size}, 1fr)` }} onMouseLeave={() => setHover(null)}>{board.map((on, index) => { const x = index % level.size; const y = Math.floor(index / level.size); const active = preview.some(([px, py]) => px === x && py === y); return <button key={index} aria-label={`tile ${x + 1}, ${y + 1}`} className={`tile ${on ? 'on' : ''} ${active ? 'preview' : ''}`} onMouseEnter={() => setHover([x, y])} onFocus={() => setHover([x, y])} onClick={() => place(x, y)} />; })}</div></div><p className="instruction">Choose a tool, rotate it if needed, then place it on the board.</p><div className="toolbelt">{patterns.filter((item) => level.inventory[item.key] > 0).map((item) => <button key={item.key} className={`tool ${selected === item.key ? 'selected' : ''}`} onClick={() => { setSelected(item.key); setRotation(0); }}><PatternMark cells={item.cells} /><span>{item.name}</span><b>×{charges[item.key]}</b></button>)}{pattern.rotations > 1 && <button className="round" onClick={rotatePattern} aria-label="Rotate selected tool">↻</button>}</div><div className="actions"><button onClick={undo} disabled={!history.length}>Undo</button><button onClick={reset}>Restart</button></div>{complete && <div className="completion" role="dialog" aria-modal="true"><p>SHAPE CRAFTED</p><h2>Beautifully solved.</h2><button onClick={() => load(levelId === 30 ? 1 : levelId + 1)}>{levelId === 30 ? 'Play again' : 'Next level'} <span>→</span></button></div>}</section><section id="levels" className="level-select"><p className="eyebrow">THE WORKSHOP</p><h2>30 fresh puzzles.</h2><div>{levels.map((item) => <button key={item.id} className={item.id === levelId ? 'current' : ''} onClick={() => load(item.id)}><small>{String(item.id).padStart(2, '0')}</small><span>{item.label}</span></button>)}</div></section><footer>FlipCraft <span>•</span> Craft the pattern</footer></main>;
}
function MiniGrid({ state, size }: { state: number[]; size: number }) { return <div className="mini-grid" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>{state.map((on, index) => <i key={index} className={on ? 'on' : ''} />)}</div>; }
function PatternMark({ cells }: { cells: Point[] }) { const minX = Math.min(...cells.map(([x]) => x)); const minY = Math.min(...cells.map(([, y]) => y)); return <span className="pattern-mark">{cells.map(([x, y], index) => <i key={index} style={{ left: `${(x - minX) * 9}px`, top: `${(y - minY) * 9}px` }} />)}</span>; }
