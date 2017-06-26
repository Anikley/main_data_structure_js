'use strict';

// 1. JS Object
// 2. cache & index
// 3. localStorage


// + o(1)
// - o(1)
// s o(1)

class HashTable{
    constructor(){
      this._map = [];      
    }

    _hashKey(key, hash = 0){
        for(let i=0; i < key.length; i++ ){
            hash = ((hash << 5) - hash)  + key.charCodeAt(i) | 0;
            hash &= hash;
        }

        return hash;
    }

    set(key, value){
        this._map[this._hashKey(key)] = value;
    }

    get(key){
        return this._map[this._hashKey(key)];
    }

    remove(key){
        delete this._map[this._hashKey(key)];
    }
}

module.exports = {
    HashTable: HashTable
}