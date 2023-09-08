const { MongoClient } = require("mongodb");
import _default from "../server/api/form.post";
import * as connectDbUtil from "~~/server/plugins/connectDb";

describe("form.post", () => {
  const connectDBMock = jest.spyOn(connectDbUtil, "default");
  let connection: any;
  let db: any;
  beforeAll(async () => {
    connection = await MongoClient.connect("globalThis.__MONGO_URI__", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db("globalThis.__MONGO_DB_NAME__");
  });
  afterAll(async () => {
    await connection.close();
  });

  test("should insert form into collection", async () => {
    connectDBMock.mockResolvedValueOnce(connection);
    const forms = db.collection("forms");
    const mockForm = { _id: "Wohngeld", name: "John" };
    const event: any = new CustomEvent("event", {
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
