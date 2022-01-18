document.addEventListener('DOMContentLoaded', () => {


  Array.from(document.getElementsByTagName('button')).forEach(button => {
    if (button.id != '=' && button.id != 'AC') {
      button.addEventListener('click', () => {
        document.getElementById('calcul').textContent += button.textContent
      })
    } else if (button.id === '='){
      button.addEventListener('click', () => {
        document.getElementById('calcul').textContent = eval(document.getElementById('calcul').textContent.replace(/^0+/, ""))
      })
    } else {
      button.addEventListener('click', () => {
        document.getElementById('calcul').textContent = 0
      })
    }
  })

// <3 <3 <3
// <3 <3 <3


//            ******   ******
//           ******** ********
//          *******************
//           *****************
//            ***************
//             *************
//              ***********
//               *********
//                *******
//                 *****
//                  ***
//                   *

})