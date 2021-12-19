const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
// console.log(imageEl.src);
imageEl.src = 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg'
imageEl.alt = "This is new kat"
const heroTitleEl = document.querySelector('.hero__title')
// console.log('heroTitleEl', heroTitleEl)
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Я новый котик'
// console.log(imageEl.getAttribute('src'));
const actions = document.querySelectorAll('.js-actions button');
console.log(actions[2].dataset.action); 
