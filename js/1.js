/*轮播图用*/
(function () {
    var zhufengEffect = {
        Linear: function (t, b, c, d) {
            return t / d * c + b;
        }
    }

    function move(curEle, target, duration) {
        window.clearInterval(curEle.zhufengTimer);
        var begin = {};
        var change = {};
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                begin[key] = utils.getCss(curEle, key);
                change[key] = target[key] - begin[key];
            }
        }
        var time = 0;
        curEle.zhufengTimer = window.setInterval(function () {
            time += 10;
            if (time > duration) {
                utils.getCss(curEle, target);
                window.clearInterval(curEle.zhufengTimer);
                return;
            }
            for (var key in target) {
                if (target.hasOwnProperty(key)) {
                    var curPos = zhufengEffect.Linear(time, begin[key], change[key], duration);
                    utils.setCss(curEle, key, curPos);
                }
            }
        }, 10)
    }

    window.zhufengAnimate = move;
})();

/*主页 选项部分（a，li标签的样式）*/
~function () {
    var div4 = document.getElementById("div4_1"),
        lis = div4.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmousemove = function () {
            this.style.background = "#eee";
            this.style.color = "red";
            var a = this.getElementsByTagName("a");
            for (var j = 0; j < a.length; j++) {
                a[j].style.color = "red";
            }
        }
        lis[i].onmouseout = function () {
            this.style.background = "#AF2400";
            this.style.color = "white";
            var a = this.getElementsByTagName("a");
            for (var j = 0; j < a.length; j++) {
                a[j].style.color = "white";
            }
        }
    }
}();


/*主页 图片无缝轮播部分*/
~function () {
    var div4=document.getElementById("div4_2")
        divs = document.getElementById("div4_2_1"),
        ul = document.getElementById("oul"),
        lis = ul.getElementsByTagName("li"),
        left = document.getElementById("left"),
        right = document.getElementById("right"),
        step = 0,
        timer = null,
        timer2 = 2000;

    function lunbo() {
        if (step == 6) {
            step = 0;
            divs.style.left = (-step * 730) + "px";
        }
        step++;
        zhufengAnimate(divs, {left: -step * 730}, 300);
        jiaodian();
    }

    timer = window.setInterval(lunbo, timer2);


    function jiaodian() {
        var curLis = step == lis.length ? 0 : step;
        for (var i = 0; i < lis.length; i++) {
            if (i == curLis) {
                lis[i].className = "bg";
            } else {
                lis[i].className = "";
            }
        }
    }

    function jiaodianchuli() {
        for (var i = 0; i < lis.length; i++) {
            ~function (i) {
                lis[i].onclick = function () {
                    step = i;
                    zhufengAnimate(divs, {left: -step * 730}, 300);
                    jiaodian();
                }
            }(i);
        }
    }

    jiaodianchuli();

    div4.onmousemove = function () {
        window.clearInterval(timer);
        left.style.display = right.style.display = "block";
    }
    div4.onmouseout = function () {
        timer = window.setInterval(lunbo, timer2);
        left.style.display = right.style.display = "none";
    }

    left.onclick = function () {
        if (step == 0) {
            step = 6;
            divs.style.left = (-step * 730) + "px";
        }
        step--;
        zhufengAnimate(divs, {left: -step * 730}, 300);
        jiaodian();
    }
    right.onclick = lunbo;
}();

<!--今日推荐部分-->
~function () {
    var left = document.getElementById("left2"),
        right = document.getElementById("right2"),
        div5 = document.getElementById("div5_1_2"),
        div5_1 = document.getElementById("div5_1_2_1"),
        step = 0;
    div5.onmousemove = function () {
        left.style.display = right.style.display = "block";
    }
    div5.onmouseout = function () {
        left.style.display = right.style.display = "none";
    }
    right.onclick = function () {
        if (step == 4) {
            step = 0;
            div5_1.style.left = (-step * 1000) + "px";
        }
        step++;
        zhufengAnimate(div5_1, {left: -step * 1000}, 300);
    }
    left.onclick = function () {
        if (step == 0) {
            step = 4;
            div5_1.style.left = (-step * 1000) + "px";
        }
        step--;
        zhufengAnimate(div5_1, {left: -step * 1000}, 300);
    }
}();



