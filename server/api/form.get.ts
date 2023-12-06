import { getRequest } from "./requests/get";

export default defineEventHandler(async () => {
  return await getRequest();
});
