import { IResolverMap } from "./utils/types";
import helloController from "./controllers/hello.controller";

const resolvers: IResolverMap = {
  Query: {
    ...helloController.Query
  }
};

export default resolvers;
