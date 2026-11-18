
import testimonialsData from '../../data/testimonials.json';
import { FaQuoteLeft } from 'react-icons/fa6';

interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials: Testimonial[] = testimonialsData;

function getInitials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
}

function TestimonialSection() {
    const featuredTestimonial = testimonials[0];
    const secondaryTestimonials = testimonials.slice(1, 3);

    return (
        <section
            id="testimonials"
            className="py-24 md:py-36 bg-white dark:bg-dark-10"
            aria-labelledby="testimonials-heading">
            <div className="editorial-container">
                {/* Section Header */}
                <div>
                    <span className="eyebrow">Recomendações</span>

                    <h2
                        id="testimonials-heading"
                        className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white max-w-2xl">
                        Quem já trabalhou comigo
                    </h2>
                </div>

                {testimonials.length > 0 ? (
                    <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                        {/* Featured Testimonial */}
                        <div className="lg:col-span-7 flex">
                            <div className="relative flex flex-col justify-between w-full p-7 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-dark-20 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                                <div className="flex flex-col justify-center flex-1">
                                    <FaQuoteLeft
                                        className="w-8 h-8 sm:w-10 sm:h-10 text-brand/20 mb-8"
                                        aria-hidden="true"
                                    />

                                    <blockquote className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold leading-snug text-gray-900 dark:text-white">
                                        “{featuredTestimonial.quote}”
                                    </blockquote>
                                </div>

                                <footer className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
                                    <div className="w-11 h-11 shrink-0 rounded-full bg-navy dark:bg-brand text-white flex items-center justify-center text-xs font-bold tracking-wide">
                                        {getInitials(featuredTestimonial.name)}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                                            {featuredTestimonial.name}
                                        </p>

                                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                            {featuredTestimonial.role}
                                        </p>
                                    </div>
                                </footer>
                            </div>
                        </div>

                        {/* Secondary Testimonials */}
                        {secondaryTestimonials.length > 0 && (
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {secondaryTestimonials.map((testimonial) => (
                                    <article
                                        key={testimonial.name}
                                        className="flex-1 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                        <FaQuoteLeft
                                            className="w-5 h-5 text-brand/30 mb-5"
                                            aria-hidden="true"
                                        />

                                        <blockquote className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                            “{testimonial.quote}”
                                        </blockquote>

                                        <footer className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                                {testimonial.name}
                                            </p>

                                            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </footer>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="mt-14 md:mt-16 p-8 sm:p-12 rounded-2xl bg-gray-50 dark:bg-dark-20 border border-dashed border-gray-300 dark:border-gray-700">
                        <FaQuoteLeft className="w-8 h-8 text-brand/30 mb-6" />

                        <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white">
                            Histórias reais, resultados reais.
                        </h3>

                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            Esta seção será atualizada com recomendações de
                            clientes e parceiros à medida que novos projetos
                            forem concluídos.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TestimonialSection;
