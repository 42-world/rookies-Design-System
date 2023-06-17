import { ButtonHTMLAttributes, FC, SVGAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Text } from '../Text';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  text?: string;
  icon?: FC<SVGAttributes<SVGSVGElement>>;
}

type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-color-system_200 border-0 hover:bg-color-system_300',
  secondary:
    'border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200',
  text: 'border-0',
};

export function Button({ variant = 'primary', text, icon, className, ...restProps }: Props) {
  return (
    <button
      className={twMerge(
        `group h-8 flex flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${variantStyles[variant]}`,
        icon && !text ? 'px-2' : 'px-3',
        className,
      )}
      {...restProps}
    >
      {icon && (
        <Icon
          svg={icon}
          size="small"
          className={cx(
            variant === 'primary' ? 'fill-color-white' : 'fill-text-secondary dark:fill-text-secondary_dark',
            'transition-colors duration-300',
            {
              'group-hover:fill-color-system_200': variant !== 'primary',
            },
          )}
        />
      )}
      {text && (
        <Text
          text={text}
          size="body2"
          weight="medium"
          color={variant === 'primary' ? 'white' : 'secondary'}
          className={cx('transition-colors duration-300', {
            'group-hover:text-color-system_200': variant !== 'primary',
          })}
        />
      )}
    </button>
  );
}
