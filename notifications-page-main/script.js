const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("markAllRead");

let numOfUnreadMessages= unreadMessages.length;
console.log("before " + numOfUnreadMessages);
unread.innerText=numOfUnreadMessages;
unreadMessages.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.remove("unread");
        console.log(item);
        let numOfUnreadMessages= document.querySelectorAll(".unread").length; //validno samo uutar loopa
        unread.innerText= numOfUnreadMessages;
        console.log("inside "+ numOfUnreadMessages);
    });
});

markAll.addEventListener("click", () =>{
    unreadMessages.forEach((item) => {
        item.classList.remove("unread");
    });
    let numOfUnreadMessages = document.querySelectorAll(".unread").length;
    unread.innerText=numOfUnreadMessages;
})