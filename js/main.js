////first slider
const fotos = [
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FWD3MYltxLPflws7HZbvGItanDaohW8KJ5JVKUEZ8.jpg&w=1920&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FMcAQykf7an16r8Hloc9s5zcW75sniYGYV5Gp7Dv3.jpg&w=828&q=100",
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FccarBNVi3wHnrFT8o7zUb8hqtOHnHGnj2x7Dp5BY.jpg&w=828&q=100",
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2Fn2JuiEGGwIxG2Pp3FCIsR4eLNaNF3kGkytU9cLFv.png&w=828&q=100",
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FCSg7I0BqDKWNpdwmsbXdt5Nuk6G7vYwryKTcj2CB.jpg&w=828&q=100",
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FVnb0asGHdECgvjTGxt9iAThHQ5GjLuqSZSFFkxCH.png&w=828&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FZAtG7bKFHaD5EEmZ2ELh9VB8mhpRnqdeY0p6lC3m.jpg&w=1920&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FIGfFQLKSFN6q31BYfvF3yftTpBUXLPMRWZlD1qC7.jpg&w=1920&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FvHBKQcBYmrjui0joPFErevk6HabQG5seecEBMXEN.jpg&w=1920&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FbYxfGQGVQWmROwQtpXW6J7AtFli7DxnRLFS7gV0K.png&w=1920&q=100",
  ],
  [
    "https://www.rouge.am/_next/image?url=https%3A%2F%2Frouge.am%3A8005%2Fstorage%2Fimages%2FOmJjuDkzejO686gubLBkCTR4emJQkdf7BZQPf7ue.png&w=1920&q=100",
  ],
];

const sliderInner = document.querySelector(".slider-inner");
const select = document.querySelector(".select");
for (let k = 0; k < fotos.length; k++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  const round = document.createElement("div");
  round.className = "round";
  const count = fotos[k].length;
  const width = 100 / count;
  for (let j = 0; j < count; j++) {
    const img = document.createElement("img");
    img.src = fotos[k][j];
    img.style.width = width + "%";

    if (k === 1 && j === 0) {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open("https://www.instagram.com/reel/DPmCu3DDC6N/", "_blank");
      });
    }

    if (k === 1 && j === 1) {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open("https://www.instagram.com/reel/DP0kDPTjMh8/", "_blank");
      });
    }

    if (k === 1 && j === 2) {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open("https://www.instagram.com/reel/DQGlkVVjBbY/", "_blank");
      });
    }

    if (k === 1 && j === 3) {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open("https://www.instagram.com/reel/DSFwAC_DPsU/", "_blank");
      });
    }

    if (k === 1 && j === 4) {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open("https://www.instagram.com/reel/Czf4TbusVzO/", "_blank");
      });
    }

    if (k === 1 && j < 5) {
      img.classList.add("first-slide-img");
    }
    slide.appendChild(img);
  }
  sliderInner.appendChild(slide);
  select.appendChild(round);
}

const rounds = document.querySelectorAll(".round");
for (let i = 0; i < rounds.length; i++) {
  rounds[i].addEventListener("click", function () {
    clearInterval(sliderInterval);
    current = i;

    sliderInner.style.transition = "0.5s";
    sliderInner.style.transform = `translateX(-${current * 100}%)`;

    for (let r of rounds) r.classList.remove("active");

    rounds[current].classList.add("active");

    sliderInterval = setInterval(moveSlider, 3000);
  });
}
rounds[0].classList.add("active");

const firstClone = sliderInner.children[0].cloneNode(true);
sliderInner.appendChild(firstClone);

let current = 0;

function moveSlider() {
  current++;
  for (let r of rounds) r.classList.remove("active");
  if (current < fotos.length) {
    rounds[current].classList.add("active");
  }
  sliderInner.style.transition = "1s";
  sliderInner.style.transform = `translateX(-${current * 100}%)`;

  if (current === fotos.length) {
    setTimeout(() => {
      sliderInner.style.transition = "none";
      rounds[0].classList.add("active");
      current = 0;
      sliderInner.style.transform = `translateX(0%)`;
    }, 1000);
  }
}

