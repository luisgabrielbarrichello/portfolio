'use client';
import { useRef, useState } from 'react';

function BeforeAfter() {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    const updatePosition = (clientX: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const pct = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, pct)));
    };

    const onPointerDown = (e: React.PointerEvent) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragging.current) return;
        updatePosition(e.clientX);
    };
    const onPointerUp = () => {
        dragging.current = false;
    };

    return (
        <section
            id="uma-nova-perspectiva"
            className="py-24 md:py-36 bg-gray-50 dark:bg-dark-20"
            aria-labelledby="beforeafter-heading">
            <div className="editorial-container">
                <span className="eyebrow">03 / Uma nova perspectiva</span>
                <h2
                    id="beforeafter-heading"
                    className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white max-w-3xl leading-tight">
                    A mesma empresa, duas presenças digitais.
                </h2>
                <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-400">
                    Arraste para comparar.{' '}
                    <span className="text-gray-400 dark:text-gray-600">
                        (Exemplo demonstrativo)
                    </span>
                </p>
            </div>

            <div className="editorial-container mt-12 md:mt-16 max-w-none px-0 sm:px-6">
                <div
                    ref={containerRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    className="relative aspect-[4/3] sm:aspect-video max-w-5xl mx-auto rounded-none sm:rounded-lg overflow-hidden border-y sm:border border-gray-200 dark:border-gray-800 select-none cursor-ew-resize touch-none shadow-xl shadow-gray-300/40 dark:shadow-black/40">
                    {/* DEPOIS (base) */}
                    <div className="absolute inset-0 bg-white dark:bg-dark-10 p-8 flex flex-col justify-center gap-4">
                        <span className="text-[10px] uppercase tracking-widest text-brand font-semibold">
                            Depois
                        </span>
                        <div className="h-4 w-2/3 rounded-full bg-gray-900 dark:bg-white"></div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-2 w-4/5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="flex gap-3 pt-3">
                            <div className="h-9 w-32 rounded-md bg-brand"></div>
                            <div className="h-9 w-28 rounded-md border border-gray-300 dark:border-gray-700"></div>
                        </div>
                    </div>

                    {/* ANTES (recortado por clip) */}
                    <div
                        className="absolute inset-0 bg-gray-200 dark:bg-gray-900 p-8 flex flex-col justify-center gap-3 overflow-hidden"
                        style={{
                            clipPath: `inset(0 ${100 - position}% 0 0)`,
                        }}>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                            Antes
                        </span>
                        <div className="h-3 w-1/2 bg-gray-400 dark:bg-gray-600"></div>
                        <div className="h-2 w-3/4 bg-gray-400/70 dark:bg-gray-700"></div>
                        <div className="h-2 w-2/3 bg-gray-400/70 dark:bg-gray-700"></div>
                        <div className="h-2 w-1/2 bg-gray-400/70 dark:bg-gray-700"></div>
                        <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 mt-2"></div>
                    </div>

                    {/* Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-brand shadow-lg pointer-events-none"
                        style={{ left: `${position}%` }}>
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand border-2 border-white dark:border-dark-10 flex items-center justify-center text-sm text-white font-bold shadow-md">
                            ↔
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeforeAfter;
