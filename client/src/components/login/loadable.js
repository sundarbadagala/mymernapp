import React, { lazy } from "react";
import LazyLoading from "utils/lazyLoading";

const LazyIndex = lazy(() => import("./index"));

function Loadable() {
  return (
    <LazyLoading>
      <LazyIndex />
    </LazyLoading>
  );
}

export default Loadable;