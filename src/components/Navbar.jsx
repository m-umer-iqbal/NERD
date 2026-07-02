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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/80'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-special-red to-red-600 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                                <span className="text-white font-bold text-lg md:text-xl">AI</span>
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-custom-black tracking-tight">
                                <span className="text-special-red">Nex</span>AI
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-custom-black hover:text-special-red transition-colors duration-200 font-medium text-sm lg:text-base cursor-pointer"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('features')}
                                    className="text-custom-black hover:text-special-red transition-colors duration-200 font-medium text-sm lg:text-base cursor-pointer"
                                >
                                    Features
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-custom-black hover:text-special-red transition-colors duration-200 font-medium text-sm lg:text-base cursor-pointer"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-special-red text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg hover:bg-custom-gray/50 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-custom-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}></span>
                                <span className={`block h-0.5 bg-custom-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                <span className={`block h-0.5 bg-custom-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-4 space-y-3">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="block w-full text-left px-4 py-3 text-custom-black hover:bg-custom-gray/30 rounded-lg transition-colors duration-200 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="block w-full text-left px-4 py-3 text-custom-black hover:bg-custom-gray/30 rounded-lg transition-colors duration-200 font-medium"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="block w-full text-left px-4 py-3 text-custom-black hover:bg-custom-gray/30 rounded-lg transition-colors duration-200 font-medium"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full bg-special-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar