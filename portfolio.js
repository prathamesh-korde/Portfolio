//1.toggle button - should switch them
//2.contact me form -should save user responce on browser database
//3.Admin login-if succesfully login dissplay user responce
//4.if you give right credentials , a new section come at the bottom on your website which display user responces

const themeToggleBtn = document.getElementById("toggle_theme");

themeToggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("darkmode");
  });

//generating the contact me form active

document.getElementById("contact_form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const nameValue = document.getElementById("name").value;
    const emailvalue = document.getElementById("email").value;
    const messageValue = document.getElementById("message").value;
    

    //steps to store it in backend data
    //Session based storage                     
    //Json-formate of the data that most server and Apls,expect us to give
    const response = { nameValue, emailvalue, messageValue, date: new Date().toISOString() };

    //creating empty list for storing user responce if not exist if exit we carry our priexisting list named responce
     const responses = JSON.parse(localStorage.getItem('responses')) || [ ] ;

    //to store UserResponces in responces list
    responses.push(response);
    //when you send data to backend you need to send as string
    //when 
    localStorage.setItem("responses", JSON.stringify(responses));
    console.log(responses);
    alert("Thankyou for your message, I will get in touch with you ASAP!");
  
    this.reset();
});

//admin login implementation
function showAdminLogin(){
  document.getElementById('admin_login').style.display='block';
}
document.getElementById('login_form').addEventListener('submit',function(e){
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUsername = 'prathamesh';
  const StoredPassword = 'Psk@rde123';

  if(username === storedUsername && password === StoredPassword){
    document.getElementById('admin_login').style.display='none';
    document.getElementById('admin_section').style.display = 'block';
    //document.getElementById('').style.display='block';//make user responce to visiable
    alert("Welcome Admin");
    //call the funcytion displayStoredUserResponses() the ID-responce will be filled with the all user responces submited by end users
    displayStoredUserResponses();
  }
  else{
    alert("Invalid Credientials, please try again");
  }
});

function displayStoredUserResponses(){
  const responseContainer = document.getElementById('user-responses');
    const responses = JSON.parse(localStorage.getItem('responses')) || [ ];
    
    responseContainer.innerHTML = '';
    
    //ForEach, will take one item from the list and process it.
    responses.forEach(response =>{
      const responseElement = document.createElement('div');
      responseElement.innerHTML = `
      <p> Name: ${response.nameValue}</p>
      <p> Email: ${response.emailvalue}</p>
      <p> Message: ${response.messageValue}</p>
      <p> Date: ${response.date}</p>
      <hr>
      `;
      
      //We need to tell JS where the new element had to be placed
      // appendChild will help JS identify where it is supposed to attach the new element.
      responseContainer.appendChild(responseElement);
      
    });
}