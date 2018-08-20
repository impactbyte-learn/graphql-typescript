import { Connection } from "typeorm";
import { ExecutionParams } from "subscriptions-transport-ws";
import { Request, Response } from "express";

export type Resolver = (
  _: any,
  args: { [key: string]: any },
  context: IContext
) => any;

export interface IContext {
  db: Connection;
  request: Request;
  response: Response;
  connection: ExecutionParams;
}

export interface IResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
