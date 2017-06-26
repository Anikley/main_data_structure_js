'use strict';


// abstract data type - relatiin between objects


// 1. site map 
// 2. FB friends
// 3. Internet 


// add
// remove
// search 

// + o(1)
// - o(1), o(n)
// search o(1)

class Graph{
    constructor(){
       this._nodes = {};    
    }
   
   addNode(value){
       this._nodes[value] = {
           edges: {}
       }
   } 

   removeNode(value){
       for(let connectNode in this._nodes[value].edges){
           this.removeEdge(value, connectNode);
       }
       delete this._nodes[value];
   } 

   hasNode(value){
       return !!this._nodes[value];
   }

   addEdge(nodeFrom, nodeTo){
       if(this.hasNode(nodeFrom) && this.hasNode(nodeTo)){
           this._nodes[nodeFrom].edges[nodeTo] =
           this._nodes[nodeTo].edges[nodeFrom] = true;
       }
   }

   removeEdge(nodeFrom, nodeTo){
       if(this.hasNode(nodeFrom) && this.hasNode(nodeTo)){
           delete this._nodes[nodeFrom].edges[nodeTo];
           delete this._nodes[nodeTo].edges[nodeFrom];
       }
   }

   hasEdge(nodeFrom, nodeTo){
       return !!this._nodes[nodeFrom].edges[nodeTo];
   }

}

module.exports = {
    Graph: Graph
}



