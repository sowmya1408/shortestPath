var jsgraphs = require("js-graph-algorithms");

// 1. Initialize your graph here.
var g = new jsgraphs.WeightedGraph(4);

// 2. Add edges to your graph below
g.addEdge(new jsgraphs.Edge(0, 1, 1));
g.addEdge(new jsgraphs.Edge(0, 2, 3));
g.addEdge(new jsgraphs.Edge(0, 3, 7));
g.addEdge(new jsgraphs.Edge(1, 2, 1));
g.addEdge(new jsgraphs.Edge(2, 3, 2));

// 3. Create a function that takes a graph, a from node and a to node,
//    and print the shortest path between the two nodes.
const shortestPath = (graph, to, from) => {
  let sp = [];
  // write the functionality here. Remember to look at the documentation!
  var dijkstra = new jsgraphs.Dijkstra(graph, from);
  for (let v = to; v < graph.V; ++v) {
    if (dijkstra.hasPathTo(to)) {
      const path = dijkstra.pathTo(to);
      for (let i = 0; i < path.length; ++i) {
        const e = path[i];
        sp.push(e.to());
      }
    }
  }

  // return the shortest path as an array
  return sp;
};
console.log(shortestPath(g, 3, 0));
// (4.) Modify above function to handle it, if a path doesn't exist.
