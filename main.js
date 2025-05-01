let myLeads = `["www.awsomelead.com"]`
// 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
// myLeads.push("www.mdn.com")
// console.log(myLeads)
// 3. Turn the array into a string again
// myLeads=JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


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

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target='_blank'>${myLeads[i]}</li> `
    }
    ulEl.innerHTML = listItems  
}
// localStorage can just save the strings if the number are exist use stringfy and parse()
// so, if you want to save the array in an localstorage you might need to make it it the string by using back tick 