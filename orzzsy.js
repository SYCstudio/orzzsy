function orzzsyBeginning() {
    document.getElementById("mainArea").innerHTML = "\
		<p align=\"center\">																							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(66,133,244)\">O</span>							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(234,67,53)\">r</span>							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(251,188,5)\">z</span>							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(66,133,244)\">z</span>							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(52,168,83)\">s</span>							\
			<span style=\"font-size: 192px; font-weight: bold; color:rgb(234,67,53)\">y</span>							\
		</p>																											\
		<p align=\"center\">																							\
			<span style=\"font-size: 18px; color: #ff3333; text-shadow: 0px 0px 2px rgba(255,255,255,1), 				\
			0px 0px 7px rgba(255,255,255,1), 0px 0px 11px rgba(255,255,255,1)\">										\
				zsy 又不更博了！<br>											                    					\
			</span>																										\
			<span style=\"font-size: 18px; color: #ff3333; text-shadow: 0px 0px 2px rgba(255,255,255,1), 				\
			0px 0px 7px rgba(255,255,255,1), 0px 0px 11px rgba(255,255,255,1)\">										\
				为了大家的寿命，你，作为全机房指定的，敢于催更 zsy 的勇♂士，<br>    									\
			</span>																										\
			<span style=\"font-size: 18px; color: #ff3333; text-shadow: 0px 0px 2px rgba(255,255,255,1), 				\
			0px 0px 7px rgba(255,255,255,1), 0px 0px 11px rgba(255,255,255,1)\">										\
				犹豫，就会败(bai)北(ge)<br>											            						\
			</span>																										\
		</p>																											\
		<div id=\"orzTablet\" align=\"center\">																			\
			<p align=\"center\">																						\
				<button sytle=\"font-size: 24px; color:#ff0000\" onclick=\"orzzsyAdvanced()\">							\
					我生而为鸽。																						\
				</button>																								\
			</p>																										\
		</div>																											\
	";
}

function orzzsyAdvanced() {
    document.title = "orz zsy!";
    document.getElementById("orzTablet").innerHTML = "\
		<img src=\"zsy_happy.jpg\">											        									\
		<p style=\"margin:10px\">																						\
			<span style=\"font-size: 24px; color: #ffffff; text-shadow: 0px 0px 5px rgba(255,255,0,1), 					\
			0px 0px 10px rgba(255,127,0), 0px 0px 18px rgba(255,0,0,1)\">												\
				催更鸽贼<br>																							\
				zsy 是我们的蓝(da)月(ge)亮(zei)！<br>																				\
				让我们催更大(lan)鸽(yue)贼(liang)！<br>																					\
			</span>																										\
		</p>																											\
		<button style=\"font-size: 24px\" onclick=\"orzzsyMain()\" id=\"orzMainButton\">								\
			开始催更！																										\
		</button>																										\
		<div style=\"font-size: 30px; background: rgba(255,255,255,0.7); width: auto\" id=\"orzTimes\"></div>			\
		<div style=\"font-size: 20px; background: rgba(0,0,255,0.7); color: white\" id=\"orzButtonClickTimes\"></div>	\
		<div style=\"font-size: 30px; background: rgba(0,0,0,0.7); color: white;										\
			font-weight: bold;\" id=\"zsyTextsDialog\">																	\
		</div>																											\
		";
}

var orzTimesCnt = 0;
var orzTimesDelta = 1;

var orzStayTag = 0;
var orzButtonClicked = 0;

