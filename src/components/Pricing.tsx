import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const planFeatures = [
    'Integración completa con Shopify',
    'Gestión avanzada de inventario multi-almacén',
    'Múltiples perfiles de usuario con roles',
    'Sistema de contrareembolso avanzado',
    'Confirmación automática de pedidos con IA',
    'Estadísticas, CRM y soporte premium incluidos',
];

interface PricingProps {
    onContactOpen: () => void;
}

export default function Pricing({ onContactOpen }: PricingProps) {
    return (
        <section id="pricing" className="relative py-24" aria-label="Precios">
            <div className="glow-line max-w-2xl mx-auto mb-24" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Planes</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
                        Crece sin límites
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Planes flexibles que se adaptan al volumen de tu negocio.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Outer glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 via-accent-violet/20 to-accent/20 rounded-3xl blur-xl opacity-50" />

                    <div className="relative glass-card rounded-2xl overflow-hidden hover:transform-none">
                        {/* Top dark gradient section */}
                        <div className="relative p-8 md:p-12 bg-gradient-to-br from-surface-100 to-surface-200 border-b border-white/5">
                            <div className="absolute top-6 right-6">
                                <div className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                                    <Sparkles className="w-3.5 h-3.5 text-accent-light" />
                                    <span className="text-xs font-semibold text-accent-light">Personalizado</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-extrabold text-white mb-3">
                                Todo incluido,<br />
                                <span className="bg-gradient-to-r from-accent-light to-accent-violet bg-clip-text text-transparent">
                                    a tu medida
                                </span>
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-lg">
                                Ofrecemos soluciones adaptadas según el volumen de pedidos y las necesidades específicas de tu negocio.
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                                {planFeatures.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5">
                                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onContactOpen}
                                className="btn-glow text-white px-8 py-3.5 rounded-xl text-base font-semibold inline-flex items-center gap-2"
                            >
                                Solicitar información <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Bottom benefits section */}
                        <div className="p-8 md:p-12">
                            <h4 className="text-lg font-semibold text-white mb-6">¿Por qué Stockify.pro?</h4>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Escalabilidad', desc: 'Planes que crecen con tu negocio, pagando solo por lo que usas.' },
                                    { title: 'Soporte Premium', desc: 'Asistencia técnica personalizada por chat, email y videollamada.' },
                                    { title: 'Sin Sorpresas', desc: 'Precios transparentes, sin costes ocultos ni comisiones extra.' },
                                    { title: 'Prueba Gratuita', desc: 'Prueba toda la plataforma sin compromiso durante 14 días.' },
                                ].map((r) => (
                                    <div key={r.title}>
                                        <h5 className="font-semibold text-white text-sm mb-1">{r.title}</h5>
                                        <p className="text-gray-400 text-sm">{r.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
