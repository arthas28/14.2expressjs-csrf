/**
 * Created by YANG on 15/10/20.
 */
 $(document).ready(function(){
    var url;      //新闻链接地址
    var pic;      //图片索引url
    var title;    //新闻题目
    var content;  //新闻内容
    var topic;    //主题
    var time;     //时间
    var state;    //状态函数

    //利用ajax从后台获取数据 
    $.ajax({
        url:'/system/query',
        dataType:'json',
        type:'get',
        success:function(data){ 

            // console.info('success!');
            for(var i = 0 ; i<data.length; i++)
            {
                // 将url,pic,title,content,topic,time的内容进行xss过滤，预防xss存储型注入攻击
                url = filterXSS(data[i].url);
                pic = filterXSS(data[i].pic);
                title = filterXSS(data[i].title);
                content = filterXSS(data[i].content);
                topic = filterXSS(data[i].topic);
                time = filterXSS(data[i].time.substring(0,10));
                
                // 利用ajax传递数据，从后台取回数据后追加列表内容
                var aDiv = $('<div>').addClass('indexListItem').attr('onClick',"window.location.href='"+url+"';").appendTo($('#indexList'));
                $('<img>').attr('src',pic).appendTo(aDiv);
                var listContent = $('<div>').addClass('indexListContent').appendTo(aDiv);
                var listBottom = $('<div>').addClass('indexListBottom').appendTo(aDiv);
                $('<div>').addClass('indexListTitle').append(title).appendTo(listContent);
                $('<div>').addClass('indexListMain').append(content).appendTo(listContent);
                $('<div>').addClass('tipTopic').append(topic).appendTo(listBottom);
                $('<div>').addClass('tipTime').append(time).appendTo(listBottom);
            }
        },
        error:function(){
            alert('error!');
        }
    });
    // 数据点击更新
    $('#refresh').unbind('click').click(function(){
        console.info("!!!");
        window.location.href=window.location.href;
    });


});