function orzzsyMain() {
    orzTimesCnt += orzTimesDelta;
    orzButtonClicked++;
    document.getElementById("orzTimes").innerHTML = "你已经催了 zsy " + orzTimesCnt + " 次。";

    if (orzTimesCnt < 100) orzTimesDelta = 1;
    else if (orzTimesCnt < 1000) orzTimesDelta = Math.min(1000 - orzTimesCnt, Math.floor(Math.random() * 16 ));
    else if (orzTimesCnt < 10000) orzTimesDelta = Math.min(10000 - orzTimesCnt, Math.floor(Math.random() * 128 ));
    else if (orzTimesCnt < 65533) orzTimesDelta = Math.min(65533 - orzTimesCnt, Math.floor(Math.random() * 512 ));
    else orzTimesDelta = 1;

    document.getElementById("orzButtonClickTimes").innerHTML = "（你已经点击了这个按钮 " + orzButtonClicked + " 次。）";

    document.getElementById("orzMainButton").innerHTML = "继续催更 " + orzTimesDelta + " 次";

    if (orzTimesCnt >= 1) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『诶，又有一个来催我的，来吧来吧继续鸽』";
        if (orzTimesCnt == 1) orzStayTag = 1;
    }
    if (orzTimesCnt >= 2) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『你们还是 naive，我又鸽了』";
        if (orzTimesCnt == 2) orzStayTag = 5;
    }
    if (orzTimesCnt >= 10) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『因为我是肥鸽，不管你怎么催我还是会鸽的。』";
        if (orzTimesCnt == 10) orzStayTag = 5;
    }
    if (orzTimesCnt >= 20) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『Gugugugu，你怎么还在催？Guuuuuuuuuu！』";
        if (orzTimesCnt == 20) orzStayTag = 10;
    }
    if (orzTimesCnt >= 50) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『没错，我就是这么鸽！我看是谁才能鸽到最后！』";
        if (orzTimesCnt == 50) orzStayTag = 30;
    }
    if (orzTimesCnt >= 100) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『鸽迟但到』";
        if (orzTimesCnt == 100) orzStayTag = 30;
    }
    if (orzTimesCnt >= 1000) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『我已经感受到了源源不断的神鸽力量！Guuuuuuuuuuuuuu！』";
        if (orzTimesCnt == 1000) orzStayTag = 50;
    }
    if (orzTimesCnt >= 10000) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『所有人都将被我的鸽所贼！』";
        if (orzTimesCnt == 10000) orzStayTag = 50;
    }
    if (orzTimesCnt >= 65533) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『你这个鸡贼，怎么天天催我？』";
        orzStayTag = 2147483647;
    }
    if (orzTimesCnt >= 65534) {
        document.getElementById("zsyTextsDialog").innerHTML = "zsy『既然这样的话，那就让我展示一下如何鸽你！』";
        orzStayTag = 2147483647;
    }
    if (orzTimesCnt >= 65535) {
        document.getElementById("mainArea").innerHTML = "\
			<h1 style=\"color:red\" align=\"center\">																	\
				zsy『你真的还敢再催一下吗？』																			\
			</h1>																										\
			<img src=\"zsy_hand.jpg\">				    																\
			<br>																										\
			<button sytle=\"font-size: 24px;color:#ff0000\" onclick=\"orzzsyLast1()\">									\
				我生为催鸽。																							\
			</button>																									\
			";
        orzStayTag = 2147483647;
    }

    orzStayTag--;
    if (orzStayTag <= 0) {
        document.getElementById("zsyTextsDialog").innerHTML = "（你继续催更了 zsy。）";
    }
}

function orzzsyLast1() {
    document.getElementById("mainArea").innerHTML = "\
		<h1 style=\"color:white; background: rgba(0,0,0,0.7)\">\
			* zsy 『既然你那么想鸽我』 <br>\
			<img src=\"yyb-zsy-together.png\"><br>\
			* 『那就来做♂我男朋友吧！』！<br>\
			<img src=\"boyfriend.jpeg\"><br>\
		</h1>\
		<button style=\"font-size: 24px; color:#000000\" onclick=\"orzzsyLast2()\">										\
			同意并签字  																								\
		</button>																										\
		<button style=\"font-size: 24px; color:#000000\" onclick=\"orzzsyLast2_()\">										\
			不同意并企图离开  																								\
		</button>																										\
		";
}

