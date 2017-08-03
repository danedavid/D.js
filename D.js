/* 
    Library : D.js
    Used to create and manipulate Linked Lists
    
    Two function constructors:
        LinkedList() - create new linked list
        LinkedListNode() - create new node
        
    Three methods:
        printLinkedList()
        insertAtEnd()
        insertAtBeginning()
*/
(function (window) {
    //strict mode
    "use strict";
    
    //function that defines and returns object 'D'
    function defineD() {
        let D = {};
        
        //IIFE to log that the D object has been created
        (function() {
            if( D ) {
                console.log("D is created!");
            }
        })();
        
        //function constructor for new Linked List
        D.LinkedList = function() {
            this.length = 0;
            this.begin = null;
            
            //method to print the linked list
            this.printLinkedList = function() {
                //check if linked list is empty
                if( this.begin === null ) {
                    console.log("Linked List empty!");
                    return null;
                } else {
                    let linkedListString = "Start";
                    for(let i = this.begin; i !== null; i = i.nextElement ) {
                        linkedListString += " -> " + i.val.toString();
                    }
                    console.log(linkedListString);
                }
            }
            
            //method to insert new LinkedListNode at the end
            this.insertAtEnd = function(node) {
                //check if argument is an instance of LinkedListNode
                if(!( node instanceof D.LinkedListNode )) {
                    console.log("Only instances of D.LinkedListNode can be inserted!");
                    return null;
                }
                
                if( this.begin === null ){
                    this.begin = node;
                } else {
                    let i;
                    for(i = this.begin; i.nextElement !== null; i = i.nextElement );
                    i.nextElement = node;
                }
                node.nextElement = null;
                this.length++;
            }
            
            //method to insert new LinkedListNode at the beginning
            this.insertAtBeginning = function(node) {
                //check if argument is an instance of LinkedListNode
                if(!( node instanceof D.LinkedListNode )) {
                    console.log("Only instances of D.LinkedListNode can be inserted!");
                    return null;
                }
                if( this.begin === null ) {
                    this.begin = node;
                } else {
                    node.nextElement = this.begin;
                    this.begin = node;
                }
                this.length++;
            }
        }
        
        //function constructor for new node
        D.LinkedListNode = function(val) {
            this.val = val;
            this.nextElement = null;
        }
        
        return D;
    }
    
    //check if D is already defined at global scope
    if( (typeof window.D) === "undefined" ) {
        window.D = defineD();
    } else {
        console.log("D already defined");
    }
    
})(window);