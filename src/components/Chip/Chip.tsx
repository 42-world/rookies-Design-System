import cx from 'classnames';
import { useTheme } from '../../context';

type Props = {
  children?: JSX.Element;
  text?: string;
  selected?: boolean;
};

export function Chip({ children, text, selected }: Props) {
  const theme = useTheme();

  return (
    <div
      className={cx('w-fit h-8 flex flex-row items-center rounded-lg select-none', text ? 'px-3' : 'px-2', {
        [selected ? 'bg-bg-secondary' : 'bg-bg-tertiary_alpha_0']: theme === 'light',
        [selected ? 'bg-bg-secondary_dark' : 'bg-bg-primary_alpha_0_dark']: theme === 'dark',
      })}
    >
      <div className={cx([{ hidden: !children }, 'mr-2'])}>{children}</div>
      <span
        className={cx('text-sm font-medium', {
          [selected ? 'text-text-primary' : 'text-text-secondary']: theme === 'light',
          [selected ? 'text-text-primary_dark' : 'text-text-secondary_dark']: theme === 'dark',
        })}
      >
        {text}
      </span>
    </div>
  );
}
