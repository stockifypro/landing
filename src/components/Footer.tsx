export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 pt-16 pb-8 bg-surface" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center text-white font-bold text-xs">
                                S
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight">
                                Stockify<span className="text-accent-light">.pro</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            La plataforma SaaS más completa para la gestión de tu eCommerce en Shopify.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Producto</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#features" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Características</a></li>
                            <li><a href="#ai-calls" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">IA Llamadas</a></li>
                            <li><a href="#pricing" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Precios</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Empresa</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Sobre nosotros</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Empleo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Privacidad</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Términos</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">Seguridad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-6 text-center">
                    <p className="text-gray-600 text-xs">© 2024-{currentYear} Stockify.pro. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
