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
const graph = [[]]