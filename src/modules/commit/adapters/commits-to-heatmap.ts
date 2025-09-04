import { createYearMatrix } from "../../calendar/create-year-matrix";
import { HeatmapCellData } from "../../common/Heatmap";
import { Commit } from "../model";

class CommitsHeatmapBuilder {
  private commitsPerDate = new Map<string, HeatmapCellData>();

  withCommits(commits: Commit[]): CommitsHeatmapBuilder {
    commits.forEach(({ date }) => {
      const d = new Date(date);
      const dateStr = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      const commitAccumulator = this.commitsPerDate.get(dateStr);
      const count = (commitAccumulator?.count || 0) + 1;
      this.commitsPerDate.set(dateStr, this.createMapValue(dateStr, count));
    });
    return this;
  }

  build(year: number): HeatmapCellData[][] {
    const commitHeatmap = createYearMatrix(year).map((monthDays, monthIdx) => {
      const month = monthIdx + 1;
      return monthDays.map((_, dayIdx) => {
        const day = dayIdx + 1;
        const dateStr = `${year}-${month}-${day}`;
        const commitAcc = this.commitsPerDate.get(dateStr);
        return commitAcc || this.createMapValue(dateStr, 0);
      });
    });
    return commitHeatmap;
  }

  private createMapValue(dateStr: string, count: number) {
    return {
      id: dateStr,
      count,
      tooltip: `${new Date(dateStr).toDateString()} - ${count} commits`,
    };
  }
}

export function commitsToHeatmap(
  year: number,
  commits: Commit[]
): HeatmapCellData[][] {
  return new CommitsHeatmapBuilder().withCommits(commits).build(year);
}
