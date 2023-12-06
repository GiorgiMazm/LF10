import { connector } from "../../plugins/connector/connectorDB";

export const getRequest = async () => {
  const dbConnection = await connector();
  if (dbConnection) {
    const forms = dbConnection.collection("forms");
    const unacceptedForms = forms.find({ _isApproved: null });
    return unacceptedForms.toArray();
  }
};
