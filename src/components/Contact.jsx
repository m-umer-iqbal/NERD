import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', email: '', message: '' })
    }

    // SVG Icons
    const MailIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    )

    const GitHubIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )

    const XIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )

    const DiscordIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515c-.206.369-.434.826-.592 1.204a18.458 18.458 0 00-5.495 0 13.01 13.01 0 00-.592-1.204 19.736 19.736 0 00-4.885 1.515C2.092 7.792.712 11.127.356 14.39a19.742 19.742 0 003.004 1.653 14.76 14.76 0 00.739-1.213 13.236 13.236 0 01-1.164-.56c.098-.072.195-.146.29-.222a18.28 18.28 0 0015.556 0c.095.076.192.15.29.222-.368.218-.759.415-1.164.56.215.396.455.78.739 1.213a19.738 19.738 0 003.004-1.653c-.356-3.262-1.736-6.598-3.717-9.02zM8.898 12.55c-.956 0-1.74-.876-1.74-1.95s.77-1.95 1.74-1.95 1.744.876 1.744 1.95-.77 1.95-1.744 1.95zm6.204 0c-.956 0-1.74-.876-1.74-1.95s.77-1.95 1.74-1.95 1.744.876 1.744 1.95-.77 1.95-1.744 1.95z" />
        </svg>
    )

    return (
        <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* background grid and accent blur */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #021A54 1px, transparent 1px), linear-gradient(to bottom, #021A54 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div
                className="pointer-events-none absolute -bottom-30 -right-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style={{ background: '#FF85BB' }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Header - no pink underline/fade */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-blue shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-pink opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-pink shadow-[0_0_6px_2px_rgba(255,133,187,0.6)]" />
                        </span>
                        Get in touch
                    </span>
                    <h2 className="mt-6 text-4xl font-black uppercase text-primary-blue sm:text-5xl">
                        Let's talk
                    </h2>
                    <p className="mt-5 text-base font-medium text-gray-600 sm:text-lg">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact content: info + form – equal height cards with hover effects */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
                    {/* Contact Info Card */}
                    <div className="lg:col-span-2 flex">
                        <div className="w-full rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-accent-pink hover:shadow-lg hover:shadow-accent-pink/20">
                            <h3 className="text-xl font-bold text-primary-blue">Contact Information</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Reach out through any of the channels below or use the form.
                            </p>

                            <div className="mt-8 space-y-5">
                                <a href="mailto:hello@nerd.dev" className="group flex items-start gap-4 transition duration-200 hover:cursor-pointer">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition duration-200 group-hover:bg-accent-pink group-hover:text-white">
                                        <MailIcon />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-blue">Email</h4>
                                        <p className="text-sm text-gray-600">hello@nerd.dev</p>
                                    </div>
                                </a>

                                <a href="#" className="group flex items-start gap-4 transition duration-200 hover:cursor-pointer">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition duration-200 group-hover:bg-[#333] group-hover:text-white">
                                        <GitHubIcon />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-blue">GitHub</h4>
                                        <p className="text-sm text-gray-600">github.com/fyp-nerd</p>
                                    </div>
                                </a>

                                <a href="#" className="group flex items-start gap-4 transition duration-200 hover:cursor-pointer">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition duration-200 group-hover:bg-black group-hover:text-white">
                                        <XIcon />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-blue">X (Twitter)</h4>
                                        <p className="text-sm text-gray-600">@nerd_extension</p>
                                    </div>
                                </a>

                                <a href="#" className="group flex items-start gap-4 transition duration-200 hover:cursor-pointer">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition duration-200 group-hover:bg-[#5865F2] group-hover:text-white">
                                        <DiscordIcon />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-blue">Discord</h4>
                                        <p className="text-sm text-gray-600">Join our community</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="lg:col-span-3 flex">
                        <div className="w-full rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-accent-pink hover:shadow-lg hover:shadow-accent-pink/20">
                            <h3 className="text-xl font-bold text-primary-blue">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition duration-200 focus:border-accent-pink focus:bg-white focus:ring-2 focus:ring-accent-pink/20"
                                                placeholder="John Doe"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition duration-200 focus:border-accent-pink focus:bg-white focus:ring-2 focus:ring-accent-pink/20"
                                                placeholder="john@example.com"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                                                <MailIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <div className="relative mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition duration-200 focus:border-accent-pink focus:bg-white focus:ring-2 focus:ring-accent-pink/20"
                                            placeholder="Tell us what you're thinking..."
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-xl bg-primary-blue px-6 py-3.5 font-medium text-white shadow-lg shadow-primary-blue/20 transition-all duration-300 hover:scale-[1.02] hover:bg-accent-pink hover:scale-105 hover:shadow-accent-pink/40 focus:outline-none focus:ring-2 focus:ring-accent-pink/50 cursor-pointer"
                                    >
                                        {submitted ? (
                                            <>
                                                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                                Message sent!
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                    <p className="mt-3 text-center text-xs text-gray-500">
                                        We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact