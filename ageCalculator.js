
// alert("Welcome to my Page");

// document.getElementById('btn').addEventListener('click', calculateAge);
document.getElementById('btn').addEventListener('click', function() {
  console.log("Button clicked");  // Check if the button click is detected
  calculateAge();
});


function calculateAge() {
    const inputDate = document.getElementById('Input_date').value;
    if (!inputDate) {
        alert("Please enter your date of birth");
        return;
    }
    
    const dob = new Date(inputDate);
    const today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    // test
    let Hours = today.getHours() - dob.getHours();
    let minute = today.getMinutes() - dob.getMinutes();
    let second = today.getSeconds() - dob.getSeconds();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('Year').innerText ="YEAR  :- "+ years;
    document.getElementById('Month').innerText ="MONTH  :- " +months;
    document.getElementById('Day').innerText = "DAY  :- "+days;

    // test
    document.getElementById('Hours').innerText = "Hours  :- "+Hours;
    document.getElementById('minute').innerText = "Minutes  :- "+minute;
    document.getElementById('second').innerText = "Second  :- "+second;


}


// refresh  button
document.getElementById('refresh').addEventListener('click', function() {
    // Check if the button click is detected
    refresh();
  });
  function refresh(){
      location.reload();
    
  }

  console.log(Hours);
  console.log(minute);
  console.log(second);