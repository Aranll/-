[从输入URL到页面加载发生了什么](https://segmentfault.com/a/1190000006879700)
- DNS解析
- TCP连接
- 发送HTTP请求
- 服务器处理请求并返回HTTP报文
- 浏览器解析渲染页面
- 连接结束

## DNS解析
一个网址到IP地址的转换，这个过程就是DNS解析
### 解析过程
DNS解析是一个递归查询的过程

![DNS解析查询ip流程图.png](https://upload-images.jianshu.io/upload_images/2885541-ec46dfe611942116.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上述图片是查找www.google.com的IP地址过程。首先在本地域名服务器中查询IP地址，过程如下
1. 在浏览器的DNS缓存中查找
2. 在本地电脑的host文件中查找
3. 
如果在本地域名服务器没有找到的情况下，再向外查询IP地址，过程如下
1. 根域名服务器（.）
2. com顶级域名服务器（com）
3. google.com域名服务器 （google.com）
4. www.goole.com域名服务器 （www.google.com）

[www.google.com](https://www.google.com/)的真正网址是[www.google.com.](https://www.google.com/),默认情况下所有的网址的最后以为都是".","."默认可被忽略,浏览器在请求DNS的时候自动加上.网址的真正解析过程为：


. --> .com --> google.com --> www.google.com

### DNS优化
#### DNS缓存
浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存
#### DNS负载均衡
CDN（Content Delivery Network） DNS的重定向技术,DNS服务器会返回一个跟用户最接近的点的IP地址给用户，CDN节点的服务器负责响应用户的请求，提供做需要的内容

### TCP连接
TCP为传输层协议

### HTTPS协议
HTTPS协议的本质就是HTTP+SSL(or TLS)
HTTP报文是包裹在TCP报文中发送的，服务器端收到TCP报文时会解包提取出HTTP报文
在HTTP报文进入TCP之前，先使用SSL对HTTP报文进行加密

### HTTPS过程
HTTPS在传输数据之前需要客户端与服务器进行一个握手([TLS/SSL握手](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)),在握手过程中将确立双方加密传输数据的密码信息。

### HTTP请求
前端眼中的HTTP，发生在客户端
由“请求行”“请求报文”“请求正文”三部分组成
发送HTTP请求的过程就是构建HTTP请求报文并通过TCP协议发送到服务器指定端口（HTTP协议80/8080，HTTPS协议443）

#### 请求行
Method Request-URL HTTP-Version CRLF
```javaScript
eg: GET index.html HTTP/1.1
```
常用的方法有：GET,POST,PUT,DELETE,OPTIONS,HEAD
TODO:
- GET和POST有什么区别?

#### 请求报头
请求报头允许客户端向服务器传递请求的附加信息和客户端自身的信息

#### 请求正文
当使用POST方法时，通常需要客户端向服务器传递数据，这些数据就储存在请求正文中。现在WEB应用通常采用Rest架构，请求的数据格式一般为json。这时就需要设置Content-Type:application/json。

### 服务器处理请求并返回HTTP报文
后端工程师眼中的HTTP。s