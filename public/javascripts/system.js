$(document).ready(function(){
//
    var url;      //新闻链接地址
    var pic;      //图片索引url
    var title;    //新闻题目
    var content;  //新闻内容
    var topic;    //主题
    var time;     //时间
    var id;       //主键索引
    var state;    //增删改查判断状态

    // 字符转义数据反编码函数
    function htmlDecode(str) {  
        return str.replace(/\&quot;/g,"\"").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&nbsp;/g," ").replace(/\&amp;/g,"&");  
    } 

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

                id = data[i].id;
                // 利用ajax传递数据，从后台取回数据后追加列表内容
                var atr = $('<tr>').attr({'onClick':"window.location.href='"+url+"';",'target':'_blank'}).appendTo($('#myTable'));
                var atd = $('<td>').appendTo(atr);
                $('<img>').attr('src','../'+pic).appendTo(atd);
                var listContent = $('<div>').addClass('indexListContent').appendTo(atd);
                var listBottom = $('<div>').addClass('indexListBottom').appendTo(atd);
                $('<div>').addClass('indexListTitle').append(title).appendTo(listContent);
                $('<div>').addClass('indexListMain').append(content).appendTo(listContent);
                $('<div>').addClass('tipTopic').append(topic).appendTo(listBottom);
                $('<div>').addClass('tipTime').append(time).appendTo(listBottom);
                // 追加删除选项下拉列表框内容
                $('<option>').attr('value',id).append(id +':'+title).appendTo($('#selectDel'));
            }
        },
        error:function(){
            alert('error!');
        }
    });
    // 录入新闻内容项，利用ajax传送后台数据
    $('#msgBtn').unbind('click').click(function(e){
        // e.preventDefault();
        if ($('#url').val()&&$('#pic').val()&&$('#title').val()&&$('#content').val()&&$('#time').val()&&$('#topic').val()) {
            $.ajax({
                url:'/system/insert',
                data:{
                    url:$('#url').val(),
                    pic:$('#pic').val(),
                    title:$('#title').val(),
                    content:$('#content').val(),
                    time:$('#time').val(),
                    topic:$('#topic').val(),
                    token:$('#token').val(),
                },
                dataType:'json',
                type:'post',
                success:function(data){
                    alert('录入成功!');
                    $('#url').val('');
                    $('#title').val('');
                    $('#content').val('');
                    $('#time').val('');
                },
                error:function(){
                    alert('error!');
                }
            });
        };
    });
    // 修改新闻内容项，利用ajax传送后台数据
    $('#updBtn').unbind('click').click(function(e){

        if ($('#selectDel').val()!='请选择...') {
            $.ajax({
                url:'/system/update',
                data:{
                    url:$('#url').val(),
                    pic:$('#pic').val(),
                    title:$('#title').val(),
                    content:$('#content').val(),
                    time:$('#time').val(),
                    topic:$('#topic').val(),
                    id:$('#selectDel').val(),
                    token:$('#token').val(),
                },
                dataType:'json',
                type:'post',
                success:function(data){
                    alert('录入成功!');
                    $('#url').val('');
                    $('#pic').val('');
                    $('#title').val('');
                    $('#content').val('');
                    $('#time').val('');
                    $('#topic').val('');
                    $('#selectDel').prop('selectedIndex', 0);
                },
                error:function(data){
                    alert('error!');
                }
            });
        };
    });
    // 删除新闻内容项，利用ajax传送后台数据
    $('#delBtn').unbind('click').click(function(e){
        // e.preventDefault();
        if ($('#selectDel').val()!='请选择...') {
            $.ajax({
                url:'/system/delete',
                dataType:'json',
                type:'post',
                data:{
                    del:$('#selectDel').val(),
                    token:$('#token').val(),
                },
                success:function(){
                    alert('删除成功!');
                    $('#url').val('');
                    $('#pic').val('');
                    $('#title').val('');
                    $('#content').val('');
                    $('#topic').val('');
                    $('#time').val('');
                    $('#selectDel').prop('selectedIndex', 0);
                },
                error:function(){
                    alert('error!');
                }
            });
        }else{
            e.preventDefault();
        };
    });
    //选中select元素时从后台读取数据显示在消息管理处 
    $("select").change(function(){
        $.ajax({
                url:'/system/select',
                dataType:'json',
                type:'post',
                data:{
                    index:$('#selectDel').val()
                },
                success:function(data){

                    //将数据库取到过滤后的数据进行反编码，显示用户所需数据至html页面
                    $('#url').val(htmlDecode(data[0].url));
                    $('#pic').val(htmlDecode(data[0].pic));
                    $('#title').val(htmlDecode(data[0].title));
                    $('#content').val(htmlDecode(data[0].content));
                    $('#topic').val(htmlDecode(data[0].topic));
                    $('#time').val(htmlDecode(data[0].time.substring(0,10)));
                },
                error:function(){
                    alert('error!');
                }
        });
    });
    // 注销用户
    $('#btn_exit').unbind('click').click(function(e){

        $.ajax({
            url:'/logout',
            dataType:'text',
            type:'get',
            success:function(data){
                console.info('success!');
                location.href = ' ';
            },
            error:function(){
                alert('error!');
            }
        });
    });

});