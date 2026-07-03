import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'why-nerd', label: 'Why NERD' },
        { id: 'features', label: 'Features' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-white/70'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo with pink underline */}
                    <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                        <div className="flex flex-col items-start space-y-0">
                            <h1
                                className="text-4xl font-black uppercase leading-tight"
                                style={{
                                    background: "linear-gradient(135deg, #021a54 0%, #021a54 70%, #ff85bb 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                NERD
                            </h1>
                            {/* Pink underline that fades out */}
                            <div className="relative w-full h-[3px] -mt-0.5 overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-full bg-linear-to-r from-accent-pink via-accent-pink/60 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-primary-blue hover:text-accent-pink transition-colors duration-200 font-medium text-sm lg:text-base cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            className="bg-primary-blue text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-pink transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-pink/30 cursor-pointer"
                        >
                            <a href="https://github.com/m-umer-iqbal/FYP-NERD/blob/main/Readme.md" target="_blank">
                                Add to Chrome
                            </a>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg hover:bg-light-gray transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-primary-blue transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}></span>
                                <span className={`block h-0.5 bg-primary-blue transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                <span className={`block h-0.5 bg-primary-blue transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-4 space-y-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left px-4 py-3 text-primary-blue hover:bg-light-pink/40 rounded-lg transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full bg-primary-blue text-white px-6 py-3 rounded-xl font-medium hover:bg-accent-pink transition-colors duration-200"
                        >
                            Add to Chrome
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar