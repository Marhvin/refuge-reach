declare module "react-simple-maps" {
  import { ComponentType, ReactNode, SVGProps } from "react";

  export interface Geography {
    rsmKey: string;
    [key: string]: unknown;
  }

  export const ComposableMap: ComponentType<SVGProps<SVGSVGElement> & { projection?: string }>;
  export const ZoomableGroup: ComponentType<{ zoom?: number; [key: string]: unknown }>;
  export const Geographies: ComponentType<{
    geography: string;
    children: (props: { geographies: Geography[] }) => ReactNode;
  }>;
  export const Geography: ComponentType<{
    key?: string;
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: { default?: object; hover?: object; pressed?: object };
    [key: string]: unknown;
  }>;
  export const Marker: ComponentType<{
    coordinates: [number, number];
    onMouseEnter?: (e: React.MouseEvent<SVGGElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<SVGGElement>) => void;
    [key: string]: unknown;
  }>;
}
