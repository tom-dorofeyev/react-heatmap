import { Commit } from "../model/commit.type";
import { CommitFilterQuery } from "../query/commit-filter.query";

export interface CommitRepository {
  getCommits(filter: CommitFilterQuery): Promise<Commit[]>;
}
