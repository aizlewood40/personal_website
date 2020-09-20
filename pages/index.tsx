import { NextPage } from "next";
import React from "react";

// Style
import styles from "./index.scss";

export const Index: NextPage = () => {
  return (
    <React.Fragment>
      <style jsx={styles.toString()}>{styles}</style>
      <div className="title">Your Next.js App</div>
    </React.Fragment>
  );
};

Index.displayName = "Pages:Index";

export default Index;
