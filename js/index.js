// 切换标签实现网页标题变化
let originTitile = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '404啦！!!!∑(ﾟДﾟノ)ノ ';
        clearTimeout(titleTime);
    } else {
        document.title = '哈哈，骗你的！ヾ(ﾟ∀ﾟゞ)';
        titleTime = setTimeout(function () {
            document.title = originTitile;
        }, 2000);
    }
});

// 网站运行时间
let now = new Date();
function createTime() {
    let grt = new Date("01/01/2021 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime() + 250);
    let days = (now - grt) / 1000 / 60 / 60 / 24;
    let dnum = Math.floor(days);
    let hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    let hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
        hnum = "0" + hnum;
    }
    let minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    let mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
        mnum = "0" + mnum;
    }
    let seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    let snum = Math.round(seconds);
    if (String(snum).length === 1) {
        snum = "0" + snum;
    }
    document.getElementById("date").innerHTML = "本站已安全运行" + dnum + "天";
    document.getElementById("time").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
}
setInterval("createTime()", 250);
