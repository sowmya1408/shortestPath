var jsgraphs = require('js-graph-algorithms');

// to include the json data, we "require" it
var data = require('./data.json');

// investigate the data.
console.log(data);

// Try to log the connections of the router object below.


// write a loop that prints the connections one by one.



// If you haven't done so already, finish your JSON-data file such that
// it represents the pictured graph. 
// And now that you know how to access the routers and the connections,
// create the graph by iterating over the data.

// initliaze graph below

// add edges dynamically. 
// Hint: You need a nested loop. 
// The outer loop must iterate the routers, and the inner loop the connections. 

//pseudo code:
/**
 * forEach router (r) {
 *      forEach router.connection (c) {
 *          graph.addEdge(fromNodeIndex, toNodeIndex, cost)         
 *      }
 * }
 */


 // now that you have your graph, make sure it looks the previous graph,
 // and again implement the shortest path function. 