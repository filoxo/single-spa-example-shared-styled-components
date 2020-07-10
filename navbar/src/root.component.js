import React, { useState } from "react";
import { Button } from "@filoxo/styleguide";
import styles from "./root.styles.css";

export default function Root(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);
  return (
    <div className={styles.navbar}>
      Navbar
      <div>
        <Button onClick={toggleLoggedIn}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Button>
      </div>
    </div>
  );
}
