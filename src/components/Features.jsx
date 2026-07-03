import React, { useState, useRef, useEffect } from 'react'

// Feature data with added howToUse text
const FEATURES = [
    {
        id: 'local-form-saver',
        tag: 'local-form-saver@localhost',
        name: 'Local Form Saver',
        headline: 'Your test data, on autopilot.',
        description:
            'One click saves it. One click brings it back. Nothing leaves your machine.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783095891/Local-Form-Saver_Testing_Video_e1vdn1.mp4',
        howToUse: [
            'Fill out any form on a localhost page.',
            'Click the floating “Save Form” button.',
            'Choose a collection and name your saved entry.',
            'Next time, click “Autofill” & your data appears instantly.',
            'Note: The Save Form and Autofill buttons only appear on pages whose URL contains "register" or "login" (or similar synonyms).',
        ],
    },
    {
        id: 'website-auditor',
        tag: 'website-auditor@localhost',
        name: 'Website Auditor',
        headline: 'Catch it before your users do.',
        description:
            'A full performance, accessibility, and code scan in one click, fixes included.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783106510/Website-Auditor_Testing_tvrhtl.mp4',
        howToUse: [
            'Open the extension popup and go to Website Auditor.',
            'Click “Run Smart Analysis” & it scans the current page.',
            'Issues are grouped by category (Performance, Accessibility, Code).',
            'Expand any issue to see a fix suggestion with code examples.',
        ],
    },
    {
        id: 'debugging-assistant',
        tag: 'debugging-assistant@localhost',
        name: 'Debugging Assistant',
        headline: 'Errors that explain themselves.',
        description:
            'No more AI prompt loop, get the cause and the fix, in plain English, instantly.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783106507/Debugging-Assistant_Testing_pkfuso.mp4',
        howToUse: [
            'Click “Start Monitoring” in the extension popup.',
            'Interact with your localhost page, any JS error is captured.',
            'Each error shows a plain‑English meaning, root cause, and fix.',
            'Click an error to expand it and see detailed advice.',
        ],
    },
]

const FeatureCard = ({ feature }) => {
    const [flipped, setFlipped] = useState(false)
    const [backMode, setBackMode] = useState('video') // 'video' or 'text'
    const frontVideoRef = useRef(null)
    const backVideoRef = useRef(null)

    // Control video playback based on flipped state and backMode
    useEffect(() => {
        if (flipped) {
            frontVideoRef.current?.pause()
            if (backMode === 'video') {
                backVideoRef.current?.play()
            } else {
                backVideoRef.current?.pause()
            }
        } else {
            backVideoRef.current?.pause()
            frontVideoRef.current?.play()
        }
    }, [flipped, backMode])

    const handleFlipToVideo = () => {
        setBackMode('video')
        setFlipped(true)
    }

    const handleFlipToText = () => {
        setBackMode('text')
        setFlipped(true)
    }

    const handleFlipBack = () => {
        setFlipped(false)
    }

    return (
        <div
            className="relative w-full min-h-[480px] sm:min-h-[560px] md:min-h-[620px]"
            style={{ perspective: '2000px' }}
        >
            <div
                className="relative h-full min-h-[480px] w-full transition-transform duration-700 ease-in-out sm:min-h-[560px] md:min-h-[620px]"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* FRONT FACE */}
                <div
                    className="group absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        pointerEvents: flipped ? 'none' : 'auto',
                    }}
                >
                    {/* Terminal header bar */}
                    <div className="flex shrink-0 items-center gap-2 border-b border-gray-200 bg-light-gray/60 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">{feature.tag}</span>
                    </div>

                    {/* Video + overlay */}
                    <div className="relative flex-1 overflow-hidden">
                        <video
                            ref={frontVideoRef}
                            className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={feature.video}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-primary-blue/90 via-primary-blue/75 to-primary-blue/45" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full w-full flex-col justify-end px-7 pb-9 pt-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:px-10 sm:pb-11">
                            <span className="h-[3px] w-16 rounded-full bg-accent-pink shadow-lg shadow-accent-pink/40 transition-all duration-500 group-hover:w-24" />

                            <h3 className="mt-5 text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl">
                                {feature.name}
                            </h3>

                            <p className="mt-3 font-mono text-lg font-semibold text-accent-pink sm:text-xl">
                                {feature.headline}
                            </p>

                            <p className="mt-2 max-w-lg text-sm leading-relaxed text-light-gray/90 sm:text-base">
                                {feature.description}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                {/* See it in action – glass style */}
                                <button
                                    onClick={handleFlipToVideo}
                                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent-pink hover:bg-accent-pink hover:text-primary-blue hover:shadow-xl hover:shadow-accent-pink/30 cursor-pointer"
                                >
                                    See it in action
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{ height: '16px', width: '16px' }}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>

                                {/* How it works */}
                                <button
                                    onClick={handleFlipToText}
                                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-white bg-white px-6 py-3 font-medium text-primary-blue shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent-pink hover:bg-accent-pink hover:text-primary-blue hover:shadow-xl hover:shadow-accent-pink/30 cursor-pointer"
                                >
                                    How it works
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{ height: '16px', width: '16px' }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK FACE — conditional: video or text */}
                <div
                    className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        pointerEvents: flipped ? 'auto' : 'none',
                    }}
                >
                    {/* Header with close button */}
                    <div className="flex shrink-0 items-center gap-2 border-b border-gray-200 bg-light-gray/60 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">
                            {backMode === 'video' ? `${feature.tag} • preview` : `${feature.tag} • guide`}
                        </span>
                        <button
                            type="button"
                            onClick={handleFlipBack}
                            aria-label="Close preview"
                            className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-primary-blue/15 bg-white text-primary-blue transition-all duration-300 hover:scale-110 hover:border-accent-pink hover:bg-accent-pink hover:text-white cursor-pointer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{ height: '14px', width: '14px' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                    </div>

                    {/* Back content */}
                    <div className="relative flex-1 overflow-hidden">
                        {backMode === 'video' ? (
                            <video
                                ref={backVideoRef}
                                className="absolute inset-0 h-full w-full object-cover"
                                loop
                                muted
                                playsInline
                                src={feature.video}
                            />
                        ) : (
                            <div className="absolute inset-0 overflow-y-auto bg-white p-8 sm:p-10">
                                <div className="max-w-2xl mx-auto">
                                    <h3 className="text-2xl font-bold text-primary-blue sm:text-3xl">
                                        How to use {feature.name}
                                    </h3>
                                    <div className="mt-6 space-y-4 text-gray-700">
                                        {feature.howToUse.map((step, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-pink/20 text-sm font-bold text-accent-pink">
                                                    {index + 1}
                                                </span>
                                                <p className="text-sm leading-relaxed sm:text-base">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section id="features" className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #021A54 1px, transparent 1px), linear-gradient(to bottom, #021A54 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div
                className="pointer-events-none absolute top-30 -right-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style={{ background: '#FF85BB' }}
            />
            <div
                className="pointer-events-none absolute bottom-20 -left-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style={{ background: '#FF85BB' }}
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-pink opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-pink shadow-[0_0_6px_2px_rgba(255,133,187,0.6)]" />
                        </span>
                        Three Tools. One Popup.
                    </span>
                    <h2 className="mt-6 text-4xl font-black uppercase text-primary-blue sm:text-5xl">
                        See{' '}
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
                        </span>{' '}
                        at work
                    </h2>
                    <p className="mt-5 text-base font-medium text-gray-600 sm:text-lg">
                        Every tool runs live on localhost. Here's what that actually looks like.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-8">
                    {FEATURES.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features