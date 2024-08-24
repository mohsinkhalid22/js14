let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
    // // let a = 25;
    // a++;
    // console.log(a);
};

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler2");
// })

// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// }

// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler4");
// })

// btn1.removeEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// })

let div = document.querySelector("div");

div.onmouseover = (evt) => {
    // console.log("you are in div.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
