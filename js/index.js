
    	// 京东倒计时：
    	// 		每隔一秒，将秒数减少
    	// 		当秒数变0，下次执行函数时，分减少，秒变59
    	// 		当分变0，下次执行，小时减少
    	// 		
    	// 		
    	//每隔一秒，激将秒数减少
    	var timeout = document.getElementById('timeout');
    	//使用setInterval设置
    	setInterval(function(){
    		//得到当前秒数
    		//先得到秒的容器
    		var sec = timeout.children[5];
    		//获取内容，转换位数字
    		var second = parseInt(sec.innerHTML)
    		//将秒数减少
    		second--;
    		//小0时返回59
    		second=second<0?59:second;
    		//把分钟减少
    		if(second<0){
    			second=59;
    			//获取元素，获取内容，重新设置
    			var min = timeout.children[3];
    			var minutes = parseInt(min.innerHTML);
    			minutes--;
    			//当分钟小于0时，小时减少，分变59
    			if(minutes<0){
    				minutes=59;
    				var hou = timeout.children[1];
    				var hours = parseInt(hou.innerHTML);
    				hours--;
    				hours= hours<10?"0"+hours:hours;
    				hou.innerHTML=hours;

    			}

    		}
    		//将秒数重新设置
    		//		小数小于10时，补零
    		//	
    	})
  