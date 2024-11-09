import { describe, test, expect } from "vitest";
import { TItem } from "../../types";
import { generateTodoItem } from "./generateTodoItem";

describe("generateTodoItem", () => {
  test("должен создать todo-элемент с заданным заголовком title и дефолтным значением isDone (false)", () => {
    const title = "Sample Todo";
    const result: TItem = generateTodoItem(title);

    expect(result.title).toBe(title); // проверяем, что заголовок установлен правильно
    expect(result.isDone).toBe(false); // проверяем, что значение isDone по умолчанию false
    expect(typeof result.id).toBe("string"); // проверяем, что id является строкой
  });

  test("должен создать todo-элемент с заданным заголовком title и конкретным значением isDone (true)", () => {
    const title = "Another Todo";
    const isDone = true;
    const result: TItem = generateTodoItem(title, isDone);

    expect(result.title).toBe(title);
    expect(result.isDone).toBe(isDone);
  });

  test("todo-элементы должны иметь уникальные id", () => {
    const title1 = "Unique Todo 1";
    const title2 = "Unique Todo 2";
    const item1: TItem = generateTodoItem(title1);
    const item2: TItem = generateTodoItem(title2);

    expect(item1.id).not.toBe(item2.id); // проверяем, что идентификаторы уникальны
  });
});
