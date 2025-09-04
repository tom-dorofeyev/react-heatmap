import { createContext, useContext } from "react";

type ColorContextType = {
  getColor: (value: number) => string;
};

export const HeatmapColorContext = createContext<ColorContextType | null>(null);

export function useHeatmapColor() {
  const ctx = useContext(HeatmapColorContext);
  if (!ctx)
    throw new Error("useHeatmapColor must be used within HeatmapColorProvider");
  return ctx;
}
