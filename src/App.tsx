import { useEffect, useState } from "react";
import Heatmap, { HeatmapCellData } from "./modules/common/Heatmap";
import { useServices } from "./services/ServiceContext";
import { commitsToHeatmap } from "./modules/commit/adapters";
import { getYearOptions } from "./utils/get-year-options";

function App() {
  const { commitRepository } = useServices();
  if (!commitRepository) throw new Error("Must define commitRepository");

  const [commitHeatmap, setCommitHeatmap] = useState<HeatmapCellData[][]>([]);
  const [yearToShow, setYearToShow] = useState(new Date().getFullYear());

  useEffect(() => {
    (async () => {
      const commits = await commitRepository.getCommits({ year: yearToShow });
      setCommitHeatmap(commitsToHeatmap(yearToShow, commits));
    })();
  }, [commitRepository, yearToShow]);

  return (
    <section>
      <h1>Heatmap component example:</h1>
      <label
        htmlFor="year-select"
        className="text-sm font-medium text-gray-700"
      >
        Select Year
      </label>
      <select
        id="year-select"
        onChange={(e) => setYearToShow(Number(e.target.value))}
        style={{ marginBottom: 20 }}
      >
        {getYearOptions(2000).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <Heatmap data={commitHeatmap} />
    </section>
  );
}

export default App;
