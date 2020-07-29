var boyArray = [];
var totalBoyArray = [];
//numbers in each dimension of array represent
//5th, 10th, 25th, 50th, 75th, 90th, 95th percentiles

//1 month old
var weight1 = [7.5, 8, 9, 9.5, 10.5, 11.5, 12]          //weight
var height1 = [19.75, 20.25, 21, 21.5, 22, 22.5, 23.5]; //height
boyArray[0] = [weight1, height1];
totalBoyArray.push(boyArray[0]);
//2 month old
var weight2 = [9, 9.5, 10.5, 11.5, 12.25, 13.5, 14]     //weight
var height2 = [21.25, 21.75, 22.25, 23, 23.5, 24, 24.5];//height
boyArray[1] = [weight2, height2];
totalBoyArray.push(boyArray[1]);
//3 month old
var weight3 = [10.5, 11, 12, 13, 14.25, 15.5, 16.25]    //weight
var height3 = [22.5, 23, 23.25, 24, 24.75, 25.25, 25, 5];//height
boyArray[2] = [weight3, height3];
totalBoyArray.push(boyArray[2]);
//4 month old
var weight4 = [12, 12.75, 13.5, 14.5, 15.75, 17.25, 19]       //weight
var height4 = [23.25, 23.75, 24.25, 24.75, 25.5, 26.25, 26.5];//height
boyArray[3] = [weight4, height4];
totalBoyArray.push(boyArray[3]);
//5 month old
var weight5 = [13, 13.75, 14.5, 16, 17.5, 19, 20]    //weight
var height5 = [24, 24.5, 25, 25.5, 26.25, 27, 27.25];//height
boyArray[4] = [weight5, height5];
totalBoyArray.push(boyArray[4]);
//6 month old
var weight6 = [14, 15, 15.75, 17.25, 19, 20.5, 21]       //weight
var height6 = [24.75, 25.25, 25.75, 26.5, 27, 27.75, 28];//height
boyArray[5] = [weight6, height6]
totalBoyArray.push(boyArray[5]);


var girlArray = [];
var totalGirlArray = [];
//numbers in each dimension of array represent
//5th, 10th, 25th, 50th, 75th, 90th, 95th percentiles

//1 month old
var gWeight1 = [7, 7.5, 8.25, 9, 9.75, 10.75, 11.25]      //weight
var gHeight1 = [19.5, 20, 20.5, 21, 21.75, 22.25, 22.75]; //height
girlArray[0] = [gWeight1, gHeight1];
totalGirlArray.push(girlArray[0]);
//2 month old
var gWeight2 = [8.25, 9, 9.75, 10.75, 11.5, 12.5, 13]  //weight
var gHeight2 = [21, 21.25, 21.75, 22.25, 23, 23.5, 24];//height
girlArray[1] = [gWeight2, gHeight2];
totalGirlArray.push(girlArray[1]);
//3 month old
var gWeight3 = [9.5, 10, 11, 12, 13, 14, 14.75]           //weight
var gHeight3 = [21.75, 22.25, 22.75, 23.25, 24, 24.5, 25];//height
girlArray[2] = [gWeight3, gHeight3];
totalGirlArray.push(girlArray[2]);
//4 month old
var gWeight4 = [11, 11.5, 12.5, 13.5, 14.5, 15.5, 16.25]   //weight
var gHeight4 = [22.75, 23, 23.75, 24.25, 25, 25.25, 25.75];//height
girlArray[3] = [gWeight4, gHeight4];
totalGirlArray.push(girlArray[3]);
//5 month old
var gWeight5 = [12, 12.5, 13.5, 14.75, 16, 17, 17.5]        //weight
var gHeight5 = [23.5, 23.75, 24.5, 25, 25.75, 26.25, 26.75];//height
girlArray[4] = [gWeight5, gHeight5];
totalGirlArray.push(girlArray[4]);
//6 month old
var gWeight6 = [13, 13.5, 14.75, 15.75, 17, 18.5, 19]       //weight
var gHeight6 = [24, 24.5, 25, 25.75, 26.5, 27, 27.5];//height
girlArray[5] = [gWeight6, gHeight6]
totalGirlArray.push(girlArray[5]);

