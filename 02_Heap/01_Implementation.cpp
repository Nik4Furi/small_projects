/*

Heap: is a type of data structure is satisfy
    -> CBT property
    -> Insert element from left forward

Types: 1. Min heap  2. Max Heap

*/

#include <iostream>
using namespace std;

class heap
{
public:
    int arr[100];
    int siz;

    // Constructor,Max Heap
    heap()
    {
        arr[0] = -1;
        siz = 0;
    }

    // Function to insert the ele in heap

    void insert(int val) //tc O(logn), becase of i/2 comparision
    {
        // 1. Insert at the end
        siz++;
        int ind = siz;
        arr[ind] = val;

        // Now move its right position
        while (ind > 1)
        {
            int parent = ind / 2;

            // compare
            if (arr[parent] < arr[ind])
                swap(arr[parent], arr[ind]);
            else
                return;
        }
    }

    //--------------Function to print the heap
    void print()
    {
        for (int i = 1; i <= siz; i++)
            cout << arr[i] << " ";

        cout << endl <<endl;
    }

    //----------- Deletion in heap, we always delete with root node
    void deleteNode(){ //tC nlogn
        //base case
        if(siz <= 1){
            cout << " No node is exist"<<endl;
            return;
        }

        
        //1. put root node with last node

        arr[1] = arr[siz];
        siz--;

        //2. Move root node to its correct position
        int i = 1;
        while(i < siz){ 
            int left = 2*i;
            int right = 2*i+1;

            if(left < siz && arr[left] > arr[i]){
                swap(arr[left],arr[i]);
                i = left;
            }

            else if(right < siz && arr[right] > arr[i]){
                swap(arr[right],arr[i]);
                i = right;
            }

            else return;

        }
    }

    //-----------function to implement arr into heapify
    


};

int main()
{

    heap h;

    h.insert(60);
    h.insert(50);
    h.insert(20);
    h.insert(30);
    h.insert(40);


    cout << "Print heap "<<endl;
    h.print();

    h.deleteNode();


    cout << "Print heap after delete "<<endl;
    h.print();

    

    return 0;
}