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
    boyArray[3] = [weight4, weight5];
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
   
    var lengthPercentile;
    var weightPercentile;

    var weight = newBaby.weight;
    var weights = totalBoyArray[0][0];
    var arrayNum = 7;
    if (newBaby.age == 1) {
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
        var lengths = totalBoyArray[0][1];
        var arrayNum2 = 7;
        if (newBaby.age == 1) {
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
        }
    }

    //console.log(lbs + oz + length + age + selectedGender);
    //console.log(pounds);
    //console.log(ounces);
    //console.log(height);
    //console.log(months);
    //console.log(conOzToLbs);
    //console.log(totalLbs);
    //console.log(newBaby);
    console.log(totalBoyArray[0][0]);
    console.log(weightPercentile);
    console.log(lengthPercentile);
}