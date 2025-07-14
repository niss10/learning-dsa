import { LinkedList, Node } from './LinkedList.js';
function reverseLinkedList(LinkedListObject){
    if (LinkedListObject.head != null) {
        let currentNode = LinkedListObject.head;
        if (currentNode.next == null){
            return LinkedListObject;
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
            LinkedListObject.head.next = null; // Making first element pointing to null
            LinkedListObject.head = currentNode; // Now reversing head
            return LinkedListObject;
        }
    }
    return LinkedListObject;
}

let list1 = new LinkedList(12,14,16,18,19);
console.log(list1.print());

let reversedList1 = reverseLinkedList(list1);
console.log(reversedList1.print());


