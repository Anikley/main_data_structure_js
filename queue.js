'use strict';

//FIFO

// 1. events processing
// 2. HTML5 media
// 3. jQuery events
// 4. orders

// + O(1)
// - O(1)
// s O(n)

class Queue {
    constructor(){
        this._elements = [];
        this._length = 0; 
    }

    enqueue(value){
        this._elements.push(value);
        this._length++;
    }

    dequeue(){
        if(this._length == 0){
            return;
        }
        this._length--; 
        return this._elements.shift();
    }

    peek(){
        return this._elements[0];
    }

}

module.exports = {
    Queue : Queue
}