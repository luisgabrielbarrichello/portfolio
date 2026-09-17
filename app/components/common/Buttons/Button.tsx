import Link, { LinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ElementType, AnchorHTMLAttributes } from 'react';

const buttonShellVariants = cva(
    'rounded-lg relative inline-flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 group',
    {
        variants: {
            variant: {
                'purple-blue': 'bg-brand p-[2px]',
                'red-purple': 'bg-gray-900 dark:bg-white p-[2px]',
                ghost: 'bg-brand/90 p-[2px]',
                outline: 'bg-transparent p-0',
            },
        },
    },
);

const buttonCoreVariants = cva(
    'w-full h-full px-4 py-2 flex items-center justify-center gap-3 font-semibold rounded-md',
    {
        variants: {
            variant: {
                'purple-blue': 'bg-brand text-white hover:bg-brand-dark',
                'red-purple':
                    'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
                ghost: 'bg-brand text-white hover:bg-brand-dark',
                outline:
                    'bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-brand transition-colors',
            },
        },
    },
);

interface BaseProps extends VariantProps<typeof buttonShellVariants> {
    content: string;
    altImage?: string;
    IconComponent?: ElementType;
    className?: string;
}

type LinkButtonProps = BaseProps &
    Omit<LinkProps, 'href'> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        pathLink: string;
    };

type RegularButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        pathLink?: never;
    };

type ButtonProps = LinkButtonProps | RegularButtonProps;

function Button({
    className,
    variant,
    content,
    altImage,
    IconComponent,
    pathLink,
    ...props
}: ButtonProps) {
    const buttonContent = (
        <div className={buttonCoreVariants({ variant })}>
            {IconComponent && (
                <IconComponent aria-label={altImage} className="w-5 h-5" />
            )}
            <span className="text-sm">{content}</span>
        </div>
    );

    if (pathLink) {
        return (
            <Link
                href={pathLink}
                className={clsx(buttonShellVariants({ variant }), className)}
                {...(props as Omit<LinkProps, 'href'>)}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            className={clsx(buttonShellVariants({ variant }), className)}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {buttonContent}
        </button>
    );
}

export default Button;
