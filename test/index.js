'use strict';

let assert = require('assert');
let Stack = require('../stack').Stack;
let Queue = require('../queue').Queue;
let LinkedList = require('../linkedList').LinkedList;
let HashTable = require('../hashTables').HashTable;
let Graph = require('../graph').Graph;
let Tree = require('../tree').Tree;
let BSTree = require('../bsTree').BSTree;

describe('Stack', () => {
   it('should use LIFO', ()=>{
      let history = new Stack();
      console.log(history);
      history.push('#!/home');
      history.push('#!/about');

      assert.equal(history._length, 2);
      assert.equal(history.peek(), '#!/about');
      assert.equal(history.peek(), '#!/about');
      assert.equal(history.pop(), '#!/about');
      assert.equal(history.pop(), '#!/home');
      assert.equal(history._length, 0 );

   }); 
});

describe('Queue', () =>{
    it('should use FIFO', ()=>{
      let orders = new Queue();

      orders.enqueue('order-001');
      orders.enqueue('order-002');

      assert.equal(orders._length, 2);
      assert.equal(orders.peek(), 'order-001');
      assert.equal(orders.peek(), 'order-001');
      assert.equal(orders.dequeue(), 'order-001');
      assert.equal(orders.dequeue(), 'order-002');
      assert.equal(orders._length, 0);
       
    });
});

describe('Linked List', () =>{
     it('should use Lists', () => {
        let slideShow = new LinkedList();
          
        slideShow.add('image-001',0);  
        slideShow.add('image-002',1);  
        slideShow.add('image-003',2);  

        assert.equal(slideShow._length, 3);
        assert.equal(slideShow.get(1)._value, 'image-002');
        slideShow.remove(1);

        assert.equal(slideShow.get(1)._value, 'image-002');
        assert.equal(slideShow._length, 2);
  
     }); 
});

describe("Hash Table", () =>{
    it("should use ds hash table", () =>{
       const employees = new HashTable();
       employees.set('John Doe', 'manager');
       employees.set('Jack Daniels', 'developer');
       employees.set('Jim Morgan', 'engineer');

       assert.equal(employees.get('Jack Daniels'), 'developer');

       employees.set('Jack Daniels', 'manager');       
       assert.equal(employees.get('Jack Daniels'), 'manager');

       employees.remove('Jack Daniels');
       assert.equal(employees.get('Jack Daniels'), undefined);
    });
});

describe("Graph", ()=>{
   it("should use graph", ()=>{
       let friends = new Graph();

       friends.addNode("John Doe");
       friends.addNode("Jack Daniels");
       friends.addNode("Jim Morgan");

       assert.equal(friends.hasNode('Jack Daniels'), true);

       friends.addEdge('John Doe', 'Jack Daniels');
       friends.addEdge('John Doe', 'Jim Morgan');

       assert.equal(friends.hasEdge('Jack Daniels', 'John Doe'), true);

       friends.removeEdge('John Doe', 'Jack Daniels');
       assert.equal(friends.hasEdge('Jack Daniels', 'John Doe'), false);

       friends.removeNode('Jack Daniels');
       assert.equal(friends.hasNode('Jack Daniels'), false);
   });
});

describe("Tree", ()=>{
   it("should use tree", () => {
         const documentTree = new Tree();

        documentTree.add('document', 'root');
        documentTree.add('section1','document');
        documentTree.add('section2', 'document');
        documentTree.add('section3','document');

        documentTree.add('article1-1','section1');
        documentTree.add('article1-2','section1');
        documentTree.add('article2-1','section2');
        documentTree.add('article3-1','section3');

        assert.equal(documentTree.search('article1-1'), true);
        assert.equal(documentTree.search('article11'),false);

        documentTree.remove('section2'); 
        assert.equal(documentTree.search('article2-1'), false); 

   }); 
});

describe("Binary Search Tree", () => {
   it.only("use binary search tree ds", () => {
       const states = new BSTree();

       states.add('Narnia');
       states.add('Spain');
       states.add('Greece');
       states.add('Moldova');
       states.add('Albania');
       states.add('Poland');
       states.add('Denmark');
       states.add('Germany');

       assert.equal(states.contains('Narnia'), true);
       
       states.remove('Narnia');

       assert.equal(states.contains('Narnia'), false);
       

   });
});