type TGetTodoListsConfig = {
  limit: string;
  options: TGetTodoListsOptions;
};

type TGetTodoListsOptions = {
  skip?: boolean;
  selectFromResult?: (result: any) => any;
  [key: string]: any;
};

export const getTodoListsConfig: TGetTodoListsConfig = {
  limit: "",
  options: {},
};
