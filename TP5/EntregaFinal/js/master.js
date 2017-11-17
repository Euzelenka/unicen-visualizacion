$('.carousel').carousel();
var photosArray = [];
let idMiniCarousel;
let indiceCarousel;
let cb = new Codebird;
cb.setProxy("https://cb-proxy.herokuapp.com/");

$(document).ready(function() {
  cb.setConsumerKey("tdBPNs1qFs95m3DFOfccAOk23", "MbzrYohbdxEgtrAXKpEafhuIiAVL9bMjAidJ1nIhspypSi7QTs");
  cb.setToken("925789691177308160-KGNn0GHOYx9gtl2VamRo4AZ8DyDHSUS", "DZO5VVDfaDkbvJIrZUBmm8lqD904oF9EF74h5dQTT6EjP");
});

$(".small-nav").hide();
$(".carousel").hide();
$(".grid").hide();
$('.controls').hide();
$('.loading').hide();

$("#tweet").click(function(event) {
  event.preventDefault();
  let params = {
    q: $(".tweet-search").val(),
    count: 100
  };
  photosArray.length = 0;
  searchTweets(params);
});

$("#tweetC").click(function(event) {

  event.preventDefault();
  let params = {
    q: $(".tweet-searchC").val(),
    count: 100
  };
  photosArray.length = 0;
  searchTweets(params);
});

function searchTweets(params) {

  event.preventDefault();
  $('.loading').show();
  $('#footer').hide();
  $(".index").hide();
  $(".small-nav").show();

  cb.__call(
    "search_tweets",
    params,
    function (reply) {

      if(reply.statuses.length == 0){
        $('.nohay').html("No hay imagenes!");
        $('.loading').hide();
      }
      else{
        for (var i = 0; i < reply.statuses.length; i++) {
          let tweet = reply.statuses[i];
          if(tweet.extended_entities && tweet.extended_entities.media[0].type == "photo") {
            let urlImg = tweet.extended_entities.media[0].media_url_https;

            if(!photosArray.includes(urlImg)){
              if(tweet.extended_entities.media.length > 0){
                let json = {
                  src : urlImg ,
                  likes: tweet.favorite_count
                };
                photosArray.push(json);

              }
            }
          }
        }
        for (var i = 0; i < photosArray.length; i++) {
          $('.loading').hide();
          $('#footer').show();
          $(".carousel").show();
          $('.d-block').css({
            "width": "900",
            "height":"550"
          });
          $('.d-block').attr('src', photosArray[0].src);
          $('.likes').html(photosArray[0].likes);
          indiceCarousel = 0;
        }
        $('#insert-img').empty();
        for (var i = 1; i < 6; i++) {
          if(photosArray[i] != null) {
            $('#insert-img').append('<img id="'+i+'" src="'+photosArray[i].src+'">');
          }
          idMiniCarousel = 6;
        }
      }
    },
  );
};

//tecla left carousel
$('#prev').click(function(event) {
  event.preventDefault();
  if(indiceCarousel == 0) {
    indiceCarousel = photosArray.length-1;
  }
  else {
    indiceCarousel--;
  }

  $('.d-block').css({
    'height': '0px'
  });
  $('.d-block').bind("transitionend",function(){
    $('.d-block').attr('src', photosArray[indiceCarousel].src);
    $('.likes').html(photosArray[indiceCarousel].likes);
    $('.d-block').css({'height': '550px'});
    $('.heart').css({'animation':''});
    $('.heart').css({'animation':'3s color linear infinite'});
  })

})


function next() {
  if(indiceCarousel == photosArray.length-1) {
    indiceCarousel = 0;
  }
  else {
    indiceCarousel++;
  }
  $('.d-block').css({
    'opacity': '0'
  });
  console.log(indiceCarousel);
  $('.d-block').bind("transitionend",function(){

    $('.d-block').attr('src', photosArray[indiceCarousel].src);
    $('.likes').html(photosArray[indiceCarousel].likes);
    $('.d-block').css({'opacity': '1'});
    $('.heart').css({'animation':''});
    $('.heart').css({'animation':'latidos 1s infinite'});
  })

};
let superplay='';
$('#play').click(function(event){
  if ($('#play').attr('habilitado')=='si'){
  superplay=setInterval("next()",5000);
  $('#play').attr('habilitado','no');
}
});

