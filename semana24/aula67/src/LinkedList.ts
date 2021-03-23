export class ListNode {
    constructor(
       public value: any,
       public next: ListNode | null = null
    ) { }
 }
 
 
 export class LinkedList {
    constructor(
       public start: ListNode | null = null
    ) { }
 
    public addToTail = (
       value: any
    ): void => {
       if (!this.start) {
          this.start = new ListNode(value)
       } else {
          let currentNode = this.start
 
          while (currentNode.next) {
             currentNode = currentNode.next
          }
 
          currentNode.next = new ListNode(value)
       }
    }
 
    public print(): void {
        let node: ListNode | null = this.start;
        let i = 1;
        while (node !== null) {
          console.log(`Elemento ${i}: `, node.value);
          node = node.next
          i++;
        }
      }
}
 
const labenuClasses: LinkedList = new LinkedList()

labenuClasses.addToTail("Dumont")

labenuClasses.print()