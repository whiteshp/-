var storyContent = {"inkVersion":21,"root":[[{"->":"chushi"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"chushi":[["^要再来一次吗？","\n",["ev",{"^->":"chushi.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^好的",{"->":"$r","var":true},null]}],["ev",{"^->":"chushi.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^不要",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chushi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^让我们开始吧！","\n",{"->":"chushi.start"},{"#f":5}],"c-1":["ev",{"^->":"chushi.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"chushi.end"},{"#f":5}]}],{"start":[["^请选择你的视角","\n",["ev",{"^->":"chushi.start.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^蒋舒婷",{"->":"$r","var":true},null]}],["ev",{"^->":"chushi.start.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^韩家乐",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chushi.start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"chapter1"},{"#f":5}],"c-1":["ev",{"^->":"chushi.start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^开发中 敬请期待：D","\n","^（如果有的话）","\n","end",{"#f":5}]}],{"#f":1}],"end":["^很遗憾","\n","^你似乎和某些故事擦肩而过","\n","end",{"->":"chapter1"},{"#f":1}],"#f":1}],"chapter1":[["^睁开惺忪的睡眼，你摸索着周围。拿起手机。","\n","^揉了揉因困顿睁不开的双眼。","\n",["ev",{"^->":"chapter1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^打开手机",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.S1"},{"#f":5}]}],{"S1":[["^现在是2022年3月4日。","\n","^距离和韩家乐官宣拍档已经过去一天。","\n","^为了和新拍档增进关系，你决定","\n",["ev",{"^->":"chapter1.S1.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^主动向她问好",{"->":"$r","var":true},null]}],["ev",{"^->":"chapter1.S1.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^我才不要主动",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter1.S1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"chapter1.wenhao"},{"#f":5}],"c-1":["ev",{"^->":"chapter1.S1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"chapter1.buzhudong"},{"#f":5}]}],{"#f":1}],"wenhao":[["^“早上好！”","\n","^“早呀！”对面发来一个可爱的emoji。","\n",["ev",{"^->":"chapter1.wenhao.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^顺势问她要不要一起吃午餐",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter1.wenhao.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^你决定邀请新拍档一起吃午饭。发完消息后你拍拍脑袋起身，洗漱完重新坐下的时候对话框传来了新的消息：","\n","^“好喔。”","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"^->":"chapter1.wenhao.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^收拾完毕，出门！",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"chapter1.wenhao.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"chapter1.combine"},{"#f":5}],"#f":5}]}],{"#f":1}],"buzhudong":["^一早上过去，微信没有新的消息传来。","\n","^收拾好自己后，你赶去食堂，在路上遇到了正在关门准备去吃饭的韩家乐。于是你们互相道了早安，一同前往食堂。","\n",{"->":".^.^.combine"},{"#f":1}],"combine":[["^坐在食堂里，也许是因为不太熟悉，你们天南地北的聊了很多东西。比如你知道她是什么时候来上海的，比如昨天晚上直播到几点休息，比如被困在中心依靠什么来打发时间，又或者她最喜欢吃什么菜。","\n","^回去的路上你有些紧张，想要问问她下次要不要一起吃饭，借口找了百八十个却依然有些说不出口。","\n","^年上似乎看出了你的紧张和期待，她问你，","\n","^“下次要不要一起出去玩？”","\n",["ev",{"^->":"chapter1.combine.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^好耶",{"->":"$r","var":true},null]}],["ev",{"^->":"chapter1.combine.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^纠结一下不过分吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter1.combine.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"chapter2"},{"#f":5}],"c-1":["ev",{"^->":"chapter1.combine.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","^纠结什么纠结，不准纠结！！！","\n",{"->":"chapter2"},"end",{"#f":5}]}],{"#f":1}],"#f":1}],"chapter2":[["^2022年3月7日。你敲响了韩家乐的房门。","\n",[["ev",{"^->":"chapter2.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^出发！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter2.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^你们到达了制作饼干的地方。调试好设备后，打开了口袋房间，进行第一次双人直播。","\n","^你们一人负责准备食材，一人负责将食材混合在一起。虽然都没有什么烘焙的经验，但也算进行的平稳顺利。路过手机时，弹幕快速滑动，你停下查看：","\n","^“系围裙！”","\n","^“快系围裙！”","\n","^“韩家乐的围裙开了！”","\n","^要帮她系围裙吗？","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":[["ev",{"^->":"chapter2.0.g-1.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^当然啦",{"->":"$r","var":true},null]}],["ev",{"^->":"chapter2.0.g-1.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^别管 我有自己的节奏",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"chapter2.0.g-1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"chapter2.S1"},{"#f":5}],"c-2":["ev",{"^->":"chapter2.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"chapter2.S1"},{"#f":5}],"#f":5}]}],{"S1":[["^你假装自然的靠近韩家乐，对着正在认真研究制作过程的韩家乐随口提起一句，","\n","^要系围裙吗？","\n","^她低头看了看，这才发现围裙开了。","\n","^怎么会放过这个表现的机会呢：D","\n",[["ev",{"^->":"chapter2.S1.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^帮她系好",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter2.S1.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^你故作帅气的拒绝了韩家乐想要帮你系好的想法，自己系好后接过对方正在搅拌的器具。","\n","^短暂的肢体接触后，气温好像开始爬升，你们两个的面庞逐渐变成红色。","\n","^可能是系的太紧了。你在心里想。","\n","^等待烘烤的间隙，你们找了一处地方坐下，弹幕里飞驰而过的吐槽着你和韩家乐留下第一张合照的粉色卫衣。","\n","^懂不懂什么是时尚啊，你暗自腹诽，却又因为大面积的吐槽有些怀疑和不开心。旁边的人似乎看出了你的情绪，温温柔柔的对着直播里的粉丝们说：","\n","^“你们不要再这样讲啦，讲的她都不自信了。”","\n","^得到撑腰的你委屈有些冒了头，你可怜巴巴的缩在她旁边得寸进尺，","\n","^“你是不是觉得你的卫衣和我的卫衣非常搭？”","\n","^她好脾气的点点头，接着宽慰你，耐心地告诉粉丝们不要再吐槽你。","\n","^你看着她护短的认真，无意的联想到了被庇护在羽翼下的模样。","\n",{"->":"chapter2.S2"},{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":1}],"S2":[["^话题不知道怎么转移到对于直播美颜的研究。不过无所谓，你们也并非打破砂锅问到底的人。借着滤镜调试的理由偷偷靠近，再借着自拍留念的说法和身边的人贴贴，没什么问题，对吧？","\n",["ev",{"^->":"chapter2.S2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^就要贴贴",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chapter2.S2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^大半天的接触让你们的关系亲近了不少，你好像离她更近了一些。","\n","^韩家乐很好说话，韩家乐讲话很温柔，韩家乐很有耐心，韩家乐是湖南人，韩家乐被叫姐姐的时候会有点害羞，韩家乐害羞的时候很可爱。","\n","^于是你问她，","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"^->":"chapter2.S2.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^韩家乐姐姐，请问你是第几次做饼干呢？",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"chapter2.S2.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^“第一次吧。”","\n","^她说。","\n","^你如愿以偿的听到了想要的答案。","\n",{"->":"chapter2.S3"},{"#f":5}],"#f":5}]}],{"#f":1}],"S3":["end","end",{"#f":1}],"#f":1}],"#f":1}],"listDefs":{}};