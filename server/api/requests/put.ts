import { connector } from "../../plugins/connector/connectorDB";
import { ObjectId } from "bson";

export const putRequest = async (event: any) => {
  const dbConnection = await connector();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const body = await readBody(event);
  await forms.updateOne(
    { _id: new ObjectId(body.id) },
    { $set: { _isApproved: body.isApproved } }
  );
  return "success";
};
