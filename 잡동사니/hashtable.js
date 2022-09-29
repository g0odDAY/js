



function hashStringToInt(str, tableSize){
    let hash = 17;
    [...str].forEach((char)=>{
        hash = (13 * hash * char.charCodeAt(0)) % tableSize;
    });
    return hash;
}

class HashTable{
    table = new Array(71);

    setItem=(key, value)=>{
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    }
    getItem=(key)=>{
        const idx = hashStringToInt(key, this.table.length);
        return this.table[idx];
    }
}

const myTable = new HashTable();
myTable.setItem('firstName', '혜림');
myTable.setItem('lastName', '김');
myTable.setItem('age', 26);