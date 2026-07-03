import React, { useState, useEffect } from 'react'

// Order matters: NERD first, then one entry per feature.
const LINES = [
    {
        tag: 'nerd',
        headline: 'Three tools. One popup.',
        description: 'Form saving, site auditing, and error debugging, all offline, all instant.',
    },
    {
        tag: 'local-form-saver',
        headline: 'Your test data, on autopilot.',
        description: 'One click saves it. One click brings it back. Nothing leaves your machine.',
    },
    {
        tag: 'website-auditor',
        headline: 'Catch it before your users do.',
        description: 'A full performance, accessibility, and code scan in one click, fixes included.',
    },
    {
        tag: 'debugging-assistant',
        headline: 'Errors that explain themselves.',
        description: 'No more AI prompt loop, get the cause and the fix, in plain English, instantly.',
    },
]

const TYPE_SPEED = 45
const DELETE_SPEED = 25
const HOLD_MS = 5000
const PAUSE_MS = 400

const useTypewriter = (lines) => {
    const [line, setLine] = useState(0)
    const [index, setIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const text = lines[line].headline
        let timer

        if (!deleting) {
            if (index < text.length) {
                timer = setTimeout(() => setIndex((i) => i + 1), TYPE_SPEED)
            } else {
                timer = setTimeout(() => setDeleting(true), HOLD_MS)
            }
        } else {
            if (index > 0) {
                timer = setTimeout(() => setIndex((i) => i - 1), DELETE_SPEED)
            } else {
                timer = setTimeout(() => {
                    setDeleting(false)
                    setLine((l) => (l + 1) % lines.length)
                }, PAUSE_MS)
            }
        }
        return () => clearTimeout(timer)
    }, [index, deleting, line])

    const current = lines[line]
    const done = !deleting && index === current.headline.length

    return {
        headline: current.headline.slice(0, index),
        description: current.description,
        tag: current.tag,
        done,
    }
}

const FEATURES = [
    { tag: 'local-form-saver', label: 'Local Form Saver' },
    { tag: 'website-auditor', label: 'Website Auditor' },
    { tag: 'debugging-assistant', label: 'Debugging Assistant' },
]

const Hero = () => {
    const { headline, description, tag, done } = useTypewriter(LINES)

    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
        >
            {/* faint grid texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #021A54 1px, transparent 1px), linear-gradient(to bottom, #021A54 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div
                className="pointer-events-none absolute top-10 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
                style={{ background: '#FF85BB' }}
            />

            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue shadow-sm backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-pink opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-pink shadow-[0_0_6px_2px_rgba(255,133,187,0.6)]" />
                    </span>
                    Next-gen Extension for Rapid Development
                </span>

                {/* Terminal-styled typewriter card */}
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/90 text-left shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">{tag}@localhost</span>
                    </div>

                    <div className="flex min-h-[160px] flex-col justify-center gap-3 px-5 py-8 sm:min-h-[180px] sm:px-10">
                        <p className="font-mono text-xl font-semibold leading-snug text-gray-800 sm:text-3xl md:text-4xl">
                            <span className="text-accent-pink">$</span> {headline}
                            <span className="ml-1 inline-block h-6 w-[2px] translate-y-[2px] animate-pulse bg-accent-pink align-middle sm:h-8" />
                        </p>
                        <p
                            className={`font-mono text-sm text-gray-500 transition-opacity duration-300 sm:text-base ${done ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {description}
                        </p>
                    </div>
                </div>

                {/* Quiet strip naming the 3 tools, so they're visible without waiting on the cycle */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {FEATURES.map((f) => (
                        <span
                            key={f.tag}
                            className={`font-mono font-bold text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${tag === f.tag ? 'text-accent-pink' : 'text-primary-blue/40'
                                }`}
                        >
                            {f.label}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                    <button className="rounded-xl bg-primary-blue px-7 py-3 font-medium text-white shadow-lg shadow-primary-blue/20 transition-all duration-300 hover:bg-accent-pink hover:scale-105 hover:shadow-accent-pink/40 cursor-pointer">
                        Add to Chrome
                    </button>
                    <button
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hover:scale-105 rounded-xl border border-primary-blue/20 px-7 py-3 font-medium text-primary-blue transition-all duration-300 hover:border-accent-pink hover:text-accent-pink cursor-pointer"
                    >
                        Explore Features
                    </button>
                </div>


            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    )
}

export default Hero