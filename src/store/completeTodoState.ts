import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const completeTodoState = atom({
  key: "completeTodoState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: uuidv4(),
      todo: "kkk"
    }
  ] // default value (aka initial value)
});
