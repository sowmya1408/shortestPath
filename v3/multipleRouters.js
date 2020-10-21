let data = require("../data.json");
const Router = require("./routerV3");
const Packet = require("./packet");
const prompt = require('prompt'); 
const jsgraphs = require('js-graph-algorithms');

let routers = [];

const multipleRouters = () => {
    /**
     * 1. Iterate through the data and create the routers from it 
     * as well as add it to our array.
     */
   
    // your code here
    data.routers.forEach(r => {
         new Router(r.router, r.connections)
        routers.push(r);
    });
    
    /**
     * 2. build a weighted directional graph and adds the edges 
     * between the nodes through the data.json file
     */
    
    // your code here
    const dataGraph = new jsgraphs.WeightedDiGraph(data.routers.length);
    routers.forEach(router => {
        router.connections.forEach(c => {
            dataGraph.addEdge(new jsgraphs.Edge(c.from, c.to, c.cost))         
       })
 })
    /**
     * 3. create a new packet. 
     * create a packet with a name, a source, a destination and a ttl.
     * the source should be 0, destination 3 and ttl > 3. 
     * the name can be whatever you'd like.
     */

    let demoPacket = new Packet("dataRouter", 0, 3, 5 );
    // Add the shortest path to the packet.
    demoPacket.shortestPath = getShortestPath(dataGraph, demoPacket.source, demoPacket.destination);

    /**
     * Prompt is a package to prompt the user though the terminal.
     * Can be found here: https://github.com/flatiron/prompt#readme
     */
    prompt.start();
    console.log("demo packet initialized. Send packet? (y/n)")
    prompt.get(["sendPacket"], function(err, res) {
        if(res.sendPacket == "y") {
            demoPacket.forwardPacket(demoPacket.source);
        }
        else {
            console.log("Bye!")
            process.exit(1);
        }
    })
}

/**
 * This methods gets the router names / indexes on the shortest path.
 */
const getShortestPath = (graph, from, to)  => {
    // 4. implement this.
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
}

multipleRouters();
