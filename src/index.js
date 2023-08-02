module.exports = function toReadable (number) {
  const dozen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozen2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number <= 19) {
    return dozen[number];
  }
  if (number <= 99) {
    let numberToStr = number.toString();
    if (number % 10 === 0) {
      return `${dozen2[numberToStr[0]]}`;
    }
    return `${dozen2[numberToStr[0]]} ${dozen[numberToStr[1]]}`;
  }

  if (number <= 999) {
    let numberToStr = number.toString();
    let numberToStr2 = +number.toString().slice(1);
    let numberToStr3 = number.toString().slice(1);
    if (number % 100 === 0) {
      return `${dozen[numberToStr[0]]} hundred`;
    }
    if (numberToStr2 <= 19) {

      return `${dozen[numberToStr[0]]} hundred ${dozen[numberToStr2]}`;
    }
    if (numberToStr2 % 10 === 0) {
      return `${dozen[numberToStr[0]]} hundred ${dozen2[numberToStr3[0]]}`;
    }

    return `${dozen[numberToStr[0]]} hundred ${dozen2[numberToStr3[0]]} ${dozen[numberToStr3[1]]}`;
  }

}
