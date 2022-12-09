/* console.log('v1.3.9');
console.log('whats new: \n Design improvements'); */

window.onload = gen;

var eyesArray = [
    '•',
    '*',
    '^',
    '˙',
    '.',
    '+',
    '×',
    '★',
    '✰',
    'U',
    '◕',
    '◔',
    'ಠ',
    'ﾟ',
    'º',
    '■',
    ' ▀̿ ̿ ',
    'ಥ',
    '˘',
    'ʘ',
    '>',
    '<',
    '≦',
    '≧',
    ' ͡ᵔ',
    '༎ຶ',
    'ヮ',
    '↼',
    '⇀',
    '◉',
    '⚆',
    'ཀ',
    '¶',
    '∆',
    '◊',
    '¯',
    'ᗜ',
    '◎',
    '〃',
    '\'',
    'Θ',
    'ఠ',
    'Ͼ',
    'σ',
    '∩',
    '⁌',
    '⁍',
    '⏣',
    '⍤',
    'T',
    '▰',
    '≋',
    'ꗞ',
    'ಡ',
    '≖',
    'ᵒ',
    'ö',
    '•́',
    '•̀',
    'ᇹ',
    'ŏ',
    '°',
    'ᓂ',
    'ᓀ',
    ' ͡°',
    ' ͠°',
    '♡',
    '☉',
    '⊽',
    '◈',
    '❛',
    'థ',
    '◶',
    '◴',
    'ↁ',
    '✪',
    '●',
    '◑',
    'ರ'
]

var mouthArray = [
    '~',
    '_',
    '∞',
    '=',
    '≈',
    'w',
    'm',
    '¬',
    '-',
    '·',
    '–',
    'ᴥ',
    '‿',
    '益',
    '∀',
    'ل͟',
    '‸',
    'ᗩ',
    ' ͜ʖ',
    'Д',
    ' ڡ ',
    '▽',
    '—',
    'Ω',
    '෴',
    '﹏',
    '︹',
    ' ̼',
    'ˬ',
    'ⱅ',
    'ᆽ',
    'ω',
    '⌒',
    'ロ',
    'ε',
    'ㅂ',
    '皿',
    '_⊃',
    '◡',
    'ʖ',
    '▃',
    '⚇',
    'ᨓ',
    'ᨎ',
    'o',
    '_ゝ',
    '(oo)',
    '▃',
    'ਉ',
    '◞౪◟',
    'ܫ',
    '人',
    '!',
    '⫊',
    '□',
    'ထ',
    'ʖ̯',
    '႐',
    '〇',
    'ｖ',
    '△'
]

var baseArray = [
    '( )',
    '{ }',
    '[ ]',
    '༼ ༽',
    '⧙ ⧘',
    '⟮ ⟯',
    '❪ ❫',
    '【 】',
    '| |',
    'ʕ ʔ',
    'ᕳ ᕲ',
    '⟨ ⟩',
    '⎰ ⎱',
    '❬ ❭',
    '❲ ❳'
]

var leftArmsArray = [
    '☜ ☜',
    'ლ ლ',
    'ノ ノ',
    '乁 乁',
    '〜 〜',
    '┐ ┐',
    '╚ ╚',
    'Σ ﾉ',
    '\\ \\',
    'ღ ღ',
    '╮ ╮',
    '┐ ┐',
    '૮ ૮'
]

var rightArmsArray = [
    'つ つ',
    'づ づ',
    '☞ ☞',
    '~ ~',
    'ノ ノ',
    '╯ ╯',
    'ง ง',
    '/ /',
    '∩ ⊃',
    '〜 〜',
    '┌ ┌',
    'ɔ ɔ',
    '╝ ╝',
    'و و',
    '┘ ┘',
    'ﾉ ﾉ',
    '╭ ╭',
    '┌ ┌'
]

var outArmsArray = [
    '\\ /',
    '╚ =┐',
    'ᕙ ᕗ',
    'ᕕ ᕗ',
    'ᕦ ᕤ',
    '◟ ◞',
    '¯\\_ _/¯',
    '⤜ ⤏',
    '〜 〜',
    'へ ┘',
    '໒ ७',
    '╚ ╝',
    '╮ ╭',
    '┐ ┌'
]

var extraArray1 = [
    ' ♪ ',
    ' ♬ ',
    ' ✿ ',
    ' ⋆ ',
    ' ⁈ ',
    ' ╬ '
]

var blushArray1 = [
    ' : ',
    ' ; ',
    ' ˵ ',
    ' = ',
    ' * ',
    ' \' ',
    ' ` ',
    ' ✽ '
]

