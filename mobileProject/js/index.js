$(function(){
    //初始化数据
    var direction={up:1,right:2,down:3,left:4}
    var now={col:1,row:1}
    var last={col:0,row:0}

    var isMove=false;
    //向上滑动
    $('.page').swipeUp(function(){
        if(isMove){
            return;
        }
        //计算滑动后lastPage的坐标
        last.col=now.col
        last.row=now.row
        if(last.col<5){

            now.col=last.col+1;
            now.row=last.row
            movePage(direction.up)
        }
    })
    //向下
    $('.page').swipeDown(function(){
        if(isMove){
            return;
        }
        last.col=now.col
        last.row=now.row
        if(last.col > 1){
            now.col=last.col-1;
            now.row=last.row
            movePage(direction.down)
        }
    })
    // 向左
    $('.page').swipeLeft(function(){
        if(isMove){
            return;
        }
        last.col=now.col
        last.row=now.row

        if(last.col > 1 && last.col< 5 && last.row==1){
            console.log(last.row)
            now.col=last.col;
            now.row=last.row+1
            movePage(direction.left)

        }
    })
    // 向右
    $('.page').swipeRight(function(){
        if(isMove){
            return;
        }
        last.col=now.col
        last.row=now.row
        if(last.col > 1 && last.col<5 && last.row==2){
            now.col=last.col;
            now.row=last.row-1
            movePage(direction.right)
        }
    })

    //滑动功能函数
    function movePage(dir){

        //定义初始页面
        var lastPage = '.page-' + last.col + '-' + last.row;
        var nowPage = '.page-' + now.col + '-' + now.row;
    console.log(lastPage,nowPage)
    var inMove="";
    var outMove="";
       switch(dir){
           case direction.up:
               outMove = 'pt-page-moveToTop';
               inMove = 'pt-page-moveFromBottom';
               break;
           case direction.right:
               inMove="pt-page-moveFromLeft"
               outMove="pt-page-moveToRight"
               break;
           case direction.down:
               inMove="pt-page-moveFromTop"
               outMove="pt-page-moveToBottom"
               break;
           case direction.left:
               outMove = 'pt-page-moveToLeft';
               inMove = 'pt-page-moveFromRight';
               break;
       }
        //为页面添加动画开始的类
        $(nowPage).removeClass('hide');
        $(lastPage).addClass(outMove);
        $(nowPage).addClass(inMove);
        isMove=true;
        setTimeout(function(){

            $(lastPage).removeClass(outMove)
            $(lastPage).addClass('hide')
            $(lastPage).find('img').addClass('hide')
//页面出来600毫秒后img显示
            $(nowPage).find('img').removeClass('hide')
            $(nowPage).removeClass(inMove)
            isMove=false;
        },600)
    }
})