function createBaby(weight, length, age, gender) {
    var newBaby = [];
    newBaby.weight = weight;
    newBaby.length = length;
    newBaby.age = age;
    newBaby.gender = gender;
    return newBaby;
}

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
    //converts from string to float
    var pounds = parseFloat(lbs);
    var ounces = parseFloat(oz);
    var height = parseFloat(length);
    var months = parseFloat(age);
    //converts from lbs and ounces to just lbs float
    var conOzToLbs = ounces / 16;
    var totalLbs = pounds + conOzToLbs;

    var newBaby = createBaby(totalLbs, height, months, selectedGender);

    var lengthPercentile;
    var weightPercentile;
    var weights;
    var lengths;

    if (selectedGender == 'male') {
        if (newBaby.age == 1) {
            weights = totalBoyArray[0][0];
            lengths = totalBoyArray[0][1];
        }
        else if (newBaby.age == 2) {
            weights = totalBoyArray[1][0];
            lengths = totalBoyArray[1][1];
        }
        else if (newBaby.age == 3) {
            weights = totalBoyArray[2][0];
            lengths = totalBoyArray[2][1];
        }
        else if (newBaby.age == 4) {
            weights = totalBoyArray[3][0];
            lengths = totalBoyArray[3][1];
        }
        else if (newBaby.age == 5) {
            weights = totalBoyArray[4][0];
            lengths = totalBoyArray[4][1];
        }
        else if (newBaby.age == 6) {
            weights = totalBoyArray[5][0];
            lengths = totalBoyArray[5][1];
        }
        else if (newBaby.age == 7) {
            weights = totalBoyArray[6][0];
            lengths = totalBoyArray[6][1];
        }
    }
    if (selectedGender == 'female') {
        if (newBaby.age == 1) {
            weights = totalGirlArray[0][0];
            lengths = totalGirlArray[0][1];
        }
        else if (newBaby.age == 2) {
            weights = totalGirlArray[1][0];
            lengths = totalGirlArray[1][1];
        }
        else if (newBaby.age == 3) {
            weights = totalGirlArray[2][0];
            lengths = totalGirlArray[2][1];
        }
        else if (newBaby.age == 4) {
            weights = totalGirlArray[3][0];
            lengths = totalGirlArray[3][1];
        }
        else if (newBaby.age == 5) {
            weights = totalGirlArray[4][0];
            lengths = totalGirlArray[4][1];
        }
        else if (newBaby.age == 6) {
            weights = totalGirlArray[5][0];
            lengths = totalGirlArray[5][1];
        }
        else if (newBaby.age == 7) {
            weights = totalGirlArray[6][0];
            lengths = totalGirlArray[6][1];
        }
    }
    
    var weight = newBaby.weight;
    var arrayNum = 7;

    for (var i = 0; i < weights.length; i++) {
        if (weight > weights[i]) {
            continue;
        }
        else {
            arrayNum = i;      
            break;
        }
    }
    
    if (arrayNum == 0) {
        weightPercentile = "Your baby is below the 5th percentile for weight.";
    }
    else if (arrayNum == 1) {
        weightPercentile = "Your baby is between the 5th and 10th percentile for weight";
    }
    else if (arrayNum == 2) {
        weightPercentile = "Your baby is between the 10th and 25th percentile for weight";
    }
    else if (arrayNum == 3) {
        weightPercentile = "Your baby is between the 25th and 50th percentile for weight";
    }
    else if (arrayNum == 4) {
        weightPercentile = "Your baby is between the 50th and 75th percentile for weight";
    }
    else if (arrayNum == 5) {
        weightPercentile = "Your baby is between the 75th and 90th percentile for weight";
    }
    else if (arrayNum == 6) {
        weightPercentile = "Your baby is between the 90th and 95th percentile for weight";
    }
    else if (arrayNum > 6) {
        weightPercentile = "Your baby is above the 95th percentile for weight."
    }

    var length = newBaby.length;
    var arrayNum2 = 7;

    for (var i = 0; i < lengths.length; i++) {
        if (length > lengths[i]) {
            continue;
        }
        else {
            arrayNum2 = i;
            break;
        }
    }
    if (arrayNum2 == 0) {
        lengthPercentile = "Your baby is below the 5th percentile for length.";
    }
    else if (arrayNum2 == 1) {
        lengthPercentile = "Your baby is between the 5th and 10th percentile for length";
    }
    else if (arrayNum2 == 2) {
        lengthPercentile = "Your baby is between the 10th and 25th percentile for length";
    }
    else if (arrayNum2 == 3) {
        lengthPercentile = "Your baby is between the 25th and 50th percentile for length";
    }
    else if (arrayNum2 == 4) {
        lengthPercentile = "Your baby is between the 50th and 75th percentile for length";
    }
    else if (arrayNum2 == 5) {
        lengthPercentile = "Your baby is between the 75th and 90th percentile for length";
    }
    else if (arrayNum2 == 6) {
        lengthPercentile = "Your baby is between the 90th and 95th percentile for length";
    }
    else if (arrayNum2 > 6) {
        lengthPercentile = "Your baby is above the 95th percentile for length."
    }

    document.getElementById('weightResult').innerHTML = weightPercentile;
    document.getElementById('lengthResult').innerHTML = lengthPercentile;

    if (selectedGender == 'female') {
        document.getElementById('growthChart').href = "https://www.cdc.gov/nccdphp/dnpao/growthcharts/who/examples/example2_pop_cdc.htm";
        document.getElementById('growthChart').innerHTML = "Click here to see girl growth chart.";
    }
    else if (selectedGender == 'male') {
        document.getElementById('growthChart').href = "https://www.cdc.gov/nccdphp/dnpao/growthcharts/who/examples/example5_pop_cdc.htm";
        document.getElementById('growthChart').innerHTML = "Click here to see boy growth chart.";
    }

       
    console.log(weights);
    console.log(lengths);
    console.log(weightPercentile);
    console.log(lengthPercentile);
}