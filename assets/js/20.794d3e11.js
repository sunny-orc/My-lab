(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{164:function(_,v,t){"use strict";t.r(v);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络","aria-hidden":"true"}},[_._v("#")]),_._v(" 网络")]),_._v(" "),t("h2",{attrs:{id:"osi七层协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osi七层协议","aria-hidden":"true"}},[_._v("#")]),_._v(" OSI七层协议")]),_._v(" "),t("p",[_._v("应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),_._v(" "),t("h2",{attrs:{id:"tcp-ip四层体系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip四层体系","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP/IP四层体系")]),_._v(" "),t("p",[_._v("应用层（各种应用层协议，如TELNET、FTP、SMTP）、传输层（TCP、UDP）、网际层（IP）、网络接口层")]),_._v(" "),t("h2",{attrs:{id:"五层协议体系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五层协议体系","aria-hidden":"true"}},[_._v("#")]),_._v(" 五层协议体系")]),_._v(" "),t("p",[_._v("应用层、传输层、网络层、数据链层、物理层")]),_._v(" "),t("h2",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp","aria-hidden":"true"}},[_._v("#")]),_._v(" UDP")]),_._v(" "),t("p",[t("strong",[_._v("面向报文")])]),_._v(" "),t("p",[_._v("UDP是一个面向报文的协议。即只是报文的搬运工，不会对报文进行任何拆分和拼接操作")]),_._v(" "),t("ul",[t("li",[_._v("在发送端，应用层将数据传递给传输层的 UDP 协议，UDP 只会给数据增加一个 UDP 头标识下是 UDP 协议，然后就传递给网络层了")]),_._v(" "),t("li",[_._v("在接收端，网络层将数据传递给传输层，UDP 只去除 IP 报文头就传递给应用层，不会任何拼接操作")])]),_._v(" "),t("p",[t("strong",[_._v("不可靠性")])]),_._v(" "),t("ol",[t("li",[_._v("无连接的，通信是不需要建立和断开连接")]),_._v(" "),t("li",[_._v("不可靠的，协议收到什么数据就传递什么数据，不关系对方是否能收到")]),_._v(" "),t("li",[_._v("没有拥塞控制，一直会以恒定的速度发送数据。弊端在网络条件不好的情况下会导致丢包，好处对实时性要求高的场景（比如电话会议）使用更好")])]),_._v(" "),t("p",[t("strong",[_._v("高效")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/UDP.png",alt:"UDP"}})]),_._v(" "),t("p",[_._v("UDP没有TCP复杂，不需要保证数据不丢失且有序到达。所以UDP的头部开销小，只有八个字节，在传输数据报文时是高效的")]),_._v(" "),t("p",[_._v("头部包含以下几个数据")]),_._v(" "),t("ul",[t("li",[_._v("两个十六位的端口号，分别为源端口Source port（可选字段）和目标端口Destination port")]),_._v(" "),t("li",[_._v("整个数据报文的长度Length")]),_._v(" "),t("li",[_._v("整个数据报文的检验和（IPV4可选字段），该字段用于发现头部信息和数据中的数据")])]),_._v(" "),t("p",[_._v("传输方式")]),_._v(" "),t("p",[_._v("支持一对一，一对多，多对多，多对一，即支持单播，多播，广播的功能")]),_._v(" "),t("h2",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/TCP.png",alt:"TCP"}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("Sequence number，保证TCP传输的报文都是有序的，对端可以通过序号顺序的拼接报文")])]),_._v(" "),t("li",[t("p",[_._v("Acknowledgement Number，表示数据接收端期望接收的下一个字节的编号是多少，同事表示上一个序号的数据已经收到")])]),_._v(" "),t("li",[t("p",[_._v("标识符")]),_._v(" "),t("p",[_._v("URG=1：表示本数据报的数据部分包含紧急信息，是一个高优先级报文，此时紧急指针有效。紧急数据一定位于当前数据包数据部分的最前面，紧急指针标明了紧急数据的尾部")]),_._v(" "),t("p",[_._v("ACK=1：表示确认号字段有效。TCP规定在连接建立后传送的所有报文段都必须把ACK置为1")]),_._v(" "),t("p",[_._v("PSH=1：表示接收端应该立刻将数据push给应用层，而不是等缓冲区满了再提交")]),_._v(" "),t("p",[_._v("RST=1：表示当前TCP连接出现严重问题，可能需要重新建立TCP连接，也可以用于拒绝非法的报文段和拒绝连接请求")]),_._v(" "),t("p",[_._v("SYN=1：SYN=1，ACK=0时，表示报文段是一个连接请求报文；SYN=1，ACK=1，表示报文段是一个同意建立连接的应答报文")]),_._v(" "),t("p",[_._v("FIN=1：表示报文段是一个释放连接的请求报文")])])]),_._v(" "),t("h3",{attrs:{id:"状态机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态机","aria-hidden":"true"}},[_._v("#")]),_._v(" 状态机")]),_._v(" "),t("p",[_._v("HTTP是无连接，所以下层的TCP也是无连接的，只是两端共同维护状态")]),_._v(" "),t("h4",{attrs:{id:"建立连接三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立连接三次握手","aria-hidden":"true"}},[_._v("#")]),_._v(" 建立连接三次握手")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/3timeshandshake.png",alt:"三次握手"}})]),_._v(" "),t("p",[_._v("主动发起端称为客户端，被动连接端称为服务端。不管是客户端还是服务端，TCP连接建立后都能发送和接受数据，所以TCP是一个"),t("strong",[_._v("全双工")]),_._v("的协议")]),_._v(" "),t("p",[t("strong",[_._v("起初")])]),_._v(" "),t("p",[_._v("两端都是CLOSED状态，通信开始前，都会创建TCB。服务端创建完TCB后便进入到LISTEN状态，等待客户端发送数据")]),_._v(" "),t("p",[t("strong",[_._v("第一次握手")])]),_._v(" "),t("p",[_._v("客户端向服务端发送连接请求报文段。报文段中包含自身的数据通讯初始序号。请求发送后，客户端进入SYN-SENT状态")]),_._v(" "),t("p",[t("strong",[_._v("第二次握手")])]),_._v(" "),t("p",[_._v("服务端收到连接请求报文段后，同意连接就会发送一个应答，应答包含自身的数据通讯初始序号，发送完进入SYN-RECEIVE状态")]),_._v(" "),t("p",[t("strong",[_._v("第三次握手")])]),_._v(" "),t("p",[_._v("当客户端收到连接同意的应答后，向服务端发送一个确认报文。客户端发完便进入ESTABLISHED状态，服务端收到也进入ESTABLISHED状态，连接建立成功")]),_._v(" "),t("p",[t("strong",[_._v("第三次握手可以包含数据，通过TCP快速打开（TFO）技术，客户端和服务端存储相同cookie，下次握手时发出cookie达到减少RTT的目的")])]),_._v(" "),t("h4",{attrs:{id:"断开连接四次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#断开连接四次握手","aria-hidden":"true"}},[_._v("#")]),_._v(" 断开连接四次握手")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/4timeshandshake.png",alt:"四次握手"}})]),_._v(" "),t("p",[_._v("在断开连接时两端都需要发送FIN和ACK")]),_._v(" "),t("p",[t("strong",[_._v("第一次握手")])]),_._v(" "),t("p",[_._v("客户端任务数据发送完成，需要向服务端发送连接释放请求")]),_._v(" "),t("p",[t("strong",[_._v("第二次握手")])]),_._v(" "),t("p",[_._v("服务端收到连接释放请求后，会告诉应用层要释放TCP链接。然后会发送ACK，并进入CLOSE_WAIT状态，表示客户端到服务端的链接已经释放，不接受客户端的数据了。")]),_._v(" "),t("p",[t("strong",[_._v("第三次握手")])]),_._v(" "),t("p",[_._v("服务端此时还没有发完的数据会继续发送，完毕后会向客户端发送连接释放请求，服务端便进入LAST_ACK状态")]),_._v(" "),t("p",[t("strong",[_._v("第四次握手")])]),_._v(" "),t("p",[_._v("客户端收到释放请求后，向服务端发送确认应答，此时客户端进入TIME_WAIT状态。该状态会持续2MSL(最大段生存期，指报文段在网络中生存的时间，超时会被抛弃)时间，若该时间段内没有服务端的重发请求，就进入CLOSE状态。当服务端收到确认应答后，也进入CLOSE状态")]),_._v(" "),t("h4",{attrs:{id:"arq协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arq协议","aria-hidden":"true"}},[_._v("#")]),_._v(" ARQ协议")]),_._v(" "),t("p",[_._v("超时重传机制。通过确认和超时机制保证数据的正确送达，ARQ协议包含停止等待ARQ和连续ARQ")]),_._v(" "),t("h5",{attrs:{id:"停止等待arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止等待arq","aria-hidden":"true"}},[_._v("#")]),_._v(" 停止等待ARQ")]),_._v(" "),t("p",[_._v("这个协议的缺点是传输效率低，在良好的网络环境下每次发送报文都得等待对端的ACK")]),_._v(" "),t("h5",{attrs:{id:"连续arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连续arq","aria-hidden":"true"}},[_._v("#")]),_._v(" 连续ARQ")]),_._v(" "),t("p",[_._v("发送端拥有一个"),t("strong",[_._v("发送窗口")]),_._v("，在没有收到应答的情况下持续发送窗口内的数据，相比停止等待ARQ协议来说减少了等待时间，提高效率")]),_._v(" "),t("p",[_._v("连续ARQ中，接收端会持续不断收到报文。通过"),t("strong",[_._v("累计确认")]),_._v("，可以在收到多个报文以后统一回复一个应答报文。报文中的ACK可以用来告诉发送端这个序号之前的数据已经全部接受到了，下次请发送这个序号+1的数据")]),_._v(" "),t("p",[_._v("累计确认会存在问题。在连续接收报文时，可能会遇到收到序号5，未接受到序号6，然而序号7以后的报文已经接收。遇到这种情况，ACK会回复6，导致7重复发送，这种情况可以通过"),t("strong",[_._v("Sack")]),_._v("来解决。")]),_._v(" "),t("h5",{attrs:{id:"滑动窗口（流量控制）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口（流量控制）","aria-hidden":"true"}},[_._v("#")]),_._v(" 滑动窗口（流量控制）")]),_._v(" "),t("p",[_._v("两端都维护窗口：发送端窗口和接收端窗口")]),_._v(" "),t("p",[_._v("发送端窗口是由接收端窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和网络拥塞情况设置发送窗口的大小，所以发送窗口的大小是不断变化的")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/sliderwindow1.png",alt:"滑动窗口1"}})]),_._v(" "),t("p",[_._v("当发送端接收到应答报文后，会将窗口进行滑动")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://coracain.top/assets/sliderwindow2.png",alt:"滑动窗口2"}})]),_._v(" "),t("p",[t("strong",[_._v("滑动窗口实现了流量控制")]),_._v("。接收方通过报文告知发送方还可以发送多少数据，从而保证接收方能够来得及接收数据")]),_._v(" "),t("p",[t("strong",[_._v("zero窗口")])]),_._v(" "),t("p",[_._v("在发送报文的过程中，可能会遇到对端出现零窗口的情况。发送端会停止发送数据，并启动persistent timer。该定时器会定时发送请求给对端，让对端告知窗口大小。在重试次数超过一定次数后，可能会中断TCP连接")]),_._v(" "),t("h5",{attrs:{id:"拥塞处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 拥塞处理")]),_._v(" "),t("p",[_._v("拥塞处理作用于网络，防止过多的数据拥塞网络，避免出现网络负载过大的情况")]),_._v(" "),t("p",[_._v("拥塞处理包括了四个算法：慢开始、拥塞避免、快速重传、快速恢复")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("慢开始")]),_._v(" "),t("p",[_._v("在传输开始时将发送窗口慢慢指数级扩大，避免一开始就传输大量数据导致网络拥塞")]),_._v(" "),t("p",[_._v("具体步骤：")]),_._v(" "),t("ol",[t("li",[_._v("连接初试设置拥塞窗口为1MSS（一个分段的最大数据量）")]),_._v(" "),t("li",[_._v("每过一个RTT就将窗口大小乘2")]),_._v(" "),t("li",[_._v("指数级增长到阈值后，启动拥塞避免算法")])])]),_._v(" "),t("li",[t("p",[_._v("拥塞避免")]),_._v(" "),t("p",[_._v("每过一个RTT窗口大小只加一，这样避免指数级增长导致网络拥塞，慢慢将大小调整到最佳值")]),_._v(" "),t("p",[_._v("在传输过程中可能定时器超时的情况，这时TCP会认为网络拥塞了，会马上进行以下：")]),_._v(" "),t("ol",[t("li",[_._v("将阈值设为当前拥塞窗口的一半")]),_._v(" "),t("li",[_._v("将拥塞窗口设为1MSS")]),_._v(" "),t("li",[_._v("启动拥塞避免算法")])])]),_._v(" "),t("li",[t("p",[_._v("快速重传")]),_._v(" "),t("p",[_._v("一般和快恢复一起出现。一旦接收端收到的报文出现失序情况，接收端只会回复最后一个顺序正确的报文序号（没有Sack的情况下）。如果收到三个重复的ACK，无需等待定时器超时再重发而是启动快速重传。具体算法包括两种：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("TCP Taho")]),_._v(" "),t("p",[_._v("将阈值设为当前拥塞窗口的一半")]),_._v(" "),t("p",[_._v("将拥塞窗口设为1MSS")]),_._v(" "),t("p",[_._v("重新开始满开始算法")])]),_._v(" "),t("li",[t("p",[_._v("TCP Reno")]),_._v(" "),t("p",[_._v("拥塞窗口减半")]),_._v(" "),t("p",[_._v("将阈值设为当前拥塞窗口")]),_._v(" "),t("p",[_._v("进入快恢复阶段（重发对端需要的包，一旦受到一个新的ACK答复就退出该阶段）")]),_._v(" "),t("p",[_._v("使用拥塞避免算法")])]),_._v(" "),t("li",[t("p",[_._v("TCP New Reno")]),_._v(" "),t("p",[_._v("TCP发送方先记下三个重复ACK的分段的最大序号")]),_._v(" "),t("p",[_._v("假如有一个分段数据是1~10序号的报文，其中丢失了序号为3和7的报文，那么该分段的最大序号就是10.发送端只会收到ACK序号为3的应答。这时候重发序号为3的报文，接收方顺利接受并会发送ACK序号为7的应答。接收方顺利接收并会发送ACK序号为11的应答，这时发送端认为这个分段接收端已经顺利接收，接下来退出快恢复阶段。")])])])])]),_._v(" "),t("h3",{attrs:{id:"post和get区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post和get区别","aria-hidden":"true"}},[_._v("#")]),_._v(" Post和Get区别")]),_._v(" "),t("ul",[t("li",[_._v("Get请求能缓存，Post不能")]),_._v(" "),t("li",[_._v("Post相对Get安全一点，因为Get请求都包含在URL里，且会被浏览器保存历史记录，Post不会，但是抓包还是一样")]),_._v(" "),t("li",[_._v("Post可以通过request body来传输比Get更多的数据")]),_._v(" "),t("li",[_._v("URL有长度限制，会影响Get请求，但是这个长度限制是浏览器规定的，不是RFC规定的")]),_._v(" "),t("li",[_._v("Post支持更多的编码类型且不对数据类型限制")])])])}],!1,null,null,null);r.options.__file="Damn-hole-of-network.md";v.default=r.exports}}]);