'use strict';
//Stack - abstact ds - LIFO 

// 1. navigation history
// 2. call stack
// 3. recursion
// 4. {([])}

//operation - push, pop, peek
// addition o(1)
// removing o(1)
// searching o(n)

class Stack {
    constructor(){
        this._stack = [];
        this._length = 0;
    }

    push(value){
       this._stack.push(value);
       this._length++;
    }

    pop(){
        if(this._length === 0){
            return;
        }

        this._length--;
        return this._stack.pop();
    }

    peek(){
        return this._stack[this._length - 1];
    }
}


module.exports = {
    Stack: Stack
};