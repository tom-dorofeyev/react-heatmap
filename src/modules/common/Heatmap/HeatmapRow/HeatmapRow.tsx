import HeatmapCell from "../HeatmapCell";
import { HeatmapCellData } from "../types/heatmap-cell-data";
import styles from "./HeatmapRow.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  row: HeatmapCellData[];
}

function HeatmapRow(props: IProps) {
  return (
    <div className={cx("heatmap-row")}>
      {props.row.map((cell) => (
        <HeatmapCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
}

export default HeatmapRow;
