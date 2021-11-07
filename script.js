let bottonLi = document.querySelector("ul").children;
const cont = document.querySelector(".cont");
const contText = cont.children[0];
// .................................
Array.from(bottonLi).forEach(e => {
    e.addEventListener("click", (m) => {
        let myid = e.getAttribute("my-id");
        history.pushState(setdata(myid), myid, myid);
        setAt(myid);

    })
});

window.addEventListener("popstate", e => {

    if (history.state) {
        setAt(history.state.id);

    }

})

function setdata(n) {
    let data;
    switch (n) {
        case "home":
            data = { color: "blue", text: "home", id: "home" }
            break;
        case "search":
            data = { color: "red", text: "search", id: "search" }
            break;
        case "user":
            data = { color: "#999", text: "user", id: "user" }
            break;
        case "book":
            data = { color: "white", text: "book", id: "book" }
            break;


    }
    return data;

}

function setAt(myid) {
    cont.style.backgroundColor = setdata(myid).color;
    contText.innerText = setdata(myid).text;
    Array.from(bottonLi).forEach(e => {
        e.children[0].children[0].style.color = "#3a3a3a";
        // if (e.getAttribute("my-id") == myid.id)
        //     e.children[0].children[0].style.color = "black";

    })
    Array.from(bottonLi).forEach(e => {
        if (e.getAttribute("my-id") == myid)
            e.children[0].children[0].style.color = "black";
    })
}