function orzzsyLast2() {
    document.getElementById("mainArea").innerHTML = "\
		<h1 style=\"color:white; background: rgba(0,0,0,0.7)\">															\
			被♂乃蒟蒻常事<br>																							\
			请蒟蒻重新来过<br>																							\
		</h1>																											\
		<br>																											\
		<img src=\"zsywalk.gif\">								        												\
		<br>																											\
		<span style=\"font-size: 12px; color:#666666\">																	\
            即使是 yyb 也改变不了被 zsy 续掉的命<br>																	\
            欢迎在 https://github.com/SYCstudio/orzzsy 留言评论                                                         \
		</span>																											\
		<br>																											\
		<button style=\"font-size: 24px; color:#000000\" onclick=\"javascript:location.reload();\">						\
			继续 orz zsy！																								\
		</button>																										\
		";
}
var swapButtonsOldp=0,swapButtonsLineCnt=1,swapButtonsTime=0;
var swapButtons=function(){
	var buttons=$("button");
	$(buttons[swapButtonsOldp]).html("同意并签字");
	$(buttons[swapButtonsOldp]).css("color","black");
	$(buttons[swapButtonsOldp]).hover(swapButtons,function(){});
	$(buttons[swapButtonsOldp]).off('mouseenter').unbind('mouseleave');
	$(buttons[swapButtonsOldp]).attr("onclick","orzzsyLast2()")
	var p=swapButtonsOldp;
	while(swapButtonsOldp==p)p=Math.floor(Math.random()*buttons.length);
	$(buttons[p]).html("我还是不同意");
	$(buttons[p]).css("color","red");
	$(buttons[p]).hover(swapButtons,function(){});
	$(buttons[p]).attr("onclick","orzzsyLast3(1)");
	swapButtonsOldp=p;
	++swapButtonsTime;
	if(swapButtonsTime%5==0)
		if(swapButtonsLineCnt+1<=10){
			++swapButtonsLineCnt;
			var newLine=$($(".npyButtons")[0]).clone(true);
			newLine.children().html("同意并签字");
			newLine.children().css("color","black");
			newLine.appendTo($("#npyButtonLines"));
		}else orzzsyLast3(0);
};
function orzzsyLast2_() {
    document.getElementById("mainArea").innerHTML="\
		<h1 style=\"color:white; background: rgba(0,0,0,0.7)\">\
			<img src=\"zsy_zenmehuishi.png\"><br>\
			* zsy 『小老弟，你怎么回事？』 <br>\
			* 『既然你不想做我男朋友...』<br>\
			* 『我只好秒了你了...』<br>\
		</h1>\
		<br>\
		<div id=\"npyButtonLines\">\
		<div class=\"npyButtons\" style=\"display:block\">\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<button  style=\"width:180px;font-size: 24px; color:#000000\"/>\
		<br>\
		</div>\
		</div>\
		";
		var buttons=$("button"),p=Math.floor(Math.random()*buttons.length);
		swapButtonsOldp=p;
		buttons.html("同意并签字");buttons.attr("onclick","orzzsyLast2()");
		$(buttons[p]).html("我还是不同意");
		$(buttons[p]).css("color","red");
		$(buttons[p]).hover(swapButtons,function(){});
		$(buttons[p]).attr("onclick","orzzsyLast3(1)");
}
function orzzsyLast3() {
    document.getElementById("mainArea").innerHTML="\
		<h1 style=\"color:white; background: rgba(0,0,0,0.7)\">\
			<img src=\"zsy_shenweizhiguang.jpg\"><br>\
			* zsy 发动了技能『神威之光』！ <br>\
			* 『你竟然真的...不想做我男朋友...』<br>\
			 <br>\
			* 你被 zsy 秒了<br>\
		</h1>\
		<img src=\"zsywalk.gif\">								        												\
		<br>																											\
		<span style=\"font-size: 12px; color:#666666\">																	\
            即使是 yyb 也改变不了被 zsy 秒掉的命<br>																	\
            欢迎在 https://github.com/SYCstudio/orzzsy 留言评论                                                         \
		</span>																											\
		<br>\
		<button style=\"font-size: 24px; color:#000000\" onclick=\"javascript:location.reload();\">						\
			继续 orz zsy！																								\
		</button>																										\
		";
}
