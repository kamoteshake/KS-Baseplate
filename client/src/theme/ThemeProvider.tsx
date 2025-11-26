import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { getAppTheme } from './theme';

type PaletteMode = 'light' | 'dark';
type ColorModeSetting = 'light' | 'dark' | 'system';

interface ColorModeContextValue {
  /** User-selected setting: light | dark | system */
  setting: ColorModeSetting;
  /** Actual palette mode being used after resolving system */
  effectiveMode: PaletteMode;
  /** Cycles through light -> dark -> system -> light */
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  setting: 'system',
  effectiveMode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [setting, setSetting] = useState<ColorModeSetting>('system');

  // Detect OS preference
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  const effectiveMode: PaletteMode =
    setting === 'system' ? (prefersDark ? 'dark' : 'light') : setting;

  const toggleColorMode = () => {
    setSetting((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  const theme = useMemo(() => getAppTheme(effectiveMode), [effectiveMode]);

  return (
    <ColorModeContext.Provider value={{ setting, effectiveMode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
