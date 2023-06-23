// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
const dropdownClose = document.getElementById("dropdownClose");
const dropdowns = document.querySelectorAll(".dropdown");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  if (header.classList.contains("active")) {
    header.classList.remove("active");
    dropdowns.forEach((item) => {
      const dropdownMenu = item.querySelector(".dropdownMenu");
      const dropdownText = item.querySelector("p");
      dropdownMenu.classList.remove("active");
      dropdownText.classList.remove("active");
    });
  }
};
// const langBtns = document.querySelectorAll(".lang");
// langBtns.forEach((langBtn) => {
//   langBtn.onclick = () => {
//     langBtn.classList.toggle("active");
//   };
// });

window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end

// scroll start
const advantage = document.getElementById("advantages");

let advantageTop = advantage && advantage.offsetTop;

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    if (advantage) {
      changeLinkState();
    }

    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (advantage && window.pageYOffset > advantageTop - 67) {
      advantage.classList.add("sticky");
    } else {
      if (advantage) {
        advantage.classList.remove("sticky");
      }
    }
    if (st > lastScrollTop) {
      header.classList.add("sticky");
      if (advantage && window.pageYOffset > advantageTop + 300) {
        header.classList.add("hidden");
        advantage.classList.add("top");
      }
    } else if (st < lastScrollTop) {
      if (header.classList.contains("uniq")) {
        header.classList.remove("sticky");
      }
      if (advantage && window.pageYOffset < advantageTop - 59) {
        header.classList.remove("sticky");
      }
      if (advantage && window.pageYOffset > advantageTop + 300) {
        header.classList.remove("hidden");
        advantage.classList.remove("top");
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

// scroll end
// tab start => faq secition
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");

      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// tab end
// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");

      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      header.classList.add("active");
    }
  });
}
// remove active

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector(".dropdownMenu");
    const dropdownText = dropdown.querySelector("p");

    window.addEventListener("click", function (event) {
      if (event.target == dropdownMenu) {
        dropdownMenu.classList.remove("active");
        dropdownText.classList.remove("active");
      }
    });
  });
  dropdownClose.onclick = () => {
    header.classList.remove("active");

    dropdowns.forEach((item) => {
      const dropdownMenu = item.querySelector(".dropdownMenu");
      const dropdownText = item.querySelector("p");
      dropdownMenu.classList.remove("active");
      dropdownText.classList.remove("active");
    });
  };
}
// faq end

// sliders start
$(function () {
  $(".about__inner-faq").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    arrows: false,
    speed: 500,
    asNavFor: ".about__inner-gallery",
    responsive: [
      {
        breakpoint: 930,
        settings: {},
      },
    ],
  });
});
$(function () {
  $(".about__inner-gallery").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: true,
    asNavFor: ".about__inner-faq",

    responsive: [
      {
        breakpoint: 930,
        settings: {},
      },
    ],
  });
});
var $status = $(".pagingInfo");
$(".testimonial__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    speed: 500,
    fade: true,
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      return i + 1 + " " + "/" + " " + slider.slideCount;
    },
    responsive: [
      {
        breakpoint: 751,
        settings: {
          fade: false,
        },
      },
    ],
  });
});

/*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 1180) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 1180) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);
// advantages end

// advantages start
if (advantage) {
  const advantageBtn = advantages.querySelector("h5");
  const advantageRow = document.getElementById("advantagesRow");

  const links = document.querySelectorAll(".links");
  const sections = document.querySelectorAll(".anchor");

  // mob dropdown
  advantageBtn.onclick = () => {
    advantage.classList.toggle("active");
    advantageRow.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.addEventListener("click", function (event) {
    if (event.target == advantage) {
      advantage.classList.remove("active");
      advantageRow.classList.remove("active");
      body.classList.remove("active");
    }
  });
  // mob dropdown

  function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    links.forEach((link) => link.classList.remove("active"));
    links[index]?.classList.add("active");
    links.forEach((link) => {
      if (link.classList.contains("active")) {
        advantageBtn.innerHTML = link.getAttribute("data-name");
      }
    });
  }
  links.forEach((e) => {
    onLinkClick(e);
  });
  function onLinkClick(linkItem) {
    const linkItemName = linkItem.getAttribute("data-name");

    linkItem.addEventListener("click", function () {
      advantage.classList.remove("active");
      advantageRow.classList.remove("active");
      body.classList.remove("active");
      advantageBtn.innerHTML = linkItemName;
    });
  }
}
// advantages end

// hero Link
const heroLink = document.getElementById("heroLinks");
if (heroLink) {
  const heroLinkBtn = document.getElementById("heroLinksBtn");
  const closeBtns = heroLink.querySelectorAll(".closeBtn");
  heroLinkBtn.onclick = () => {
    heroLink.classList.toggle("active");
    body.classList.toggle("active");
  };
  closeBtns.forEach((closeBtn) => {
    closeBtn.onclick = () => {
      heroLink.classList.remove("active");
      body.classList.remove("active");
    };
  });
}
// hero Link
// partner form start
const partnersForm = document.getElementById("partnersForm");
if (partnersForm) {
  const inputs = document.querySelectorAll(".input");
  const textArea = document.querySelector(".textArea");

  inputs.forEach((item) => {
    const inputItem = item.querySelector("input");
    const label = item.querySelector("label");
    if (inputItem.value.length != 0) {
      label.classList.add("top");
    } else {
      label.classList.remove("top");
    }
    inputItem.onchange = () => {
      if (inputItem.value.length != 0) {
        label.classList.add("top");
      } else {
        label.classList.remove("top");
      }
    };
  });
  if (textArea) {
    const textItem = textArea.querySelector("textarea");
    const textLabel = textArea.querySelector("label");
    if (textItem.value.length != 0) {
      textLabel.classList.add("top");
    } else {
      textLabel.classList.remove("top");
    }
    textItem.onchange = () => {
      if (textItem.value.length != 0) {
        textLabel.classList.add("top");
      } else {
        textLabel.classList.remove("top");
      }
    };
  }
}
// partner form end
// select start
const selectFunc = () => {
  const selects = document.querySelectorAll(".select");
  selects.forEach((select) => {
    const selected = select.querySelector(".select__selected");
    const selectOptions = select.querySelector(".select__options");
    const listItems = selectOptions.querySelectorAll("li");
    const input = select.querySelector("input[type='hidden']");

    const label = select.querySelector("label");

    selected.onclick = () => {
      select.classList.toggle("active");
    };
    listItems.forEach((listItem) => {
      listItem.onclick = () => {
        selected.innerHTML = listItem.innerHTML;
        select.classList.remove("active");
        input.value = listItem.getAttribute("data-value");
        label.classList.add("top");
      };
    });
  });
};
selectFunc();
// select end
// showMore start
const showMore = document.getElementById("showMore");
if (showMore) {
  const showMoreBtn = document.getElementById("showMoreBtn");
  showMoreBtn.onclick = () => {
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
    if (showMoreBtn.classList.contains("active")) {
      showMoreBtn.innerHTML = "Show Less";
    } else {
      showMoreBtn.innerHTML = "Show More";
    }
  };
}
// showMore end
