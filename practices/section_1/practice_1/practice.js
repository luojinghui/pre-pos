function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_same=[];
  for(var i = 0; i <collection_a.length; i++){
      for(var j = 0 ;j<collection_b.length; j++){
          if(collection_a[i]==collection_b[j]){
              collection_same.push(collection_a[i]);
          }
      }

  }
  return collection_same;
}

module.exports = collect_same_elements;
