import type { FC, ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import Link from 'next/link';

export interface ButtonProps {
  /**
   * This is a description
   */
  secondary?: boolean;
  href?: string;
  children: string;
}

const Button = ({
  children,
  className,
  secondary = false,
  href,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  // All of these tailwind classes are watched by `tailwind.config.js` in the Next.js app
  const rootClassName = cn(
    // 'relative inline-flex items-center justify-center cursor-pointer',
    // 'no-underline py-0 px-3.5 rounded-md border border-solid border-black',
    // 'text-base font-medium outline-none select-none align-middle',
    // 'whitespace-nowrap leading-10 shadow-md transition-colors',
    // 'cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ',
    // 'text-xl font-bold leading-tight tracking-tight',
    // secondary
    //   ? 'bg-white text-black'
    //   : 'text-gray-900 md:text-2xl dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
    'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
    className
  );

  if (href !== undefined) {
    return (
      <Link href={href} className={rootClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={rootClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
