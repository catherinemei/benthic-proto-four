import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardFlat } from "./priority-traversal-flat";

import { aspirinHypergraph } from "./input-aspirin";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardFlat
      nodeGraph={aspirinHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
