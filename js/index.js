
window.onload=function(){
	var win=$(".banner1")[0];
	var imgs=$("a",win);
	console.log(imgs.length);
	var lis=$("li",win);
	var num=0;
	var huadongzuo=document.getElementsByClassName("huadongzuo")[0]
    var huadongyou=document.getElementsByClassName("huadongyou")[0]
	 
	// 自动轮播
	var t=setInterval(move,1500);
	// 改变当前下标	
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1500);
	}
  function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		// 所有的层级降低
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].className="";
		// lis[i].style.background="#fff";
		}/*当前的层级调高*/
		imgs[num].style.zIndex=3;
		lis[num].className="tot";
       // lis[i].style.background="red";
	}
	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=0;
				lis[j].className="";
			}
			imgs[this.index].style.zIndex=3;
			lis[this.index].className="tot";
		}
	}

   huadongyou.onclick=function(){
   	moveR();
   }
   function moveR(){
   	num++;
   	if(num=imgs.length){
   		imgs[i].style["z-index"]=0;
   		lis[i].style.background="gray"
   		
   	}else{
   		imgs[i].style["z-index"]=5;
   		lis[i].style.background="red"
   	}
   }
huadongzuo.onclick=function(){
   	moveL();
function moveL(){
	num--;
	if(num<0){
		num=img.length-1;
	}
	for(var i=0;i<imgs.length;i++){
		img[i].style["z-index"]=0;
		lis[i].style.background="gray";
	}imgs[num].style["z-index"]=5;
	lis[i].style.background="red"
}
}

}
