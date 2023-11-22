/* LL is dynamic type linear datastructure, is used to storing data in form of node.
LL is divided into 4 parts
    1. Singly LL
    2. Doubly LL
    3. Circular LL
    4. Circular Doubly LL
*/

//  Singly LL: is a type of LL, that's node structure
// [data][next->]


#include <iostream>
using namespace std;

// -- Singly LL Structure
class Node {
    
    public:

    int data;
    Node* next;

    //Constructor of the Singly LL, if have no data
    Node(){
        this->next = NULL;
    }



    //Constructor of the Singly LL, if have already a data
    Node(int d){
        this->data = d;
        this->next = NULL;
    }

};

//---------function to print the LL
void printLL(Node* head){

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
        head = temp;
        tail = temp;
    }

    //If, LL have one or more data
    tail->next = temp;
    tail = temp;
    
}

//-------------Function to find the length of LL
int LLLength(Node* head){
    
    if(head == NULL) return 0;
    if(head->next == NULL) return 1;

    int len=1;

    while(head){
        head = head->next;
        len++;
    }

    return len;
}

//-------------function to insert data at any position
void insertAtPosition(Node* head,Node* tail,int pos,int d){
    Node* temp = new Node(d);

    //case-1, if pos =1, mean, insert at head
    if(pos == 1){
        temp->next = head;
        tail = head;
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
    while(pos != 1){
        curr = curr->next;
        pos--;
    }

    //we find the node where we insert
    temp->next = curr->next;
    curr->next = temp;
}

//-----------Function to delete a node form LL
void deleteNode(Node* &head,Node* &tail,int pos){

    //case-1, delete from head
    if(pos == 1){
        Node* temp = head->next;
        head->next = NULL;

        head=temp;
        delete temp;
        return;
    }

    //case-2, need to delete from tail of any position
    int cnt = 1;
    Node* curr = head, *prev=NULL;

    int len = LLLength(head);
    if(pos > len){
        cout << "Position is out of box, can delete ele";
        return;
    }

    while(cnt != pos){
        prev = curr;
        curr = curr->next;
        cnt++;
    }


    Node* temp2 = curr->next;
    prev->next = temp2;
    curr->next = NULL;
    curr = temp2;
    delete temp2;
}


//---------function to check a LL is Circular
bool isCircular(Node* head){
    //base case
    if(head == NULL || head->next == head) return true;

    if(head->next == NULL) return false;

    Node* temp = head;

    while(temp && temp != head)
        temp = temp->next;

    if(temp == head) return true;
    return false;
}




int main(){

/*//--------- Print the Singly LL

  Node* node = new Node(3);
  Node*head = node,*tail=node;

  printLL(node); 
*/ 

/*//-----------Inserting nodes in LL

  Node* node = new Node();
  Node*head = node,*tail=node;

  insertNode(head,tail,5);

  printLL(head);
*/

//----------Function to insert node at any position
Node* node = new Node(2);
Node* head = node,*tail = node;

insertNode(head,tail,3);
insertNode(head,tail,5);
insertNode(head,tail,6);

// printLL(head);
insertAtPosition(head,tail,2,4); 


printLL(head);

// deleteNode(head,tail,5); //function to delete a node from pos
// cout << head->data << " "<<tail->data << endl;


// /*
//-------Function to check a LL is circular
string ans = isCircular(tail) == true ? "Yes, is Circular" : "No, is not Circular";
cout << "Function to check LL is Circular "<< ans <<endl;

// */

printLL(head);

    return 0;

}