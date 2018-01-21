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
  var iLoop = 0, iLevelCurrent = 0, iLevelMax = 0 , boolChildFound = 0 
  var deepestNode = current[0]
  var children, currentNode
  console.log(`deepestNode : ${deepestNode }`)
  while (current && iLoop <100 && current.length > 0) 
  {
    console.log(`iLoop : ${iLoop }, iLevelCurrent : ${iLevelCurrent }, iLevelMax : ${iLevelMax }, current: ${current}, next: ${next}`)
    iLoop++
    currentNode = current.shift()
    console.log(`currentNode : ${currentNode},`)
    children = currentNode.childNodes
    console.log(`children : ${children},`)
    boolChildFound = 0
    for (let i = 0; i < children.length; i++){
      
      if(children[i].nodeName ==="DIV"){
        if (boolChildFound === 0) {
          boolChildFound = 1
          iLevelCurrent++
        }
        
      console.log(`children[${i}].nodeName : ${children[i].nodeName },`)
      next.push(children[i])
      }
      
    }
    current = [];
    current.push(next.shift())
    console.log(" ")
  }
    return deepestNode
}
