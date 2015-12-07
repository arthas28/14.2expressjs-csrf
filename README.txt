一，启动方式

	1，该次作业改用express渲染ejs模板方法，news.sql为作业的数据库。
	2，node bin/www启动服务端，通过http://localhost:3000进入登陆界面进行登录，用户（admin），密码	（123）。
	3：http://localhost:3000/system为后台操作界面。
	4：http://localhost:3000/baidunews为手机前端界面。


一，完善安全性漏洞部分

	1：public/javascripts/baiduNews.js和system.js里从服务端获取数据内容进行filterXSS过滤,有效	预防xss存储型注入攻击。xss.js为过滤库文件。

	2：定义了字符转义过滤函数htmlEncode和反转义方法函数htmlDecode过滤存储于数据库的数据，在路径		routes/database.js集中数据操作处理。

	3：app.js中增加cookie，session和csrf支持，预防csrf攻击。

	4：数据库增删改等需要数据交互的动作都改通过post方法进行传递，避免数据被截获，具体方法在public/		javascripts/system.js里体现。

	5.关于csrf部分：database.js中用户首次登录验证密码成功后会生成token随机令牌，并保存于数据库表login		      当前用户的token字段中。

		      system.js把生成的token令牌渲染至system.ejs的隐藏input中。

		      用户进行修改，记录和删除操作时，会在database.js中通过与服务器数据库中得token进行验		      证。


三，结语

	希望老师给出改善意见，谢谢！