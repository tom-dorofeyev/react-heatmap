import Tooltip from "../../Tooltip";
import { useHeatmapColor } from "../HeatmapColorContext";
import { HeatmapCellData } from "../types/heatmap-cell-data";
import styles from "./HeatmapCell.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  cell: HeatmapCellData;
}

function HeatmapCell(props: IProps) {
  const { getColor } = useHeatmapColor();

  return (
    <Tooltip content={props.cell.tooltip}>
      <div className={cx("heatmap-cell", getColor(props.cell.count))}></div>
    </Tooltip>
  );
}

export default HeatmapCell;
