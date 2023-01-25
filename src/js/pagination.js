import fetchLord from './fetchLord'
import { createMarkup } from '../index'
import { totalPage } from '../index'

const paginationBox = document.querySelector('.pagination')
let globalCurrentPage = 0

export default function pagination(currentPage, allPages = totalPage) {
  let markup = ''
  let beforeTwoPage = currentPage - 2
  let beforePage = currentPage - 1
  let afterPage = currentPage + 1
  let afterTwoPage = currentPage + 2
  globalCurrentPage = currentPage

  if (currentPage > 1) {
    markup += `<li class='arrow'>&#8592;</li>`
    markup += `<li>1</li>`
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`
  }
  markup += `<li><span class='currentPage'>${currentPage}</span></li>`
  if (currentPage >= allPages) {
    return (paginationBox.innerHTML = markup)
  }
  if (allPages - 1 > currentPage) {
    if (afterPage <= allPages) {
      markup += `<li>${afterPage}</li>`
      // console.log(afterPage)
    }
  }
  if (allPages - 2 > currentPage) {
    if (afterTwoPage <= allPages) {
      markup += `<li>${afterTwoPage}</li>`
      // console.log(afterTwoPage)
    }
  }
  if (allPages - 3 > currentPage) {
    markup += `<li>...</li>`
    console.log(allPages)
    console.log(currentPage)
  }
  if (allPages > currentPage || allPages < currentPage) {
    markup += `<li>${allPages}</li>`
    markup += `<li class='arrow'>&#8594;</li>`
  }
  paginationBox.innerHTML = markup
}

paginationBox.addEventListener('click', handlrePagination)

function handlrePagination(evt) {
  if (evt.target.nodeName !== 'LI') {
    return
  }
  if (evt.target.textContent === '...') {
    return
  }
  if (evt.target.textContent === '←') {
    fetchLord((globalCurrentPage -= 1))
      .then((data) => {
        createMarkup(data.results)
        pagination(data.page, totalPage)
      })
      .catch((error) => {
        console.log(error)
      })
    return
  }
  if (evt.target.textContent === '→') {
    fetchLord((globalCurrentPage += 1))
      .then((data) => {
        createMarkup(data.results)
        pagination(data.page, totalPage)
      })
      .catch((error) => {
        console.log(error)
      })
    return
  }
  const page = evt.target.textContent
  fetchLord(page)
    .then((data) => {
      createMarkup(data.results)
      pagination(data.page, totalPage)
    })
    .catch((error) => {
      console.log(error)
    })
}
