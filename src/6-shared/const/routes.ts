export const routes = {
  home: "/",
  todolists: {
    todolists: "/todolists",
    deleteList: "/todolists/delete",
    resetAllListsConfirmation: "/todolists/reset-confirmation",
    resetAllLists: "/todolists/reset-confirmation/reset",
  },
  forms: {
    addList: "/forms/new-list",
    // todo - addItem заменить на editList и заменить форму
    addItem: "/forms/new-item",
  },
};
