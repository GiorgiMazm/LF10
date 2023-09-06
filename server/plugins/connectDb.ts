import { MongoClient } from "mongodb";

export default async () => {
  const runtimeConfig = useRuntimeConfig();
  const client = new MongoClient(runtimeConfig.dbUrl);
  try {
    await client.connect();
    if (!client) return;

    return client.db("formRequest");
  } catch (error) {
    console.log(error);
  }
};
