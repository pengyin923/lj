export default function setRem() {
    var html = document.documentElement;
    var width = html.clientWidth || window.innerWidth;
    // 基于屏幕宽度设置根字体大小
    html.style.fontSize = (width / 1920) * 10 + 'px'; // 根字体大小 = 屏幕宽度 / 1920 * 10
}
window.onload = setRem;
window.onresize = setRem;