$('#pause').click(function(event){
  if ($('#play').attr('habilitado') =='no'){
  clearInterval(superplay);
  $('#play').attr('habilitado','si');
}
});

//tecla right carousel
$('#next').click(function(event){
  next();
});


//tecla right mini-carousel
$('.right').click(function(event ){
  event.preventDefault();
  $('#insert-img').empty();
  if(idMiniCarousel >= photosArray.length) {
    idMiniCarousel = 1;
  }
  let inicio = idMiniCarousel;
  let fin = idMiniCarousel + 5;
  for (var i = inicio; i < fin; i++) {
    if(photosArray[i] != null) {
      $('#insert-img').append('<img id="'+i+'" src="'+photosArray[i].src+'">');
    }
  }
  idMiniCarousel = idMiniCarousel + 6;
})

//tecla left mini-carousel
$('.left').click(function(event){
  event.preventDefault();
  $('#insert-img').empty();
  debugger;
  if(idMiniCarousel <= 0) {
    idMiniCarousel = photosArray.length;
  }
  let inicio = idMiniCarousel;
  let fin = idMiniCarousel - 5;
  for (var i = inicio; i > fin; i--) {
    if(photosArray[i] != null) {
      $('#insert-img').append('<img id="'+i+'" src="'+photosArray[i].src+'">');
    }
  }
  idMiniCarousel = idMiniCarousel - 6;
})

//icons usage
$('.fa-picture-o').click(function(event){
  event.preventDefault();
  $(".grid").hide();
  $('.carousel').show();
})

$('.fa-th').click(function(event){
  event.preventDefault();
  $(".carousel").hide();
  $('#footer').hide();
  $('.pag').hide();
  $('.grid').show();
  $(".card-img-top").css('transition:','width','300px');
let params = {
 q: $(".tweet-search").val(),
 count: 100
};
searchTweetsGrid(params);
  if(carousel()==0){
    $('.carousel').show();
  }
});

function carousel(){
  $(".fa-picture-o").click(function(){
    return 0;
  });
}

//controls big-image carousel
$('.d-block').mouseover(function() {
  $('.controls').show();
})

$('.d-block').mouseleave(function() {
  $('.controls').hide();
})

$('.controls').mouseover(function() {
  $('.controls').show();
})

fullscreen = function(e){
      if (e.webkitRequestFullScreen) {
        e.webkitRequestFullScreen();
      } else if(e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
      }
  }
document.getElementById('expand').onclick = function(){
    fullscreen(document.getElementById('content'));
}



function searchTweetsGrid(params) {
 event.preventDefault();
 $('.loading').show();
 $(".index").hide();
 $(".small-nav").show();

 cb.__call(
   "search_tweets",
   params,
   function (reply) {
     var photosArray = [];
     if(reply.statuses.length == 0){
       $('.nohay').html("No hay imagenes!");
       $('.loading').hide();
     }
     else{
       for (var i = 0; i < reply.statuses.length; i++) {
         let tweet = reply.statuses[i];
         if(tweet.extended_entities && tweet.extended_entities.media[0].type == "photo") {
           let urlImg = tweet.extended_entities.media[0].media_url_https;

           if(!photosArray.includes(urlImg)){
             if(tweet.extended_entities.media.length > 0){
               let json = {
                 src : urlImg ,
                 likes: tweet.favorite_count
               };
               photosArray.push(json);
             }
           }
         }
       }
       for (var i = 0; i < 6; i++) {
         $('.loading').hide();
         $('.pag').show();
         $('.grid-image').append('<div class="card" style="width: 15rem;"><img class="card-img-top img-thumbnail" src="'+photosArray[i].src+'"></div>');
       }
     }
   },
 )
}

function firstImages() {
  $('.grid-image').empty();
  for (var i = 0; i < 6; i++) {
    $('.loading').hide();
    $('.grid-image').append('<div class="card" style="width: 15rem;"><img class="card-img-top img-thumbnail" src="'+photosArray[i].src+'"></div>');
  }
}

$('#link-1').click(function(event) {
  firstImages();
})
$('.previous').click(function(event) {
  firstImages();
})

$('#link-2').click(function(event) {
 $('.grid-image').empty();
 for (var i = 6; i < 12; i++) {
     $('.loading').hide();
     $('.grid-image').append('<div class="card" style="width: 15rem;"><img class="card-img-top img-thumbnail" src="'+photosArray[i].src+'"></div>');
 }
})
