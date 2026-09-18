import testimonialsData from '../../data/testimonials.json';

interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

//TODO: No real testimonials yet
const testimonials: Testimonial[] = testimonialsData;

function TestimonialSection() {
    return (
        <section
            id="testimonials"
            className="py-24 md:py-36 bg-gray-50 dark:bg-dark-20"
            aria-labelledby="testimonials-heading">
            <div className="editorial-container">
                <span className="eyebrow">Recomendações</span>
                <h2
                    id="testimonials-heading"
                    className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white max-w-2xl">
                    Quem já trabalhou comigo
                </h2>

                {testimonials.length > 0 ? (
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <blockquote className="hairline pt-8 lg:row-span-2">
                            <p className="text-2xl md:text-3xl font-poppins font-medium text-gray-800 dark:text-gray-200 leading-snug">
                                “{testimonials[0].quote}”
                            </p>
                            <footer className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                                {testimonials[0].name} — {testimonials[0].role}
                            </footer>
                        </blockquote>
                        <div className="flex flex-col gap-10">
                            {testimonials.slice(1, 3).map((t) => (
                                <blockquote
                                    key={t.name}
                                    className="hairline pt-6">
                                    <p className="text-base text-gray-700 dark:text-gray-300">
                                        “{t.quote}”
                                    </p>
                                    <footer className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                                        {t.name} — {t.role}
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-16 hairline pt-10">
                        <p className="text-gray-500 dark:text-gray-500 max-w-md">
                            Espaço reservado para recomendações de clientes
                            reais, à medida que os projetos forem concluídos.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TestimonialSection;
