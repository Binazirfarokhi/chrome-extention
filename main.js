import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js"
import { getDatabase ,ref, push , onValue } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js"
const firebaseConfig = {
databaseURL : "https://leads-tracker-app-a9b6d-default-rtdb.firebaseio.com/"
  }
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const referenceInDB = ref(database, "Leads")
  console.log(database)

// let oldLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")

onValue(referenceInDB, function(snapshot){
    const snapshotDOesExist = snapshot.exists()
    if(snapshotDOesExist){
        const snapshotvalue = snapshot.val()
//    create a const that change the object into array
const leads = Object.values(snapshotvalue)
console.log(leads)
render(leads)
    }
    
})
// 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
// myLeads.push("www.mdn.com")
// console.log(myLeads)
// 3. Turn the array into a string again
// myLeads=JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)
// 8888888888888888888888888888888888888888
// get the leads from localstorage 
//  const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
//  null means there is no value here, on purpose.

//  console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// if(leadsFromLocalStorage){
//     // 2. If so, set myLeads to its value and call renderLeads
//   myLeads= leadsFromLocalStorage
//   render(myLeads)
   
// }

// 2. Listen for double clicks on the delete button (google it!)

deletebtn.addEventListener("dblclick",function(){
remove(referenceInDB)
ulEl.innerHTML  = ""


})
// 3. When clicked, clear localStorage, myLeads, and the DOM



// we can set a value and key to  local storage by using : localstorage.setItem("key", "value")
// we can get value the local storage by using : localStorage.getItem("key")/kinda fetch data from localstorage
// we can clear the local storage by using localStorage.clear()


// localStorage.setItem("myLeades", "www.google.com")
// let fname = localStorage.getItem("myNames");
// console.log(fname)
// localStorage.clear()


// localStorage only supports strings. Use JSON.stringify() and JSON.parse().
// JSON.parse() is a method in JavaScript that converts a JSON string into a JavaScript object
// JSON.stringify() do opposite, 
// write parameters: pass varable into a function
inputBtn.addEventListener("click", function() {
  push(referenceInDB, inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    // save the myleads array into a localstorage
    // let array = JSON.stringify(myLeads)
    // localStorage.setItem("myLeads", array)

  
    // console.log(localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a href="${leads[i]}" target='_blank'>${leads[i]}</li> `
    }
    ulEl.innerHTML = listItems  
}
// localStorage can just save the strings if the number are exist use stringfy and parse()
// so, if you want to save the array in an localstorage you might need to make it it the string by using back tick 

// falsy and truthy values: 
// falsy : "" false 0 null undefiend NaN
// null : developer itseld try to make it null
// undefined : means it is empty
// how to check truthy or falsy ? using boolean 
// let trueOrFalsy = Boolean(-0)
// console.log(trueOrFalsy)
// Create a function, getFirst(arr), that returns the first item in the array


// Call it with an array as an argument to verify that it works
// const tabbtn = document.getElementById("tab-btn")
// save tab button work : 

// tabbtn.addEventListener("click", function(){
//     // grab the url of the current tab 
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       console.log(tabs)
//           // save the url on the local storage and ouput it 
//       myLeads.push(tabs[0].url)
//       localStorage.setItem("myleads", JSON.stringify(myLeads))
//       render(myLeads)
//     });

   

// })
// snapshot listen for update on data 
