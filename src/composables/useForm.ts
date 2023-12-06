import { addForm } from "./addForm";
import { getForm } from "./getForm";
import { putForm } from "./putForm";

export default () => {
  return { getForm, addForm, putForm };
};
