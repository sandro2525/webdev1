document.querySelector("form").addEventListener("submit", function (e) {
    const form = document.querySelector("form").elements;
    e.preventDefault();

    let gender = "";

    if (form.male.checked) {
        gender = "Male";
    }

    if (form.female.checked) {
        gender = "Female";
    }
    console.log(form.username.value + " " + form.password.value + " " + form.age.value + " " + gender);
    document.getElementById("result").innerHTML = `
        <strong>Registration Successful!</strong><br>
        Username: ${form.username.value}<br>
        Age: ${form.age.value}<br>
        Gender: ${gender}
    `;
});