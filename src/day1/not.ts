type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value:item} as Node<T>;
        this.length++;
        if(!this.head){
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        // if idx is length = append
        if(idx = this.length){
            this.append(item);
            return;
        }
        // if idx is more than length = error
        if(idx > this.length){
            throw new Error("oh no");
        }
        // if idx is 0 = prepend
        if(idx === 0){
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;
        // iterate through list until idx is reached
        for (let i = 0; curr && i < idx - 1; ++i){
            curr = curr.next;
        }

        // perform the insertion
        curr = curr as Node<T>;
        const node = {value:item} as Node<T>;

        // curr is now idx-1 or the element BEFORE the insertion
        node.next = curr.next; // new node points to idx+1
        curr.next = node; // idx-1 points to idx 
        
    }

    append(item: T): void {
       const node = {value:item} as Node<T>;
       this.length++;

       if(!this.tail){
            this.tail = node;
       }

       this.tail.next = node;
       this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length - 1; ++i){
            if(curr.next?.value === item){
                // first, find node.value === item
                break;
            }         
            curr = curr.next;    
        }
        if(!curr){
            return;
        }
        
        this.length--;

        if(this.length === 0){
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        const node = curr.next;

        if(node?.next){
            curr.next = node.next;
            node.next = undefined;
        }

        return node?.value;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        // iterate through list until idx is reached
        for (let i = 0; curr && i < idx; ++i){
            curr = curr.next;
        }
        return curr.value;
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx - 1; ++i){
            curr = curr.next;    
        }
        if(!curr){
            return;
        }
        
        this.length--;

        if(this.length === 0){
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        const node = curr.next;

        if(node?.next){
            curr.next = node.next;
            node.next = undefined;
        }

        return node?.value;
    }
}
