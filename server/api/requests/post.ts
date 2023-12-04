import { connector } from "../../plugins/connector/connectorDB";

export const postRequest = async (event: any) => {
  console.log(event);
  const dbConnection = await connector();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const body = JSON.parse(event.body);
  await forms.insertOne(body);
  return "success";
};
