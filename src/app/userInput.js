// import { readdirSync } from 'fs'

// export default class userInput {
//     constructor() {
//         const submitBtn = document.getElementById('submitBtn');
//         const viewListBtn = document.getElementById('viewListBtn');
//         const numOfPoems = document.getElementById('numOfPoems');
//         const numPoemsError = document.getElementById('numPoemsError');
//         let startingPoem = document.getElementById('startingPoem');
//         const startingPoemError = document.getElementById('startingPoemError');
//         const poemOrderList = document.getElementsByName('poemOrderRadio');
//         let inputPoemList = readdirSync('./syllabaryPoems');
//         inputPoemList = inputPoemList.reduce(function (filtered, currentElement) {
//             if (currentElement.slice(-4) === '.xml') {
//                 currentElement = currentElement.slice(0, -4);
//                 filtered.push(currentElement);
//             }
//             return filtered
//         }, []);
//         localStorage.setItem("inputPoemList", JSON.stringify(inputPoemList));
//         console.log(inputPoemList)

//         submitBtn.addEventListener('click', checkNumPoems);
//         submitBtn.addEventListener('click', checkStartPoem);
//         submitBtn.addEventListener('click', setPoemOrder);
//         submitBtn.addEventListener('click', goToLoading);
//         viewListBtn.addEventListener('click', goToList);
//     }
//     checkNumPoems() {
//         console.log('hhh')
//         let warningMessage = '';

//         if (numOfPoems.value === '' || numOfPoems.value == null) {
//             warningMessage += 'Number of poems is required';
//         } 
//         else if (isNaN(numOfPoems.value)) {
//             warningMessage += 'Entry needs to be a number';
//         } 
//         if (numOfPoems.value > inputPoemList.length) {
//             warningMessage += 'There are not enough available poems to fulfil that request. Please select a number less than ' + inputPoemList.length;
//         } 

//         numPoemsError.innerHTML = warningMessage;
//         return;
//     }

//     checkStartPoem() {
//         let warningMessage = '';
//         let startingPoemSplit = startingPoem.value.split('-');

//         if (startingPoem.value === '' || startingPoem.value == null) {
//             warningMessage += 'Starting poem is required';
//         } else {
//             if (startingPoemSplit.length != 3 || startingPoemSplit.includes('')) {
//                 warningMessage += 'Poem was not entered in the correct format. Please enter poem in the format: "x-x-x" where x is a number'
//             } else {
//                 if (isNaN(startingPoemSplit[0]) || isNaN(startingPoemSplit[1]) || isNaN(startingPoemSplit[2])) {
//                     warningMessage += 'Format is correct but not all the characters were numbers\nPlease enter poem in the format: "x-x-x" where x is a number'
//                 } else {
//                     if ((!(inputPoemList).includes(startingPoem.value))) {
//                         warningMessage += 'Poem not in list. Click the poem list button for information about available poems';
//                     }
//                 }
//             }
//         }
//         startingPoemError.innerHTML = warningMessage;
//         return;
//     }

//     setPoemOrder(event) {
//         for (var index = 0, orderLen = poemOrderList.length; index < orderLen; index++) {
//             if (poemOrderList[index].checked) {
//                 const poemOrder = poemOrderList[index];
//             }};
//             return;
//     }

//     goToLoading(event) {
//         if (numPoemsError.innerHTML == '' && startingPoemError.innerHTML == '') {
//             for (let i=0; i < poemOrderList.length; i++) {
//                 if (poemOrderList[i].checked) {
//                     const poemOrder = poemOrderList[i];
//                 }
//             }
//             localStorage.setItem("poemOrder", poemOrder.value);
//             localStorage.setItem("numOfPoems", numOfPoems.value);
//             localStorage.setItem("startingPoem", startingPoem.value);
//             location.href = 'loadingPage.html';
//         };  
//         return;
//     }

//     goToList(event) {
//         location.href = 'poemList.html';
//     }
// }