/*1F轮播图部分*/
~function () {
    var div4=document.getElementById("xuanxiangka1_2"),
        divs = document.getElementById("xuanxiangka1_2_1"),
        ul = document.getElementById("oul1"),
        lis = ul.getElementsByTagName("li"),
        left = document.getElementById("left1"),
        right = document.getElementById("right1"),
        step = 0,
        timer = null,
        timer2 = 2000;

    function lunbo() {
        if (step == 4) {
            step = 0;
            divs.style.left = (-step * 440) + "px";
        }
        step++;
        zhufengAnimate(divs, {left: -step * 440}, 300);
        jiaodian();
    }

    timer = window.setInterval(lunbo, timer2);


    function jiaodian() {
        var curLis = step == lis.length ? 0 : step;
        for (var i = 0; i < lis.length; i++) {
            if (i == curLis) {
                lis[i].className = "bg1";
            } else {
                lis[i].className = "";
            }
        }
    }

    function jiaodianchuli() {
        for (var i = 0; i < lis.length; i++) {
            ~function (i) {
                lis[i].onclick = function () {
                    step = i;
                    zhufengAnimate(divs, {left: -step * 440}, 300);
                    jiaodian();
                }
            }(i);
        }
    }

    jiaodianchuli();

    div4.onmousemove = function () {
        window.clearInterval(timer);
        left.style.display = right.style.display = "block";
    }
    div4.onmouseout = function () {
        timer = window.setInterval(lunbo, timer2);
        left.style.display = right.style.display = "none";
    }

    left.onclick = function () {
        if (step == 0) {
            step = 4;
            divs.style.left = (-step * 440) + "px";
        }
        step--;
        zhufengAnimate(divs, {left: -step * 440}, 300);
        jiaodian();
    }
    right.onclick = lunbo;
}();

/*1F选项卡部分*/
~function(){
    var f1=document.getElementById("f1"),
        f1s=f1.getElementsByTagName("div")[0],
        ul=f1s.getElementsByTagName("ul")[0],
        li=ul.getElementsByTagName("li");
    var f1y=document.getElementById("f1y").children;
    function hanshu(xc) {
        for (var i = 0; i < li.length; i++) {
            li[i].className = '';
            f1y[i].className = '';
        }
        li[xc].className = 'ppp';
        f1y[xc].className = 'xuanxiangka xxk';
    }
    for (var i = 0; i < li.length; i++) {
        var a = li[i];
        a.a1 = i;
        a.onmouseover = function () {
            hanshu(this.a1);
        }
    }
}();




/*2F轮播图部分*/
~function () {
    var div4=document.getElementById("xuanxiangka1_3"),
        divs = document.getElementById("xuanxiangka1_2_2"),
        ul = document.getElementById("oul2"),
        lis = ul.getElementsByTagName("li"),
        left = document.getElementById("left3"),
        right = document.getElementById("right3"),
        step = 0,
        timer = null,
        timer2 = 2000;

    function lunbo() {
        if (step == 4) {
            step = 0;
            divs.style.left = (-step * 440) + "px";
        }
        step++;
        zhufengAnimate(divs, {left: -step * 440}, 300);
        jiaodian();
    }

    timer = window.setInterval(lunbo, timer2);


    function jiaodian() {
        var curLis = step == lis.length ? 0 : step;
        for (var i = 0; i < lis.length; i++) {
            if (i == curLis) {
                lis[i].className = "bg1";
            } else {
                lis[i].className = "";
            }
        }
    }

    function jiaodianchuli() {
        for (var i = 0; i < lis.length; i++) {
            ~function (i) {
                lis[i].onclick = function () {
                    step = i;
                    zhufengAnimate(divs, {left: -step * 440}, 300);
                    jiaodian();
                }
            }(i);
        }
    }

    jiaodianchuli();

    div4.onmousemove = function () {
        window.clearInterval(timer);
        left.style.display = right.style.display = "block";
    }
    div4.onmouseout = function () {
        timer = window.setInterval(lunbo, timer2);
        left.style.display = right.style.display = "none";
    }

    left.onclick = function () {
        if (step == 0) {
            step = 4;
            divs.style.left = (-step * 440) + "px";
        }
        step--;
        zhufengAnimate(divs, {left: -step * 440}, 300);
        jiaodian();
    }
    right.onclick = lunbo;
}();

/*2F选项卡部分*/
~function(){
    var f1=document.getElementById("f2"),
        f1s=f1.getElementsByTagName("div")[0],
        ul=f1s.getElementsByTagName("ul")[0],
        li=ul.getElementsByTagName("li");
    var f1y=document.getElementById("f2y").children;
    function hanshu(xc) {
        for (var i = 0; i < li.length; i++) {
            li[i].className = '';
            f1y[i].className = '';
        }
        li[xc].className = 'ppp';
        f1y[xc].className = 'xuanxiangka xxk';
    }
    for (var i = 0; i < li.length; i++) {
        var a = li[i];
        a.a1 = i;
        a.onmouseover = function () {
            hanshu(this.a1);
        }
    }
}();





