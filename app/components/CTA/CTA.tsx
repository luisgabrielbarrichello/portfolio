'use client';
import Button from '../common/Buttons/Button';
import IconChat from '@/app/assets/icons/icon-chat.svg';
import { getWhatsappLink } from '@/app/lib/whatsapp';

function CTA() {
    return (
        <section
            id="cta"
            className="py-28 md:py-40 px-6 relative overflow-hidden bg-dark-brand"
            role="region"
            aria-label="Call to Action">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[900px] md:h-[900px] bg-brand rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="relative z-10 editorial-container text-center">
                <span className="eyebrow">Comece agora</span>
                <h2 className="mt-6 text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.02] max-w-3xl mx-auto">
                    Seu próximo cliente pode estar procurando por você agora.
                </h2>
                <p className="mt-6 text-lg text-gray-400 max-w-md mx-auto">
                    Vamos transformar sua presença online em uma experiência
                    que gera contato.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4">
                    <Button
                        IconComponent={IconChat}
                        variant="purple-blue"
                        content="Quero criar meu site"
                        pathLink={getWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <p className="text-xs text-gray-500">
                        Sem compromisso. Vamos entender o que sua empresa
                        precisa.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CTA;
