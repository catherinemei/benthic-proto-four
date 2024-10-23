import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardFlat } from "./priority-traversal-flat";

import { phenylHypergraph } from "./input-phenyl";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardFlat
      nodeGraph={phenylHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
