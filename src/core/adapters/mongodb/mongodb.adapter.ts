import { Db, MongoClient } from "mongodb";
import { Database } from "../contracts/database";

export class MongoDbAdapter implements Database {
  _connection: Db;
  _collection: string;
  async connect(): Promise<this> {
    const conn = await MongoClient.connect(
      `mongodb://root:pass!@localhost:27017`
      //   `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
    );

    this._connection = conn.db(
      // process.env.MONGO_DATABASE_NAME
      "clean-architecture"
    );
    return this;
  }

  collection(collection: string): this {
    this._collection = collection;
    return this;
  }
  async create(data: any) {
    const result = await this._connection
      .collection(this._collection)
      .insertOne(data);

    const id = result.insertedId.toString();
    const { _id, ...insertedData } = data;

    return { id, ...insertedData };
  }
}
