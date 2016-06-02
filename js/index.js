window.onload=function(){
//banner 轮播
	var win=$(".banner1")[0];
	var imgs=$("a",win);
	//console.log(imgs.length);
	var lis=$("li",win);
	var num=0;
	var huadongzuo=document.getElementsByClassName("huadongzuo")[0];
	//console.log(huadongzuo)
    var huadongyou=document.getElementsByClassName("huadongyou")[0];
	 
	// 自动轮播
	var t=setInterval(move,1500);
	// 改变当前下标	
	win.onmouseover=function(){
		clearInterval(t);
		// huadongyou.style.display="block";
		// huadongzuo.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(move,1500);
		// huadongzuo.style.display="none";
  //   	huadongyou.style.display="none";
	}
  function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		// 所有的层级降低
		for(var i=0;i<imgs.length;i++){
			 //animate(imgs[i],{opacity:0},1000)
			imgs[i].style.zIndex=0;
			lis[i].className="";
		}/*当前的层级调高*/
		// animate(imgs[num],{opacity:1},1000)
		imgs[num].style.zIndex=3;
		lis[num].className="tot";
	}

	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var j=0;j<imgs.length;j++){
				//animate(imgs[i],{opacity:0})
				 imgs[j].style.zIndex=0;
				lis[j].className="";
			}
			 //animate(imgs[num],{opacity:1})
			imgs[this.index].style.zIndex=3;
			lis[this.index].className="tot";
		}
	}

   huadongyou.onclick=function(){
   	move();
   }
   huadongzuo.onclick=function(){
   	moveL();
   }
function moveL(){
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},500)
		 //imgs[i].style["z-index"]=0;
		lis[i].style.background="gray";
	}
	animate(imgs[num],{opacity:1},500)
	 //imgs[num].style["z-index"]=5;
	lis[num].style.background="red"
}



//楼层轮播

var slider=document.querySelectorAll(".slider")
//console.log(slider)
for(var j=0;j<slider.length;j++){
	(function(){
		var as=slider[j].querySelectorAll("a");
		var spans=slider[j].querySelectorAll("span");
		//console.log(spans)
		var dians=slider[j].querySelectorAll("li");
		console.log(dians)
		var num=0;
		var index=0;
		var w=as[0].offsetWidth;
		var flag=true;
		dians[index].style.background="#c81623";
		var t=setInterval(you,1000);
		slider[j].onmouseover=function(){
			clearInterval(t);
			spans[0].style.display="block";
			spans[1].style.display="block";
		}
		slider[j].onmouseout=function(){
			t=setInterval(you,1000);
			spans[0].style.display="none";
			spans[1].style.display="none";
		}


		spans[0].onclick=function(){
	    zuo();
    }
        spans[1].onclick=function(){
    	you();
    }


//zi dong bo
function you(){
		if(!flag){
			return;
		}
		flag=false;
		num++;
		if(num==as.length){
			num=0;
		}
		as[num].style.left=w+"px";
		animate(as[index],{left:-w},600,function(){
			flag=true;
		})
		animate(as[num],{left:0},600)
		for(var i=0;i<as.length;i++){
			dians[i].style.background="#3e3e3e"; 
		}
		    dians[num].style.background="red";
		    index=num;
	}


function zuo(){
	if(!flag){
			return;
		}
		flag=false;
		num--;
		if(num<0){
			num=as.length-1;
		}
		as[num].style.left=-w+"px";
		animate(as[index],{left:w},600,function(){
			flag=true;
		})
		animate(as[num],{left:0},600)
		for(var i=0;i<as.length;i++){
		  dians[i].style.background="#ccc"; 
		}
		    dians[num].style.background="red";
		    index=num;
}

//yuan dian
for(var i=0;i<dians.length;i++){
    dians[i].index=i;
   dians[i].onclick=function(){
     if(index==this.index){
      return;                                 
     }
      for(var i=0;i<as.length;i++){
      dians[i].style.background="#3e3e3e";
    }
      dians[this.index].style.background="red";
      as[this.index].style.left=w+"px";
      
      animate(as[index],{left:-w},600 );
      animate(as[this.index],{left:0},600);
      index=num=this.index;
    }
}
	})()
}















}
