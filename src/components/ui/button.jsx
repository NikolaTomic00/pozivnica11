import { forwardRef } from 'react'

const variants = {
  gold:
    'border border-[#b68d48] bg-[#b68d48] text-white shadow-[0_10px_22px_rgb(153_62_10_/_0.18)] hover:bg-[#993e0a] hover:border-[#993e0a]',
}

const sizes = {
  default: 'min-h-11 px-6 py-2.5 text-sm',
  compact: 'min-h-8 px-4 py-1.5 text-[10px]',
}

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Button = forwardRef(
  (
    {
      as: Component = 'button',
      className,
      variant = 'gold',
      size = 'default',
      ...props
    },
    ref,
  ) => (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b68d48] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
)

Button.displayName = 'Button'

export { Button }
