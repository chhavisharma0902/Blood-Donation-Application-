const passwordInput = document.querySelector("#password_data");

passwordInput.addEventListener("keyup", () => {
    let password = passwordInput.value;
    
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    let selectedType = "";

const userTypeButtons = document.querySelectorAll('.user-type-btn');
const proceedBtn = document.getElementById('proceedBtn');

userTypeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove "selected" class from all buttons
    userTypeButtons.forEach(b => b.classList.remove('selected'));
    
    // Add "selected" class to the clicked button
    btn.classList.add('selected');

    // Store selected type (from data attribute)
    selectedType = btn.getAttribute('data-type');

    // Enable the "Proceed" button
    proceedBtn.disabled = false;
  });
});
proceedBtn.addEventListener('click', () => {
  if (selectedType) {
    document.getElementById('page-one').classList.remove('active');
    document.getElementById('page-two').classList.add('active');
    document.getElementById('user-type-heading').innerText = `${selectedType} Registration`;
    document.getElementById('user_type').value = selectedType;
  }
});

    if(password.length===0)
    {
        document.querySelector(".safety").innerHTML = "Enter Password";
    }
    else
    {
        document.querySelector(".safety").innerHTML = '<span>Password Strength</span><span class="line" id="line1"></span><span class="line" id="line2"></span><span class="line" id="line3"></span>';
    }

    if (strongRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "green";
        document.querySelector("#line2").style.background = "green";
        document.querySelector("#line3").style.background = "green";
    } 
    else if (mediumRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "yellow";
        document.querySelector("#line2").style.background = "yellow";
    } 
    else 
    {
        document.querySelector("#line1").style.background = "red";
        
    }
})
