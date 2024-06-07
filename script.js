class Node{
    value;
    next;

    constructor(){
        this.value=null;
        this.next=null;
    }
    set value(v){
        this.value=v;
    }
    set next(n){
        this.next=n;
    }
    get value(){
        return this.value;
    }
    get next(){
        return this.next;
    }
}

class LinkedList{
    head;
    tail;
    length=-1;

    constructor(){
        this.length++;
        this.head=new Node();
        this.tail=this.head;
    }

    append(val){
        let node = new Node();
        node.value=val;
        node.next=null;
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }

    prepend(val){
        let node=new Node();
        node.value=val;
        node.next=this.head;
        this.head=node;
        this.length++;
    }

    size(){
        return this.length;
    }

    get head(){
        return this.head;
    }

    get tail(){
        return this.tail;
    }

    at(index){
        let tmp=this.head;
        let counter=0;
        while(tmp!==null){
            if(counter===index){
                return tmp;
            }
            counter++;
            tmp=tmp.next;
        }
    }

    pop(){
        let oldTail=this.tail;
        let newTail= this.at(this.length-1);
        newTail.next=null;
        this.tail=newTail;
        this.length--;
        return oldTail;
    }

    contains(val){
        let tmp=this.head;
        for(let i =0;i<this.length;i++){
            if(tmp.value === val)
                return true;
            else{
                tmp=tmp.next;
            }
        }
        return false;
    }

    find(val){
        let tmp=this.head;
        for(let i=0;i<this.length;i++){
            if (tmp.value==val)
                return i;
            else{
                tmp=tmp.next;
            }
        }
        return null;
    }

    toString(){
        let tmp=this.head.next;
        let str=""
        for(let i=0;i<this.length;i++){            
            str+=('( '+tmp.value+' ) -> ');
            tmp=tmp.next;

            if(tmp===null){
                str+='( null )';
            }
        }
        return str;
    }

    insertAt(idx,val){
        if(idx>this.length){
            this.append(val);
            return;
        }
        if(idx===0){
            this.prepend(val);
            return;
        }
        let old=this.at(idx);
        let newNode=new Node();
        newNode.value=val;
        newNode.next=old.next;
        old.next=newNode;
        this.length++;
    }
    removeAt(idx){
        if(idx>this.length){
            console.log('Index out of bound. Current list length: '+this.length);
        }
        let before=this.at(idx-1);
        let after=this.at(idx+1);
        before.next=after;
        this.length--;
    }
}

myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.removeAt(1);
console.log(myList.toString());