import { connector } from "../plugins/connector.ts/connectorDB";

export default async () => {
  return await connector();
};
