import unicode from "./UnicodeMap";
import keyboard from "./KeyboardMap";
let englishToUrduMap = [];
for(let i=32; i<44; i++){
    englishToUrduMap.push({
        "key": i,
        "en": keyboard[i],
        "ur": keyboard[i]
    });
}
englishToUrduMap = [
    ...englishToUrduMap,
    {
        "key": 44,
        "en": keyboard[44],
        "ur": unicode[1548],
        "ur_translation": 'comma',
        'en_translation': 'comma'
    },
    {
        "key": 45,
        "en": keyboard[45],
        "ur": keyboard[45],
        "ur_translation": 'dash',
        'en_translation': 'dash'
    },
    {
        "key": 46,
        "en": keyboard[46],
        "ur": unicode[1748],
        "ur_translation": 'full-stop',
        'en_translation': 'full-stop'
    },
    {
        "key": 47,
        "en": keyboard[47],
        "ur": keyboard[47],
        "ur_translation": 'backslash',
        'en_translation': 'backslash'
    },
    {
        "key": 48,
        "en": keyboard[48],
        "ur": unicode[1776],
        "ur_translation": 'sifar',
        'en_translation': 'zero'
    },
    {
        "key": 49,
        "en": keyboard[49],
        "ur": unicode[1777],
        "ur_translation": 'aik',
        'en_translation': 'one'
    },
    {
        "key": 50,
        "en": keyboard[50],
        "ur": unicode[1778],
        "ur_translation": 'do',
        'en_translation': 'two'
    },
    {
        "key": 51,
        "en": keyboard[51],
        "ur": unicode[1779],
        "ur_translation": 'teen',
        'en_translation': 'three'
    },
    {
        "key": 52,
        "en": keyboard[52],
        "ur": unicode[1780],
        "ur_translation": 'char',
        'en_translation': 'four'
    },
    {
        "key": 53,
        "en": keyboard[53],
        "ur": unicode[1781],
        "ur_translation": 'paanch',
        'en_translation': 'five'
    },
    {
        "key": 54,
        "en": keyboard[54],
        "ur": unicode[1782],
        "ur_translation": 'cheh',
        'en_translation': 'six'
    },
    {
        "key": 55,
        "en": keyboard[55],
        "ur": unicode[1783],
        "ur_translation": 'saat',
        'en_translation': 'seven'
    },
    {
        "key": 56,
        "en": keyboard[56],
        "ur": unicode[1784],
        "ur_translation": 'aath',
        'en_translation': 'eight'
    },
    {
        "key": 57,
        "en": keyboard[57],
        "ur": unicode[1785],
        "ur_translation": 'noh',
        'en_translation': 'nine'
    },
    {
        "key": 58,
        "en": keyboard[58],
        "ur": keyboard[58],
        "ur_translation": 'colon',
        'en_translation': 'colon'
    },
    {
        "key": 59,
        "en": keyboard[59],
        "ur": unicode[1563],
        "ur_translation": 'semi-colon',
        'en_translation': 'semi-colon'
    },
    {
        "key": 60,
        "en": keyboard[60],
        "ur": keyboard[60],
        "ur_translation": 'chota-hay',
        'en_translation': 'less-than'
    },
    {
        "key": 61,
        "en": keyboard[61],
        "ur": keyboard[61],
        "ur_translation": 'barabar',
        'en_translation': 'equal'
    },
    {
        "key": 62,
        "en": keyboard[62],
        "ur": keyboard[62],
        "ur_translation": 'bara-hay',
        'en_translation': 'greater-than'
    },
    {
        "key": 63,
        "en": keyboard[63],
        "ur": unicode[1567],
        "ur_translation": 'question',
        'en_translation': 'question'
    },
    {
        "key": 64,
        "en": keyboard[64],
        "ur": keyboard[64],
        "ur_translation": 'at',
        'en_translation': 'at'
    },
    {
        "key": 65,
        "en": keyboard[65],
        "ur": unicode[1575],
        "ur_translation": 'Alef',
        'en_translation': 'A'
    },
    {
        "key": 66,
        "en": keyboard[66],
        "ur": unicode[1576],
        "ur_translation": 'Beh',
        'en_translation': 'B'
    },
    {
        "key": 67,
        "en": keyboard[67],
        "ur": unicode[1587],
        "ur_translation": 'Seen',
        'en_translation': 'C'
    },
    {
        "key": 67,
        "en": keyboard[67],
        "ur": unicode[1588],
        "ur_translation": 'Sheen',
        'en_translation': 'C',
        "shift": true
    },
    {
        "key": 68,
        "en": keyboard[68],
        "ur": unicode[1583],
        "ur_translation": 'Dal',
        'en_translation': 'D',
        "shift": false
    },
    {
        "key": 68,
        "en": keyboard[68],
        "ur": unicode[1672],
        "ur_translation": 'Ddal',
        'en_translation': 'D',
        "shift": true
    },
    {
        "key": 69,
        "en": keyboard[69],
        "ur": unicode[1593],
        "ur_translation": 'Ain',
        'en_translation': 'E',
        "shift": false
    },
    {
        "key": 69,
        "en": keyboard[69],
        "ur": unicode[1553],
        "ur_translation": 'ALAYHE ASSALLAM',
        'en_translation': 'E',
        "shift": true
    },
    {
        "key": 70,
        "en": keyboard[70],
        "ur": unicode[1601],
        "ur_translation": 'Feh',
        'en_translation': 'F',
        "shift": false
    },
    {
        "key": 70,
        "en": keyboard[70],
        "ur": unicode[1622],
        "ur_translation": 'Sub Alef',
        'en_translation': 'F',
        "shift": true
    },
    {
        "key": 71,
        "en": keyboard[71],
        "ur": unicode[1711],
        "ur_translation": 'Gaf',
        'en_translation': 'G',
        "shift": false
    },
    {
        "key": 71,
        "en": keyboard[71],
        "ur": unicode[1594],
        "ur_translation": 'Ghain',
        'en_translation': 'G',
        "shift": true
    },
    {
        "key": 72,
        "en": keyboard[72],
        "ur": unicode[1726],
        "ur_translation": 'Heh Doachashmee',
        'en_translation': 'H',
        "shift": false
    },
    {
        "key": 72,
        "en": keyboard[72],
        "ur": unicode[1581],
        "ur_translation": 'Heh',
        'en_translation': 'H',
        "shift": true
    },
    {
        "key": 73,
        "en": keyboard[73],
        "ur": unicode[1740],
        "ur_translation": 'Farsi Yeh',
        'en_translation': 'I',
        "shift": false
    },
    {
        "key": 73,
        "en": keyboard[73],
        "ur": unicode[1648],
        "ur_translation": 'Sup Alef',
        'en_translation': 'I',
        "shift": true
    },
    {
        "key": 74,
        "en": keyboard[74],
        "ur": unicode[1580],
        "ur_translation": 'Jeem',
        'en_translation': 'J',
        "shift": false
    },
    {
        "key": 74,
        "en": keyboard[74],
        "ur": unicode[1590],
        "ur_translation": 'Dad',
        'en_translation': 'J',
        "shift": true
    },
    {
        "key": 75,
        "en": keyboard[75],
        "ur": unicode[1705],
        "ur_translation": 'Kaaf',
        'en_translation': 'K',
        "shift": false
    },
    {
        "key": 75,
        "en": keyboard[75],
        "ur": unicode[1582],
        "ur_translation": 'Khah',
        'en_translation': 'K',
        "shift": true
    },
    {
        "key": 76,
        "en": keyboard[76],
        "ur": unicode[1604],
        "ur_translation": 'Laam',
        'en_translation': 'L',
        "shift": false
    },
    {
        "key": 76,
        "en": keyboard[76],
        "ur": unicode[1554],
        "ur_translation": 'Rehmatullah alayhe',
        'en_translation': 'L',
        "shift": true
    },
    {
        "key": 77,
        "en": keyboard[77],
        "ur": unicode[1605],
        "ur_translation": 'Meem',
        'en_translation': 'EM',
        "shift": false
    },
    {
        "key": 77,
        "en": keyboard[77],
        "ur": unicode[1552],
        "ur_translation": 'Sallallahou alayhe wassallam',
        'en_translation': 'EM',
        "shift": true
    },
    {
        "key": 78,
        "en": keyboard[78],
        "ur": unicode[1606],
        "ur_translation": 'Noon',
        'en_translation': 'EN',
        "shift": false
    },
    {
        "key": 78,
        "en": keyboard[78],
        "ur": unicode[1722],
        "ur_translation": 'Noon ghunna',
        'en_translation': 'EN',
        "shift": true
    },
    {
        "key": 79,
        "en": keyboard[79],
        "ur": unicode[1607],
        "ur_translation": 'Heh',
        'en_translation': 'Oo',
        "shift": false
    },
    {
        "key": 79,
        "en": keyboard[79],
        "ur": unicode[1731],
        "ur_translation": 'Teh marbuta goal',
        'en_translation': 'Oo',
        "shift": true
    },
    {
        "key": 80,
        "en": keyboard[80],
        "ur": unicode[1662],
        "ur_translation": 'Peh',
        'en_translation': 'P',
        "shift": false
    },
    {
        "key": 80,
        "en": keyboard[80],
        "ur": unicode[1615],
        "ur_translation": 'Damma',
        'en_translation': 'P',
        "shift": true
    },
    {
        "key": 81,
        "en": keyboard[81],
        "ur": unicode[1602],
        "ur_translation": 'Qaf',
        'en_translation': 'Que',
        "shift": false
    },
    {
        "key": 81,
        "en": keyboard[81],
        "ur": unicode[1552],
        "ur_translation": 'Sallallahou alayhe wassallam',
        'en_translation': 'Que',
        "shift": true
    },
];
export default englishToUrduMap;
