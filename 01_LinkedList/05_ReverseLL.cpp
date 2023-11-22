//Function to reverse the LL
//Approach-I: Iterative approach to reverse a LL, O(N)

//Approach-II: Recursivly doing this thing, Recommended

LinkedListNode<int> *reverseLinkedList(LinkedListNode<int> *head) 
{
    // Write your code here
    //base case
    if(head == NULL || head->next == NULL) return head;

    LinkedListNode<int> * curr = reverseLinkedList(head->next);
    head->next->next = head;

    head->next = NULL;

    return curr;

}