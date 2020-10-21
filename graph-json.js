var jsgraphs = require("js-graph-algorithms");

// to include the json data, we "require" it
var data = require("./data.json");

// investigate the data.
console.log(data);

// Try to log the connections of the router object below.
let connections;
if (data.routers[0].router === 0) {
  connections = data.routers[0].connections;
}
// write a loop that prints the connections one by one.
connections.forEach((connection) => console.log(connection));

// If you haven't done so already, finish your JSON-data file such that
// it represents the pictured graph.
// And now that you know how to access the routers and the connections,
// create the graph by iterating over the data.

// initliaze graph below
const jsonGraph = new jsgraphs.WeightedDiGraph(data.routers.length);

// add edges dynamically.
// Hint: You need a nested loop.
// The outer loop must iterate the routers, and the inner loop the connections.

//pseudo code:

data.routers.forEach((router) => {
  router.connections.forEach((c) => {
    jsonGraph.addEdge(new jsgraphs.Edge(c.from, c.to, c.cost));
  });
});

// now that you have your graph, make sure it looks the previous graph,
// and again implement the shortest path function.

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

console.log(shortestPath(jsonGraph, 3, 0));
