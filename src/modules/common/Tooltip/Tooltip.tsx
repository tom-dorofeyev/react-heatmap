import { ReactNode } from "react";
import styles from "./Tooltip.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  content?: ReactNode;
  children: ReactNode;
}

function Tooltip({ content, children }: IProps) {
  if (!content) return children;

  return (
    <div className={cx("tooltip-container")}>
      {children}
      <div className={cx("tooltip-content")}>{content}</div>
    </div>
  );
}

export default Tooltip;
