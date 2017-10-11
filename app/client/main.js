import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
var transitionSec = 0.8;
var isScrolledIntoView = function(elem, offset)
{
    return ($(elem).offset().top <= $(window).scrollTop()+$(window).height()*offset);
}

var showBlocks = function(blocks, offset) {

  blocks.each(function(){
      //console.log($(this).offset().top+'.'+$(window).scrollTop()+'.'+$(window).height())
      //console.log($(this).offset().top);
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('fadeIn');
        //console.log($(this));
      }
    });
}

var hideBlocks = function(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
  });
}



Template.next.events({
  'click button'(event, instance) {

    document.getElementById("buyerInfo").style.display = "inline";
    document.getElementById("sellerInfo").style.display = "inline";

    if (character == "seller"){
        document.getElementById("buyerInfo").style.display = "none";
    }else{
        document.getElementById("sellerInfo").style.display = "none";
    }

    var temp = document.getElementById("flipper");
    temp.className += " flipperClicked";


  },
});

Template.previous.events({
  'click button'(event, instance) {

    var temp = document.getElementById("flipper");
    temp.className = " flipper";

  },
});

Template.submit.events({
  'click button'(event, instance) {
    //instance.counter.set(instance.counter.get() + 1);
  },
});

Template.chooseCharacters.events({
  'click button'(event, instance) {
      document.getElementById("seller").setAttribute("class", "btn btn-default");
      document.getElementById("buyer").setAttribute("class", "btn btn-default");
      event.target.className = "btn btn-info";
      character = event.target.value;
  },
});

Template.flip.events({
  'click button'(event, instance) {
    var temp = document.getElementById("flipper");
    temp.className += " flipperClicked";
  },
});

Template.arrowDown.events({
  'click a'(event, instance) {
      var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
        scrollDuration = 1000;
      $(window).scrollTo(height, scrollDuration);
  },
});

Template.body.helpers({
  timelineSections: [
    { title: 'HTC Vive VR Service Developer Intern', content: 'Develop viveport VR advertisement SDK and assetbundle using Unity', date: '2017.03 - 2017.08'},
    { title: 'Blockchain Research Assistant', content: 'Applying Ethereum smart contract in insurance domain', date: '2016.09 - 2017.01'},
    { title: 'KPMG IT Consultant Intern', content: 'Conducting a market research and user experience research on the new App produced by KPMG, and propose some suggestions on features and modification of user experience.', date: '2016.01 - 2016.03'},
    { title: 'XYZPriting Front-end Developer Intern', content: 'Responsible for the web development of China using Angular.js and Sass. Using Source Tree to co-work with other engineers. And adding/updating new features of the websites using JavaScript/HTML and some modern packages, e.g. Bootstrap, jQuery.', date: '2015.09 - 2016.01'},
    { title: 'Founder of IMPioneer Voluntary Group', content: 'This voluntary group holds a computer science camp at schools that lack teaching resources during each summer.', date: '2013.07 - 2014.06'},
    { title: 'Lecturer of Web Developing Camp', content: 'Lecturing web development tutorial to students from senior high school.', date: '2014.06 - 2014.07'},
  ],
  specialtySlides: [
      { title: 'This is task 1', content: 'sss'},
      { title: 'This is task 2', content: 'sss'},
      { title: 'This is task 3', content: 'sss'},
  ],
});

Template.init.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      console.log('Template render complete');
      var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

//---

      $('#demo').RollingSlider({
        showArea:"#example",
        prev:"#jprev",
        next:"#jnext",
        moveSpeed:300,
        autoPlay:false
      });

      //$(window).on("scroll", removeIframe)
      var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.7;
      var inView = false;

      //hide timeline blocks which are outside the viewport
      hideBlocks(timelineBlocks, offset);


//---

      $(window).scroll(function(){
          if (window.pageYOffset >= height){
              $(".header").addClass("fixed");
          }else{
              $(".header").removeClass("fixed");
          }

      //---
      (!window.requestAnimationFrame)
        ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
        : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });


      // if (isScrolledIntoView('.work', offset)) {
      //   //$('.space').addClass("slideExpandUp");
      // }
      });
    }
}
