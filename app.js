$(document).ready(function(){
    let day = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day;
      $("*[hour]").each(function () {
        let hour = parseInt($(this).attr("hour"))
        // $(this).html().match(/\d+/)[0]
        let currentHour = parseInt(moment().format("H"))
       if (currentHour > hour) {
         $(this).addClass('past')
       } else if (currentHour == hour) {
         $(this).addClass('current')
       } else if (currentHour < hour) {
          $(this).addClass('future')
       }
    });
    
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });
  
    $("*[data-click]").on("click", function (itm) {
     let plannerClick = $(this).attr("data-click")
    //   console.log( $(this).attr("*[data-store]").val())
      let value = $(`[data-store=${plannerClick}]`).val()
      localStorage.setItem ("item-" + $(this).attr("data-click"), value);
    })
  });