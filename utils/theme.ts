type ThemeKey = "light" | "dark";

type ColorSet = {
  primary: string;
  secondary: string;
  tertiary: string;
  inverted: string;
};

type Theme = {
  colors: ColorSet;
};

const colors = new Map<ThemeKey, ColorSet>([
  [
    "light",
    {
      primary: "#ea6227",
      secondary: "#342ead",
      tertiary: "#f2a51a",
      inverted: "#b9ebcc"
    }
  ],
  [
    "dark",
    {
      primary: "#f2a51a",
      secondary: "#b9ebcc",
      tertiary: "#342ead",
      inverted: "#ea6227"
    }
  ]
]);

export const getTheme = (themeKey: ThemeKey): Theme => {
  if (!colors.has(themeKey)) {
    throw new Error("Invalid theme key provided");
  }

  return {
    colors: colors.get(themeKey) as ColorSet
  };
};
