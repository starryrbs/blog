(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{162:function(E,B,t){"use strict";t.r(B);var A=t(2),a=Object(A.a)({},function(){var E=this,B=E.$createElement,t=E._self._c||B;return t("ContentSlotsDistributor",{attrs:{"slot-key":E.$parent.slotKey}},[t("blockquote",[t("p",[E._v("不知道你是否也有想过完全用自己的代码实现自己的个人博客？定制专属 UI、定制专属逻辑、在信息爆炸的时代真正地沉淀下属于自己的东西。我也曾经历了同样的纠结，最终下定决心做了自己的个人博客。虽然过程曲折，但一路风景很好、小路很多。看着被自己全新改版的网站，心里只有满足感，也笃定了知识分享和结识更多好友的初衷。就以此篇记录下网站 UI 改版的过程和感受吧，缅怀过去，勿忘初心。")])]),E._v(" "),t("h2",{attrs:{id:"_1-前世"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前世","aria-hidden":"true"}},[E._v("#")]),E._v(" 1. 前世")]),E._v(" "),t("p",[E._v("从 2018 年 1 月份开始，因为喜欢记录、分享，还想认识更多有趣的人，我开始着手搭建自己的个人网站。")]),E._v(" "),t("p",[E._v("最初版本的小站的 UI 设计和代码搭建花费了大概 2 个月的时间。当时对 UI 设计没有太多好的 idea，唯一能做的就是多去别人博客看看 UI 设计，来汲取灵感。")]),E._v(" "),t("p",[E._v("所以第一版的网页 UI 参考了 NexT 框架 、EvanYou 首页的 UI 设计，为了方便，使用了 Element-UI 来实现了后台管理系统（用来进行文章管理）。")]),E._v(" "),t("blockquote",[t("p",[E._v("可以这么说，这个阶段主要是保证网站运行起来，有个衣服穿。至于衣服好不好看、协不协调，并不是很重要。")])]),E._v(" "),t("h2",{attrs:{id:"_2-情缘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-情缘","aria-hidden":"true"}},[E._v("#")]),E._v(" 2. 情缘")]),E._v(" "),t("p",[E._v("网站第一次搭建起来，还是很开心的(*^▽^*)。完完全全是依靠自己的双手，一行行写出来的代码。")]),E._v(" "),t("p",[E._v("是的，当时就是想设计专属自己的风格，所以没有使用任何的开源博客框架的代码。"),t("strong",[E._v("那 2 个月就是对着 Vue 和 Koa 的文档写出来了网站的前后端，也是第一次买服务器、备案网站、做反向代理、读 CDN 文档、学 Webpack、做 SEO，怀念那些时光，让现在的网站有了基础。")])]),E._v(" "),t("h2",{attrs:{id:"_3-初识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-初识","aria-hidden":"true"}},[E._v("#")]),E._v(" 3. 初识")]),E._v(" "),t("h3",{attrs:{id:"_3-1-博客系统界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-博客系统界面","aria-hidden":"true"}},[E._v("#")]),E._v(" 3.1 博客系统界面")]),E._v(" "),t("p",[E._v("经过奋战，网站成功搭建起来。"),t("strong",[E._v("首页的 UI")]),E._v("就是下面这样：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/1.png",alt:""}})]),E._v(" "),t("p",[E._v("是的，看过尤大大博客的都知道，这是他的首页样式，我就直接拿过来了。")]),E._v(" "),t("p",[E._v("而除了首页，其他所有的页面，都是采用的类似于阿里云平台控制台的 UI：屏幕左边放置导航栏。")]),E._v(" "),t("p",[E._v("这是文章浏览页面的 UI："),t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/2.png",alt:""}})]),E._v(" "),t("p",[E._v("而一个博客，为了提高 seo 和反链数，友链最重要。友链界面是 UI: "),t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/3.png",alt:""}})]),E._v(" "),t("p",[E._v("和友链界面类似，介绍页面的 UI 设计也是这种时间线的方式："),t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/4.png",alt:""}})]),E._v(" "),t("h3",{attrs:{id:"_3-2-管理系统界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-管理系统界面","aria-hidden":"true"}},[E._v("#")]),E._v(" 3.2 管理系统界面")]),E._v(" "),t("p",[E._v("管理界面的 UI 设计没有太出彩，直接借用了 Element-UI 的表格样式。因为管理界面最重要是保证数据交互的逻辑正确性，在此基础上，一个简洁优美的 UI 就足够了。")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/5.png",alt:""}})]),E._v(" "),t("h3",{attrs:{id:"_3-3-听歌台界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-听歌台界面","aria-hidden":"true"}},[E._v("#")]),E._v(" 3.3 听歌台界面")]),E._v(" "),t("p",[E._v("为什么要自己从 0 开始搭建博客？很重要的一部分原因是要方便 DIY，做自己喜欢的东西。我喜欢听歌，因此一拍脑门，就做了个听歌台。")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/6.png",alt:""}})]),E._v(" "),t("p",[E._v("当然，他是移动端兼容的。这里就不放置界面了。")]),E._v(" "),t("h3",{attrs:{id:"_3-4-小小心思"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-小小心思","aria-hidden":"true"}},[E._v("#")]),E._v(" 3.4 小小心思")]),E._v(" "),t("p",[E._v("除了大的页面架构，根据我当时的设想，我为博客浏览页面做了分页系统+节流缓存，当然，使用的是 Element-UI 的组件：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/7.png",alt:""}})]),E._v(" "),t("p",[E._v("除此之外，每篇文章都可以导出（右下角按钮），并且有二维码分享的按钮（后来发现没什么用）：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/8.png",alt:""}})]),E._v(" "),t("h2",{attrs:{id:"_4-再见-不再留恋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-再见-不再留恋","aria-hidden":"true"}},[E._v("#")]),E._v(" 4. 再见, 不再留恋")]),E._v(" "),t("p",[E._v("网站运行到 2018 年暑假，一站式问题解决的问题逐渐开始凸显，源码变成代码怪兽，开始变得难以维护。")]),E._v(" "),t("p",[E._v("此外，初期东借鉴、西借鉴后杂糅而成的网站的 UI，显得那么不搭。乱七八糟的风格让人看着心烦。")]),E._v(" "),t("p",[E._v("网站 UI 重新设计和代码重构，迫在眉睫。")]),E._v(" "),t("h2",{attrs:{id:"_5-今生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-今生","aria-hidden":"true"}},[E._v("#")]),E._v(" 5. 今生")]),E._v(" "),t("p",[E._v("吸取了之前的教训，意识到了网站应该突出主体功能。因此，管理系统、听歌台被抽离成了单独的应用，后台利用 Nginx 做反向代理，用二级域名记性访问。")]),E._v(" "),t("p",[E._v("除了架构，杂糅的 UI 也是诟病之一。这次果断的选择了极简主义的“扁平化”设计风格，很大程度参考了 Hacker 的 UI 设计，再次基础上，借助卡片和一些好看的小动态重新设计了友链、归档等界面。")]),E._v(" "),t("p",[E._v("我觉得，现在的样子，才是一个技术博客该有的模样。")]),E._v(" "),t("h2",{attrs:{id:"_6-您好-godbmw-com"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-您好-godbmw-com","aria-hidden":"true"}},[E._v("#")]),E._v(" 6. 您好, godbmw.com!")]),E._v(" "),t("h3",{attrs:{id:"_6-1-首页：大巧无锋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-首页：大巧无锋","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.1 首页：大巧无锋")]),E._v(" "),t("p",[E._v("借助扁平化设计，将导航栏移动到了每页的最上方，并且附上了网站介绍。作为所以子路由都会引用的公共组件，大大提高了代码维护性。")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/9.png",alt:""}})]),E._v(" "),t("p",[E._v("如你所见，去掉了空洞的主页，主页进行了小范围的留白，但大部分以文章简介来填充。")]),E._v(" "),t("h3",{attrs:{id:"_6-2-友链-你在就好"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-友链-你在就好","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.2 友链: 你在就好")]),E._v(" "),t("p",[E._v("结识朋友，认识更多志同道合的朋友，是人生一大乐趣。因此，友链页面的设计也是重中之重。")]),E._v(" "),t("p",[E._v("为了更多展示友链信息：头像、链接、介绍、昵称等，我设计了卡片动态。")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/10.png",alt:""}})]),E._v(" "),t("p",[E._v("当然，做了移动端兼容，欢迎手机访问。而在鼠标移入的时候，会有一个渐变的小动态，提高用户体验。")]),E._v(" "),t("h3",{attrs:{id:"_6-3-关于：真实地我"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-关于：真实地我","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.3 关于：真实地我")]),E._v(" "),t("p",[E._v("这个页面很简单，只要把后台数据写成 markdown 格式，样式渲染就和文章浏览页面是一样的，稍作修改即可：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/11.png",alt:""}})]),E._v(" "),t("h3",{attrs:{id:"_6-4-归档：小而别致"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-归档：小而别致","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.4 归档：小而别致")]),E._v(" "),t("p",[E._v("我理解的归档是：分类+标签。而且对于我自己的网站来说，分类和标签放在一起，页面显得更充实，如下图所示：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/12.png",alt:""}})]),E._v(" "),t("p",[E._v("除此之外，当你鼠标划入相关内容名称时候，会有很好看的下划线划过的动态，小而别致，别具风趣。")]),E._v(" "),t("p",[E._v("点击相关分类或者标签，就进入了先关文章的汇总页面：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/13.png",alt:""}})]),E._v(" "),t("h3",{attrs:{id:"_6-5-文章：美观大方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-文章：美观大方","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.5 文章：美观大方")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/14.png",alt:""}})]),E._v(" "),t("p",[E._v("正如你所见，文章采用了 highlight.js 解析 markdown，并且自己写了下 markdown 的样式。")]),E._v(" "),t("p",[E._v("而就在最近几天，我添加了目录功能，就在上图的右侧。此功能，只有在屏幕宽度大于 768px 时候，才会启用。")]),E._v(" "),t("p",[E._v("也就是说，至少是 ipad 那么大的屏幕才能看到目录。毕竟手机屏幕就那么大，去除冗余功能是最优选择！")]),E._v(" "),t("h3",{attrs:{id:"_6-6-听歌、滚动按钮、评论：匠心独具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-听歌、滚动按钮、评论：匠心独具","aria-hidden":"true"}},[E._v("#")]),E._v(" 6.6 听歌、滚动按钮、评论：匠心独具")]),E._v(" "),t("p",[E._v("这次还是想听歌，笑哭。而在扁平化设计的 UI 中，最好的选择肯定是将其放入页面底部，以保证不影响主体功能和浏览体验。同样地，在移动端依旧不会加载此组件，这主要是获取歌曲资源会占用较大的移动端无线流量，从而造成页面阻塞。")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/15.png",alt:""}})]),E._v(" "),t("p",[E._v("此组件的名称是 aplayer，是 B 站的音频组件，我有幸贡献了源码。")]),E._v(" "),t("p",[E._v("当页面内容过多，必须有一个滚动按钮，来保证用户迅速回到导航栏（页面头部）。参考 NexT 的 UI 设计，基本一模一样实现了他的滚动组件：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/16.png",alt:""}})]),E._v(" "),t("p",[E._v("为了提高交流体验，必须引入评论系统。其实在实现这一部的时候，很累（做完上面的东西）。翻了翻开源的评论系统，发现了 Valine。")]),E._v(" "),t("p",[E._v("因此，在文章浏览页面、关于页面和友链页面，都引用了 Valine 组件：")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/18.png",alt:""}})]),E._v(" "),t("p",[E._v("当你缓慢拖到页面底部，你会发现页面的简介和备案号（我国独有哈哈哈），当然，不能让他们影响页面美观是吧？")]),E._v(" "),t("p",[t("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%85%A8%E6%96%B0UI%EF%BC%9A%E6%88%91%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%9C%80%E7%BE%8E/17.png",alt:""}})]),E._v(" "),t("h2",{attrs:{id:"_7-未完待续"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-未完待续","aria-hidden":"true"}},[E._v("#")]),E._v(" 7. 未完待续")]),E._v(" "),t("p",[E._v("不知道下次你会是什么模样？")])])},[],!1,null,null,null);B.default=a.exports}}]);