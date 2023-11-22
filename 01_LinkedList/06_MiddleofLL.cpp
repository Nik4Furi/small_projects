//Approach-I: Use getLength of LL, then run a prev and curr loop by n/2, and return curr, tC O(n+n/2)

//Approach-II: Tortoise Pointer, slow pointer move one, fast pointer move upto two times, O(n)

Node *findMiddle(Node *head) {
    // Write your code here

    Node* slow=head, *fast = head;

    while(fast && fast->next){
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}