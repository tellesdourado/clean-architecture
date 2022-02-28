import { Database } from "../../src/core/adapters/contracts/database";
import crypto from "crypto";

export class DatabaseFake implements Database {
  _collection: string;
  async connect(): Promise<this> {
    return this;
  }

  collection(name: string) {
    this._collection = name;
    return this;
  }

  async create(values: any): Promise<unknown> {
    const id = crypto.createHash("sha256").update("key").digest("hex");
    return { ...values, id };
  }
}
