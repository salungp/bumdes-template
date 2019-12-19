$('.carousel').carousel();
$('.image-wrapper').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navContainer: '#custom-nav',
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 4
    }
  },
  navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
  dots: false,
});
window.onscroll = e => {
  let jarak = 30;
  let target = $(document).scrollTop();

  if (target > jarak) {
    $('.navbar').addClass('nav-active');
  } else if (target < jarak) {
    $('.navbar').removeClass('nav-active');
  }
};

// Created cons boolean
var bool = false;

$('.button-search').on('click', e => {
  bool = !bool;
  e.preventDefault();
  const btn = $('.button-search').children('.nav-link');
  $('.search-bar-wrapper').fadeToggle();
  if (bool) {
    btn.html('<i class="fa fa-remove"></i>');
  } else {
    btn.html('<i class="fa fa-search"></i>');
  }
});
$('.btn-search').on('click', e => {
  e.preventDefault();
  bool = !bool;

  $('.search-bar-wrapper').toggle();
  $('.navbar-brand').toggleClass('hide');
  $('.navbar').toggleClass('bg');

  const target = $('.btn-search'),
        oldColor = target.css('color');

  if (bool) {
    target.html('<i class="fa fa-remove"></i>');
    target.css('color', '#333333');
    $('.fa-reorder').css('color', '#333333');
  } else {
    target.html('<i class="fa fa-search"></i>');
    target.css('color', '#ffffff');
    $('.fa-reorder').css('color', '#ffffff');
  }
});
$('.overlay').css('border-left', window.innerWidth + 'px solid transparent');

const customStyle = {
  hoverDropdown: {
    navbarHeight: $('.navbar').innerHeight(),
    item: $('.hover-dropdown').children('.hover-dropdown-items')
  },
  navLink: {
    height: $('.navbar').css('height'),
    target: $('.nav-item')
  }
}

// Apply hover dropdown
const { hoverDropdown, navLink } = customStyle;
const { navbarHeight, item } = hoverDropdown;
const { height, target } = navLink;

// if window width more than 900px
if ($(document).width() >= 900) {
  target.css('height', height + 'px !important');
  item.css('top', navbarHeight + 'px');
}

// Action scroll top
function backToTop() {
  this.button = $('.scroll-top');
  this.target = 240;
  this.customClass = 'scroll-top-active';
  this.value = $(document).scrollTop();
}

backToTop.prototype.run = function() {
  const self = this;
  const value = self.value;

  if (value >= self.target) {
    self.button.addClass(self.customClass);
  } else if (value <= self.target) {
    self.button.removeClass(self.customClass);
  }
};

const hoverDropdownBtn = $('.hover-dropdown-btn');
hoverDropdownBtn.on('click', e => {
  e.preventDefault();
  const next = $(e.target).next();
  next.slideToggle();
});

// Run event
$(document).on('scroll', () => {
  new backToTop().run();
});

$('.scroll-top').on('click', () => {
  $(document).scrollTop(0);
});