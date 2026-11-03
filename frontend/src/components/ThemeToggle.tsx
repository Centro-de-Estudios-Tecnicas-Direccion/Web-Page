import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Modo oscuro"
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-3 rounded-lg text-slate-700 transition duration-150 hover:bg-slate-100 hover:text-ceted-blue active:scale-95 motion-reduce:active:scale-100 dark:text-slate-200 dark:hover:bg-ceted-deep dark:hover:text-white ${className}`}
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            className="absolute inset-0 inline-flex items-center justify-center"
            initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </span>
      {showLabel && (
        <span className="text-base font-medium">{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
      )}
    </button>
  );
};