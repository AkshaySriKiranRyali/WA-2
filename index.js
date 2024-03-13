function checkVowelsAndConsonats() {
    const inputString = document.getElementById("stringInput").value;
    const vowels = "aeiou";
    const conson = "bcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i].toLowerCase())) {
        vowelCount++;
      } else if (conson.includes(inputString[i].toLowerCase())) {
        consonantCount++;
      }
    }
    document.getElementById("result").innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
  }

  function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const numLength = input.length;
    let palindrome = true;
    for (let i = 0; i < numLength / 2; i++) {
        if (input[i] !== input[numLength - 1 - i]) {
            palindrome = false;
            break;
        }
    }
    if (palindrome) {
        document.getElementById('palindromeResult').textContent = 'It\'s a palindrome';
    } else {
        document.getElementById('palindromeResult').textContent = 'It\'s not a palindrome.';
    }
}

function calculateTotalBill() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    let tipPercentage = parseFloat(document.getElementById('tip').value);

    if (subtotal) {
        tipPercentage = tipPercentage ? tipPercentage : 0;
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;

        document.getElementById('totalResult').textContent = `Total Amount of bill (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
    }
    else {
        document.getElementById('totalResult').textContent = alert(`Please Enter valid subtotal amount!`);
    }

}

window.addEventListener('load', function () {
    const subtotalInput = document.getElementById('subtotal');
    const tipInput = document.getElementById('tip');
    const palindromeInput = document.getElementById('inputPalindrome').value;
    const reverseInput = document.getElementById('inputString').value;
    subtotalInput.value = '';
    tipInput.value = '';
    palindromeInput.value = '';
    reverseInput.value = '';
});

const inputString = document.getElementById('stringInput');
inputString.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkVowelsAndConsonats();
    }
});

const inputPalindrome = document.getElementById('inputPalindrome');
inputPalindrome.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});
