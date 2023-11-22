//  Circular LL: is a type of LL, that's node structure
// [data][next->]
//No need to tail


#include <iostream>
using namespace std;

// -- Circular LL Structure
class Node {
    
    public:

    int data;
    Node* next;

    //Constructor of the Circular LL, if have no data
    Node(){
        this->next = NULL;
    }

    //Constructor of the Circular LL, if have already a data
    Node(int d){
        this->data = d;
        this->next = NULL;
    }

    ~Node(){
        int val = this->data;
        if(this->next != NULL){
            delete next;
            next = NULL;
        }
        cout << "Memory is free for node data-> "<< val <<endl;

    }

};

//---------function to print the LL
void printLL(Node* tail){

    Node* curr = tail;

    cout <<endl;

    do{
        cout << curr->data << " ";
        curr = curr->next;

    }while(curr != tail);
    cout << endl;
}

//---------Function to insert a new node 
void insertNode(Node* &tail,int d){
    //base case, if LL is null
    Node* temp = new Node(d);

    //If we need to insert at empty LL
    if(tail == NULL){
        tail = temp;
        tail->next = tail;
        return;
    }

    //If, LL have one or more data
    tail->next = temp;
    temp->next = tail;
    tail = temp;    
}

//-------------Function to find the length of LL
int LLLength(Node* tail){
    
    if(tail == NULL) return 0;
    if(tail->next == NULL) return 1;

    int len=1;

    while(tail){
        tail = tail->next;
        len++;
    }

    return len;
}

//-------------function to insert data at after ele, assume ele is present
void insertAtPosition(Node* tail,int ele,int d){
    Node* temp = new Node(d);

    //case-1, if LL is empty
    if(temp == NULL){
        insertNode(tail,d);
        return;
    }

    //Now we find the element
    Node* curr = tail;
    while(curr->data != ele){
        curr = curr->next;
    }

    //We get the data
    temp->next = curr->next;
    curr->next = temp;
    
}

//-----------Function to delete a node form LL,assume ele is exist
void deleteNode(Node* &tail,int ele){
    //Now we find the element
    Node*prev=tail,*curr = prev->next;
    while(curr->data != ele){
        prev = curr;
        curr = curr->next;
    }

    prev->next = curr->next;
    if(tail == curr) tail = prev;
    curr->next = NULL;
    delete curr; 
    // delete curr;    
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

/*
//-----------Inserting nodes in LL

  Node* tail=NULL;

  insertNode(tail,2);
  insertNode(tail,3);

  printLL(tail);
*/

// /*
//----------Function to insert node at any position
Node* tail = NULL;

insertNode(tail,2);
insertNode(tail,3);

// printLL(tail);

insertAtPosition(tail,3,4); 

printLL(tail);

// deleteNode(tail,4); //function to delete a node from pos
// cout << tail->data << " "<<tail->data << endl;
printLL(tail);

// */

// /*
//-------Function to check a LL is circular
string ans = isCircular(tail) == true ? "Yes, is Circular" : "No, is not Circular";
cout << "Function to check LL is Circular "<< ans <<endl;

// */


printLL(tail);

    return 0;

}