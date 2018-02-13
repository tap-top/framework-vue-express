####安装express-generator
    npm install express-generator -g
####快速搭建项目骨架
    express --view=ejs 项目名
    
####打开项目
    cd 项目名
    
    //安装依赖
    npm install
    //运行项目
    npm start

1.调接口报跨域问题，怎么整？
> 打开app.js, 插入下面的代码，解决跨域的问题

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

2.如何添加一个接口？
> 找到routes文件夹 下面有index.js 和 users.js
> 找到app.js,发现下面的两行代码，意思是链接是/的时候，访问index.js,
> 链接是/user 访问user.js

    app.use('/', index);
    app.use('/users', users);
    
>那么修改index.js。router.get表示get请求，router.post表示post请求
>res.send 表示返回数据 这里返回swiperData，查看文件可以知道这是一个json数据
>这样后台的数据就能通过接口访问了。
>浏览器输入http://localhost:3000/mobile/swiper, json数据出来啦

    router.get('/mobile/swiper', function(req, res, next) {
        res.send(JSON.stringify(swiperData));
    });