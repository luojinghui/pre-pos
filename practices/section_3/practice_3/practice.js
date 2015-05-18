function create_updated_collection(collection_a, object_b) {
    var create_array = [];
    for(var i = 0; i < collection_a.length; i ++){
        var exist = false;
        var char = collection_a[i];
        var count = 1;
        for(var j = 0; j < create_array.length; j ++){
            if(create_array[j].key==char){
                create_array[j].count = create_array[j].count + 1;
                exist = true;
            }
        }
        if(!exist){
            var add = {};
            add.key = collection_a[i];
            add.count = count;
            create_array.push(add);
        }
    }
    for(var x = 0;x < create_array.length ; x ++){
             for(y = 0;y < object_b.value.length; y ++){
                 if(create_array[x].key == object_b.value[y]){
                     if(create_array[x].count/3>0){
                         create_array[x].count=create_array[x].count-parseInt(create_array[x].count/3);
                  }
             }
         }
    }
    return create_array;
}

module.exports = create_updated_collection;
