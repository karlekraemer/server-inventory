$(document).ready(readyNow);

console.log('we out here');

function readyNow() {
    console.log('jQuery ready!');
  // $('#equalsBtn').on('click', seeSolution);
    $('#searchBtn').on('click', searchInventory); //why is 'subtraction' weird?
    $('#clearBtn').on('click', clearInventory);
    $('#addBtn').on('click', addBtn);
}
// Do I need this?
function addBtn() {
    console.log('in add function.');
    $('#addBtn').on('click', addInventory);
}

function addInventory() {
    console.log('in addInventoryfunction');
    // add the two inputs together and: (1) send to solutions.js as an object: (2)  Does not need to display on the dom. 
    let item = $('#item').val();
    let newItem = {
        name: $('#item').val(),
        description: $('#description').val(),
        result: item,
    }
    console.log(newItem);
    $.ajax({
        method: 'POST',
        url: '/inventory',
        data: newItem,
    }).then(function(response){
        console.log('post request response', response);
        newItem.empty;
        getCalculations();
    }).catch(function(error){
        alert(error.responseText);
    });
}

function getInventory() {
    console.log('in getInventory');
    $.ajax({
        method: 'GET',
        url: '/inventory',
    }).then(function(response) {
        console.log('our response from the server', response);
        appendToDom(response);
    })
}

function appendToDom(array) {
    console.log('in appendToDom function!', array);
    // console.log('appendToDom function', array);
    $('#totalInventory').empty();
    for (let item of array){
        $('#totalInventory').append(`
        <li>${item.name} ${item.description} ${item.result}</li>
        `)
    }

}   