 
  //  var rig=parseInt(data.question.answer)-1
						//	ansss=data.question.answer
							//	alert('tt')
							
								$(".pagination_next").show()
								var tt=1000
								setTimeout(function(){//----
								//alert($("img").parent().parent().parent().parent().html())
								//	alert($(".choice-content").parent().parent().parent().parent().html())
									//alert($("span").parent().html())
								//$($("section").find(".btn")[rig]).trigger("click")
								//var sel=$("section").find(".btn");
								//var sel=$(".choice-content");
								//		alert($("li").parent().html())
							//	var sel=$(".choice-content").find("span");
								//var sel=$(".page3_A-text").find("span");
									var sel=$(".choice-content").find("span")
									if(sel.size()==0)
										sel=$(".page3_A-text").find("span");
								if(sel.size()==0)
									sel=$("section").find(".btn");
								if(sel.size()==0)
									sel=$(".btn_wrap").find(".btn");
								if(sel.size()==0)
									sel=$(".ivucheckbox").next().next();
								if(sel.size()==0)
									sel=$(".question-choice-text").find("span");
								if(sel.size()==0)
									sel=$(".single-choice-btn");
								if(sel.size()==0)
									sel=$(".choice_btn_wrap");
								if(sel.size()==0)
									sel=$(".choice-ico").next();
								//alert($(".single-choice-btn").parent().html())
								//alert(sel.html())
								//	var sel=$(".btn_wrap").find(".btn");
							//	alert(sel.parent().parent().parent().parent().parent().parent().parent().parent().html())
								var con;
								function copy(value){
								var currentFocus = document.activeElement;// 保存当前活动节点
								
								var input = document.createElement('input');// 创建一个input标签
								document.body.appendChild(input);// 把标签添加给body
								input.style.opacity = 0;//设置input标签设置为透明(不可见)
								input.value = value;// 把需要复制的值放到input上

								// 记录当前滚动位置, 因为添加节点并选中的时候会影响页面滚动
								var scrollY = window.scrollY;

								input.focus();// input节点获取焦点
								input.setSelectionRange(0, input.value.length);// 选中input框中的所有文字

								var res = document.execCommand('copy', true);// 复制文字并获取结果

								currentFocus.focus();// 之前活动节点获得焦点
								document.body.removeChild(input);// 删除添加的input节点

								// 页面滚动到之前位置
								window.scrollTo(0, scrollY);
								
								return res;// 返回操作结果
							}
								if(data.question.pattern==1){
									setTimeout(function(){
										//alert($(".answer").)
										//$(".answer").find("textarea").val("xxxx")
											copy(data.question.answer)
												$(".answer").find("textarea").focus()
									},800)
									
									return;	
								}
								//alert($(".page3_A-text").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().html())
							var ans={"通常情况下洗脸、洗手、刷牙时，不间断放水，1分钟约需用水_____。":"8升","水资源是根底性的自然资源、战略性的经济资源，是生态和环境的_____要素。":"控制性","禁止在饮用水水源二级保护区新建、改建、扩建、排放污染物的建立工程；已建成的排放污染物的建立工程，那么应_____。":"由县级以上人民政府责令撤除或关闭","六水共治、_____先行。":"治污","六水共治指的是哪六水_____。":"治污水  保供水 排涝水 防洪水 抓节水 优海水","乡(镇)人民政府、街道办事处在防汛防台抗旱中的主要职责包括_____等。":"负责本地区防汛防台抗旱与抢险救灾避险的具体工作|编制防汛防台抗旱预案|配合开展农村住房防灾能力调查|按规定储备防汛防台抗旱物资","“六水共治”是指_____":"治污水|保供水|排涝水|防洪水|抓节水|优海水","河道砂石开采权，应当按照规定采取招标等公开、公平方式出让。":"正确","对水资源依法实行取水许可制度与有偿使用制度。":"正确","六水共治、节水先行。":"错误","_____水行政主管部门负责组织、指导、监督本行政区域内的节约用水工作，并具体负责农业节约用水的指导、协调与监管。":"县级以上地方人民政府","澄迈县最大的水库是哪一座_____。":"福山水库","根据国际上对水资源紧缺指标的定义，如果一个国家所拥有的可更新的人均淡水供给量每年在_____以下，为极度缺水。":"500 m3 以下；","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到_____，省控国控断面全部稳定达标。":"2026年","具有_____情形的取水不需办理取水许可。":"农村集体经济组织及其成员使用本集体经济组织的水塘、水库中的水的|家庭生活与零星散养、圈养畜禽饮用取用少量地表水的|在城乡供水管网未覆盖的区域，因家庭生活需要取用地下水的|法律、法规规定的其他情形","“六水共治”攻坚战坚持的基本原则是_____":"坚持党政同责|坚持治水为民|坚持城乡一体|坚持系统观念|坚持陆海统筹|坚持共治共享","防汛防台抗旱工作坚持“以人为本、安全第一，预防为主、防抗结合，确保重点、统筹兼顾”的原则。":"正确","国家对水资源依法实行取水许可制度与无偿使用制度。":"错误","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到2024年，剿灭劣Ⅴ类水体。":"正确","一般将污染源分为工业污染源、交通运输污染源、农业污染源和_____污染源四类。":"生活","在开发、利用、节约、保护、管理水资源和防治水害等方面成绩显著的单位和个人，由_____给予奖励。":"人民政府","下列说法错误的是_____。":"国家对可能引起污染水环境的落后工艺与设备实行淘汰制度","河道、湖泊管理实行按水系统一管理与分级管理相结合的原则，加强防护，确保畅通。":"正确","在饮用水水源保护区内禁止设置排污口。":"正确","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到2023年，消除城乡黑臭水体。":"正确","防汛抗洪工作实行各级人民政府_____负责制，统一指挥、分级分部门负责。":"行政首长","全国统一的环境问题举报免费热线是_____。":"12369","在水库库区保护范围内采挖与筛选砂石、矿藏等活动的，由_____以上水行政主管部门责令停止违法行为，采取补救措施，并可处以五千元以上五万元以下的罚款。":"县级","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到_____，消除城乡黑臭水体。":"2023年","在河道管理范围内，禁止下列行为：_____":"建设住宅、商业用房、办公用房、厂房等与河道保护与水工程运行管理无关的建筑物、构筑物|弃置、倾倒矿渣、石渣、煤灰、泥土、泥浆、垃圾等抬高河床、缩窄河道的废弃物|种植阻碍行洪的林木或者高秆作物|利用船舶、船坞等水上设施侵占河道水域从事餐饮、娱乐等经营活动","因蓄滞洪区而直接受益的地区与单位，不需要对蓄滞洪区承担补偿、救助义务。":"错误","在饮用水水源保护区内，可以设置排污口。":"错误","依据“水污染防治法”，对造成水体严重污染的排污单位_____。":"限期改正","水土保持法所称水土保持是指_____。":"对自然因素与人为活动造成水土流失所采取的预防与治理措施","河道内的病死动物及病死动物产品，_____应当运送至无害化处理公共设施运营单位进行无害化处置。":"保洁单位","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到_____，剿灭劣Ⅴ类水体。":"2024年","各级人民政府及其有关部门应当加强水土保持宣传与教育工作，_____。":"普及水土保持科学知识|增强公众的水土保持意识","水行政主管部门对建设项目进行审查时，必须举行听证会，听取利害关系人的意见。":"错误","六水共治即是指治污水、防洪水、排涝水、保供水、抓节水、优海水。":"正确","开发、利用、节约、保护水资源和防治水害，应当按照流域、区域统一制定规划。规划分为_____。":"流域规划和区域规划","我国是一个水资源短缺的国家，水资源总量居世界第六位，但人均水资源占有量为2200立方米，为世界人均水量的_____，广阔的西部干旱半干旱地区人均水量缺乏500立方米极度缺水。我国被联合国列为13个贫水国家之一。":"1/4；","海南省“六水共治”攻坚战总体目标，实施治水三步曲，是_____三步曲?":"两年消除城乡黑臭水体|三年剿灭劣Ⅴ类水体|五年省控国控断面全部稳定达标。","任何单位与个人都有保护水土资源、预防与治理水土流失的义务，并有权对破坏水土资源、造成水土流失的行为进行举报。":"正确","海南省“六水共治”攻坚战总体目标，实施治水三步曲，到2026年，省控国控断面全部稳定达标。":"正确","我国环境保护法规定，因环境污染损害赔偿提起诉讼的时效期间为_____，从当事人知道或者应当知道受到污染损害起时计算。":"3年","水是生命之源，保护水资源、节约用水是我们义不容辞的责任。以下做法没有必要、不利于节水的是_____。":"长流水解冻食品","在饮用水水源保护区围堆放、存贮可能造成水体污染的固体废弃物和其他污染物的，由县级以上环境保护主管部门责令停顿行为，限期去除污染物，并可处_____的罚款；逾期不去除的，环境保护主管部门可以指定相应单位代为去除，所需费用由者承当。":"五千元以上五万元以下","防洪区是指洪水泛滥可能淹及的地区，分为_____。":"洪泛区|蓄滞洪区|防洪保护区","任何单位与个人都有保护防洪工程设施与依法参加防汛抗洪的义务。":"正确","“六水共治”是海南践行“国之大者”的具体行动，也是治水求效的全新思路。":"正确","园林绿化、环境卫生、洗车业、建筑业应当优先使用_____和其他。":"中水；再生水","在我国这样的人口大国，每个人节约用水意义重大，下面的节水方法中不可行的是_____。":"减少每个人每天的饮用水量","我国水资源在时间和空间的分布上极为不均衡，雨季集中旱涝并存；在地域上的分配规律是_____。":"南方多，北方少，山区多，平原少；","节约用水规划应当包括节水目标、节水措施、节水设施建设等内容。":"正确","新中国的第一部“环境保护法”是哪一年公布的。_____":"1979","我国现行“水法“规定，国家逐步淘汰落后的、_____的工艺、设备和产品。":"耗水量高；","_____应当将水环境保护工作纳入国民经济和社会开展规划。":"省级以上人民政府","我国水污染防治法规定，排放水污染物，不得超过国家或者地方规定的_____。":"水污染物排放标准|重点水污染物排放总量控制指标","园林绿化、环境卫生、建筑施工等用水，应当优先利用江河湖泊水、再生水。":"正确","人类赖以生存的淡水资源_____。":"主要分布在冰川、永久积雪、河流、湖泊和地下水中；","我国环境保护法规定，建设项目中防治污染的措施，必须与主体工程_____。防治污染的设施必须经原审批环境影响报告书的环境保护行政主管部门验收合格后，该建设项目方可投入生产或者使用。":"同时设计|同时施工|同时投产使用","海南省“六水共治”攻坚战到 2023 年，消除城镇、农村黑臭水体。集中力量推进“三覆盖”“两转型”，其中“三覆盖”是指_____":"城镇生活污水处理提质增效覆盖率|建制镇污水集中收集处理设施覆盖率|农村污水处理设施覆盖率","开发、利用水资源，应当首先满足城乡居民生活用水，并兼顾农业、工业、生态环境用水以及航运等需要。":"正确","在非常抗旱期，各级人民政府应当优先保障城乡居民基本生活用水。":"正确","白开水通过煮沸使过硬的自来水水质变得适中，并含有多种矿物质微量元素等。每天早起喝一大杯温的或凉的白开水，能很快被人体吸收，补充肌体所需水分，增加血容量，减少血粘稠度，促进新代，同时加速人体免疫力增加肠道的生物活性，使人食欲增加，精神振奋；一天凉白开的饮水量不少于700毫升，对安康非常有益，也能够使皮肤保持充足的水分，保持光泽和弹性，延缓衰老。白开水是_____的饮用水。":"性价比最高；","县级以上人民政府在旱情严重时，不可采取的限制性措施是_____：":"暂停供给城镇居民生活用水；","中国国家节水标志是由_____组成。":"水滴、人手、地球","海南省“六水共治”攻坚战到 2023 年，消除城镇、农村黑臭水体。集中力量推进“三覆盖”“两转型”，其中“两转型”是指_____":"农业种植转型|水产养殖转型","水法中的水资源是指_____。":"地表水、地下水","同一水域兼具多类功能类别的，依_____功能类别划分。":"平均","水土流失地区的集体所有的土地承包给个人使用的，应当将治理水土流失的责任列入承包合同。":"正确","我国600多个城市中，目前有_____城市供水缺乏。":"2/3","防洪区是指洪水泛滥可能淹及的地区，分为洪泛区、蓄滞洪区与防洪保护区。":"正确","“六水共治”总体目标是两年消除城 乡黑臭水体，三年剿灭劣Ⅴ类水体，五年省控国控断面全部稳定达标。":"正确","国家对严重污染水环境的落后工艺和设备实行。_____":"限期淘汰制度","造成或者可能造成水污染事故的，当事人应当立即采取应急措施，控制或者防止污染事故，并向所在地人民政府或者环境保护主管部门报告；接到报告的环境保护主管部门应当及时向_____报告，并通报水行政、建立等有关主管部门。":"本级人民政府","国家对用水实行_____相结合的制度。":"总量控制|定额管理","世界环境日为每年几月几日。_____":"6月5日","采砂规划应当明确_____的区域与可以开采的数量、期限。":"禁止开采|限制开采|可以开采","国家对水资源实行流域管理与行政区域管理相结合的管理体制。":"正确","在河道中洗涤会造成藻类及其藻毒素污染，而蓝藻会产生微囊藻毒素，它是最强烈的肝脏肿瘤促进剂，其毒性及及致死量为氰化钾的_____倍，与眼镜蛇的毒性相当。":"91","1993年第47届联合国大会将每年的3月22日定为世界水日；对应着世界地球日、世界环境日和中国水日，以下答案_____为正确日期。":"4月22日，6月5日，3月22日","大量氮、磷等植物胜营养元素进入水体后，营养物质过剩，藻类大量繁殖，水质恶化，水生生物死亡，一般称为_____。":"富营养化","以下行为有利于水污染控制的是_____。":"利用畜禽粪便厌氧发酵生产沼气；","下列可以作为水污染侵权行为免责事由的包括_____":"不可抗力|受害人过错","对河道、湖泊范围内阻碍行洪的障碍物，按照_____的原则，由防汛指挥机构责令限期清除；逾期不清除的由防汛指挥机构组织强行清除，所需费用由设障者承担。":"谁设障，谁清除","全国城市节水宣传周是每年的_____所在的那一周。":"5月15日","对人体毒害最大的重金属有5种：_____，这些重金属在水中不能被分解，人饮用后毒性放大，与水中的其他毒素结合生成毒性更大的有机物。":"汞、镉、铅、铬和类金属砷；","我国水污染防治法规定，直接向水体排放污染物的_____，应当按照排放水污染物的种类、数量与排污费征收标准缴纳排污费。":"企业单位|事业单位|个体工商户","禁止企业事业单位无排污许可证或者违反排污许可证的规定向水体排放废水、污水。":"正确","在蓄滞洪区内建造房屋应当采用坡顶式结构。":"错误","国家建立了饮用水水源保护区制度，制止在饮用水水源保护区设置排污口。在“生活饮用水集中式供水单位卫生规“明确规定：取水点周围半径100米的水域，_____捕捞、网箱养殖、停靠船只、游泳和从事其他可能污染水源的任何活动。":"严禁","水污染是指_____。":"陆地水污染","任何单位和个人都有保护防洪工程和依法参加防汛抗洪的_____。":"义务","我国跨界水污染治理的模式应采取_____为主导的复合型跨界水污染治理模式。":"府际合作模式","地方各级人民政府应当加强对_____等活动的管理，预防与减轻水土流失。":"取土|打井|采石","以下家庭用水习惯中，以下除_____外都是科学又经济的方法。":"洗衣粉或洗涤剂量用得越多越干净。","农业用水水源可以是大气降水、地表水、地下水、土壤水传统水源，也可以是经过处理符合水质标准的微咸水、_____等非传统水资源。":"再生水；","以下不属于“中华人民共和国水污染防治法”的适用范围是_____。":"海洋","具有_____情形的，按照《中华人民共与国水法》、《中华人民共与国水污染防治法》等有关法律、法规的规定予以处罚。":"在饮用水水源保护区内设置排污口的|畜禽养殖场与农副产品加工单位超标排放废污水的|拒不缴纳、拖延缴纳或者拖欠水资源费的|未经批准擅自取水的","以下关于水资源的说法中，正确的选项是_____。":"地球上的水总储量很大，但可利用的淡水资源很少；","日洗机动车规模_____辆以上的单位应当安装与使用循环用水设施。":"50","_____都有保护水资源与节约用水的义务。":"单位与个人","被誉为“地球之肾〞_____是地球上生物多样性丰富和生产力较高的生态系统，在控制洪水、调节水流、调节气候、降解污染等方面有重要作用。":"湿地；","在被污染的河道水体中洗涤，容易在洗涤的物件中残留细菌病毒，可能对人身安康造成损害，包括_____。":"生物污染和化学污染","县级以上人民政府应当在饮用水水源保护区的边界设立明确的地理界标和明显的警示标志。_____不得损毁、涂改或者擅自移动地理界标和警示标志。":"任何单位和个人","下列哪种行为才能保证当地供水水源不受污染_____。":"不在规定的水源地保护区范围内进行洗涤、游泳等。","在防洪工程设施保护范围内，禁止进行_____等危害防洪工程设施安全的活动。":"取土|爆破|打井|采石","以下生活中节水不提倡的是_____：":"正在淋浴下洗澡，不关龙头去接。","作为生活饮用水水源的水质标准必须到达_____类以上。":"III","洗涤剂用得多，对环境的影响也大；洗衣粉泡沫多_____。高泡洗衣粉很难将衣服洗涤剂成分漂洗干净，低泡或无泡沫洗衣粉适量地使用不影响去污力，而且容易漂洗干净。":"与去污没有直接关系；","目前洗涤产品节水认证有衣料用液体洗涤剂和洗衣粉。以下哪种洗涤用品是节水的_____。":"高效低泡洗衣液；","人类可利用的淡水资源主要是指某一地区逐年可以恢复和_____的淡水资源。":"更新","我国的县级以上地方人民政府_____，对本辖区的环境保护工作实施统一管理。":"环境保护行政主管部门","因水污染受到损害的当事人，有权要求排污方排除危害与赔偿损失。":"正确","由于藻类等浮游生物大量繁殖，往往使水体呈现蓝色、红色、棕色、乳白色等，这种现象在江河湖泊中叫水华〔水花〕，在海中叫赤潮。这种现象的水体就是_____。":"富营养化的污染水体；","违反“中华人民共和国水污染防治法”第三十三条第[四]项的规定，利用储水层孔隙、裂隙、溶洞及废弃矿坑储存石油、放射性物质、有毒化学品、农药的、由_____责令改正，可以处10万元以下的罚款。":"县级以上地方人民政府环境保护部门","在生活用水方面，应提倡水的_____或一水多用。":"重复利用","直接从_____的水域内取水的单位与个人(自备水源户)，依法不需办理取水许可证。":"江河|湖泊|地下|水工程拦蓄","无堤防河道的管理范围为两岸之间的水域、沙洲、滩地(包括可耕地)、行洪区以及两岸堤防与护堤地。":"错误","从政治的高度看，治水就是_____":"抓深化改革惠民生","开发利用自然资源，根据情况确定是否采取措施保护生态环境。":"错误","禁止在饮用水水源_____内新建、改建、扩建与供水设施和保护水源无关的建设项目。":"一级保护区","多人环境污染损害中的复数因果关系的形态包括_____。":"共同的因果关系|竞合的因果关系|累积的因果关系|择一的因果关系。","水的主要用途包括生活用水、生产用水、_____。":"生态环境用水","县级以上人民政府或者其授权的部门在处理水事纠纷时，无权采取临时处置措施。":"错误","哪两种_____节水产品被列为国家强制采购产品。":"便器和水嘴；","对水土保持工作中成绩显著的单位与个人，由县级以上人民政府给予表彰与奖励。":"正确","单位和个人都有节约用水义务，并有权对浪费水资源的行为进展_____。":"监视、制止、举报","制定“中华人民国水法“是为了合理开发、利用、节约和保护水资源，防治水害，实现水资源的_____利用，适应国民经济和社会开展的需要。":"综合","水污染通过以下_____途径可以影响人类安康。①污染了饮用水，有机污染物、无机污染物、病菌、病原菌和寄生动物等，其中致癌、致畸、致突变物质，重金属，放射性核素，亚硝酸盐等有害物质通过饮水直接进入人体使人中毒或致病;②人们的皮肤与受污染的水接触，通过渗透或与食物一同入口进入人体;③污染物随污水挥发蒸发，被人体呼吸进入身体，对呼吸系统和皮肤造成危害;④污染物以水为介质流入食物链，进入和富集于身体使人中毒或病变。":"①②③④","国家在水土流失重点预防区与重点治理区，实行地方人民政府水土保持_____与考核奖惩制度。":"目标责任制","浪费和盲目开采会造成水资源缺乏。消耗水资源最大的行业是_____。":"工业","我国法律规定，海洋污染防治适用《中华人民共与国水污染防治法》。":"错误","未按照河道采砂许可证规定的围、作业方式进展采砂的，由县级以上人民政府水利主管部门责令停顿行为，处_____罚款；情节严重的，撤消河道采砂许可证。":"五万元以上十万元以下","_____是本行政区域内河道的主管机关，负责本行政区域内河道的监督管理。":"县级以上人民政府水行政主管部门","通常情况下刷牙时，用口杯接水只需3口杯约0.6升，而不连续放水，30秒钟约需用水是其_____倍。":"10","保护水环境，我们应该选择使用_____洗衣粉。":"无磷","局部生活杂排水经处理净化后,到达“生活杂用水水质标准“，能在一定围重复使用的水叫_____，可以作为工业冷却、农业灌溉、住宅冲厕、浇灌绿地、冲洗道路降尘、洗车用水等非人体接触用水。":"再生水","水污染是指水体因某种物质的介入，而导致其化学、物理、生物或者放射性等方面特性的改变，从而影响水的有效利用，危害人体健康或者破坏生态环境，造成水质恶化的现象。":"正确","企业事业单位造成水污染事故时，必须立即采取措施，停顿或者减少排污，并在事故发生后_____，向当地环境保护部门作出事故发生的时间、地点、类型和排放污染物的种类、数量、经济损失、人员受害及应急措施等情况的初步报告。":"5天","市场上的纯净水，一般取自江河湖泊或地下水、自来水，运用过滤法、蒸馏法、离子交换法、电渗析法、反渗透法等技术处理制得。说法不正确的选项是_____。":"水质硬度过大不好，因此水质越软越好，所以纯洁水〔蒸馏水〕对人体安康最好；","节水型便器指在保证卫生要求，使用功能和排水管道输送能力的条件下，不泄漏，一次冲洗水量不大于用水量评价指标的便器，如小便器用水量节水评价指标为≤2L，蹲便器≤6L，坐便器不大于_____。":"6升；","地下水埋藏深，自净能力_____，一旦受污染，治理和消除十分困难。":"弱；","洗车时，用水桶盛水洗车需3桶水，约30升。假设用水管直接冲洗20分钟需用水_____。":"240升","饮用水受污染主要会引起哪类疾病_____。":"肠道传染病","当前我国的水资源浪费很严重，其中由于全国城市供水管网漏损而造成的浪费惊人。您估计由于供水管网漏损，全国城市每年大约有_____以上的水被浪费了。":"100亿吨","在我国的水质评价体系中，_____水质的水体适合作为珍稀水生生物栖息地。":"Ⅱ类；","以下关于我国水污染总量控制制度表述正确的选项是_____。":"实施总量控制的水体，不执行污染物的排放标准"}




var secretBoxCode=location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0]
														if(secretBoxCode=="5611238530079"){
						ans={}
tt=2000+parseInt(Math.random()*700)
								}
							
								
/*con='';
for(let key  in ans){

    //    console.log(key + '---' + obj[key])
	//alert(ans[key])
	if(key==data.question.content){
		con=ans[key]
	}
 }*/
//alert(data)
		//alert(ans.lenth)
		try{
			data=processData(data);
//alert(data.question.content)
con=ans[data.question.content]
//alert(con)
		}catch(e){
	
	}
	if(secretBoxCode=="5631539344351"){
			//config={'answerExplain':'讲真话、做实事、去繁冗、有情怀、扬激情、反颓废'}
	//	alert(data.question.config)
		data.question.config=	data.question.config.replaceAll("'","\"");
		var dd=JSON.parse(data.question.config);
	//	alert(dd)
		/*if(dd.answerExplain=="立党为公、执政为民"||dd.answerExplain=="贺龙、叶挺、朱德、刘伯承"||dd.answerExplain="政治性、时代性、原则性、战斗性"){
			con=dd.answerExplain
			
		}else{
			con=dd.answerExplain.replaceAll("、","|");
		}*/
	//	alert(con)
		con=dd.answerExplain;
		if(sel.find("span").size()>0){
			sel.find("span").each(function(i){
				
				if($(this).html()!=''){
					//alert($(this).html()+"-"+con)
					if($.trim($(this).html())==con||$(this).html().indexOf(con)>-1||con.indexOf($(this).html())>-1){
						var s=navigator.userAgent.toLowerCase();
						if(s.indexOf("iphone")>-1&&($(this).html()=='讲真话'||$(this).html()=='讲政治'||$(this).html()=='重要经济中心'||$(this).html()=='以文兴城'||$(this).html()=='恩阳机场'||$(this).html()=="广巴达铁路"||$(this).html()=="关键在坚持与时俱进")){
							//ios 	$(this).trigger("click");					这个要点两次 ，奇特
							$(this).trigger("click");
							$(this).parent().trigger("click")
						}else{
						//	$(this).trigger("click");
							$(this).parent().trigger("click")
						}
							$(this).html("----")
					}
				}
			})
			setTimeout(function(){
															$('.commit-btn').trigger("click")
															$('.question-commit').trigger("click")
															$('.question-commit').find("img").trigger("click")
															$('.page3_pagination').trigger("click")
															$('.weui-btn').trigger("click")
															$('.submitBtn').trigger("click")
			},100)
		}else{
			sel.each(function(i){
				
				if($(this).html()!=''){
					if($(this).html()=='社会主义'||$(this).html()=='新时代中国特色社会主义'||$(this).html()=='川南') return;
					if($(this).html()=='农业税') return;
					if($(this).html()=='三民主义') return;
					if($(this).html()=='1925年5月11日'){$(this).trigger("click"); return;}
					if($(this).html()=='1925年6月11日'){ return;}
					if($(this).html()=='敌后游击战争和国民党正面战场相结合') return;
					if($.trim($(this).html())==con||$(this).html().indexOf(con)>-1||con.indexOf($(this).html())>-1){
						//alert($(this).html()+"-"+con)
						$(this).css({"cursor":"pointer"});
						//$(this).trigger("click");
						//alert($(this).parent().html())
						//$(this).parent().trigger("click")
						$(this).trigger('focus');
						$(this).click();
						$(this).html("----")
						//	$(this).parent().parent().trigger("click")
					}
				}
			})
		}
		return;
	}

									if(con.indexOf("|")>0){
										var ans=con.indexOf("|");
										var cons=con.split("|");
										
										sel.each(function(i){
											for(var k=0;k<cons.length;k++){
												//alert($(this).parent().find("span").html())
												//	alert(JSON.stringify($(this).html().split(">")))
												//alert($(this).html())
												if($(this).html()==cons[k]||$(this).html().indexOf(cons[k])>-1||cons[k].indexOf($(this).html())>-1||($(this).find("span").html()!=''&&cons[k].indexOf($(this).find("span").html())>-1)){
											//		alert($(this).html()+" "+cons[k])
											//alert($($(this).find("span")[0]).html())
												//	$(this).parent().css({"cursor":"pointer"});
												//	$(this).parent()[0].click()
														$(this).trigger("click")
													// $(this).trigger("click")
													//	$(this).prev().trigger("click")
													//	 $(this).parent().trigger("click")
												//	$($(this).find("span")[1]).trigger("click")
														 
													/*	 $('.question-commit').trigger("click")
																		$('.question-commit').find("img").trigger("click")
														$('.choice_btn_wrap').trigger("click")*/
												/*	 var e = navigator.userAgent.toLowerCase();
													 if ("android" == e.match(/Android/i)){
														$(this).trigger("click")
														$(this).prev().trigger("click")
													 } else{
															$(this).parent().trigger("click")
															$(this).parent().parent().trigger("click")
														}*/
												}
											}
											if(i+1==sel.size()){
												setTimeout(function(){
														$('.commit-btn').trigger("click")
													$('.question-commit').trigger("click")
													$('.question-commit').find("img").trigger("click")
															$('.page3_pagination').trigger("click")
																$('.weui-btn').trigger("click")
															$('.submitBtn').trigger("click")
												},100)
										
											}
										});

										return;

								}
								//alert("  xxxx"+sel.size())
								sel.each(function(i){
									//alert($(this).find("span").html()+" "+$(this).html())
									//if($(this).find("span").html()==con){
									//	alert($(this).html())
									//alert($(this).html()+"  "+con)
									if($.trim($(this).html())==con||$(this).html().indexOf(con)>-1||con.indexOf($(this).html())>-1||con.indexOf($(this).find("span").html())>-1){
									//	alert($(this).html()+"  "+con)
								//	if($(this).html().indexOf(con)>-1){// class 为.btn
										
										//	$(this).find("span").trigger("click")
										//	$(this).parent().trigger("click")
										// var e = navigator.userAgent.toLowerCase();
											$(this).parent().css({"cursor":"pointer"});
										$(this).parent()[0].click()
										 $(this).trigger("click")
											$(this).prev().trigger("click")
											 $(this).parent().trigger("click")
											 $('.question-commit').trigger("click")
															$('.question-commit').find("img").trigger("click")
											 /**if ("android" == e.match(/Android/i)){
														$(this).trigger("click")
														$(this).prev().trigger("click")
													 } else{
															$(this).parent().trigger("click")
															$(this).parent().parent().trigger("click")
														}*/
									}
									if(i+1==sel.size()){
										setTimeout(function(){
										//	alert($(".wholeSubmitBtn").html())
												$('.wholeSubmitBtn').trigger("click")
											//	alert($(".pagination_submit").html())
												$(".pagination_submit").trigger("click")
												$('.commit-btn').trigger("click")
										$('.question-commit').trigger("click")
											$('.question-commit').find("img").trigger("click")
														$('.pagination_next').trigger("click")
														$('.page3_pagination').trigger("click")
														$('.weui-btn').trigger("click")
													$('.weui-btn').trigger("click")
														$('.wholeSubmitBtn').find('img').trigger("click")
										},600)
										
									}
								})
								
							},tt)