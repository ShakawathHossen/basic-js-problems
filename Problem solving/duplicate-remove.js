function removeDuplicate(numbers) {
  const unique = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (unique.includes(number) === false) {
      unique.push(number);
    }
  }
  return unique;
}

const numbers = [4, 4, 5, 5, 43, 43, 53, 53, 56, 52, 532, 244, 3, 4, 5, 3];
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);
