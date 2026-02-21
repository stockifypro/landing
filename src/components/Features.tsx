import { useEffect, useRef, useState } from 'react';
import {
    ShoppingCart,
    UserCog,
    Building2,
    Truck,
    MessageSquareText,
    BarChart4,
} from 'lucide-react';

const features = [
    {
        icon: ShoppingCart,
        title: 'Integración Total Shopify',
        description: 'Sincronización en tiempo real con tu tienda. Stock, pedidos, productos y variantes siempre actualizados.',
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        icon: UserCog,
        title: 'Gestión de Perfiles',
        description: 'Confirmadores, administradores y gestores con roles personalizados y permisos granulares.',
        gradient: 'from-violet-500 to-purple-400',
    },
    {
        icon: Building2,
        title: 'Multi-almacén',
        description: 'Stock privado y general con sistema de comisiones para distribuidores integrado.',
        gradient: 'from-amber-500 to-orange-400',
    },
    {
        icon: Truck,
        title: 'Contrareembolso Avanzado',
        description: 'La solución más completa para gestionar pedidos contra reembolso en España y Europa.',
        gradient: 'from-emerald-500 to-green-400',
    },
    {
        icon: MessageSquareText,
        title: 'IA para Atención al Cliente',
        description: 'Chatbot inteligente y sistema de respuestas automáticas para soporte 24/7.',
        gradient: 'from-rose-500 to-pink-400',
    },
    {
        icon: BarChart4,
        title: 'Estadísticas y CRM',
        description: 'Dashboard analítico completo con métricas de ventas, clientes y rendimiento del equipo.',
        gradient: 'from-indigo-500 to-blue-400',
    },
];

export default function Features() {
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
        <section id="features" className="relative py-24" aria-label="Características">
            <div className="glow-line max-w-2xl mx-auto mb-24" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Plataforma completa</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
                        Todo lo que tu eCommerce necesita
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Una suite integrada diseñada para escalar tu negocio Shopify sin límites.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`glass-card rounded-2xl p-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                                    <Icon className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
