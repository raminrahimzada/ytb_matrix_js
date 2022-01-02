const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.outerWidth+100;
let ch = window.outerHeight+100;

let charArr = [
  "姓",
  "名",
  "的",
  "是",
  "的",
  "是",
  "不",
  "不",
  "人",
  "了",
  "我",
  "在",
  "有",
  "他",
  "這",
  "中",
  "大",
  "來",
  "上",
  "國",
  "個",
  "到",
  "說",
  "們",
  "為",
  "子",
  "和",
  "你",
  "地",
  "出",
  "道",
  "也",
  "時",
  "年",
  "得",
  "就",
  "那",
  "要",
  "下",
  "以",
  "生",
  "會",
  "自",
  "著",
  "去",
  "之",
  "過",
  "家",
  "學",
  "對",
  "學",
  "可",
  "她",
  "裡",
  "后",
  "小",
  "麼",
  "心",
  "多",
  "天",
  "而",
];

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 13;
let maxColumns = cw / fontSize;
canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    var rand=Math.random()+0.3;
    this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed =-7.5+(Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
	ctx.shadowColor = "rgba(0,0,0,"+rand+")";
    ctx.fillStyle = "rgba(0,255,0,"+rand+")";
    ctx.font = fontSize + "px san-serif";		
	
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > ch) {
      this.y = (Math.random() * ch) / 2 - 50;
      this.x = Math.floor(Math.random() * maxColumns) * fontSize;
      this.speed =-7.5+ (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    }
  }
}

let update = () => {
  document.documentElement.style.cursor = 'none';
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * ch) / 2 - 50
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.shadowBlur = 4;
  ctx.fillRect(0, 0, cw, ch);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();
