let count = 0; 

function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "วิทยาลัยการอาชีพวารินชำราบ";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง วก.วร. ก่อตั้งขึ้นเมื่อปี 2540";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}
function checkAnswer3(answer) {
    const result = document.getElementById('result3');
    const result4 = document.getElementById('result4');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง วก.วร. สังกัด สอศ";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result4.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
}