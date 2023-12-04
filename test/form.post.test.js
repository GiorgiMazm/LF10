const { MongoClient } = require("mongodb");
import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";

import { postRequest } from "../server/api/requests/post.ts";
import * as connectDbUtil from "../server/plugins/connector.ts/connectorDB";

describe("form.post", () => {
  const connectDBMock = vi.spyOn(connectDbUtil, "connector");
  let connection;
  let db;
  beforeAll(async () => {
    const connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(globalThis.__MONGO_DB_NAME__);
  });
  afterAll(async () => {
    await connection?.close();
  });

  test("should insert form into collection", async () => {
    connectDBMock.mockResolvedValueOnce(connection);
    const forms = db.collection("forms");
    const mockForm = { _id: "Wohngeld", name: "John" };
    const event = new Event({
      body: {
        mockForm,
      },
    });
    forms.insertOne(mockForm);
    await postRequest(event);
    console.log(forms);
    const insertedForm = await forms.findOne({ _id: "Wohngeld", name: "John" });
    expect(insertedForm).toEqual(mockForm);
  });
});
