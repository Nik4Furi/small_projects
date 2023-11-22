//  Doubly LL: is a type of LL, that's node structure
// [<--prev][data][next->]


#include <iostream>
using namespace std;

// -- Doubly LL Structure
class Node {
    
    public:

    int data;
    Node* next;
    Node* prev;

    //Constructor of the Doubly LL, if have no data
    Node(){
        this->next = NULL;
        this->prev = NULL;
    }



    //Constructor of the Doubly LL, if have already a data
    Node(int d){
        this->data = d;
        this->next = NULL;
        this->prev=NULL;
    }

};

//---------function to print the LL
void printLL(Node* head){

    cout << endl;
    while(head){
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

//---------Function to insert a new node 
void insertNode(Node* &head,Node* &tail,int d){
    //base case, if LL is null
    Node* temp = new Node(d);

    if(head == NULL){
        temp->next = head;
        head->prev = temp;

        head = temp;
        return;
    }

    tail->next = temp;
    temp->prev = tail;
    tail= temp;
}

//-------------Function to find the length of LL
int LLLength(Node* head){
    
    if(head == NULL) return 0;
    if(head->next == NULL) return 1;

    int len=0;

    while(head){
        head = head->next;
        len++;
    }

    return len;
}

//-------------function to insert data at any position
void insertAtPosition(Node* &head,Node* &tail,int pos,int d){
    Node* temp = new Node(d);

    //case-1, if pos =1, mean, insert at head
    if(pos == 1){
        temp->next = head;
        head->prev = temp;

        head = temp;
        return;
    }

    //case -2, If pos is denoting a tail, for that, we know length of LL
    int len = LLLength(head);
    if(pos > len){
        cout << "Position is out of the box"<<endl;
        return;
    }
    else if(pos == len){
        //mean inserting at the tail
        insertNode(head,tail,d);
        return;
    }

    //case-3, if  pos is denoting a middle of LL or pos, then need to find the node
    Node* curr = head;
    int cnt = 1;
    while(cnt != pos-1){
        cnt++;
        curr = curr->next;
    }

    //we find the node where we insert
    Node* next= curr->next;

    temp->next = next;
    next->prev = temp;

    temp->prev = curr;
    curr->next = temp;

    curr = temp;
}

//-----------Function to delete a node form LL
void deleteNode(Node* &head,Node* &tail,int pos){

    //case-1, delete from head
    if(pos == 1){
        Node* temp = head->next;

        temp->prev = NULL;
        head->next = NULL;
        delete head;

        head = temp;
        return;
    }

    //case-2, need to delete from tail of any position
    int cnt = 1;
    Node* curr = head, *prev=NULL;

    int len = LLLength(head);
    // cout << "len and pos "<< len << " "<< pos <<endl;
    if(pos > len){
        cout << "Position is out of box, can delete ele";
        return;
    }
    else if(pos == len){
        Node* tem = tail->prev;

        tail->next = NULL;
        tail->prev = NULL;

        tem->next = NULL;
        delete tail;

        tail = tem;
        return;
    }

    while(cnt != pos){
        prev = curr;
        curr = curr->next;
        cnt++;
    }

    prev->next = curr->next;
    curr->next->prev = prev;

    curr->next = NULL;
    curr->prev = NULL;
    delete curr;
}



int main(){

/*
//--------- Print the Doubly LL

  Node* node = new Node(3);
  printLL(node); 
*/ 

/*
//-----------Inserting nodes in LL

  Node* node = new Node(2);
  Node*head = node,*tail=node;

  insertNode(head,tail,3);
  insertNode(head,tail,4);

  printLL(head);
*/

// /*
// ----------Function to insert node at any position
Node* node = new Node(2);
Node* head = node,*tail = node;

insertNode(head,tail,3);
insertNode(head,tail,5);
insertNode(head,tail,6);

// printLL(head);

insertAtPosition(head,tail,3,4); 


printLL(head);

deleteNode(head,tail,5); //function to delete a node from pos
// cout << head->data << " "<<tail->data << endl;


printLL(head);
// */

    return 0;

}