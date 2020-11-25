// page top
export function pageTop() {
  const pagetop = $('.js-page-top');

  pagetop.on('click', function() {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
};


// smooth scroll
export function smoothScroll() {
  const jsScroll = $('.js-scroll');

  jsScroll.on('click', function(){
    const adjust = 0;
    const speed = 500;
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top + adjust;

    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
};
