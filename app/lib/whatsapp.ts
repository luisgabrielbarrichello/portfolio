export function getWhatsappLink(customMessage?: string) {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = customMessage ?? process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? '';
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}