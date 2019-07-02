const TRANSLATION_TABLE = [
  [ 100,  'C' ],
  [ 90,  'XC' ],
  [ 50,   'L' ],
  [ 40,  'XL' ],
  [ 10,   'X' ],
  [ 9,   'IX' ],
  [ 5,    'V' ],
  [ 4,   'IV' ],
  [ 1,    'I' ]
];

const romanNumb = (arabic) => {
  let romanSymbols = '';

  TRANSLATION_TABLE.forEach( ([arabicValue, romanSymbol]) => {
    while (arabic >= arabicValue) {
      romanSymbols += romanSymbol;
      arabic -= arabicValue;
    }
  });
  console.log(romanSymbols)
  return romanSymbols;
}

const RomadDigititis = (input) => {
  const res = [
  {name: 'C', count: 0},
  {name: 'XC', count: 0},
  {name: 'L', count: 0},
  {name: 'XL', count: 0},
  {name: 'X', count: 0},
  {name: 'IX', count: 0},
  {name: 'V', count: 0},
  {name: 'IV', count: 0},
  {name:'I', count: 0},
  ];

  for( let i = 1; i<=input; i++) {
    const test = romanNumb(i).split('');
    test.forEach((item) => {
      switch (item) {
        case 'C':
          res[0].count++;
          break;
        case 'XC':
          res[1].count++;
          break;
        case 'L':
          res[2].count++;
          break;
        case 'XL':
          res[3].count++;
          break;
        case 'X':
          res[4].count++;
          break;
        case 'IX':
          res[5].count++;
          break;
        case 'V':
          res[6].count++;
          break;
        case 'IV':
          res[7].count++;
          break;
        case 'I':
          res[8].count++;
          break;
      }
    });
    console.log(test)
  }
  

  console.log(res);
}

RomadDigititis(20);
