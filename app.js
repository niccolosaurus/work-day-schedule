// const d = new Date();
// document.getElementById("currentDay").innerHTML = d;

let day = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = day;


// let myStorage = window.localStorage;
// console.log(myStorage);

// localStorage.setItem('myCat', 'Tom');

// let cat = localStorage.getItem('myCat');

// const textArea = document.createElement("textArea");
// textArea.setAttribute("type", "text");
// document.body.appendChild(textArea);

//event listner for the click which then saves what is in the box to the local storage.
//function()

$(document).ready(function () {
    // $(".buttonLocalStorage").on("click", function() {
    //     localStorage.setItem("myContent", $(".textArea").val());
    //     console.log(localStorage.getItem("myContent"));
    // })

    $("*[data-store]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("click", function (itm) {
        console.log('myContent', $(this).attr("data-store"))
        localStorage.setItem("item-" + $(this).attr("data-store"), $("*[data-store]").val());
    })
});