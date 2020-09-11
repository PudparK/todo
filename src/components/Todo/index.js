import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default ({ complete, id, important, todo }) => {
  return (
    <li key={id} className={styles.todo}>
      <span className={classNames({ complete: complete })}>checkbox</span>
      {` ${todo} `}
      <span className={classNames({ important: important })}>star</span>
    </li>
  );
};
