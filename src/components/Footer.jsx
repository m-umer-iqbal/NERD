import React from 'react'

const featureLinks = [
    { label: 'Local Form Saver', href: '#local-form-saver' },
    { label: 'Website Auditor', href: '#website-auditor' },
    { label: 'Debugging Assistant', href: '#debugging-assistant' },
]

const resourceLinks = [
    { label: 'Documentation', href: '#docs' },
    { label: 'Changelog', href: '#changelog' },
    { label: 'GitHub Repo', href: '#github' },
]

const projectLinks = [
    { label: 'About', href: '#about' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Contact', href: '#contact' },
]

const socials = [
    {
        label: 'GitHub',
        href: '#github',
        icon: (
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        ),
    },
    {
        label: 'X',
        href: '#x',
        icon: (
            <path d="M18.24 3H21l-6.5 7.43L22 21h-6.19l-4.84-6.32L5.4 21H2.63l6.96-7.95L2 3h6.34l4.38 5.79L18.24 3Zm-1.08 16.17h1.53L7.9 4.74H6.26l10.9 14.43Z" />
        ),
    },
    {
        label: 'Discord',
        href: '#discord',
        icon: (
            <path d="M20.32 5.37A17.6 17.6 0 0 0 15.9 4c-.2.36-.42.83-.58 1.2a16.3 16.3 0 0 0-4.64 0A9.6 9.6 0 0 0 10.1 4a17.5 17.5 0 0 0-4.42 1.37C2.8 9.02 2.1 12.57 2.45 16.06a17.7 17.7 0 0 0 5.37 2.72c.43-.59.82-1.22 1.15-1.88-.63-.24-1.23-.53-1.8-.88.15-.11.3-.23.44-.35a12.6 12.6 0 0 0 10.78 0c.15.12.29.24.44.35-.57.35-1.18.64-1.8.88.33.66.72 1.29 1.15 1.88a17.6 17.6 0 0 0 5.37-2.72c.42-4.05-.66-7.56-2.83-10.69ZM9.68 13.95c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94.96 0 1.73.88 1.71 1.94 0 1.07-.75 1.94-1.71 1.94Zm4.65 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94.96 0 1.73.88 1.71 1.94 0 1.07-.74 1.94-1.71 1.94Z" />
        ),
    },
]

const FooterColumn = ({ title, links }) => (
    <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-light-pink/60 font-bold" >
            {title}
        </h3>
        <ul className="mt-4 space-y-3">
            {links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.href}
                        className="group inline-flex items-center text-sm text-light-gray/80 transition-all duration-200 hover:font-semibold hover:text-accent-pink"
                    >
                        <span className="mr-0 h-px w-0 bg-accent-pink transition-all duration-200 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-primary-blue text-light-gray">
            {/* subtle grid texture, like an editor background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #FF85BB 1px, transparent 1px), linear-gradient(to bottom, #FF85BB 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
                    {/* Brand + live status + socials */}
                    <div>
                        <h2
                            className="text-3xl font-black uppercase"
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 70%, #FF85BB 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            NERD
                        </h2>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-light-gray/70">
                            A local-first browser extension for saving forms, auditing
                            pages, and debugging JS.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-light-gray/60 transition-colors duration-200 hover:text-accent-pink"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ height: '18px', width: '18px' }}
                                    >
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <FooterColumn title="Features" links={featureLinks} />
                    <FooterColumn title="Resources" links={resourceLinks} />
                    <FooterColumn title="Project" links={projectLinks} />
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-light-pink to-transparent" />

                {/* Bottom bar */}
                <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center">
                    <p className="text-xs text-light-gray/50">
                        &copy; {new Date().getFullYear()} NERD. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer