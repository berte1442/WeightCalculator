function calc() {

    document.getElementById("ounces").defaultValue = "0";
    document.getElementById("lbs").defaultValue = "0";
    document.getElementById("length").defaultValue = "0";
    document.getElementById("age").defaultValue = "0";

    var lbs = document.getElementById("lbs").value;
    var oz = document.getElementById("ounces").value;
    var length = document.getElementById("length").value;
    var age = document.getElementById("age").value;

    //determines which gender radio button is selected
    var gender = document.querySelectorAll('input[name="gender"]');
    let selectedGender;
    for (var gen of gender) {
        if (gen.checked) {
            selectedGender = gen.value;
            break;
        }
    }

    var pounds = parseFloat(lbs);
    var ounces = parseFloat(oz);
    var height = parseFloat(length);
    var months = parseFloat(age);

    var conOzToLbs = ounces / 16;
    var totalLbs = pounds + conOzToLbs;

    console.log(lbs + oz + length + age + selectedGender);
    console.log(pounds);
    console.log(ounces);
    console.log(height);
    console.log(months);
    console.log(conOzToLbs);
    console.log(totalLbs);
}1