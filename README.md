# Vue2.0+Node.js+MongoDB打造的商城系统
### 商城采用前后端分离的开发方式（SPA）
前端Vue2.0全家桶；<br>
整个商城后台通过Node.js进行实现，通过Express框架实现后端的REST接口，并以json的形式进行输出；<br>
MongoDB以最常用的数据传输格式json进行数据存储，并且可以和Node.js进行无缝集成.<br>

> 前端技术栈:Vue全家桶/ES6<br>
> 后端技术栈:Node.js/Express<br>
> 数据库:MongoDB<br>

页面:
- 商品列表页面
- 购物车列表页面
- 地址页面
- 订单确认页面
- 订单成功页面

实现的功能：
- 图片懒加载
- 商品列表分页和排序功能
- 价格过滤功能
- 加入购物车功能
- 登录和退出功能
- 商品删除和修改功能
- 购物车全选和商品实时计算功能
- 地址列表展开
- 地址设置默认和删除
- Vuex实现登录和购物车数量状态

项目启动：
mongodb建一个名为db_demo的数据库，在这个数据库中添加两个集合分别为goods、users，导入的数据在resource文件夹中(dumall-goods，dumall-users)<br>
进入项目文件<br>
npm install <br>
npm run dev<br>
另开一命令窗口启动后端<br>
node server/bin/www<br>
