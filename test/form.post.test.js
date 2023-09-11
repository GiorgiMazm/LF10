const { MongoClient } = require("mongodb");
const { _default } = require("../server/api/form.post");
import * as connectDbUtil from "~~/server/plugins/connectDb";

describe("form.post", () => {
  const connectDBMock = jest.spyOn(connectDbUtil, "default");
  let connection;
  let db;
  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection(globalThis.__MONGO_DB_NAME__);
  });
  afterAll(async () => {
    await connection?.close();
  });

  test("should insert form into collection", async () => {
    connectDBMock.mockResolvedValueOnce(connection);
    const forms = db.collection("forms");
    const mockForm = { _id: "Wohngeld", name: "John" };
    const event = new CustomEvent("event", {
      detail: {
        name: "john",
      },
    });
    await _default(event);
    const insertedForm = await forms.findOne({ _id: "Wohngeld" });
    //@ts-ignore
    expect(insertedForm).toEqual(mockForm);
  });
});
