function calculateZodiacSign() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const zodiacSign = getZodiacSign(birthdate.getMonth() + 1, birthdate.getDate());
  document.getElementById('result').innerText = `Your Zodiac Sign is: ${zodiacSign}`;
}

function getZodiacSign(month, day) {
  // Define the ranges for each zodiac sign
  const zodiacSigns = [
    { name: 'Capricorn', startMonth: 1, startDay: 1, endMonth: 1, endDay: 19 },
    { name: 'Aquarius', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { name: 'Pisces', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
    { name: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { name: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { name: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { name: 'Cancer', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { name: 'Leo', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { name: 'Virgo', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { name: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { name: 'Scorpio', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { name: 'Sagittarius', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
    { name: 'Capricorn', startMonth: 12, startDay: 22, endMonth: 12, endDay: 31 }
  ];

  // Find the matching zodiac sign
  for (const sign of zodiacSigns) {
    if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
      return sign.name;
    }
  }
}
