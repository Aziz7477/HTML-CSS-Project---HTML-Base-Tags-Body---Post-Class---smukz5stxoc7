let contents = document.querySelectorAll(".content");
let listItems = document.querySelectorAll(".menu ul li");
let hideAllContents = ()=>{
    contents.forEach((content) => content.classList.remove("show"));
}
let hideAllItems = ()=>{
    listItems.forEach((item) => item.classList.remove("active"));
}
listItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        hideAllContents();
        hideAllItems();
        item.classList.add("active");
        contents[index].classList.add("show");
    })
})
