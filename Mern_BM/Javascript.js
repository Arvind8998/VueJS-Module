function show(...args){
    console.log(args instanceof Object, arguments instanceof Object)
    }

    show(10,20,30,"eqwe",{'a':'wwwq'})
     true

    instanceof Object
    false
    var a = 1;
    
    null instanceof Object
    false

    typeof null
    "object"

    // All non primitives are type of object in js
    Array instanceof Object
    true

    Object instanceof Object
    true


    typeof Array
    "function"
    typeof Object
    "function"
    
    function ab(){
    }
    var a = new ab()
    
    typeof ab
    "function"