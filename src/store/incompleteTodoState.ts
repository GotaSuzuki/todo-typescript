import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const incompleteTodoState = atom({
  key: "incompleteTodoState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: uuidv4(),
      todo: "fff"
    },
    {
      id: uuidv4(),
      todo: "ttt"
    }
  ] // default value (aka initial value)
});
