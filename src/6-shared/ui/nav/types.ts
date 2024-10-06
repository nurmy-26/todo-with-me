import { routes } from "../../const/routes";

export type RoutePaths = (typeof routes)[keyof typeof routes];

type TNavItem = {
  title: string;
  path: RoutePaths;
};
type TNavList = TNavItem[];

export type NavProps = {
  extraClass?: string;
  navList: TNavList;
  hasPaw?: boolean;
  type?: "horizontal" | "vertical";
};
