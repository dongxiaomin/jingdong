//  getClass(classname)  获取类名
// className            指定的类名  
function getClass(className){
    if(document.getElementsByClassName){
    	return document.getElementsByClassName(className);
    }else{
    	var all=document.getElementsByTagName("*");
    	var newarr=[];
    	for(var i=0;i<all.length;i++){
    		if(checkClass(all[i] ,className)){
                   newarr.push(all[i] );
    		}
    	}return newarr;
    }
}



/*checkClass(obj,classname)
obj 当前元素
classname   指定的classname
*/
function  checkClass(obj,classname){
	   var arrC=obj.className.split(" ");
	   for(var i=0;i<arrC.length;i++){
         if(arrC[i] ==classname){
         	return true;
         }
	   }
	   return false;
}




function getClass(className,range){
	var range=range?range:document;
    if(range.getElementsByClassName){
    	return range.getElementsByClassName(className);
    }else{
    	var all=range.getElementsByTagName("*");
    	var newarr=[];
    	for(var i=0;i<all.length;i++){
    		if(checkClass(all[i] ,className)){
                   newarr.push(all[i] );
    		}
    	}return newarr;
    }

}




  /*
     操作内容
     getContent  内容
     obj   对象
     val    指定的名字
    */
   
function getContent(obj,val){
  if(obj.textContent){
    if(val==undefined){
      return obj.textContent
    }else{
      obj.textContent=val;
    }
  }else{
    if(val==undefined){
      return obj.innerText;
    }else{
      obj.innerText=val;
    }
  }
}






/*
  操作style,
  getstyle  样式
     obj    指定的对象
     attr   属性
    */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
       return getComputedStyle(obj,null)[attr];
    }

}


/*#one .one div*/

function $(selecter,ranges){
  //selcter是个字符串，检查字符串的第一个字符
  //返回在指定位置的字符 （charAt(位置)）
  //定义一个变量first等于字符串的第一个字符
  var ranges=ranges?ranges:document;
  var first=selecter.charAt(0);
  //判断第一个字符
  if(first=="."){
    //引用前面封装好的getClass(className)函数
    //.one 截取.后的字符（substring(start,end)）
    return getClass(selecter.substring(1),ranges);
  }else if(first=="#"){
    return document.getElementById(selecter.substring(1));
    //正则
  }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
    return ranges.getElementsByTagName(selecter)
  }
}
