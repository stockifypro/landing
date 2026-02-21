import { useEffect, useRef, useState } from 'react';
import { Phone, Bot, CheckCircle2, Clock, ShieldCheck, BarChart4 } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Pedido recibido',
        description: 'Se recibe un nuevo pedido de contrareembolso en tu tienda Shopify.',
        icon: Clock,
    },
    {
        num: '02',
        title: 'Llamada automática con IA',
        description: 'Nuestro sistema llama automáticamente al cliente para confirmar el pedido, dirección y datos.',
        icon: Phone,
    },
    {
        num: '03',
        title: 'Confirmación o cancelación',
        description: 'El pedido se marca como confirmado o cancelado según la respuesta del cliente, en tiempo real.',
        icon: CheckCircle2,
    },
];

const stats = [
    { value: '95%', label: 'Tasa de confirmación' },
    { value: '<2min', label: 'Tiempo de llamada' },
    { value: '24/7', label: 'Disponibilidad' },
    { value: '0€', label: 'Coste operativo personal' },
];

export default function AICalls() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="ai-calls" className="relative py-24 overflow-hidden" aria-label="Confirmación de pedidos con IA">
            <div className="glow-line max-w-2xl mx-auto mb-24" />

            {/* Background accent glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                        <Bot className="w-4 h-4 text-accent-light" />
                        <span className="text-sm font-medium text-accent-light">Powered by IA</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Confirmación de pedidos<br />
                        <span className="bg-gradient-to-r from-accent-light to-accent-violet bg-clip-text text-transparent">
                            100% automática por llamada
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Nuestro sistema de inteligencia artificial llama automáticamente a tus clientes para confirmar pedidos de contrareembolso. Sin intervención humana.
                    </p>
                </div>

                {/* Process steps */}
                <div className={`grid md:grid-cols-3 gap-6 mb-16 ${isVisible ? '' : 'opacity-0'}`}>
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.num}
                                className={`relative glass-card rounded-2xl p-6 ${isVisible ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${i * 120}ms` }}
                            >
                                {/* Step connector line */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                                )}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-violet">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-accent-light text-xs font-bold uppercase tracking-widest">{step.num}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats bar */}
                <div className={`glass-card rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-accent-light to-accent-violet bg-clip-text text-transparent mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits row */}
                <div className={`mt-12 grid sm:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                    {[
                        { icon: ShieldCheck, title: 'Reduce fraude', desc: 'Filtra pedidos falsos antes de enviar.' },
                        { icon: BarChart4, title: 'Ahorra costes', desc: 'Elimina la necesidad de confirmadores manuales.' },
                        { icon: Phone, title: 'Escala sin límites', desc: 'De 10 a 10.000 pedidos/día sin contratar personal.' },
                    ].map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <div key={b.title} className="flex items-start gap-4 glass-card rounded-xl p-5" style={{ animationDelay: `${600 + i * 80}ms` }}>
                                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-accent-light" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{b.title}</h4>
                                    <p className="text-gray-400 text-sm">{b.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
