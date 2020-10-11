module.exports = function toReadable (number) {
    const voc = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty',90: 'ninety', 100: 'hundred' };

    if( number in voc && number != 100 ){
         return voc[number];
     }    

var numStr = '' + number;
var digit = numStr.length -1;
var resultStr = '';

    do {
        if( digit === 2) {
            resultStr = resultStr + voc[Math.floor(number / (10**digit) )] + ' ' + voc[100] + ' ';
        }

        if( digit === 1) {
            resultStr = resultStr + voc[Math.floor(number / (10**digit) ) * (10)] + ' ';
        }

        number = number%(10**digit);
        digit --;

    } while ( !(number in voc) );

    if  ( number ) {
         resultStr = resultStr + voc[number]; 
    }
return resultStr.trim();
}
