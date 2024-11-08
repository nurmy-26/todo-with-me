type TNavItem = {
  title: string;
  path: string;
};
type TNavList = TNavItem[];

export type NavProps = {
  extraClass?: string;
  navList: TNavList;
  hasPaw?: boolean;
  type?: "horizontal" | "vertical";
};
