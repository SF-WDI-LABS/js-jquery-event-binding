console.log("Sanity Check: JS is connected!");

$(document).ready(function(){
  console.log("DOM is ready!");

  //////////// HELLO SPAN ////////////
  var greeting = $('#greeting');
  // greeting.on('mouseover', popUpYay);
  // function popUpYay(event){
  //   alert('Yay!');
  // }

  //////////// LINKS ////////////
  var links = $("a"); // every link on the page
  // links.on("click", function handleClick(event){
  //   //event.preventDefault();
  //   alert("You just clicked a link!");
  // });

  //////////// KITTEN ////////////

  var kitten = $("#kitten-pic");
  // kitten.on("click", function (event) {
  //   console.log("inside kitten pic click event handler");
  //   console.log("this: ", this);
  // 	 console.log("target: ", event.target);
  //   console.log("target same as this?", this === event.target);
  // });

  var kittenContainer = $("#kitten-container");
  //
  // kittenContainer.on("click", function (event) {
  //   console.log("inside kitten container click event handler");
  //   console.log("this: ", this);
  //   console.log("target: ", event.target);
  //   console.log("target same as this?", this === event.target);
  // });
  //
  // $(document).on("click", function (event) {
  //   console.log("inside document click event handler");
  //   console.log("this: ", this);
  //   console.log("target: ", event.target);
  //   console.log("target same as this?", this === event.target);
  // });

  //////////// BOX ////////////

  // setTimeout to add a delay before execution
  // the box isn't on the page when the DOM is first ready
  // window.setTimeout(addBox, 3000);

  // doesn't work! too early!
  // $(".box").on("click", toggleLongBox);

  // does work!
  // $("#box-container").on("click", ".box", toggleLongCon);



});

function addBox(){
  console.log("adding a box!");
  newBox = $('<div class="box"></div>');
  $('#box-container').prepend(newBox);
}

function toggleLongBox(event){
  $(this).toggleClass("long-box");
}

function toggleLongCon(event){
  $(event.target).toggleClass("long-box");
}
