const titleEle = document.querySelectorAll('.title');

titleEle.forEach((titleDiv) => {
    titleDiv.addEventListener('click', () => {
        let con = titleDiv.nextElementSibling
        con.classList.toggle('show')
    })
})