let sliderInterval = setInterval(moveSlider, 3000);
///////////////////////////////////////////////////

////Search
let searchres = document.querySelector('#search-res'); 
let search = document.querySelector('.search');
let szone = document.querySelector('.row-search');
let searchresult = document.querySelector('.search-result');
let input = document.querySelector(".h-search");

let firstcl = 0;
let timeout; 

search.addEventListener('click', function () {
  if (firstcl === 0) {
    szone.classList.add('active');
    search.innerHTML = '✖';
    input.focus(); 
    firstcl = 1;
  } else {
    szone.classList.remove('active');
    search.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    searchres.classList.remove('active'); 
    searchresult.innerHTML = '';
    input.value = '';
    firstcl = 0;
  }
});

input.addEventListener("input", function (e) {
    clearTimeout(timeout);
  timeout = setTimeout(() => {
    let value = input.value.trim();
    if (value.length < 2) {
      searchresult.innerHTML = '';
      searchres.classList.remove('active');
      return;
    }
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`)
      .then(res => res.json())
      .then(data => {
        searchresult.innerHTML = '';

        if (data.length === 0) {
          searchres.classList.remove('active');
          return;
        }

        searchres.classList.add('active');
        products(data,searchresult);
      })
      .catch(err => console.log(err));
  }, 300);
   
    // fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     searchresult.innerHTML = '';
    //     if (data.length === 0) {
    //       searchres.classList.remove('active');
    //       return;
    //     }
    //     searchres.classList.add('active');
    //     products(data, searchresult);
    //   })
    //   .catch(err => console.log(err));
});

/////////

///Slider function for all slides

const track = document.querySelector(".slider-track");
const next = document.querySelector(".r-arrow");
const prev = document.querySelector(".l-arrow");
const stori = document.querySelector(".slider-stori");
const next2 = document.querySelector(".stori-r-arrow");
const prev2 = document.querySelector(".stori-l-arrow");
const product = document.querySelector(".slider-prod");
const next3 = document.querySelector(".prod-r-arrow");
const prev3 = document.querySelector(".prod-l-arrow");
const product2 = document.querySelector(".slider-prod2");
const next4 = document.querySelector(".prod2-r-arrow");
const prev4 = document.querySelector(".prod2-l-arrow");
const product3 = document.querySelector(".slider-prod3");
const next5 = document.querySelector(".prod3-r-arrow");
const prev5 = document.querySelector(".prod3-l-arrow");
const product4 = document.querySelector(".slider-prod4");
const next6 = document.querySelector(".prod4-r-arrow");
const prev6 = document.querySelector(".prod4-l-arrow");

function moveNext(slider) {
  const gap = parseInt(getComputedStyle(slider).gap);
  const slideWidth = slider.children[0].offsetWidth + gap;
  slider.style.transition = "transform 0.5s";
  slider.style.transform = `translateX(-${slideWidth}px)`;

  slider.addEventListener("transitionend", function handler() {
    slider.appendChild(slider.children[0]);
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
    slider.removeEventListener("transitionend", handler);
  });
}

function movePrev(slider) {
  const gap = parseInt(getComputedStyle(slider).gap);
  const slideWidth = slider.children[0].offsetWidth + gap;
  slider.insertBefore(
    slider.children[slider.children.length - 1],
    slider.children[0],
  );
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${slideWidth}px)`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      slider.style.transition = "transform 0.5s";
      slider.style.transform = "translateX(0)";
    });
  });
}

