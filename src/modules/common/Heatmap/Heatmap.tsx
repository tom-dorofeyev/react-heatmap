import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Heatmap.module.scss";
import { HeatmapCellData } from "./types/heatmap-cell-data";
import { findMatrixMax } from "../../../utils/sum-matrix";
import { getHeatmapItemColor } from "./color-calculator/color-calculator";
import HeatmapRow from "./HeatmapRow";
import { HeatmapColorContext } from "./HeatmapColorContext";

const cx = classNames.bind(styles);

interface IProps {
  data: HeatmapCellData[][];
}

function Heatmap(props: IProps) {
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    setMaxValue(findMatrixMax(props.data, "count"));
  }, [props.data]);

  const getColor = useCallback(
    (value: number) => {
      return getHeatmapItemColor(value, maxValue);
    },
    [maxValue]
  );

  return (
    <HeatmapColorContext.Provider value={{ getColor }}>
      <section className={cx("component")}>
        {props.data.map((row, idx) => {
          return <HeatmapRow key={idx} row={row} />;
        })}
      </section>
    </HeatmapColorContext.Provider>
  );
}

export default Heatmap;
