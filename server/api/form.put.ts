import connectDb from "../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const dbConnection = await connectDb();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const body = await readBody(event);
  await forms.updateOne(
    { _id: new ObjectId(body.id) },
    { $set: { isApproved: true } }
  );
  return "success";
});
