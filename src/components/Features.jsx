import React, { useState, useRef, useEffect } from 'react'

// Swap these placeholder URLs with real Cloudinary demo clips per feature.
const FEATURES = [
    {
        id: 'local-form-saver',
        tag: 'local-form-saver@localhost',
        name: 'Local Form Saver',
        headline: 'Your test data, on autopilot.',
        description:
            'One click saves it. One click brings it back. Nothing leaves your machine.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783025638/local-form-saver-testing-video_f0r0uz.mp4',
    },
    {
        id: 'website-auditor',
        tag: 'website-auditor@localhost',
        name: 'Website Auditor',
        headline: 'Catch it before your users do.',
        description:
            'A full performance, accessibility, and code scan in one click — fixes included.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783025638/local-form-saver-testing-video_f0r0uz.mp4',
    },
    {
        id: 'debugging-assistant',
        tag: 'debugging-assistant@localhost',
        name: 'Debugging Assistant',
        headline: 'Errors that explain themselves.',
        description:
            'No more AI prompt loop — get the cause and the fix, in plain English, instantly.',
        video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1783025638/local-form-saver-testing-video_f0r0uz.mp4',
    },
]

const FeatureCard = ({ feature }) => {
    const [flipped, setFlipped] = useState(false)
    const frontVideoRef = useRef(null)
    const backVideoRef = useRef(null)

    useEffect(() => {
        if (flipped) {
            frontVideoRef.current?.pause()
            backVideoRef.current?.play()
        } else {
            backVideoRef.current?.pause()
            frontVideoRef.current?.play()
        }
    }, [flipped])

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
                    {/* Terminal header bar — same treatment as workflow.diff in WhyNerd, sits ABOVE the video, not over it */}
                    <div className="flex shrink-0 items-center gap-2 border-b border-gray-200 bg-light-gray/60 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">{feature.tag}</span>
                    </div>

                    {/* Video only fills the area below the header */}
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

                        <div className="absolute inset-0 bg-linear-to-t from-primary-blue/90 via-primary-blue/45 to-primary-blue/35" />

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

                            <button
                                onClick={() => setFlipped(true)}
                                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent-pink hover:bg-accent-pink hover:text-primary-blue hover:shadow-xl hover:shadow-accent-pink/30 cursor-pointer"
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
                        </div>
                    </div>
                </div>

                {/* BACK FACE — video plays clean under the header, no fade/overlay at all */}
                <div
                    className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        pointerEvents: flipped ? 'auto' : 'none',
                    }}
                >
                    <div className="flex shrink-0 items-center gap-2 border-b border-gray-200 bg-light-gray/60 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-light-pink/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="ml-2 font-mono text-xs text-gray-500">{feature.tag}</span>

                        <button
                            type="button"
                            onClick={() => setFlipped(false)}
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

                    <div className="relative flex-1 overflow-hidden">
                        <video
                            ref={backVideoRef}
                            className="absolute inset-0 h-full w-full object-cover"
                            loop
                            muted
                            playsInline
                            src={feature.video}
                        />
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
                        Three tools. One popup.
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