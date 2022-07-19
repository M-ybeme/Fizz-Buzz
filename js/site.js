//controler function
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    ///parese ints///
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue)
        displayValues(numbers);
    } else {
        swal.fire({
            backdrop: false,
            title: 'Oops',
            text: "You can only use numbers",
        });
    }
}

//buisness logic function
function generateNumbers(start, stop) {
    let numbers = [];
    for (let i = start; i <= stop; i++) {
        
        if ([i] % 3 == 0 && [i] % 5 == 0) {
            numbers.push("FizzBuzz");
        } else if ([i] % 3 == 0) {
            numbers.push("Fizz")
        } else if ([i] % 5 == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}
//view function
function displayValues(valuesArry){
    let results = document.getElementById("results");
    results.innerHTML = "";

    for (let index = 0; index < valuesArry.length; index++) {

       
        // create the div tag
        let div = document.createElement("div");

        //I get the value in the array at the current index
        div.innerHTML = valuesArry[index];

        //add class
        div.classList.add("col");
        if ([index] % 3 == 0 && [index] % 5 == 0) {
            div.classList.add("fizzbuzz");
        } else if ([index] % 3 == 0) {
            div.classList.add("fizz");
        } else if ([index] % 5 == 0) {
            div.classList.add("buzz")
        } else {
            div.classList.add("results")
            
        }
        
        results.appendChild(div);
    }
    //if divisable by both
    //if by 5
    // if divisable by 3
}