# HTML学习

### 文档必备内容
一个html文件最前面，必须写上文档类型```<!DOCTYPE html>```，告诉浏览器如何解析当前文档。省略会出现兼容问题。

html为页面根元素，一个网页只能有一个```<html>```标签，可以指定语言：
* ```<html lang="en"></html>```
* ```<html lang="zh-CN"></html>```

head元素，用于放置网页的元数据。最重要的2个：
* ```<title>网页标题</title>```
* ```<meta charset="utf-8">```

body元素，用于承载网页的主体内容。

### HTML元素
有很多，记住常用的，需要别的时候再查文档：[MDN - HTML Element](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

常用元素：
* div、span、p、h、a、img、iframe
* input、button
* ul/ol/li、table/thead/tbody/tfoot/tr/th/

### HTML属性
元素内可以设置属性，有全局属性，也有在某些元素所特有的属性。
* 特有属性，如：img的src、a的href(Hypertext Reference)
* 全局属性：
  * [MDN - Global_attributes](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)
  * [网道HTML - 元素的属性](https://wangdoc.com/html/attribute)

常见的全局属性：id、class、style、title

### 字符实体
为什么需要字符实体？ 有的字符会被文档解析，但我们想要展示，因此需要使用字符实体替代。
比如：&lt;：```&lt```、 &gt;：```&gt;```

[参考 w3school-字符实体](https://www.w3school.com.cn/html/html_entities.asp)

### 元素的语义化
什么是元素语义化：用正确的元素做正确的事情。
好处：
* 使得代码易读易维护，更好地组织页面结构
* 能让语音合成工具识别网页元素的用途
* 有利于[SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)

参考：
* [HTML语义化是什么？为什么要语义化？](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)
* [网道 - 网页的语义结构](https://wangdoc.com/html/semantic)

### 字符编码
* [网道 - HTML字符编码](https://wangdoc.com/html/encode)
* [详解字符编码](https://www.jianshu.com/p/899e749be47c)

### 学习资料推荐
* [网道 HTML教程](https://wangdoc.com/html/)
* [MDN HTML教程](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* [W3school HTML教程](https://www.w3school.com.cn/html/index.asp)