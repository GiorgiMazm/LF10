import connectDb from "../plugins/connectDb";

const getNewForms = async () => {
  const dbConnection = await connectDb();
  if (dbConnection) {
    const forms = dbConnection.collection("forms");
    const unacceptedForms = forms.find({ isAccepted: null });
    return unacceptedForms.toArray();
  }
};
