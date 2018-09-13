### CSRF 攻击是什么？如何防范？
#### CSRF是什么?
   CSRF全称是跨站请求伪造（Cross-site request forgery）,是一种网络攻击方式，也被称为 one-clik attack或者 session riding
#### CSRF攻击原理
CSRF攻击利用网站对于用户网页浏览器的信任，挟持用户当前已登陆的Web应用程序，去执行非用户本意的操作
#### CSRF攻击防范
##### 只使用JSON API
用JavaScript发起AJAX请求是限制跨域的，并不能通过简单的 <form> 表单来发送JSON，所以，通过只接收JSON可以很大可能避免CSRF攻击。    
##### 验证HTTP Referer字段
根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。网站只需要对于每一个请求验证其 Referer值，如果是以网站的网址开头的域名，则说明该请求是来自网站自己的请求，是合法的。如果 Referer 是其他网站的话，则有可能是黑客的 CSRF 攻击，拒绝该请求。
##### 在请求地址中添加takon验证
CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 cookie 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。
这种方法要比检查 Referer 要安全一些，token 可以在用户登陆后产生并放于 session 之中，然后在每次请求时把 token 从 session 中拿出，与请求中的 token 进行比对。