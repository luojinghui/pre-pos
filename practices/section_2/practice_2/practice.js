function count_same_elements(collection) {
  var sum={};
 var sum_list=[];
 var test=true;
 for (i=0;i<collection.length-1;i++){
   if(test){
     sum={key:collection[i],count:0};//生成（替换上一条）一条sum数据。
     test=false;
   }
   sum.count=sum.count+1;//统计相同字母的数量。
   if(collection[i]!=collection[i+1]){
     sum_list.push(sum);//将sum数据存入sum_list中。
     test=true;
     }
 }
 var letter=collection[collection.length-1].substring(0, 1);
 var num=parseInt(collection[collection.length-1].substring(collection[collection.length-1].length-1));
 var sum1={key:letter,count:num};
 sum_list.push(sum1);
 return sum_list;
}
module.exports = count_same_elements;
