import { sortFieldsOptions } from "./sortFieldsOptions";

export const getSortOptions = (
  sortField: "title" | "items" | "creationDate",
  sortMode: "asc" | "desc"
) => {
  const field = sortFieldsOptions[sortField];

  const sortDescription = `Отсортировано ${field["name"]}, ${field["order"][sortMode]}`;
  const sortLabel = field["hint"]["label"][sortMode];
  const sortHint = `Отсортировать ${field["hint"]["order"][sortMode]}`;

  return {
    sortDescription,
    sortLabel,
    sortHint,
  };
};
