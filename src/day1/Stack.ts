type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
        
    

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        if(!this.head){
            this.length = 1;
            this.head = node;
        }else{
            this.length++;
            node.prev = this.head;
            this.head = node;
        }
        // the push operation involves:
        // 1. new node has to point back to the current head (node.prev = this.head)
        // 2. update head to point to the new node

}
    pop(): T | undefined {
        if(!this.head){
            return;
        }else{
            this.length--;
            let value = this.head;
            this.head = value.prev;
            value.prev = undefined;
            return value.value;
        }
        // the pop operation involves:
        // 1. save head node.value AND node.prev
        // 2. release it from the stack/delete reference to head.prev
        // 3. update head to point to node.prev reference

}
    peek(): T | undefined {
        // return this.head.value
        if(this.head){
            return this.head.value;
        }
        return undefined;
    }
}
