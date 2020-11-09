// Edge list



/*  graph in which we are working :        
 
        (2)___(0)       
        /   \       
      (1)___(3)          
*/      


// nested arrays representing a graph with its vertices 
// and their connections ( or edges )
const graph = [[0,2], [2,3], [2,1], [2,3]];
// we can look at this as a graph of where there exists connections between,
// vertex [0,2] [2,3] .. so on ...

//Adjacent List
// where index is the node, and the values are the nodes neighbors
// index 0 neighbor is node 2
// index 1 || node with val of 1 has connections with 2,3 .. so on
const graph = [[2],[2,3],[0,1,3],[1,2]]


//Adjacent Matrix
// uses the base array or parent array to act as the nodes them selves in which 
// their adjacency will be described
const graph = [
    [0,0,1,0],  // node 0 has connection with node 2 : refer to graph at top
    [0,0,1,1],  // node 1 has connection with node 2,3
    [1,1,0,1],  // node 2 has connection with node 0,1,3
    [0,1,1,0]   // node 3 has connection with 1,2
]


// graph implementation 
// undirected - weighted graph

class Graph {
    constructor(){
        // keep track of nodes
        this.numberOfNodes = 0;
        // adjacent nodes
        this.adjacentList = {

        };
    }
    // give the ability to add nodes to Graph
    addVertex(node){
        // make the node value the key , the key will be the vertex/node
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    // add connections between vertices
    addEdge(node1, node2){
        // undirected graph - so there must be omni directed paths to connected nodes || non-directed 
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}


const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addEdge('3','1');
myGraph.addEdge('3','4');
myGraph.addEdge('4','2');
myGraph.addEdge('4','5');
myGraph.addEdge('1','2');
myGraph.addEdge('0','2');
myGraph.addEdge('6','5');
console.log(myGraph);
