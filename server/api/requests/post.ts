import { connector } from "~~/server/plugins/connector.ts/connectorDB";

export const postRequest = async (event: any) => {
  console.log(event);
  const dbConnection = await connector();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const body = await readBody(event);
  await forms.insertOne(body);
  return "success";
};
