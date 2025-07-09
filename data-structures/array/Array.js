import { linearSearch } from '../../searching-algorithms/linear-search.js'

class CustomeArray{
    constructor(...items){
        this.data = {};
        this.length = 0;
        for(let item of items){
            this.add(item);
        }
    }

    // O(1)
    add(item){
        this.data[this.length] = item;
        this.length++;
    }

    //O(1)
    pop(){
        if(this.length){
            let item = this.data[this.length-1];
            delete this.data[this.length-1];
            this.length--;
            return item;
        }
        else{
            return "List is Empty";
        }
    }

    // O(1)
    get(index){
        if((typeof index === "number") && (index <= (this.length-1)) && (index >= 0)){
            return this.data[index];
        }
        else{
            return "Invalid Index";
        }
    }

    // O(n)
    insert(item, index){
        if((typeof index === "number") && (index <= (this.length-1)) && (index >= 0)){
            for(let i=this.length; i>index; i--){
                this.data[i] = this.data[i-1];
            }
            this.data[index] = item;
            this.length++;
        }
        else if ((typeof index === "number") && index == this.length){
            this.add(item);
        }
        else{
            throw new Error("Invalid Index");
        }
    }

    // O(n)
    removeAtIndex(index){
        if((typeof index === "number") && (index <= (this.length-1)) && (index >= 0)){
            for(let i=index; i<this.length-1; i++){
            this.data[i]=this.data[i+1];
        }
            delete this.data[this.length-1];
            this.length--
        }
        else{
            throw new Error("Invalid Index");
        }
    }

    // O(n);
    search(item){
        return linearSearch(Object.values(this.data), item);
    }

    // O(n)
    remove(item){
       let index = this.search(item);
        if((typeof index === "number") && (index <= (this.length-1)) && (index >= 0)){
            this.removeAtIndex(index);
            return index;
        }
        else return index;
    }
}

let arr = new CustomeArray(11, 14, 10);
console.log(arr);
arr.add(15);
console.log(arr);
console.log(arr.get(2));
arr.pop();
console.log(arr);
arr.insert(16,2);
console.log(arr);
console.log(arr.search(16));
arr.add(8);
console.log(arr);
arr.removeAtIndex(2);
console.log(arr);
arr.remove(14);
console.log(arr);







