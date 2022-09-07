export abstract class Database {
  connect: () => Promise<this>;
  create: <T>(values: any) => Promise<T | unknown>;
  updateOne?: (id: string, values: any) => Promise<void>;
  find?: <T>(expression: any) => Promise<T[]>;
  table?: (name: string) => this;
  collection?: (name: string) => this;
}
