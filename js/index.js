var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var siteList = [];
if (localStorage.getItem("name") != null) {
  siteList = JSON.parse(localStorage.getItem("name"));
  display();
}
function addBookMark() {
  if (validationName() && validationURL()) {
    var siteInfo = {
      siteName: siteNameInput.value,
      siteURL: siteUrlInput.value,
    };

    siteList.push(siteInfo);
    localStorage.setItem("name", JSON.stringify(siteList));
    display();

    clearInputs();
  } else {
    Swal.fire({
      html:`<iframe src='https://giphy.com/embed/sIIhZliB2McAo' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>
<p> Enter a valid Url starting with http:// or https:// </p>`,
      icon: "error",
      title: "Oops...",
      text: "Enter a Valid Url Starting with http:// or https://",
      
    });
    
  }
  
}
function display() {
  var cartona = ``;
  for (i = 0; i < siteList.length; i++) {
    cartona += `  <tr class="text-center ">
    <td>${i + 1}</td>
    <td>${siteList[i].siteName}</td>
    <td class=""><a href="${
      siteList[i].siteURL
    }" target="_blank" class=" text-decoration-none button1 px-4 ">Visit</a></td>
    <td class="d-flex justify-content-center"><button type="button" class="button  text-center" onclick="deleteSite(${i})">
  <span class="button__text">Delete</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
</button></td>
  </tr>`;
  }
  document.getElementById("tbody").innerHTML = cartona;
}
function clearInputs() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
  siteNameInput.classList.remove("is-valid")
  siteUrlInput.classList.remove("is-valid")
 document.getElementById("valid-status1").classList.remove("d-block")
 document.getElementById("valid-status").classList.remove("d-block")
}
function deleteSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem("name", JSON.stringify(siteList));
  display();
}
function validationName() {
  var regex = /^[\w]{1,15}$/;
  var testString = siteNameInput.value;
  if (regex.test(testString)) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    document.getElementById("valid-status").classList.add("d-block");
    document.getElementById("valid-status").classList.remove("d-none");
    document
      .getElementById("validationServer03Feedback")
      .classList.remove("d-block");
    document
      .getElementById("validationServer03Feedback")
      .classList.add("d-none");
    return true;
  } else {
    siteNameInput.classList.remove("is-valid");
    siteNameInput.classList.add("is-invalid");
    document.getElementById("valid-status").classList.add("d-none");
    document.getElementById("valid-status").classList.remove("d-block");
    document
      .getElementById("validationServer03Feedback")
      .classList.remove("d-none");
    document
      .getElementById("validationServer03Feedback")
      .classList.add("d-block");
    return false;
  }
}
function validationURL() {
  const regex = /^(https:\/\/||http:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;

  var testString = siteUrlInput.value;
  if (regex.test(testString)) {
    siteUrlInput.classList.add("is-valid");
    siteUrlInput.classList.remove("is-invalid");
    document.getElementById("valid-status1").classList.add("d-block");
    document.getElementById("valid-status1").classList.remove("d-none");
    document
      .getElementById("validationServer03Feedback1")
      .classList.remove("d-block");
    document
      .getElementById("validationServer03Feedback1")
      .classList.add("d-none");
    return true;
  } else {
    siteUrlInput.classList.remove("is-valid");
    siteUrlInput.classList.add("is-invalid");
    document.getElementById("valid-status1").classList.add("d-none");
    document.getElementById("valid-status1").classList.remove("d-block");
    document
      .getElementById("validationServer03Feedback1")
      .classList.remove("d-none");
    document
      .getElementById("validationServer03Feedback1")
      .classList.add("d-block");
    return false;
  }
}