next.addEventListener("click", () => moveNext(track));
prev.addEventListener("click", () => movePrev(track));
next2.addEventListener("click", () => moveNext(stori));
prev2.addEventListener("click", () => movePrev(stori));
next3.addEventListener("click", () => moveNext(product));
prev3.addEventListener("click", () => movePrev(product));
next4.addEventListener("click", () => moveNext(product2));
prev4.addEventListener("click", () => movePrev(product2));
next5.addEventListener("click", () => moveNext(product3));
prev5.addEventListener("click", () => movePrev(product3));
next6.addEventListener("click", () => moveNext(product4));
prev6.addEventListener("click", () => movePrev(product4));
///////////////////////////////////////////////////////////

/// video open in dev

const videos = document.querySelectorAll(".vid");
const links = document.querySelectorAll(".link");
const modal = document.querySelector(".video-modal");
const frame = document.getElementById("videoFrame");
const close = document.querySelector(".close");

function vid(elms) {
  elms.forEach((v) => {
    v.addEventListener("click", () => {
      const id = v.getAttribute("data-video");
      frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
}

function CloseModal() {
  modal.style.display = "none";
  frame.src = "";

  document.body.style.overflow = "";
}

close.addEventListener("click", CloseModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    CloseModal();
  }
});

vid(videos);
vid(links);
//////////////////////////////////////////

/////cart,wishlist,localstorage and products show functions
const cart = [];
const wishlist = [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function loadCart() {
  const data = localStorage.getItem('cart');
  if (data) {
    const parsed = JSON.parse(data);
    parsed.forEach(item => cart.push(item));
  }
}

function loadWishlist() {
  const data = localStorage.getItem('wishlist');
  if (data) {
    const parsed = JSON.parse(data);
    parsed.forEach(item => wishlist.push(item));
  }
}
loadCart();
loadWishlist();
updateCartCount();
updateWishCount();
const cartzone = document.querySelector("#cartzone");
const wishzone = document.querySelector("#wishzone");
const hcart = document.querySelector(".cart-header");
const hwish = document.querySelector(".wish-header");

hcart.addEventListener("click", function () {
  cartzone.style.display = "block";
  document.body.style.overflow = "hidden";
  showCart();
});
hwish.addEventListener("click", function () {
  wishzone.style.display = "block";
  document.body.style.overflow = "hidden";
  showWish();
});
const cartclose = document.querySelector("#cartzone .close");
const wishclose = document.querySelector("#wishzone .close");
wishclose.addEventListener("click", () => {
  wishzone.style.display = "none";
  document.body.style.overflow = "auto";
});
cartclose.addEventListener("click", () => {
  cartzone.style.display = "none";
  document.body.style.overflow = "auto";
});

function updateCartCount() {
  const cartc = document.querySelector(".cart-prod-count");

  const totalCount = cart.length;

  if (totalCount > 0) {
    cartc.style.display = "block";
    cartc.textContent = totalCount;
  } else {
    cartc.style.display = "none";
  }
}
function updateWishCount() {
  const wishc = document.querySelector(".wish-prod-count");

  const total = wishlist.length;

  if (total > 0) {
    wishc.style.display = "block";
    wishc.textContent = total;
  } else {
    wishc.style.display = "none";
  }
}

function showCart() {
  let old = cartzone.querySelectorAll(".row, .total");
  old.forEach((el) => el.remove());

  if (cart.length === 0) {
    let row = document.createElement("div");
    row.className = "row empty-row";
    row.innerHTML = `
      <div class="col">
        <div class="wrapper">
          <div class="title-2">No products found!</div>
          <div class="title-2">Please add products to your cart to view them here.</div>
        </div>
      </div>
    `;
    cartzone.appendChild(row);
    return;
  }

  let sum = 0;

  cart.forEach((e) => {
    let row = document.createElement("div");
    row.className = "row cart-row";

    let total = Number(e.price) * e.count;
    sum += total;

    row.innerHTML = `
      <div class="col cart-col">
        <div class="wrapper cart-wrapper flex justify-between align-center">
          <div class="cart-img">
            <img src="${e.image_link}" alt="" />
          </div>
          <div class="cart-info text-center">
            <div class="cart-brand">${e.brand}</div>
            <div class="cart-name">${e.name}</div>
          </div>
          <div class="cart-price text-center">
            <div class="price">Total price: ${(Number(e.price) * e.count).toFixed(2)} $</div>
            <div class="price-1">Price for 1: ${e.price} $</div>
          </div>
          <div class="product-count flex align-center justify-center">
            <div class="minus">-</div>
            <div class="count">${e.count}</div>
            <div class="plus">+</div>
          </div>
          <div class="cart-close text-center">✖</div>
        </div>
      </div>
    `;
    cartzone.appendChild(row);

    const plusBtn = row.querySelector(".plus");
    const minusBtn = row.querySelector(".minus");
    const countDiv = row.querySelector(".count");
    const cartimg = row.querySelector(".cart-img");
    const closeBtn = row.querySelector(".cart-close");

    plusBtn.addEventListener("click", () => {
      e.count++;
      countDiv.textContent = e.count;
      showCart();
    });

    minusBtn.addEventListener("click", () => {
      if (e.count > 1) {
        e.count--;
        countDiv.textContent = e.count;
      } else {
        cart.splice(cart.indexOf(e), 1);
      }
      showCart();
      updateCartCount();
    });

    closeBtn.addEventListener("click", () => {
      cart.splice(cart.indexOf(e), 1);
      showCart();
      updateCartCount();
      saveCart();
    });
    cartimg.addEventListener("click", () => productshow(e));
  });

  let totalDiv = document.createElement("div");
  totalDiv.className = "total";
  totalDiv.innerHTML = "TOTAL: " + sum.toFixed(2) + " $";
  cartzone.appendChild(totalDiv);
}
function showWish() {
  let row = document.querySelector(".wish-row");
  row.innerHTML = "";
  if (wishlist.length === 0) {
    row.classList.add("empty-row");
    row.innerHTML = `
      <div class="col">
        <div class="wrapper">
          <div class="title-2">No data found!</div>
          <div class="title-2">Please add items to your favorites list to view them here.</div>
        </div>
      </div>
    `;
    wishzone.appendChild(row);
    return;
  }
  row.classList.remove("empty-row");
  wishlist.forEach((el) => {
    let col = document.createElement("div");
    col.className = "col";
    col.classList.add("wish-col");
    col.classList.add('w-18');
    col.innerHTML = `
  <div class="wrapper wish-wrap">
    <div class="wish-img">
        <img src="${el.image_link}" alt="">
        <div class="wish-close">✖</div>
    </div>
    <div class="wish-info flex justify-between align-center">
        <div class="wish-brand">${el.brand}</div>
        <div class="wish-price">${el.price} $</div>
    </div>
    <div class="wish-name">${el.name}</div>
    <div class="wish-btn"><button class="btn-rouge"><span class="show-c"><i class="fa-solid fa-bag-shopping"></i></span> Add to cart</button></div>
  </div> 
`;
    row.appendChild(col);
    const wishimg = col.querySelector(".wish-img");
    const closeBtn = col.querySelector(".wish-close");
    const wishcart = col.querySelector(".btn-rouge");
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      wishlist.splice(wishlist.indexOf(el), 1);
      showWish();
      updateWishCount();
      saveWishlist(); 
    });
    wishcart.addEventListener("click", (e) => {
      e.stopPropagation();
      addCartWithCount(el, 1);
      showCart();
      updateCartCount();
    });
    wishimg.addEventListener("click", () => productshow(el));
    updateWishCount();
  });
}

function addCartWithCount(prod, quantity) {
  if (quantity === 0) return;
  const exist = cart.find((el) => el.id === prod.id);
  if (!exist) {
    cart.push({ ...prod, count: quantity });
  } else {
    exist.count += quantity;
  }
  updateCartCount();
  saveCart();
}
function addWish(prod){
  const exist = wishlist.find((el) => el.id === prod.id);
  if (!exist) {
    wishlist.push(prod);
  }
  showWish();
  saveWishlist(); 
}

function productshow(el) {
  let old = document.querySelector(".prod-show");
  if (old) old.remove();

  let section = document.createElement("section");
  section.className = "prod-show";
  section.innerHTML = `
    <div class="close">✖</div>
    <div class="row show-row flex justify-center">
      <div class="col show-col">
        <div class="wrapper show-wrap">
          <div class="show-img">
            <img src="${el.image_link}" alt="#" />
          </div>
        </div>
      </div>
      <div class="col show-col">
        <div class="wrapper show-wrap">
          <div class="show-brand title-2">${el.brand}</div>
          <div class="show-name title-3">${el.name}</div>
          <div class="details text-center">Details</div>
          <div class="show-info">${el.description}</div>
          <div class="show-price">
            <div class="txt-price">Price</div>
            <div class="show-p">${el.price} $</div>
          </div>
          <div class="show-add flex justify-between">
            <div class="product-count flex align-center">
              <div class="minus">-</div>
              <div class="count">0</div>
              <div class="plus">+</div>
            </div>
            <div class="show-cart-wish flex">
              <div class="cart"><span class="show-c"><i class="fa-solid fa-bag-shopping"></i></span> Add to cart</div>
              <div class="wish"><span class="show-w"><i class="fa-regular fa-heart"></i></span> Add to wishlist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(section);

  const plusBtn = section.querySelector(".plus");
  const minusBtn = section.querySelector(".minus");
  const countDiv = section.querySelector(".count");
  let tempCount = 0;

  plusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tempCount++;
    countDiv.textContent = tempCount;
  });

  minusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (tempCount > 0) {
      tempCount--;
      countDiv.textContent = tempCount;
    }
  });

  const cartBtn = section.querySelector(".cart");
  cartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const quantity = tempCount > 0 ? tempCount : 1;
    addCartWithCount(el, quantity);
    tempCount = 0;
    countDiv.textContent = 0;
    showCart();
    updateCartCount();
  });
  const wishBtn = section.querySelector(".wish");
  wishBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addWish(el);
    updateWishCount();
  });

  const closeBtn = section.querySelector(".close");
  closeBtn.addEventListener("click", () => section.remove());

  section.addEventListener("click", (e) => {
    if (e.target !== section) section.remove();
  });
}

function products(e, add) {
  for (let i = 32; i < e.length; i++) {
    const prod = e[i];
    const col = document.createElement("div");
    col.className = "col prod-col";
    col.innerHTML = `
      <div class="wrapper prod-wrap">
        <div class="nkar">
          <img src="${prod.image_link}" alt="">
        </div>
        <div class="prod-info flex justify-between align-center">
          <div class="prod-name">
            <div class="brand text-center"><span class='txt'>${prod.brand}</span></div>
            <div class="model text-center"><span class='txt'>${prod.name}</span></div>
          </div>
          <div class="prod-price">
            <div class="cart-wish flex align-center">
              <div class="cart"><span class="show-c"><i class="fa-solid fa-bag-shopping"></i></span></div>
              <div class="wish"><span class="show-w"><i class="fa-regular fa-heart"></i></span></div>
            </div>
            <div class="price text-center"><span class='txt-2'>${prod.price}</span> $</div>
          </div>
        </div>
      </div>
    `;
    add.appendChild(col);

    col.addEventListener("click", () => productshow(prod));

    const cartBtn = col.querySelector(".cart");
    cartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addCartWithCount(prod, 1);
      showCart();
      updateCartCount();
    });
    const wishBtn = col.querySelector(".wish");
    wishBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addWish(prod);
      updateWishCount();
    });
  }
}

fetch(
  "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara",
)
  .then((res) => res.json())
  .then((data) => products(data, document.querySelector(".slider-prod")));

fetch(
  "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick",
)
  .then((res) => res.json())
  .then((data) => products(data, document.querySelector(".slider-prod2")));

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
  .then((res) => res.json())
  .then((data) => products(data, document.querySelector(".slider-prod3")));

fetch(
  "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer",
)
  .then((res) => res.json())
  .then((data) => products(data, document.querySelector(".slider-prod4")));

////////////////////////////////////////////////////////////////////////////////

//// a location slider that is so different from a regular slider

const sliderLoc = document.querySelector(".slider-loc");
const nextLoc = document.querySelector(".loc-r-arrow");
const prevLoc = document.querySelector(".loc-l-arrow");
const dotsContainer = document.querySelector(".loc-dots");

const gap = 20;
const visibleCount = 4;

let currentPage = 0;
let auto;

function getSlideWidth() {
  return sliderLoc.children[0].offsetWidth + gap;
}

function locNext(silent = true) {
  const slideWidth = getSlideWidth();

  sliderLoc.style.transition = "transform 0.5s";
  sliderLoc.style.transform = `translateX(-${slideWidth}px)`;

  sliderLoc.addEventListener("transitionend", function handler() {
    sliderLoc.appendChild(sliderLoc.children[0]);
    sliderLoc.style.transition = "none";
    sliderLoc.style.transform = "translateX(0)";
    sliderLoc.removeEventListener("transitionend", handler);
  });

  if (silent) {
    currentPage = (currentPage + 1) % pages;
    updateDots();
  }
}

function locPrev(silent = true) {
  const slideWidth = getSlideWidth();
  sliderLoc.insertBefore(
    sliderLoc.children[sliderLoc.children.length - 1],
    sliderLoc.children[0],
  );
  sliderLoc.style.transition = "none";
  sliderLoc.style.transform = `translateX(-${slideWidth}px)`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      sliderLoc.style.transition = "transform 0.5s";
      sliderLoc.style.transform = "translateX(0)";
    });
  });
  if (silent) {
    currentPage = (currentPage - 1 + pages) % pages;
    updateDots();
  }
}

const totalItems = sliderLoc.children.length;
const pages = Math.ceil(totalItems / visibleCount);
for (let i = 0; i < pages; i++) {
  const dot = document.createElement("div");
  dot.className = "loc-dot";

  dot.addEventListener("click", () => {
    clearInterval(auto);
    auto = setInterval(() => locNext(true), 3000);
    const targetPage = i;
    while (currentPage !== targetPage) {
      if (currentPage < targetPage) {
        locNext(false);
        currentPage++;
      } else {
        locPrev(false);
        currentPage--;
      }
    }
    updateDots();
  });

  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".loc-dot");
function updateDots() {
  dots.forEach((d) => d.classList.remove("active"));
  if (dots[currentPage]) {
    dots[currentPage].classList.add("active");
  }
}

updateDots();

nextLoc.addEventListener("click", () => {
  locNext();
});

prevLoc.addEventListener("click", () => {
  locPrev();
});

auto = setInterval(() => locNext(), 3000);
sliderLoc.addEventListener("mouseenter", () => clearInterval(auto));
sliderLoc.addEventListener("mouseleave", () => {
  auto = setInterval(() => locNext(), 3000);
});

// https://www.youtube.com/embed/29xPdTJj6A8

// https://www.youtube.com/embed/seHCZuTf53c

// https://www.youtube.com/embed/CxIsqtIav6w

// https://www.youtube.com/embed/64NtAZyDd-w

// https://www.youtube.com/embed/CkKyvW_kdBA

// https://www.youtube.com/embed/Q3kjUajCDJ0

// https://www.youtube.com/embed/nPglEYGRwmE

// https://www.youtube.com/embed/9oRhKxxDHIg
