import {} from "styled-components";
import { CSSProp } from "styled-components";
import { defaultTheme } from "../styles/theme";

declare module "styled-components" {
  type Theme = typeof defaultTheme;
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
