import connectDb from "../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const dbConnection = await connectDb();

  if (!dbConnection) {
    return;
  }
  const forms = await dbConnection.collection("forms");
  const body = await readBody(event);
  await forms.insertOne(body);
  return "success";
});
