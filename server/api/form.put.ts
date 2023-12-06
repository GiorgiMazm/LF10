import { putRequest } from "./requests/put";

export default defineEventHandler(async (event) => {
  return await putRequest(event);
});
