export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class LinkedList{
    constructor(...items){
        this.head = null;
        this.length = 0;
        for(let item of items){
            this.add(item);
        }
    }

    // Time Complexity: O(n); Space Complexity: O(1);
    // This will add at last
    add(item){
        let newNode = new Node(item);
        if(this.head == null){
            this.head = newNode;
            this.length++;
        }
        else{
            let currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;

            }
            currentNode.next = newNode;
            this.length++;
        }
    }

    //O(n)
    get(index){
        if((typeof index === "number") && (index <= (this.length-1)) && (index >= 0)){
            let currentNode = this.head;
            if (index == 0){
                return currentNode.data;
            }
            else{
                for(let i=0; i<=index-1;i++){
                    currentNode = currentNode.next
                }
                return currentNode.data;
            }

        }
        else{
            throw new Error("Invalid Index");
        }
    }

    // Time Complexity: O(n); Space Complexity: O(n); 
    print(){
        let elements = [];
        if(this.head){
            let currentNode = this.head;
            while(currentNode.next != null){
                elements.push(currentNode.data);
                currentNode = currentNode.next;
            }
            elements.push(currentNode.data);
            return elements;
        }
        return elements;
    }

    len(){
        return this.length;
    }
/* Iterative Implementation of reverse Linked List
    reverse(){
        if (this.head != null) {
            let currentNode = this.head;
            if (currentNode.next == null){
                return;
            }
            else{
                let nextNode = currentNode.next;
                let prevNode = currentNode;
                while(nextNode.next != null){
                    currentNode = nextNode;
                    nextNode = currentNode.next;
                    currentNode.next = prevNode;
                    prevNode = currentNode;
                }
                // Adjusting linkes for the last node
                currentNode = nextNode;
                currentNode.next = prevNode;
                this.head.next = null; // Making first element pointing to null
                this.head = currentNode; // Now reversing head
                return;
            }
        }
        return;
    }
*/

    reverseHelper(currentNode){
        if (currentNode.next == null){
        this.head = currentNode;
        return currentNode;
    }

    this.reverseHelper(currentNode.next);
    let nextNode = currentNode.next;
    nextNode.next = currentNode;
    currentNode.next = null;
    }

    reverse(){
        return this.reverseHelper(this.head);
    }

    insertAt(item, index){
        if((typeof index === "number") && (index <= (this.length)) && (index >= 0)){
            // O(1) Time Complexity;
            if(index === 0){
                if(this.head == null){ // Insert at Top;
                    this.add(item);
                }
                else{ // Insert at top but with already present list;
                    let newNode = new Node(item);
                    newNode.next = this.head;
                    this.head = newNode;
                    this.length++;
                }
            }
            // O(n)
            else {
                if(index === this.length){ // Where user want to insert at end of list;
                    this.add(item);
                }
                else{ // Inser at ith index;
                    let currentNode = this.head;
                    for(let i=0; i<index-1;i++){
                        currentNode = currentNode.next;
                    }
                    let newNode = new Node(item);
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    this.length++;
                }
            }
        }
        else{
            throw new Error("Invalid Index");
        }

    }

    //O(n)
    pop(){
        if(this.head != null){
            let currentNode = this.head;
            let item;
            if(this.length == 1){
                item = currentNode.data;
                this.head = null;
            }
            else{
                while(currentNode.next.next != null){
                    currentNode = currentNode.next;
                }
                item = currentNode.next.data;
                currentNode.next = null;
            }
            this.length--;
            return item;
        }
        else{
            return;
        }
    }

    // o(n)
    remove(item){
        if (this.head != null) {
            let currentNode = this.head;
            if(currentNode.data == item){ // For the first element
                this.head = currentNode.next;
                currentNode.next = null;
                this.length--;
                return;
            }
            else{
                while(currentNode.next.next != null){ // For the element in list
                    if(currentNode.next.data == item){
                        currentNode.next = currentNode.next.next;
                        this.length--;
                        return;
                    }
                    else{ // Moving the pointer
                        currentNode = currentNode.next;
                    }
                }
                if (currentNode.next.data == item) { // In case of last element
                    currentNode.next = null;
                    this.length--;
                    return;
                }
                return "Not found";
            }
        }
        else{
            return "List is Empty";
        }
    }

    // O(n)
    removeAt(index){
        if((typeof index === "number") && (index < (this.length)) && (index >= 0)){
            let currentNode = this.head; 
            if (index == 0) { // For the first element
                this.head = currentNode.next;
            }
            else{ // traversing to list to reach desire index;
                for(let i=0; i<index-1; i++){
                    currentNode = currentNode.next
                }
                currentNode.next = currentNode.next.next;
            }
            this.length--;
            return;
        }
        else{
            throw new Error("Invalid Index");
            
        }
    }
}


// let list1 = new LinkedList(3, 4, 5);
// list1.add(6)
// console.log(list1.print());
// console.log(list1.len());
// list1.insertAt(7, 2);
// console.log(list1.print());
// list1.insertAt(9, 0);
// console.log(list1.print());
// list1.insertAt(10, 6);
// console.log(list1.print());
// list1.insertAt(11, 1);
// list1.insertAt(12, 7);
// console.log(list1.print());
// console.log(list1.len());
// // console.log(list1.get(9));
// console.log(list1.pop());
// console.log(list1.print());
// console.log(list1.len());
// console.log(list1.pop());
// console.log(list1.print());
// console.log(list1.len());
// console.log(list1.remove(9));
// console.log(list1.print());
// console.log(list1.len());
// console.log(list1.removeAt(0));
// console.log(list1.removeAt(4));
// console.log(list1.removeAt(2));
// console.log(list1.removeAt(9));
// console.log(list1.print());
// console.log(list1.len());




