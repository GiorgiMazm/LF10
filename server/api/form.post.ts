import { postRequest } from "./requests/post";

export default defineEventHandler(async (event) => {
  return await postRequest(event);
});
