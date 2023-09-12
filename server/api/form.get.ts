import connectDb from "../plugins/connectDb";

export default defineEventHandler(async () => {
  const dbConnection = await connectDb();
  if (dbConnection) {
    const forms = dbConnection.collection("forms");
    const unacceptedForms = forms.find({ isApproved: null });
    return unacceptedForms.toArray();
  }
});
