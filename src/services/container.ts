import {
  // ApiCommitRepository,
  MockCommitRepository,
} from "../modules/commit/infra";
import { CommitRepository } from "../modules/commit/repositories";
// import { AxiosHttpClient } from "../modules/common/http";

// const httpClient = new AxiosHttpClient();

export type Services = {
  commitRepository: CommitRepository;
  // add other module services here
};

export const defaultServices: Services = {
  // commitRepository: new ApiCommitRepository(httpClient),
  commitRepository: new MockCommitRepository(),
};
