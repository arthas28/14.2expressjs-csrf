$(document).ready(function(){

    var state = 5; //判断登陆验证的状态变量
    $('#exampleInputName').focus();
    // ajax发送用户名和密码至后台判断登陆凭证
    $('#loginBtn').unbind('click').click(function(e){
        
        if ($('#exampleInputName').val()&&$('#exampleInputPassword').val()) {
            e.preventDefault();  //组织默认刷新事件
            $.ajax({

                url:'/login',              
                dataType:'text',
                type:'post',
                data:{
                    name:$('#exampleInputName').val(),
                    password:$('#exampleInputPassword').val()
                },
                success:function(data){

                    if (data == '1') {
                        alert('密码错误!');
                    }else if (data == '2'){
                        alert('不存在该用户!');
                    }else{      
                        location.href = 'system';//若后台验证成功，跳转到管理页面                        
                    }
                    $('#exampleInputName').val('');
                    $('#exampleInputPassword').val('');
                    $('#exampleInputName').focus();
                    
                },
                error:function(){
                    alert('错误!');
                }
            })
        };
        
    });
});