import { connector } from "./connector/connectorDB";

export default async () => {
  return await connector();
};
