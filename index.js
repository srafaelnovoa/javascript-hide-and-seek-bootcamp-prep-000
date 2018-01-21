function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const lis = document.querySelector('#nested .target')
  return lis
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + 1).toString()
    }
  return
}

function deepestChild2() {
  const lis = document.querySelectorAll('#grand-node div')  

  for (let i = 0; i < lis.length; i++) {
    console.log(`i = ${i}`)
  }
    return lis[lis.length -1]
}

