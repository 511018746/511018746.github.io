/**
 * Created by u on 2018/6/15.
 */
window.onload=function () {
    var btn = document.querySelectorAll("nav >ul >li")
    var a = document.querySelectorAll("nav >ul >li>a")
    var div= document.querySelector("#section")

    var imgAll=document.querySelectorAll(".item-img")  //所有图片
    var imghover=document.querySelectorAll(".hover-item")

    var imgBg=document.querySelector(".img-bg") //整体半透明背景
    var centerIme=document.querySelector(".center-img") //图片容器
    // var hoverItem=document.querySelector(".hover-item") //提示文字
    var bigImg=document.querySelector(".big-img")
    var img=document.getElementById("two")
    var moban=document.querySelector(".moban")


    var imgNumber=document.querySelector(".img-number")  //显示图片是第几张
    var close=document.querySelector(".close")

    var left=document.querySelector(".left-right>.left")
    var rigth=document.querySelector(".left-right>.right")


    // 导航栏按钮
    function nav() {
        for (var i = 0; i < btn.length; i++) {
            var index = i
            btn[i].index = index
            btn[i].onclick = function () {
                div.style.transform="translateX("+this.index*(-100)+"vw)"
            }
        }
    }
    nav()


    // 第四页图片放大按钮
    function imgBtn() {
        var time
        // alert(imgAll[0])
        for(var i=0;i<imghover.length;i++){
            clearTimeout(time)
            var index=i
            imghover[i].index=index
            imghover[i].onclick=function (ev) {
                var text=this.index+1

                //判断是pc还是移动端
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    imghover.style.display="block"
                }else{
                    // 点击显示  pc
                    imgBg.style.display="block"
                    centerIme.style.display="block"
                    var time=setTimeout(function(){
                        imgBg.style.opacity="0.7"
                        centerIme.style.opacity="1"
                    },200);


                    var onimg=document.getElementById("img"+text)  //小图片
                    var imgSrc =onimg.getAttribute("src");  //获取到小图片的src
                    var newsrc=insert_flg(imgSrc)  //小图和大图的src不一样所以我就通过一个函数修改这个src
                    img.setAttribute('src',newsrc) // 设置为大图的src
                               
                    imgNumber.innerHTML="Image "+text+" of 9"
                    img.style.animation="myfirst 5s"


//					左侧按钮点击事件
                    left.onclick=function () {
//                 var text=this.index+1  
//					当前点击的图片下标  点击左侧的按钮text是递减  右侧递增
                        text=text-1  
                        if (text>=1) {
                            var leftimg = document.getElementById("img" + text).getAttribute("src") 
                            				//通过id 找到点击的那个图片
                            var leftnewsrc = insert_flg(leftimg)
                            				//小图和大图名字不一样，所以我写了个函数改变一下src      				
                            img.setAttribute('src', leftnewsrc) 
                            				//给大图添加src		
                            imgNumber.innerHTML="Image "+text+" of 9"
                        }else{
                           text=9
                       	  leftimg = document.getElementById("img" + text).getAttribute("src") 	
                            leftnewsrc = insert_flg(leftimg)					
                            img.setAttribute('src', leftnewsrc) 
                            return false  
                        }

                    }

                    rigth.onclick=function () {

                        text=text+1
                        if (text <= 9){
                            var rigthimg=document.getElementById("img"+text).getAttribute("src")  //通过id 找到点击的那个图片
                            var rigthnewsrc=insert_flg(rigthimg)  //添加big
                            img.setAttribute('src',rigthnewsrc)
                            imgNumber.innerHTML="Image "+text+" of 9"

                        }else{
                            text=1
                              rigthimg=document.getElementById("img"+text).getAttribute("src")  //通过id 找到点击的那个图片
                             rigthnewsrc=insert_flg(rigthimg)  //添加big
                            img.setAttribute('src',rigthnewsrc)
                            return false
                        }



                    }
                }
            }
        }


        close.onclick=function () {
            var time;
            clearTimeout(time)
            imgBg.style.opacity="0"
            centerIme.style.opacity="0"


            var time=setTimeout(function(){
                imgBg.style.display="none"
                centerIme.style.display="none"
            },800);
        }
    }

    imgBtn()

    // 参数说明：str表示原字符串变量
    function insert_flg(str){
        var pattern = "item.jpg";
        str = str.replace(new RegExp(pattern), "");
        str+="big_item.jpg"
        return str
    }



}