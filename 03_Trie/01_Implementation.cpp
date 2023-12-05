//Trie: is a type of data structure which is store the strings in visualize form of graph
/*
    Ex-:
        root
        / \
       a    b
      /       \
     t          o
like this structure

*/
#include <iostream>
using namespace std;

class TrieNode{ //we create trie for strings specially
// is class of a node of Trie datastructure

    public:
    char data;
    TrieNode* children[26];
    bool isTerminal;


    TrieNode(char ch){
        data = ch;

        for(int i=0;i<26;i++)
            children[i] = NULL;
        
        isTerminal = false;

    }
};

//Now we implement the trie datastructure,
class Trie{
    public:

    TrieNode* root;

    //constructor of Trie
    Trie(){
        root = new TrieNode('\0'); // null character
    }

    //---------functiont to insert a char in Trie
    void insertChar(TrieNode* root,string word){

        //base case
        if(word.length() == 0){

            root->isTerminal = true;
            return;
        }

        //find index of starting char
        int ind = word[0]-'a'; 

        TrieNode* child;

        //finding a node
        if(root->children[ind] != NULL)
            child = root->children[ind];
        else {
            child = new TrieNode(word[0]);
            root->children[ind] = child;
        }

        insertChar(child,word.substr(1));
    }

    //------------- Function to insert a string in Trie
    void insertStr(string word){
        insertChar(root,word);

        //Time Complexity: O(L), L is length of word
    }

    //------------function to search a word
    bool searchChar(TrieNode* root,string word){
        //base case
        if(word.length() == 0) return root->isTerminal;

        int ind = word[0]-'a';

        TrieNode* child;


        //is present
        if(root->children[ind] != NULL)
            child = root->children[ind];
        else return false;

        return searchChar(child,word.substr(1));
    }


    //-----------Function to implement search a string
    bool searchStr(string word){
       return searchChar(root,word);

        //Time Complexity: O(L), L is length of word

    }

    //----------- Function to check Trie is empty
    bool isEmpty(TrieNode* root){

        for(int i=0;i<26;i++){
            if(root->children[i]) return false;
        }

        return true;
    }

    //------------function to search a word
    void removeChar(TrieNode* root,string word){

        if(!root ){
            cout << "Trie is empty "<<endl;
            return;
        }


        //base case
        if(word.length() == 0){
            root->isTerminal = false;
            return;
        }

        if(isEmpty(root)){ //with the help of this we can optimize the spaces
            delete (root);
            root = NULL;
        }


        int ind = word[0]-'a';

        TrieNode* child;


        //is present
        if(root->children[ind] != NULL)
            child = root->children[ind];
        else return;

        removeChar(child,word.substr(1));
    }


    //-----------Function to implement search a string
    void removeStr(string word){
       removeChar(root,word);

        //Time Complexity: O(L), L is length of word

    }
};



int main(){

   Trie * t = new Trie();

   t->insertStr("abced");
//    t->insertStr("time");
   t->insertStr("bat");

   //-------------function to find the abced
//    cout << " Function to check string is present "<< t->searchStr("abcd") <<endl;
//    cout << " Function to check string is present "<< t->searchStr("abced") <<endl;
   cout << " Function to check string is present "<< t->searchStr("time") <<endl;
   t->removeStr("time") ;
   cout << " Function to check string is remove " << t->searchStr("time") <<endl;

//    cout << "Function to check Trie is empty "<< isEmpty(t) <<endl;

    return 0;

}