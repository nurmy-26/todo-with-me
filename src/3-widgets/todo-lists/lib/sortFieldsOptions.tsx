import { SortIcon } from "../../../6-shared/ui/icons/sort-icon";

export const sortFieldsOptions = {
  title: {
    name: "по имени списка",
    order: {
      asc: "в алфавитном порядке",
      desc: "в обратном порядке",
    },
    // hint специально заполнен наоборот, так как используется не для текущей подсказки,
    // а для подсказки о результате клика на кнопку
    hint: {
      label: {
        asc: "Z...A",
        desc: "A...Z",
      },
      order: {
        asc: "в обратном порядке",
        desc: "в алфавитном порядке",
      },
    }
  },
  items: {
    name: "по количеству выполненных пунктов списка",
    order: {
      asc: "в порядке возрастания",
      desc: "в порядке убывания",
    },
    hint: {
      label: {
        asc: <SortIcon type={'desc'} />,
        desc: <SortIcon type={'asc'} />,
      },
      order: {
        asc: "в порядке убывания",
        desc: "в порядке возрастания",
      },
    },
  },
  creationDate: {
    name: "по дате создания списка",
    order: {
      asc: "в хронологическом порядке",
      desc: "в обратном порядке",
    },
    hint: {
      label: {
        asc: "9...1",
        desc: "1...9",
      },
      order: {
        asc: "в обратном порядке",
        desc: "в хронологическом порядке",
      },
    }
  }
}