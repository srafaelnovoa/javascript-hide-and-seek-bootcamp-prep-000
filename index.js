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
function deepestChild() {
  
  let current = [];
  let next = [];
  current.push( document.querySelector('#grand-node') )
  var iLoop = 0, iLevelCurrent = 0, iLevelMax = 0 
  var deepestNode = current[0]
  var children
  console.log(`deepestNode : ${deepestNode }`)
  while (current && iLoop <10) 
  {
    console.log(`iLoop : ${iLoop }, iLevelCurrent : ${iLevelCurrent }, iLevelMax : ${iLevelMax }, current: ${current}, next: ${next}`)
    iLoop++
    
    NodeList.prototype.forEach = Array.prototype.forEach
    children = current[0].childNodes
    console.log(`children : ${children},`)
    for (let i = 0; i < children.length; i++){
      if(children[i].nodeName ==="DIV"){
      console.log(`children[${i}].nodeName : ${children[i].nodeName },`)
      next.push(children[i])
      }
      
    }
    current = next.shift()
    console.log(" ")
  }
    return deepestNode
}
