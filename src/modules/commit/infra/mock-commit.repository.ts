import { Commit } from "../model";
import { CommitFilterQuery } from "../query/commit-filter.query";
import { CommitRepository } from "../repositories";

export class MockCommitRepository implements CommitRepository {
  async getCommits(filter: CommitFilterQuery): Promise<Commit[]> {
    return this.generateCommits(300, filter.year);
  }

  private generateCommitId(): string {
    return Math.random().toString(16).substring(2, 9);
  }

  private sample<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private generateCommits(count: number, year: number): Commit[] {
    const authors = [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Smith", email: "bob@example.com" },
      { name: "Charlie Lee", email: "charlie@example.com" },
      { name: "Dana Wu", email: "dana@example.com" },
    ];

    const messages = [
      "Initial commit 🎉",
      "Set up project structure",
      "Add authentication module",
      "Fix login bug",
      "Improve dashboard performance",
      "Refactor API layer",
      "Add unit tests",
      "Fix CSS issues on mobile",
      "Implement dark mode toggle",
      "Update README and docs",
      "Add CI/CD pipeline",
      "Update dependencies",
      "Optimize database queries",
      "Improve accessibility features",
      "Cleanup unused code",
      "Add analytics tracking",
    ];

    const commits: Commit[] = [];

    for (let i = 0; i < count; i++) {
      const author = this.sample(authors);
      const message = this.sample(messages);

      // Pick a random day in the target year
      const month = Math.floor(Math.random() * 12); // 0–11
      const day = Math.floor(Math.random() * 28) + 1; // keep it safe (1–28)
      const hour = Math.floor(Math.random() * 24);
      const minute = Math.floor(Math.random() * 60);

      const date = new Date(year, month, day, hour, minute);

      commits.push({
        id: this.generateCommitId(),
        message,
        author,
        date,
      });
    }

    // sort chronologically
    return commits.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
}
