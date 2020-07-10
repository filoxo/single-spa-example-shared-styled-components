import React from "react";
import { Button } from "@filoxo/styleguide";
import styles from "./root.styles.css";

export default function Root(props) {
  return (
    <div className={styles.navbar}>
      Navbar
      <div>
        <Button>Log in</Button>
      </div>
    </div>
  );
}
