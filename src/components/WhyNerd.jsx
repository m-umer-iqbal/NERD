import React, { useEffect, useState } from 'react'

const diffRows = [
    {
        without: "Passwords sync to someone else's cloud",
        with: 'Test data stays on your machine, always',
    },
    {
        without: 'Lighthouse here, axe there, one page at a time',
        with: 'Performance, accessibility & code checks in one click',
    },
    {
        without: 'Sentry ships your stack traces off-device',
        with: 'Errors get read and explained right in the browser',
    },
    {
        without: 'Console prints a trace and leaves you to it',
        with: 'Plain-English cause and fix for every error',
    },
    {
        without: 'Three extensions, three logins, three UIs',
        with: 'One popup, zero setup, zero cost',
    },
]

const differentiators = [
    {
        title: 'Localhost-only by design',
        description:
            'Every feature simply refuses to run anywhere else — no accidental prod exposure, no configuration required.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c-2.755 0-5.455.232-8.083.678a1.11 1.11 0 00-.917 1.096V11c0 5.837 3.578 10.842 8.657 12.936a1.017 1.017 0 00.686 0C17.422 21.842 21 16.837 21 11V4.774a1.11 1.11 0 00-.917-1.096A48.66 48.66 0 0012 3zM9 12.75l2.25 2.25L15 9.75"
            />
        ),
    },
    {
        title: 'Zero network calls',
        description:
            'No telemetry, no analytics, no server round-trips. Your form data and stack traces never leave the tab.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a10.5 10.5 0 011.293-1.135m9.302 1.135a10.5 10.5 0 00-1.293-1.135M12 6.75a13.5 13.5 0 016.702 1.767m-13.404 0A13.5 13.5 0 0112 6.75m0 10.5h.008v.008H12v-.008z"
            />
        ),
    },
    {
        title: 'Plain-language debugging',
        description:
            "Root causes and fixes in plain English, not just a red stack trace to decode yourself.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
        ),
    },
    {
        title: 'Free, forever',
        description:
            'No subscriptions, no hosting bills, no third-party services. Load it unpacked and go.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.31a11.15 11.15 0 003.348-3.349c.562-.826.389-1.907-.31-2.606L9.657 3.658A2.25 2.25 0 009.568 3z M6 6.75h.008v.008H6V6.75z"
            />
        ),
    },
]

const taglines = [
    'One popup. Zero cloud. All local.',
    'Built for localhost. Nowhere else.',
    'Ship faster. Debug smarter.',
    'No servers. No sign-ups. No limits.',
    'Your data never leaves your machine.',
]

const WhyNerd = () => {
    const [taglineIndex, setTaglineIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setTaglineIndex((i) => (i + 1) % taglines.length)
                setFade(true)
            }, 250)
        }, 2600)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="why-nerd" className="relative overflow-hidden py-24 sm:py-32">
            {/* faint grid texture, echoes Hero */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #021A54 1px, transparent 1px), linear-gradient(to bottom, #021A54 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div
                className="pointer-events-none absolute top-60 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style={{ background: '#FF85BB' }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
                        Existing tools vs NERD
                    </span>
                    <h2 className="mt-6 text-4xl font-black uppercase text-primary-blue sm:text-5xl">
                        Why developers reach for{' '}
                        <span className="relative inline-block">
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #021a54 0%, #021a54 70%, #ff85bb 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                NERD
                            </span>
                            <span className="absolute -bottom-1 left-0 h-[3px] w-full overflow-hidden">
                                <span className="block h-full w-full bg-linear-to-r from-accent-pink via-accent-pink/60 to-transparent" />
                            </span>
                        </span>
                    </h2>
                    <p
                        className={`mt-5 min-h-7 text-base font-medium text-gray-600 transition-opacity duration-300 sm:text-lg ${fade ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {taglines[taglineIndex]}
                    </p>
                </div>

                {/* Signature element: diff-styled comparison */}
                <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                    <div className="flex items-center gap-2 border-b border-gray-200 bg-light-gray/60 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">workflow.diff</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
                        {/* Without NERD */}
                        <div>
                            <div className="border-b border-gray-200 bg-light-gray px-5 py-3 font-mono text-md font-bold uppercase tracking-[0.15em] text-gray-700">
                                Without NERD
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {diffRows.map((row) => (
                                    <li
                                        key={row.without}
                                        className="flex items-start gap-3 px-5 py-4 transition-colors duration-200 hover:bg-light-gray/40"
                                    >
                                        <span className="mt-0.5 select-none font-mono text-sm font-bold text-gray-400">
                                            −
                                        </span>
                                        <span className="font-mono text-sm text-gray-500 line-through decoration-gray-300">
                                            {row.without}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* With NERD */}
                        <div>
                            <div className="border-b border-gray-200 bg-light-pink px-5 py-3 font-mono text-md font-bold uppercase tracking-[0.15em] text-primary-blue">
                                With NERD
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {diffRows.map((row) => (
                                    <li
                                        key={row.with}
                                        className="flex items-start gap-3 px-5 py-4 transition-colors duration-200 hover:bg-light-pink/50"
                                    >
                                        <span className="mt-0.5 select-none font-mono text-sm font-bold text-accent-pink">
                                            +
                                        </span>
                                        <span className="font-mono text-sm font-medium text-primary-blue">
                                            {row.with}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* What's actually different */}
                <div className="mt-20">
                    <h3 className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue/50">
                        What's actually different
                    </h3>
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {differentiators.map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-gray-200 bg-light-gray/30 p-6 shadow-lg shadow-transparent transition-all duration-300 hover:-translate-y-1 hover:border-accent-pink/50 hover:shadow-accent-pink/40"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition-colors duration-300 group-hover:bg-accent-pink/10 group-hover:text-accent-pink">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        style={{ height: '22px', width: '22px' }}
                                    >
                                        {item.icon}
                                    </svg>
                                </div>
                                <h4 className="mt-4 font-bold text-primary-blue">{item.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyNerd