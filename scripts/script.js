document.addEventListener('DOMContentLoaded', () => {
    let column = document.querySelectorAll('.wrapper__rating-col');
    setTimeout(() => {
        column.forEach(item => {
            item.classList.add('wrapper__rating-col--actived')
        })
    }, 500)
})