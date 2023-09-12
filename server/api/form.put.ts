import connectDb from "../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const dbConnection = await connectDb();

  if (!dbConnection) return;
  const forms = dbConnection.collection("forms");
  const id = await readBody(event);
  await forms.updateOne({ _id: id }, { $set: { isApproved: true } });
  return "success";
});
