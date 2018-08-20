import { IResolverMap } from "../utils/types";

const resolvers: IResolverMap = {
  Query: { hello: (): string => "HELLO" }
};

export default resolvers;
