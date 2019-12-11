import x from "./x.js";
import png from "./assets/1.png";
console.log(png); // loader会自动处理图片的路径，转成16进制
// 1.弄了个图片放到assets下面
// 2.用import得到图片路径，把图片路径放到src里面,fileloader的作用就是把文件变成文件路径
const div = document.getElementById("app");
console.log(div);
div.innerHTML = `<img src="${png}">`;

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy"); // import+'括号'，得到的是一个promise
  promise.then(
    module => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
div.appendChild(button);
