interface HeroProps {
    onContactOpen: () => void;
}

export default function Hero({ onContactOpen }: HeroProps) {
    const handleScrollToFeatures = () => {
        const el = document.getElementById('features');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-24 gradient-mesh overflow-hidden" aria-label="Sección principal">
            {/* Dot grid overlay */}
            <div className="absolute inset-0 dots-grid opacity-50" />

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 badge-shine bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                        <span className="text-sm text-gray-300">Plataforma SaaS para eCommerce Shopify</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        <span className="text-white">Gestión de Stock</span>
                        <br />
                        <span className="bg-gradient-to-r from-accent-light via-accent-violet to-accent bg-clip-text text-transparent">
                            Inteligente con IA
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        La plataforma #1 para tiendas Shopify. Stock, contrareembolso, CRM y
                        <span className="text-white font-medium"> confirmación automática de pedidos por llamada con IA</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button
                            onClick={onContactOpen}
                            className="btn-glow text-white px-8 py-3.5 rounded-xl text-lg font-semibold"
                        >
                            Empezar Prueba Gratuita
                        </button>
                        <button
                            onClick={handleScrollToFeatures}
                            className="group border border-white/10 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            Explorar
                            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>

                    {/* Dashboard preview */}
                    <div className="relative max-w-5xl mx-auto animate-slide-up">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent-violet/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                                alt="Dashboard de Stockify.pro — gestión de inventario en tiempo real"
                                className="w-full"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Logos strip */}
                    <div className="mt-16 pt-8 border-t border-white/5">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Compatible e integrado con</p>
                        <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-12">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png"
                                alt="Shopify"
                                className="h-8 opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
                                loading="lazy"
                            />
                            <img
                                src="https://deliverea.com/wp-content/uploads/2021/02/MRW-logo.png"
                                alt="MRW"
                                className="h-7 opacity-40 hover:opacity-80 transition-opacity brightness-200 grayscale hover:grayscale-0 hover:brightness-100"
                                loading="lazy"
                            />
                            <img
                                src="https://bionsan.com/wp-content/uploads/2022/06/gls-logo-positive-rgb-download-11622.png"
                                alt="GLS"
                                className="h-6 opacity-40 hover:opacity-80 transition-opacity brightness-200 grayscale hover:grayscale-0 hover:brightness-100"
                                loading="lazy"
                            />
                            <img
                                src="https://adeca.com/wp-content/sabai/File/files/l_36732be76f4086d8c47238a33ff3f05f.png"
                                alt="Correos Express"
                                className="h-8 opacity-40 hover:opacity-80 transition-opacity brightness-200 grayscale hover:grayscale-0 hover:brightness-100"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
