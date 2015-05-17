function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
   for(var i=0;i<collection_a.length;i++){
        for(var k=0;k<object_b.value.length;k++){
             if(collection_a[i].key==object_b.value[k]){
                        collection_a[i].count -- ;
             }
      }
   }
   return collection_a;
}

module.exports = create_updated_collection;
