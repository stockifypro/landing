import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const overlayRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            setTimeout(() => firstInputRef.current?.focus(), 100);
        } else {
            setStatus('idle');
            setErrorMsg('');
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) onClose();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Construir JSON con todos los campos
        const data = {
            name: formData.get('name') as string,
            company: formData.get('company') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            website: formData.get('website') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                setErrorMsg(result.error || 'Error al enviar. Inténtalo de nuevo.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Error de conexión. Comprueba tu internet e inténtalo de nuevo.');
        }
    };

    if (!isOpen) return null;

    const inputClasses = "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-colors text-sm";

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="Formulario de contacto"
        >
            <div className="relative glass-card rounded-2xl p-8 max-w-md w-full shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto border-white/10">
                {/* Glow accent */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
                    aria-label="Cerrar formulario"
                >
                    <X className="h-4 w-4" />
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8 animate-fade-in">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                        <p className="text-gray-400 text-sm mb-6">Te contactaremos lo antes posible.</p>
                        <button onClick={onClose} className="btn-glow text-white px-6 py-2.5 rounded-xl text-sm font-semibold">
                            Cerrar
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl font-bold text-white mb-1">Solicitar Prueba Gratuita</h3>
                        <p className="text-gray-500 text-sm mb-6">14 días sin compromiso. Sin tarjeta de crédito.</p>

                        {status === 'error' && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-red-400 text-sm animate-fade-in">
                                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-3.5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-medium text-gray-400 mb-1.5">Nombre completo</label>
                                    <input ref={firstInputRef} type="text" id="contact-name" name="name" required placeholder="Tu nombre" className={inputClasses} />
                                </div>
                                <div>
                                    <label htmlFor="contact-company" className="block text-xs font-medium text-gray-400 mb-1.5">Empresa</label>
                                    <input type="text" id="contact-company" name="company" required placeholder="Nombre de tu empresa" className={inputClasses} />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                                        <input type="email" id="contact-email" name="email" required placeholder="tu@empresa.com" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-xs font-medium text-gray-400 mb-1.5">Teléfono</label>
                                        <input type="tel" id="contact-phone" name="phone" required placeholder="+34 600 000 000" className={inputClasses} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-website" className="block text-xs font-medium text-gray-400 mb-1.5">URL Shopify</label>
                                    <input type="url" id="contact-website" name="website" placeholder="https://tutienda.myshopify.com" className={inputClasses} />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-medium text-gray-400 mb-1.5">¿Qué necesitas?</label>
                                    <textarea id="contact-message" name="message" rows={3} required placeholder="Cuéntanos brevemente..." className={`${inputClasses} resize-none`} />
                                </div>
                                <div className="flex items-start gap-2">
                                    <input type="checkbox" id="contact-privacy" name="privacy" required className="mt-0.5 h-4 w-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent" />
                                    <label htmlFor="contact-privacy" className="text-xs text-gray-500">
                                        Acepto la <a href="#" className="text-accent-light hover:underline">política de privacidad</a> y el procesamiento de mis datos.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full btn-glow text-white px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                                    ) : (
                                        'Solicitar Prueba Gratuita'
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
