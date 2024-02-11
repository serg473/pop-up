const modal = document.querySelector('.modal')

document.querySelector('.open').addEventListener('click', () => {
	modal.classList.add('open')
})
function closeModal() {
	modal.classList.remove('open')
}
