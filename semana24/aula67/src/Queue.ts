import { LinkedList, ListNode } from "./LinkedList";

class Queue {
   constructor(
      public items: LinkedList = new LinkedList()
   ) { }

   public isEmpty = (): boolean => this.items.start === null

   public enqueue = (
      value: any
   ): void => {
      this.items.addToTail(value)
   }

   public dequeue = (): ListNode | null => {
      
      if(this.items.start === null) return null
      
      const removedItem: ListNode | null = this.items.start

      this.items.start = this.items.start.next

      return removedItem
   }
}

const requests = new Queue()
console.log(requests)

requests.enqueue("request1")