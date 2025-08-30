type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx === this.length) {
      this.append(item);
      return;
    }
    if (idx > this.length) {
      throw new Error('oh no');
    }
    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;
    let curr = this.head;
    for (let i = 0; curr && i < idx - 1; ++i) {
      curr = curr.next;
    }

    if (curr) {
      const node = { value: item } as Node<T>;
      node.next = curr.next;
      curr.next = node;
    }
  }

  append(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length - 1; ++i) {
      if (curr.next?.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return;
    }

    
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    const node = curr.next;

    if (node) {
      curr.next = node.next;
      node.next = undefined;
    }
    this.length--;
    return node?.value;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }
    return curr?.value;
  }

removeAt(idx: number): T | undefined {
    if (idx === 0) {
      // Handle head removal separately
      const out = this.head?.value;
      this.head = this.head?.next;
      if (!this.head) {
        this.tail = this.head = undefined; // Handle case where there's only one node
      }
      this.length--;
      return out;
    }

    let curr = this.head;
    for (let i = 0; curr && i < idx - 1; ++i) {
      curr = curr.next;
    }

    if (!curr) {
      return;
    }

    this.length--;

    const node = curr.next;

    if (node) {
      curr.next = node.next;
      if (node === this.head) {
        // Handle single-node case
        this.head = this.tail = undefined;
      } else {
        node.next = undefined;
      }
    }

    return node?.value;
  }

    
}
