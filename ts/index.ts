const menuBtn = document.querySelector('.menu-btn') as HTMLButtonElement
const closeBtn = document.querySelector('.close-btn') as HTMLButtonElement
const header__nav = document.querySelector('.header__nav') as HTMLElement
const closeBg = document.querySelector('.close-bg') as HTMLDivElement
menuBtn.addEventListener('click', () => {
	header__nav.classList.add('active')
	closeBg.classList.add('active')
})
closeBg.addEventListener('click', () => {
	header__nav.classList.remove('active')
	closeBg.classList.remove('active')
})
closeBtn.addEventListener('click', () => {
	header__nav.classList.remove('active')
	closeBg.classList.remove('active')
})


