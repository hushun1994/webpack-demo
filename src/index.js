import name from "./x.js";
import hanfei from "./assets/hanfei.jpeg";
// import zhangliang from "./assets/zhangliang.jpeg";

console.log(name);

const box1 = document.querySelector(".content .box1");
const box2 = document.querySelector(".content .box2");

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./assets/zhangliang.jpeg");
  promise.then(
    (module) => {
      box2.innerHTML = `
        <img src="${module.default}">
      `;
    },
    () => {
      console.log("模块加载失败");
    }
  );
};
document.body.appendChild(button);

box1.innerHTML = `
  <img src="${hanfei}">
`;
