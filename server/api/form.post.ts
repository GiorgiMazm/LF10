import connectDb from "../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const dbConnection = await connectDb();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const body = await readBody(event);
  await forms.insertOne(body);
  return "success";
});
