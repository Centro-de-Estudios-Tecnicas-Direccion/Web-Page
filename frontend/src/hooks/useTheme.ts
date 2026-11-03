import { useCallback, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ceted-theme';
const listeners = new Set<() => void>();

const readStored = (): Theme | null => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
};

const systemPrefersDark = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  listeners.forEach((listener) => listener());
};

if (typeof window !== 'undefined') {
  // Primera carga: preferencia guardada o, en su defecto, la del sistema.
  applyTheme(readStored() ?? (systemPrefersDark() ? 'dark' : 'light'));

  // Mientras la persona no elija manualmente, seguimos al sistema.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!readStored()) applyTheme(event.matches ? 'dark' : 'light');
  });

  // Sincroniza entre pestañas.
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      applyTheme(readStored() ?? (systemPrefersDark() ? 'dark' : 'light'));
    }
  });
}

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
};

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

const getServerSnapshot = (): Theme => 'light';

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* almacenamiento no disponible */
    }
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === 'dark' ? 'light' : 'dark');
  }, [setTheme]);

  return { theme, isDark: theme === 'dark', setTheme, toggleTheme };
}