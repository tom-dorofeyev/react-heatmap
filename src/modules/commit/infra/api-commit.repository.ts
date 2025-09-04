import { HttpClient } from "../../common/http/http-client.interface";
import { Commit, CommitResponse } from "../model/commit.type";
import { CommitFilterQuery } from "../query/commit-filter.query";
import { CommitRepository } from "../repositories/commit.repository";

export class ApiCommitRepository implements CommitRepository {
  private readonly BASE_URL = "/api/v1/commits";

  constructor(private readonly httpClient: HttpClient) {}

  async getCommits(filter: CommitFilterQuery): Promise<Commit[]> {
    const result = await this.httpClient.get<CommitResponse[]>(this.BASE_URL, {
      query: { ...filter },
    });
    return result.map(this.transformResponse);
  }

  private transformResponse(commitResponse: CommitResponse): Commit {
    return {
      id: commitResponse.id,
      message: commitResponse.message,
      author: {
        name: commitResponse.author.name,
        email: commitResponse.author.email,
      },
      date: new Date(commitResponse.date),
    };
  }
}
