const { MongoClient } = require("mongodb");
import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";

import { putRequest } from "../server/api/requests/put.ts";
import * as connectDbUtil from "../server/plugins/connector/connectorDB";

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
    vi.resetAllMocks();
  });

  test("should insert form into collection", async () => {
    connectDBMock.mockResolvedValueOnce(connection);
    const forms = db.collection("forms");
    const mockForm = { _id: "Wohngeld", name: "John", _isApproved: null };
    const expectedForm = { _id: "Wohngeld", name: "John", _isApproved: true };
    const event = new Event({
      body: {
        mockForm,
      },
    });
    forms.insertOne(mockForm);
    await forms.updateOne({ _id: "Wohngeld" }, { $set: { _isApproved: true } });
    await putRequest(event);
    console.log(forms);
    const insertedForm = await forms.findOne({
      _id: "Wohngeld",
      name: "John",
      _isApproved: true,
    });
    expect(insertedForm).toEqual(expectedForm);
  });
});
