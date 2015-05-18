function count_same_elements(collection) {
        //在这里写入代码
        var array = [];

        for(var i = 0; i < collection.length; i++) {
                var exist = false;
                var char = collection[i].length>2 ? collection[i].substring(0, 1) : collection[i];
                var summary = collection[i].length>2 ? parseInt(collection[i].substring(2)) : 1;

                for(var j = 0; j < array.length; j++) {
                        if(array[j].name === char) {
                                array[j].summary = array[j].summary + summary;
                                exist = true;
                        }
                }

                if(!exist) {
                        var temp = {};
                        temp.name = char;
                        temp.summary = summary;
                        array.push(temp);
                }
        }
        return array;
}

module.exports = count_same_elements;


/*方法2，通过截取字符串进行添加；
function count_same_elements(collection) {
    var sum_list=[];
    for(var i=0;i<collection.length;i++) {
            var summary=1;
            var name=collection[i].substring(0,1);
            if(collection[i].indexOf("-")>-1||collection[i].indexOf(":") >-1||collection[i].indexOf("[") >-1) {
                summary=collection[i].substring(2);
                summary=parseInt(summary);
             }
             var exsit=false;
             for(var k=0;k<sum_list.length;k++) {
                 if(sum_list[k].name==name) {
                          sum_list[k].summary=sum_list[k].summary+summary;
                          exsit=true;
                 }
             }
             if(!exsit) {
                    var temp={};
                    temp.name=name;
                    temp.summary=summary;
                    sum_list.push(temp);
             }
        }
        return sum_list;
}

module.exports = count_same_elements
*/