function gen() {
    var eyes = eyesArray[Math.floor(Math.random() * eyesArray.length)];
    var mouth = mouthArray[Math.floor(Math.random() * mouthArray.length)];
    var base = baseArray[Math.floor(Math.random() * baseArray.length)];
    var leftArms = leftArmsArray[Math.floor(Math.random() * leftArmsArray.length)];
    var rightArms = rightArmsArray[Math.floor(Math.random() * rightArmsArray.length)];
    var outArms = outArmsArray[Math.floor(Math.random() * outArmsArray.length)];
    var extra1 = extraArray1[Math.floor(Math.random() * extraArray1.length)];
    var blush1 = blushArray1[Math.floor(Math.random() * blushArray1.length)];
    var emptyFeature = '';

    /* -- regenerates some features if they dont match well with others -- */

    while ((eyes == '*' && blush1 == '*') || (eyes == '〃' && blush1 == '˵') || (eyes == '\'' && blush1 == '\'') || (eyes == '⍤' && base == '⟨ ⟩') || (eyes == '◕' && base == '⟨ ⟩')) {
        eyes = eyesArray[Math.floor(Math.random() * eyesArray.length)];
    }

    while ((base == 'ʕ ʔ' && mouth == 'ʖ') || (eyes == '⇀' && mouth == 'ل͟') || (eyes == '⏣' && mouth == 'ل͟') || (eyes == '◉' && mouth == '◞౪◟') || (eyes == '≧' && mouth == '◞౪◟') || (eyes == '≦' && mouth == '◞౪◟') || (eyes == '≋' && mouth == '◞౪◟') || (eyes == '≦' && mouth == 'ω') || (eyes == '≧' && mouth == 'ω') || (eyes == '⁍' && mouth == 'ㅂ') || (eyes == '⁍' && mouth == 'ڡ') || (eyes == '<' && mouth == '≈') || (eyes == '▰' && mouth == 'm') || (eyes == '↼' && mouth == 'm') || (eyes == '≦' && mouth == '_ゝ') || (eyes == '≧' && mouth == '_ゝ') || (eyes == '☉' && mouth == '_ゝ') || (eyes == '↼' && mouth == '–') || (eyes == '↼' && mouth == '—') || (eyes == '+' && mouth == 'm') || (eyes == '★' && mouth == 'ل͟') || (eyes == '≦' && mouth == 'm') || (eyes == '≧' && mouth == 'm') || (eyes == 'T' && mouth == '!') || (mouth == 'o' && (eyes == 'ŏ' || eyes == 'ö' || eyes == 'ō')) || (mouth == '(oo)' && (eyes == 'ŏ' || eyes == 'ö' || eyes == 'ō')) || (eyes == '◎' && mouth == 'ᨓ') || (eyes == '≦' && mouth == '人') || (eyes == '≧' && mouth == '人') || (eyes == '⇀' && mouth == 'ڡ') || (eyes == '≋' && mouth == 'ω') || (eyes == '⇀' && mouth == 'w') || (eyes == '≧' && mouth == 'ل͟') || (eyes == '≦' && mouth == 'ل͟') || (eyes == '⚆' && mouth == 'ᆽ') || (eyes == '◈' && mouth == '益') || (eyes == '★' && mouth == ' ͜ʖ') || (eyes == '∆' && mouth == 'ڡ') || (eyes == '◉' && mouth == 'ㅂ') || (eyes == '≦' && mouth == '益') || (eyes == '≧' && mouth == '益') || (eyes == '◎' && mouth == 'ل͟') || (eyes == '◎' && mouth == 'ᆽ') || (eyes == '≦' && mouth == '皿') || (eyes == '≧' && mouth == '皿') || (eyes == '★' && mouth == 'ㅂ') || (eyes == '≦' && mouth == 'ʖ̯') || (eyes == '≧' && mouth == 'ʖ̯') || (eyes == '⇀' && mouth == 'ㅂ') || (eyes == '\'' && mouth == '!') || (eyes == '★' && mouth == 'ڡ') || (eyes == '*' && mouth == '!') || (eyes == '◉' && mouth == 'w') || (eyes == '◑' && mouth == 'ᨎ') || (eyes == '◑' && mouth == 'ڡ') || (eyes == '≦' && mouth == 'ᗩ') || (eyes == '≧' && mouth == 'ᗩ') || (eyes == '◈' && mouth == 'ᨓ') || (eyes == '◴' && mouth == 'Д') || (eyes == '♡' && mouth == 'ᆽ') || (eyes == '≦' && mouth == 'ε') || (eyes == '≧' && mouth == 'ε') || (eyes == '≦' && mouth == ' ͜ʖ') || (eyes == '≧' && mouth == ' ͜ʖ') || (eyes == '≋' && mouth == ' ͜ʖ') || (eyes == '❛' && mouth == ' ͜ʖ') || (eyes == '◉' && mouth == 'ω') || (eyes == '✪' && mouth == '◞౪◟') || (eyes == '⁍' && mouth == 'ᆽ') || (eyes == '⏣' && mouth == '◞౪◟') || (eyes == '◑' && mouth == 'ਉ') || (eyes == '★' && mouth == 'ᨓ') || (eyes == '.' && mouth == '·') || (eyes == '≧' && mouth == 'ਉ') || (eyes == '≦' && mouth == 'ਉ') || (eyes == '⇀' && mouth == 'ʖ') || (eyes == '≧' && mouth == 'ထ') || (eyes == '≦' && mouth == 'ထ') || (eyes == '◑' && mouth == 'ᴥ') || (eyes == '◎' && mouth == 'ʖ̯') || (eyes == '✰' && mouth == '皿')) {
        mouth = mouthArray[Math.floor(Math.random() * mouthArray.length)];
    }

    while ((base == '【 】' && (rightArms == 'ɔ ɔ' || rightArms == '~ ~' || leftArms == '\\ \\' || rightArms == '/ /' || outArms == '\\ /' || outArms == '╮ ╭')) || (base == 'ᕳ ᕲ' && (leftArms == '☜ ☜' || rightArms == '☞ ☞')) || (base == '⎰ ⎱' && outArms == 'へ ┘') || (base == '【 】' && mouth == 'ܫ') || (base == '⧙ ⧘' && eyes == '⇀')) {
        base = baseArray[Math.floor(Math.random() * baseArray.length)];
    }

    while ((outArms == '⤜ ⤏' && mouth == '⋆')) {
        blush1 = blushArray1[Math.floor(Math.random() * blushArray1.length)];
    }

    /* -- -- */

    const sides = base.split(' ');
    var side1 = sides[0];
    var side2 = sides[1];

    var armsArray = [
        leftArms,
        rightArms,
        outArms,
        emptyFeature,
        emptyFeature
    ]

    var extraArray2 = [
        extra1,
        emptyFeature,
        emptyFeature,
        emptyFeature,
        emptyFeature
    ]

    var blushArray2 = [
        blush1,
        emptyFeature,
        emptyFeature,
        emptyFeature,
        emptyFeature
    ]

    var armPos = armsArray[Math.floor(Math.random() * armsArray.length)];
    var extra2 = extraArray2[Math.floor(Math.random() * extraArray2.length)];
    var blush2 = blushArray2[Math.floor(Math.random() * blushArray2.length)];

    /* console.log('———————————————');

    console.log('eyes: ' + eyes);
    console.log('mouth: ' + mouth);
    console.log('base: ' + base);
    console.log('side1: ' + side1);
    console.log('side2: ' + side2);

    if (!extra2 == emptyFeature) {
        console.log('extra: ' + extra2);
    }

    if (!blush2 == emptyFeature) {
        console.log('blush: ' + blush2);
    } */

    if (armPos == leftArms) {
        const lArms = leftArms.split(' ');
        const lArm1 = lArms[0];
        const lArm2 = lArms[1];

        var face = extra2 + lArm1 + side1 + blush2 + eyes + mouth + eyes + blush2 + lArm2 + side2 + extra2;

        document.getElementById('faceText').innerText = face;

        /* console.log('leftarm1: ' + lArm1);
        console.log('leftarm2: ' + lArm2);
        console.log('face: ' + face.replace('&nbsp;', '').replace('&nbsp;', '')); */

    } else if (armPos == rightArms) {
        const rArms = rightArms.split(' ');
        const rArm1 = rArms[0];
        const rArm2 = rArms[1];

        var face = extra2 + side1 + rArm1 + blush2 + eyes + mouth + eyes + blush2 + side2 + rArm2 + extra2;

        document.getElementById('faceText').innerText = face;

        /* console.log('rightarm1: ' + rArm1);
        console.log('rightarm2: ' + rArm2);
        console.log('face: ' + face.replace('&nbsp;', '').replace('&nbsp;', '')); */

    } else if (armPos == outArms) {
        const oArms = outArms.split(' ');
        const oArm1 = oArms[0];
        const oArm2 = oArms[1];

        var face = extra2 + oArm1 + side1 + blush2 + eyes + mouth + eyes + blush2 + side2 + oArm2 + extra2;

        document.getElementById('faceText').innerText = face;

        /* console.log('outarm1: ' + oArm1);
        console.log('outarm2: ' + oArm2);
        console.log('face: ' + face.replace('&nbsp;', '').replace('&nbsp;', '')); */

    } else {
        var face = extra2 + side1 + blush2 + eyes + mouth + eyes + blush2 + side2 + extra2;
        document.getElementById('faceText').innerText = face;

        /* console.log('face: ' + face.replace('&nbsp;', '').replace('&nbsp;', '')); */
    }
}

document.body.onkeyup = function (event) {
    if (event.keyCode == 32) {
        document.getElementById('gen').click();
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById('faceText').innerText.replace('&nbsp;', '').replace('&nbsp;', ''));

    document.getElementById('copy').innerText = 'Copied!';
}

function mouseOut() {
    document.getElementById('copy').innerText = 'Copy';
}