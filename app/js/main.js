// hero decore element
(function(){
  const container = document.querySelector('.lines__wrapper')
  if (container === null) return
  for (let i = 0; i < 200; i++) {
    let line = document.createElement('div')
    line.innerHTML = `
    <svg class="line" width="800" height="500" viewBox="0 0 1345 947" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.666667" d="M28.3269 902.417C87.462 858.419 147.897 819.155 209.629 782.156C249.134 758.131 250.926 748.964 261.277 722.835C265.695 711.683 336.633 665.919 349.267 656.526C370.322 640.872 375.059 626.007 383.073 610.019C392.622 590.966 407.982 568.18 432.216 549.399C447.009 537.934 462.207 527.566 478.042 518.895C524.859 493.258 568.097 476.357 615.976 447.595C665.083 418.095 709.834 384.371 756.745 349.672C775.13 336.073 783.777 331.071 777.974 322.671C766.816 306.521 760.178 289.175 763.687 263.815C765.506 250.666 770.343 244.388 790.01 230.221C828.138 202.754 868.133 178.236 907.508 154.947C954.581 127.104 1037.27 73.7037 1080.24 68.3728C1091.54 66.9711 1093.7 76.781 1107.12 71.8973C1125.54 65.1919 1152.52 45.6223 1171.37 35.0033C1198.09 19.9473 1209.26 20.9549 1232.54 13.2097C1255.06 5.71747 1280.63 -2.19846 1293.79 3.63093C1316.53 13.7029 1328.36 41.8353 1336.88 62.7444C1342.72 77.0896 1350.6 99.256 1323.58 127.298C1297.86 153.997 1249.4 184.011 1219.57 203.941C1147.16 252.336 1073.67 295.937 1001.11 343.497C983.955 354.738 965.791 367.506 950.102 380.94C932.26 396.22 936.749 405.448 931.854 418.309C895.322 514.311 756.832 625.031 636.652 691.677C580.641 722.739 539.313 733.983 488.25 749.687C439.872 764.566 395.129 784.461 343.514 811.142C313.219 826.801 291.677 838.321 262.772 858.147C208.367 895.464 151.566 924.036 100.43 936.949C62.3683 946.561 15.9773 949.916 2.45432 931.542C-3.04844 924.065 16.4477 911.255 28.3269 902.417Z" stroke="url(#paint0_linear_178_816)" stroke-width="3" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_178_816" x1="590.169" y1="376.915" x2="761.545" y2="610.351" gradientUnits="userSpaceOnUse">
        <stop stop-color="#80CC28"/>
        <stop offset="1" stop-color="#47BE34"/>
        </linearGradient>
        </defs>
    </svg>
    `
    line.classList.add('line')
    container.appendChild(line)
    i++
  }
})();

var swiper = new Swiper(".main-product-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

// табы в каталоге
(function(){
  const filterButtons = document.querySelectorAll('.filter-btn')
  
  if(filterButtons.length < 1) return 
  filterButtons.forEach(item => {
    item.addEventListener('click', ()=>{
      if(item.classList.contains('active')) return
      removeActiveClass('.filter-btn')
      removeActiveClass('.product-description__item')
      
      item.classList.add('active')
      document.querySelector(item.getAttribute('data-tab-id')).classList.add('active')
    })
  })

  document.querySelector('.filter-btn').click()
  console.log(document.querySelector('.filter-btn'))
})();

function removeActiveClass (itemClass) {
  const collection = document.querySelectorAll(itemClass)

  collection.forEach(item => {
      item.classList.remove('active')
  });
}