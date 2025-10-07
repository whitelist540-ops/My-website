// Unicode character maps for different text styles
const styles = {
  bold: {
    name: "𝐁𝐨𝐥𝐝",
    map: {
      a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
      k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
      u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
      A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉",
      K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓",
      U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
    }
  },
  italic: {
    name: "𝘐𝘵𝘢𝘭𝘪𝘤",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
      A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
      K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
      U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
    }
  },
  boldItalic: {
    name: "𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘",
    map: {
      a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
      k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
      u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
      A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
      K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
      U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
    }
  },
  script: {
    name: "𝒮𝒸𝓇𝒾𝓅𝓉",
    map: {
      a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
      k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
      u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
      A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
      K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
      U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
    }
  },
  fraktur: {
    name: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
    map: {
      a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
      k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
      u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
      A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
      K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
      U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
    }
  },
  monospace: {
    name: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
    map: {
      a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
      k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
      u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
      A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
      K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
      U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
    }
  },
  doubleStruck: {
    name: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
      K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
      U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
    }
  },
  circled: {
    name: "Ⓒⓘⓡⓒⓛⓔⓓ",
    map: {
      a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
      k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
      u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
      A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
      K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
      U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
    }
  },
  squared: {
    name: "🅂🅀🅄🄰🅁🄴🄳",
    map: {
      a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
      k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
      u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
      A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
      K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
      U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
    }
  },
  inverted: {
    name: "🅸🅽🆅🅴🆁🆃🅴🅳",
    map: {
      a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
      k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
      u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉",
      A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
      K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
      U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
    }
  },
  smallCaps: {
    name: "Sᴍᴀʟʟ Cᴀᴘs",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
      A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
      K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
      U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
    }
  },
  fullwidth: {
    name: "Ｆｕｌｌｗｉｄｔｈ",
    map: {
      a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
      k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
      u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
      A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
      K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
      U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
    }
  },
  cursive: {
    name: "𝓒𝓾𝓻𝓼𝓲𝓿𝓮",
    map: {
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
      k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
      u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
      K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
      U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
    }
  },
  sansSerif: {
    name: "𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿",
    map: {
      a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃",
      k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍",
      u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
      A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩",
      K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳",
      U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
    }
  },
  sansSerifBold: {
    name: "𝗦𝗮𝗻𝘀 𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱",
    map: {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
      k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
      u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
      A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
      K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
      U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
    }
  },
  superscript: {
    name: "ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
    map: {
      a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
      k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "q", r: "ʳ", s: "ˢ", t: "ᵗ",
      u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
      A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
      K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "Q", R: "ᴿ", S: "ˢ", T: "ᵀ",
      U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
    }
  },
};

export interface StyledText {
  id: string;
  name: string;
  text: string;
}

// Special Unicode character substitutions for gamer-style mixing
const specialChars: Record<string, string[]> = {
  a: ["ą", "ค", "ά", "ặ", "ꫀ", "α", "ａ", "₳", "ᴀ", "ᵃ"],
  b: ["ḃ", "β", "ḅ", "ḇ", "ｂ", "ʙ", "ᵇ"],
  c: ["č", "ć", "ç", "ĉ", "ḉ", "ｃ", "ᴄ", "ᶜ"],
  d: ["ď", "ḋ", "ḍ", "ḑ", "ｄ", "ᴅ", "ᵈ"],
  e: ["ē", "ė", "ę", "ع", "ɇ", "ε", "ｅ", "ᴇ", "ᵉ", "Ɛ"],
  f: ["ḟ", "ƒ", "ｆ", "ꜰ", "ᶠ", "Ƒ"],
  g: ["ğ", "ġ", "ģ", "ḡ", "ｇ", "ɢ", "ᵍ", "Ɠ"],
  h: ["ħ", "ђ", "ℏ", "ɦ", "ｈ", "ʜ", "ʰ", "ℋ"],
  i: ["ï", "ī", "į", "ι", "ɨ", "ł", "ｉ", "ɪ", "ⁱ", "ℐ"],
  j: ["ĵ", "ј", "ｊ", "ᴊ", "ʲ", "Ɉ"],
  k: ["ķ", "ḳ", "ƙ", "ｋ", "ᴋ", "ᵏ", "ʞ"],
  l: ["ł", "ĺ", "ľ", "ļ", "ḷ", "ｌ", "ʟ", "ˡ", "ℒ"],
  m: ["ṁ", "ṃ", "ｍ", "ᴍ", "ᵐ", "ɱ", "ℳ"],
  n: ["ñ", "ń", "ň", "ή", "ɳ", "ₙ", "ｎ", "₦", "ɴ", "ⁿ", "ℕ"],
  o: ["ō", "ö", "ø", "ơ", "ǿ", "ο", "๏", "ₒ", "ᴏ", "ᵒ", "Ø"],
  p: ["ṗ", "ṕ", "ｐ", "ᴘ", "ᵖ"],
  q: ["ｑ", "ǫ", "ᑫ"],
  r: ["ř", "ŕ", "я", "ʀ", "ɾ", "ｒ", "ʳ", "Ř"],
  s: ["š", "ś", "ş", "ѕ", "ร", "ｓ", "ꜱ", "ˢ", "ʂ"],
  t: ["ť", "ţ", "τ", "ŧ", "ƚ", "ｔ", "Ŧ", "ᴛ", "ᵗ", "ʈ", "₮"],
  u: ["ū", "ü", "ų", "ứ", "ᥙ", "υ", "ｕ", "ᴜ", "ᵘ", "ʊ"],
  v: ["ṽ", "ṿ", "ｖ", "ᴠ", "ᵛ", "ʋ", "ⱽ"],
  w: ["ẃ", "ẅ", "ẇ", "ｗ", "ᴡ", "ʷ", "ʍ", "ᵂ"],
  x: ["ẋ", "ẍ", "ｘ", "ˣ", "ᵡ"],
  y: ["ý", "ÿ", "ұ", "ყ", "ү", "ｙ", "ʏ", "ʸ", "ʎ"],
  z: ["ž", "ź", "ż", "ʐ", "ｚ", "ᴢ", "ᶻ", "ʑ", "Ƶ"],
  A: ["Ą", "Ά", "Ꭺ", "ᗩ", "Ⱥ", "Ａ", "ᴬ", "₳"],
  B: ["Ḃ", "Ḅ", "Ḇ", "Ｂ", "ᴮ"],
  C: ["Č", "Ć", "Ç", "Ĉ", "Ｃ", "ᶜ"],
  D: ["Ď", "Ḋ", "Ḍ", "Ｄ", "ᴰ"],
  E: ["Ē", "Ė", "Ę", "Ɇ", "Ｅ", "ᴱ"],
  F: ["Ḟ", "Ｆ", "ᶠ", "₣"],
  G: ["Ğ", "Ġ", "Ģ", "Ḡ", "Ｇ", "ᴳ", "₲"],
  H: ["Ħ", "Ђ", "Ⱨ", "Ｈ", "ᴴ"],
  I: ["Ï", "Ī", "Į", "Ɨ", "ℑ", "Ｉ", "ᴵ"],
  J: ["Ĵ", "Ј", "Ｊ", "ᴶ"],
  K: ["Ķ", "Ḳ", "Ƙ", "Ｋ", "ᴷ", "₭"],
  L: ["Ł", "Ĺ", "Ľ", "Ļ", "Ḷ", "Ｌ", "ᴸ"],
  M: ["Ṁ", "Ṃ", "Ｍ", "ᴹ"],
  N: ["Ñ", "Ń", "Ň", "Ɲ", "Ｎ", "ᴺ"],
  O: ["Ō", "Ö", "Ø", "Ơ", "Ǿ", "Ｏ", "ᴼ"],
  P: ["Ṗ", "Ṕ", "Ｐ", "ᴾ", "₱"],
  Q: ["Ｑ", "ᵠ"],
  R: ["Ř", "Ŕ", "Я", "Ʀ", "Ɍ", "Ｒ", "ᴿ"],
  S: ["Š", "Ś", "Ş", "Ｓ", "ˢ", "₴"],
  T: ["Ť", "Ţ", "Ŧ", "Ｔ", "ᵀ"],
  U: ["Ū", "Ü", "Ų", "Ứ", "Ʉ", "Ｕ", "ᵁ"],
  V: ["Ṽ", "Ṿ", "Ｖ", "ⱽ"],
  W: ["Ẃ", "Ẅ", "Ẇ", "Ｗ", "ᵂ"],
  X: ["Ẋ", "Ẍ", "Ｘ", "ˣ"],
  Y: ["Ý", "Ÿ", "Ұ", "Ɏ", "Ү", "Ｙ", "ʸ"],
  Z: ["Ž", "Ź", "Ż", "Ｚ", "ᶻ", "Ȥ"],
};

// Combining diacritics and decorative marks for premium names
const combiningMarks = ['꙰', '᭄', '࿐', '°', '✿', '☬', '✞', 'ঔৣ', '⃝'];

// Superscript/subscript character maps
const superscriptMap: Record<string, string> = {
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ',
  'i': 'ᶦ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ',
  'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ',
  'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ',
  'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ'
};

const smallCapsMap: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ',
  'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
  'q': 'ǫ', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'y': 'ʏ', 'z': 'ᴢ'
};

const subscriptMap: Record<string, string> = {
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ',
  'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ'
};

// Premium prefix starters for names
const premiumPrefixes = [
  "Ꭵ°᭄",
  "𖣘ᴰᵃʳᴋ᭄",
  "༄ᶦᶰᵈ᭄",
  "꧁༺",
  "꧁ঔৣ☬✞",
  "꧁༒☬",
  "✿᭄",
  "°᭄"
];

// Premium suffix enders for names
const premiumSuffixes = [
  "࿐♥",
  "࿐",
  "🐲࿐",
  "༻꧂",
  "✞☬ঔৣ꧂",
  "☬༒꧂",
  "᭄✿",
  "ツ"
];

// Multi-layered decorations for premium gamer-style names
const complexDecorations = [
  // Classic ornate frames
  { prefix: "꧁༺", suffix: "༻꧂" },
  { prefix: "꧁༒☬", suffix: "☬༒꧂" },
  { prefix: "꧁༺༒༻", suffix: "༺༒༻꧂" },
  { prefix: "꧁𓊈𒆜", suffix: "𒆜𓊉꧂" },
  { prefix: "꧁☯༺", suffix: "༻☯꧂" },
  { prefix: "꧁ঔৣ☬✞", suffix: "✞☬ঔৣ꧂" },
  
  // Quote-style frames
  { prefix: "❝ ", suffix: " ❞" },
  { prefix: "❝★", suffix: "★❞" },
  { prefix: "❝☆", suffix: "☆❞" },
  
  // Emoji + frame combos
  { prefix: "꧁🕊️⃝", suffix: "🕊️⃝࿐" },
  { prefix: "🎃⟫", suffix: "⟪🎃" },
  { prefix: "🦋⟫", suffix: "⟪🦋" },
  { prefix: "⭐⟫", suffix: "⟪⭐" },
  { prefix: "🔥⟫", suffix: "⟪🔥" },
  
  // Heart decorations
  { prefix: "~♥~", suffix: "~♥~" },
  { prefix: "♡⋆", suffix: "⋆♡" },
  { prefix: "♡💫", suffix: "💫♡" },
  
  // Symbol sandwiches
  { prefix: "𓆩💜𓆪", suffix: "𓆩💜𓆪" },
  { prefix: "𓆩🖤𓆪", suffix: "𓆩🖤𓆪" },
  { prefix: "𓆩💎𓆪", suffix: "𓆩💎𓆪" },
  { prefix: "𓆩🔥𓆪", suffix: "𓆩🔥𓆪" },
  { prefix: "𓆩⚡𓆪", suffix: "𓆩⚡𓆪" },
  
  // Gaming style
  { prefix: "☬🎮", suffix: "🎮☬" },
  { prefix: "⚔️", suffix: "⚔️" },
  { prefix: "🎯⟫", suffix: "⟪🎯" },
  
  // Star patterns
  { prefix: "★彡(", suffix: ")彡★" },
  { prefix: "★彡", suffix: "彡★" },
  { prefix: "☆彡", suffix: "彡☆" },
  { prefix: "✦✧", suffix: "✧✦" },
  
  // Bracket styles
  { prefix: "『", suffix: "』" },
  { prefix: "《", suffix: "》" },
  { prefix: "⎝", suffix: "⎠" },
  { prefix: "【", suffix: "】" },
  { prefix: "⌜", suffix: "⌝" },
  { prefix: "⧼", suffix: "⧽" },
  
  // Royal
  { prefix: "♛👑", suffix: "👑♛" },
  { prefix: "♛", suffix: "♛" },
  { prefix: "♕", suffix: "♕" },
  { prefix: "👑", suffix: "👑" },
  
  // Nature
  { prefix: "✿", suffix: "✿" },
  { prefix: "🌸", suffix: "🌸" },
  { prefix: "🌹", suffix: "🌹" },
  
  // Fancy combos
  { prefix: "《.•°~[", suffix: "]~°•.》" },
  { prefix: "◦•○•◦", suffix: "◦•○•◦" },
  { prefix: "✧･ﾟ", suffix: "ﾟ･✧" },
  { prefix: "⪻⪼", suffix: "⪻⪼" },
];

// Gamer-style suffixes and tags
const gamerSuffixes = [
  "ツ", "_FFツ", "☬BD☬", "★彡", "༒", "™", "₮", "𒆜",
  "×͜×", "࿐", "⃝", "ᴳᵒᵈ", "_YT", "ッ", "☯", "⚡",
  "𝙁𝙁", "✘", "°", "꧂", "ᴾᴿᴼ", "ᴳᴬᴹᴱᴿ", "_!",
];

// Simple decorations (kept for compatibility)
const decorations = [
  { prefix: "❝ ", suffix: " ❞" },
  { prefix: "꧁༺", suffix: "༻꧂" },
  { prefix: "꧁༒", suffix: "༒꧂" },
  { prefix: "꧁༺༒༻", suffix: "༺༒༻꧂" },
  { prefix: "꧁☬", suffix: "☬꧂" },
  { prefix: "꧁☯", suffix: "☯꧂" },
  { prefix: "꧁𓊈𒆜", suffix: "𒆜𓊉꧂" },
  { prefix: "『", suffix: "』" },
  { prefix: "《", suffix: "》" },
  { prefix: "〘", suffix: "〙" },
  { prefix: "⎝", suffix: "⎠" },
  { prefix: "【", suffix: "】" },
  { prefix: "⌜", suffix: "⌝" },
  { prefix: "⟦", suffix: "⟧" },
  { prefix: "⦋", suffix: "⦌" },
  { prefix: "❲", suffix: "❳" },
  { prefix: "⫷", suffix: "⫸" },
  { prefix: "★彡", suffix: "彡★" },
  { prefix: "☆彡", suffix: "彡☆" },
  { prefix: "✦✧", suffix: "✧✦" },
  { prefix: "✩", suffix: "✪" },
  { prefix: "✯", suffix: "✰" },
  { prefix: "⚝★", suffix: "★⚝" },
  { prefix: "♡", suffix: "♡" },
  { prefix: "♥", suffix: "♥" },
  { prefix: "💖", suffix: "💖" },
  { prefix: "💘", suffix: "💘" },
  { prefix: "💝", suffix: "💝" },
  { prefix: "♡💫", suffix: "💫♡" },
  { prefix: "❤️‍🔥", suffix: "❤️‍🔥" },
  { prefix: "♛", suffix: "♛" },
  { prefix: "♕", suffix: "♕" },
  { prefix: "👑", suffix: "👑" },
  { prefix: "♛👑", suffix: "👑♛" },
  { prefix: "🎮", suffix: "🎮" },
  { prefix: "🎯", suffix: "🎯" },
  { prefix: "⚡", suffix: "⚡" },
  { prefix: "🔥", suffix: "🔥" },
  { prefix: "💎", suffix: "💎" },
  { prefix: "🕊️", suffix: "🕊️" },
  { prefix: "💀", suffix: "💀" },
  { prefix: "🎧", suffix: "🎧" },
  { prefix: "🎵", suffix: "🎵" },
  { prefix: "𓆩💜𓆪", suffix: "𓆩💜𓆪" },
  { prefix: "𓆩🖤𓆪", suffix: "𓆩🖤𓆪" },
  { prefix: "𓆩💎𓆪", suffix: "𓆩💎𓆪" },
  { prefix: "𓆩🔥𓆪", suffix: "𓆩🔥𓆪" },
  { prefix: "𓆩⚡𓆪", suffix: "𓆩⚡𓆪" },
  { prefix: "✿", suffix: "✿" },
  { prefix: "❀", suffix: "❀" },
  { prefix: "🌸", suffix: "🌸" },
  { prefix: "🌼", suffix: "🌼" },
  { prefix: "🌹", suffix: "🌹" },
  { prefix: "🌺", suffix: "🌺" },
  { prefix: "《.•°~[", suffix: "]~°•.》" },
  { prefix: "~♥~", suffix: "~♥~" },
  { prefix: "•°•", suffix: "•°•" },
  { prefix: "◦•○•◦", suffix: "◦•○•◦" },
  { prefix: "♡🥛🍪° •", suffix: "•°🍪🥛♡" },
  { prefix: "👑", suffix: "║▌💕✿" },
  { prefix: "✧･ﾟ", suffix: "ﾟ･✧" },
  { prefix: "║▌", suffix: "▌║" },
  { prefix: "▬", suffix: "▬" },
  { prefix: "━", suffix: "━" },
  { prefix: "✨", suffix: "✨" },
  { prefix: "💫", suffix: "💫" },
  { prefix: "🌟", suffix: "🌟" },
  { prefix: "⭐", suffix: "⭐" },
  { prefix: "☯༺", suffix: "༻☯" },
  { prefix: "⎝⎝✧", suffix: "✧⎠⎠" },
  { prefix: "❈", suffix: "❈" },
  { prefix: "❖", suffix: "❖" },
  { prefix: "✪", suffix: "✪" },
];


// Generate gamer-style mixed text with special Unicode characters
const generateGamerStyle = (input: string, seed: number): string => {
  let result = "";
  const styleKeys = Object.keys(styles);
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const useSpecialChar = Math.random() > 0.6; // 40% chance for special char
    
    if (useSpecialChar && specialChars[char]) {
      const specialOptions = specialChars[char];
      result += specialOptions[Math.floor(Math.random() * specialOptions.length)];
    } else {
      const randomStyle = styles[styleKeys[(seed + i) % styleKeys.length] as keyof typeof styles];
      result += randomStyle.map[char as keyof typeof randomStyle.map] || char;
    }
  }
  return result;
};

// Generate mixed Unicode styles (random mix of different fonts per character)
const generateMixedStyle = (input: string, seed: number): string => {
  const styleKeys = Object.keys(styles);
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const randomStyle = styles[styleKeys[(seed + i) % styleKeys.length] as keyof typeof styles];
    result += randomStyle.map[char as keyof typeof randomStyle.map] || char;
  }
  return result;
};

// Generate ultra-fancy style with alternating fonts and special characters
const generateUltraFancyStyle = (input: string, seed: number): string => {
  let result = "";
  const styleKeys = Object.keys(styles);
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const rand = (seed + i) % 10;
    
    if (rand < 3 && specialChars[char]) {
      // Use special Unicode character
      const specialOptions = specialChars[char];
      result += specialOptions[i % specialOptions.length];
    } else if (rand < 5) {
      // Use superscript style
      result += styles.superscript.map[char as keyof typeof styles.superscript.map] || char;
    } else {
      // Use random font style
      const randomStyle = styles[styleKeys[(seed + i) % styleKeys.length] as keyof typeof styles];
      result += randomStyle.map[char as keyof typeof randomStyle.map] || char;
    }
  }
  return result;
};

// 1️⃣ SOFT FANCY STYLE (Romantic / Smooth) - Example: Ꭵ°᭄ᶫᵒᵛᵉᵧₒᵤ࿐♥
const generateSoftFancyStyle = (input: string, seed: number): string => {
  const softPrefixes = ["Ꭵ°᭄", "°᭄", "✿᭄", "࿐"];
  const softSuffixes = ["࿐♥", "࿐", "♥", "༒ɢɪʀʟ♥", "✿"];
  
  let result = softPrefixes[seed % softPrefixes.length];
  
  // Mix superscript and small lowercase fancy fonts
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const rand = (seed + i) % 3;
    
    if (rand === 0 && superscriptMap[char]) {
      result += superscriptMap[char];
    } else if (rand === 1 && smallCapsMap[char]) {
      result += smallCapsMap[char];
    } else if (specialChars[char]) {
      const options = specialChars[char];
      result += options[i % options.length];
    } else {
      result += char;
    }
  }
  
  result += softSuffixes[seed % softSuffixes.length];
  return result;
};

// 2️⃣ DARK / DRAGON / GOTHIC STYLE - Example: 𖣘ᴰᵃʳᴋ᭄ꮯꮎᏼꭱꭺ🐲࿐
const generateDarkDragonStyle = (input: string, seed: number): string => {
  const darkPrefixes = ["𖣘ᴰᵃʳᴋ᭄", "☠️", "𖣘", "꧁☬"];
  const darkSuffixes = ["🐲࿐", "💀࿐", "🐉࿐", "☬꧂", "☠️"];
  const darkEmojis = ["🐲", "💀", "🐉", "☠️", "⚔️"];
  
  let result = darkPrefixes[seed % darkPrefixes.length];
  
  // Mix bold, fraktur (gothic), and special chars
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const rand = (seed + i) % 3;
    
    if (rand === 0) {
      result += styles.fraktur.map[char as keyof typeof styles.fraktur.map] || char;
    } else if (rand === 1) {
      result += styles.bold.map[char as keyof typeof styles.bold.map] || char;
    } else if (specialChars[char]) {
      const options = specialChars[char];
      result += options[i % options.length];
    } else {
      result += char;
    }
  }
  
  result += darkSuffixes[seed % darkSuffixes.length];
  return result;
};

// 3️⃣ ROYAL FRAME STYLE - Example: ꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂
const generateRoyalFrameStyle = (input: string, seed: number): string => {
  const royalFrames = [
    { prefix: "꧁༺", suffix: "༻꧂" },
    { prefix: "꧁༺", suffix: "༻꧂" },
    { prefix: "꧁【", suffix: "】꧂" },
    { prefix: "『", suffix: "』" },
  ];
  
  const frame = royalFrames[seed % royalFrames.length];
  const mark = combiningMarks[seed % combiningMarks.length];
  
  let result = frame.prefix;
  
  // Apply fancy fonts with combining marks
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const styleIndex = (seed + i) % 3;
    
    if (styleIndex === 0) {
      result += styles.doubleStruck.map[char as keyof typeof styles.doubleStruck.map] || char;
    } else if (styleIndex === 1) {
      result += styles.cursive.map[char as keyof typeof styles.cursive.map] || char;
    } else {
      result += styles.bold.map[char as keyof typeof styles.bold.map] || char;
    }
    
    // Add combining mark (70% chance)
    if (Math.random() > 0.3) {
      result += mark;
    }
  }
  
  result += frame.suffix;
  return result;
};

// 4️⃣ ROYAL + POWER MIX (Warrior / Don Style) - Example: ꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂
const generateWarriorDonStyle = (input: string, seed: number): string => {
  const powerFrames = [
    { prefix: "꧁ঔৣ☬✞", suffix: "✞☬ঔৣ꧂" },
    { prefix: "꧁☬✞", suffix: "✞☬꧂" },
    { prefix: "꧁ঔৣ☬★", suffix: "★☬ঔৣ꧂" },
    { prefix: "꧁༒☬", suffix: "☬༒꧂" },
  ];
  
  const frame = powerFrames[seed % powerFrames.length];
  
  let result = frame.prefix;
  
  // Mix cursive and sans-serif bold fonts
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    
    if (i % 2 === 0) {
      result += styles.cursive.map[char as keyof typeof styles.cursive.map] || char;
    } else {
      result += styles.sansSerifBold.map[char as keyof typeof styles.sansSerifBold.map] || char;
    }
  }
  
  result += frame.suffix;
  return result;
};

// 5️⃣ GAMER / CLAN STYLE - Example: ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐
const generateGamerClanStyle = (input: string, seed: number): string => {
  const gamerPrefixes = ["༄ᶦᶰᵈ᭄✿", "༄", "᭄✿", "✿᭄", "ᴳᵒᵈ✿"];
  const gamerSuffix = "࿐";
  
  let result = gamerPrefixes[seed % gamerPrefixes.length];
  
  // Mix small caps and bold
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    
    if (i < input.length / 2) {
      const lower = char.toLowerCase();
      result += smallCapsMap[lower] || char.toUpperCase();
    } else {
      result += styles.sansSerifBold.map[char as keyof typeof styles.sansSerifBold.map] || char;
    }
  }
  
  result += gamerSuffix;
  return result;
};

// 6️⃣ EMOJI + FONT MIX STYLE - Example: 🎃⟫Ŕąᵧ𝙝ąη⟪🎃
const generateEmojiMixStyle = (input: string, seed: number): string => {
  const emojiPairs = [
    { emoji: "🎃", prefix: "⟫", suffix: "⟪" },
    { emoji: "🔥", prefix: "『", suffix: "』" },
    { emoji: "💎", prefix: "⟪", suffix: "⟫" },
    { emoji: "⭐", prefix: "《", suffix: "》" },
    { emoji: "🌸", prefix: "【", suffix: "】" },
    { emoji: "💫", prefix: "⟪", suffix: "⟫" },
  ];
  
  const pair = emojiPairs[seed % emojiPairs.length];
  
  let result = `${pair.emoji}${pair.prefix}`;
  
  // Mix multiple fonts per character
  const fontStyles = [styles.bold, styles.cursive, styles.fraktur, styles.sansSerifBold];
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const randomFont = fontStyles[(seed + i) % fontStyles.length];
    
    if (specialChars[char] && Math.random() > 0.5) {
      const options = specialChars[char];
      result += options[i % options.length];
    } else {
      result += randomFont.map[char as keyof typeof randomFont.map] || char;
    }
  }
  
  result += `${pair.suffix}${pair.emoji}`;
  return result;
};

// 7️⃣ SOFT EMOJI ROMANTIC STYLE - Example: ❝ Ŕꫀຣₒใᥙŧꫀ及ᥙϯ𝗱ᵃ𝕡_! ❞ ~♥~
const generateRomanticStyle = (input: string, seed: number): string => {
  const romanticFrames = [
    { prefix: "❝ ", suffix: " ❞ ~♥~" },
    { prefix: "❝", suffix: "❞ ~♡~" },
    { prefix: "~♥~", suffix: "~♥~" },
    { prefix: "♡", suffix: "♡" },
  ];
  
  const frame = romanticFrames[seed % romanticFrames.length];
  
  let result = frame.prefix;
  
  // Heavy mix of special chars, superscript, and various fonts
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const rand = (seed + i) % 5;
    
    if (rand === 0 && specialChars[char]) {
      const options = specialChars[char];
      result += options[i % options.length];
    } else if (rand === 1 && superscriptMap[char.toLowerCase()]) {
      result += superscriptMap[char.toLowerCase()];
    } else if (rand === 2) {
      result += styles.cursive.map[char as keyof typeof styles.cursive.map] || char;
    } else if (rand === 3) {
      result += styles.sansSerifBold.map[char as keyof typeof styles.sansSerifBold.map] || char;
    } else {
      result += styles.bold.map[char as keyof typeof styles.bold.map] || char;
    }
  }
  
  result += frame.suffix;
  return result;
};

// 8️⃣ SIMPLE CLEAN FANCY STYLE - Example: 𝓡𝓪𝔂𝓱𝓪𝓷
const generateSimpleCleanStyle = (input: string, styleKey: keyof typeof styles): string => {
  const style = styles[styleKey];
  let result = "";
  for (const char of input) {
    result += style.map[char as keyof typeof style.map] || char;
  }
  return result;
};

// BONUS: EPIC MIX COMBINATIONS
const generateEpicMixStyle = (input: string, seed: number): string => {
  const epicCombos = [
    { prefix: "꧁༺🔥", middle: "🔥༻꧂", style1: styles.doubleStruck, style2: styles.sansSerifBold },
    { prefix: "༄ᶦᶰᵈ᭄✿", middle: "💀࿐", style1: styles.cursive, style2: styles.fraktur },
    { prefix: "❝🕊️", middle: "🕊️❞ ~♥~", style1: styles.cursive, style2: styles.sansSerifBold },
    { prefix: "𖣘", middle: "⚔️࿐", style1: styles.bold, style2: styles.fraktur },
  ];
  
  const combo = epicCombos[seed % epicCombos.length];
  
  let result = combo.prefix;
  
  const midPoint = Math.floor(input.length / 2);
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const style = i < midPoint ? combo.style1 : combo.style2;
    result += style.map[char as keyof typeof style.map] || char;
  }
  
  result += combo.middle;
  return result;
};

// Legacy functions (kept for compatibility)
const generatePremiumWithCombining = (input: string, seed: number): string => {
  const prefixIndex = seed % premiumPrefixes.length;
  const suffixIndex = seed % premiumSuffixes.length;
  
  let result = premiumPrefixes[prefixIndex];
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const rand = (seed + i) % 4;
    
    if (rand === 0 && superscriptMap[char]) {
      result += superscriptMap[char];
    } else if (rand === 1 && smallCapsMap[char]) {
      result += smallCapsMap[char];
    } else if (rand === 2 && subscriptMap[char]) {
      result += subscriptMap[char];
    } else if (specialChars[char]) {
      const options = specialChars[char];
      result += options[i % options.length];
    } else {
      result += char;
    }
  }
  
  result += premiumSuffixes[suffixIndex];
  return result;
};

const generateCombiningDiacritics = (input: string, seed: number): string => {
  const mark = combiningMarks[seed % combiningMarks.length];
  const decoration = complexDecorations[seed % complexDecorations.length];
  
  let result = decoration.prefix;
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const styleKeys = Object.keys(styles);
    const randomStyle = styles[styleKeys[(seed + i) % styleKeys.length] as keyof typeof styles];
    const styledChar = randomStyle.map[char as keyof typeof randomStyle.map] || char;
    
    result += styledChar;
    if (Math.random() > 0.4) {
      result += mark;
    }
  }
  
  result += decoration.suffix;
  return result;
};

const generateCrossSymbol = (input: string, seed: number): string => {
  const crossStyles = [
    { prefix: "꧁ঔৣ☬✞", suffix: "✞☬ঔৣ꧂" },
    { prefix: "✞☬", suffix: "☬✞" },
    { prefix: "☬✞", suffix: "✞☬" },
    { prefix: "†", suffix: "†" },
  ];
  
  const crossStyle = crossStyles[seed % crossStyles.length];
  const styleKeys = Object.keys(styles).filter(k => k !== 'smallCaps');
  const randomStyle = styles[styleKeys[seed % styleKeys.length] as keyof typeof styles];
  
  let result = crossStyle.prefix;
  for (const char of input) {
    result += randomStyle.map[char as keyof typeof randomStyle.map] || char;
  }
  result += crossStyle.suffix;
  
  return result;
};

const generateMixedScript = (input: string, seed: number): string => {
  let result = seed % 2 === 0 ? "༄" : "✿";
  
  const firstPart = input.slice(0, Math.ceil(input.length / 2));
  for (const char of firstPart) {
    const lower = char.toLowerCase();
    result += superscriptMap[lower] || char;
  }
  
  result += "᭄✿";
  
  const secondPart = input.slice(Math.ceil(input.length / 2));
  for (const char of secondPart) {
    const lower = char.toLowerCase();
    result += smallCapsMap[lower] || char.toUpperCase();
  }
  
  result += "࿐";
  return result;
};

// Generate spaced style (add spaces between characters)
const generateSpacedStyle = (input: string, styleKey: keyof typeof styles): string => {
  const style = styles[styleKey];
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    result += style.map[char as keyof typeof style.map] || char;
    if (i < input.length - 1) result += " ";
  }
  return result;
};

let generatedIds = new Set<string>();

export const generateFancyTextBatch = (input: string, batchSize: number = 20): StyledText[] => {
  if (!input.trim()) return [];

  const results: StyledText[] = [];
  const styleKeys = Object.keys(styles) as (keyof typeof styles)[];
  
  // 🌟 PREMIUM STYLES FIRST - Showcase Examples
  
  // 1️⃣ SOFT FANCY STYLE (Romantic / Smooth)
  for (let i = 0; i < 6; i++) {
    const id = `soft-fancy-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `💕 Soft Fancy ${i + 1}`,
        text: generateSoftFancyStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 2️⃣ DARK / DRAGON / GOTHIC STYLE
  for (let i = 0; i < 6; i++) {
    const id = `dark-dragon-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `🐲 Dark Dragon ${i + 1}`,
        text: generateDarkDragonStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 3️⃣ ROYAL FRAME STYLE
  for (let i = 0; i < 6; i++) {
    const id = `royal-frame-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `👑 Royal Frame ${i + 1}`,
        text: generateRoyalFrameStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 4️⃣ ROYAL + POWER MIX (Warrior / Don Style)
  for (let i = 0; i < 6; i++) {
    const id = `warrior-don-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `⚔️ Warrior Don ${i + 1}`,
        text: generateWarriorDonStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 5️⃣ GAMER / CLAN STYLE
  for (let i = 0; i < 6; i++) {
    const id = `gamer-clan-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `🎮 Gamer Clan ${i + 1}`,
        text: generateGamerClanStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 6️⃣ EMOJI + FONT MIX STYLE
  for (let i = 0; i < 6; i++) {
    const id = `emoji-mix-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `✨ Emoji Mix ${i + 1}`,
        text: generateEmojiMixStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 7️⃣ SOFT EMOJI ROMANTIC STYLE
  for (let i = 0; i < 6; i++) {
    const id = `romantic-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `💝 Romantic ${i + 1}`,
        text: generateRomanticStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 🌟 BONUS: EPIC MIX COMBINATIONS
  for (let i = 0; i < 8; i++) {
    const id = `epic-mix-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `🔥 Epic Mix ${i + 1}`,
        text: generateEpicMixStyle(input, i),
      });
      generatedIds.add(id);
    }
  }
  
  // 8️⃣ SIMPLE CLEAN FANCY STYLES
  const cleanStyles: (keyof typeof styles)[] = ['cursive', 'bold', 'script', 'doubleStruck', 'fraktur', 'sansSerifBold'];
  cleanStyles.forEach((styleKey) => {
    const style = styles[styleKey];
    const id = `clean-${styleKey}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `✍️ ${style.name}`,
        text: generateSimpleCleanStyle(input, styleKey),
      });
      generatedIds.add(id);
    }
  });

  // Complex decorated versions with multi-layered effects
  let complexIndex = 0;
  while (results.length < batchSize && complexIndex < complexDecorations.length * 3) {
    const decoIndex = complexIndex % complexDecorations.length;
    const styleVariant = Math.floor(complexIndex / complexDecorations.length);
    const decoration = complexDecorations[decoIndex];
    
    let styledText = "";
    
    if (styleVariant === 0) {
      // Gamer style with complex decoration
      styledText = generateGamerStyle(input, decoIndex);
    } else if (styleVariant === 1) {
      // Ultra fancy style with complex decoration
      styledText = generateUltraFancyStyle(input, decoIndex * 2);
    } else {
      // Mixed style with complex decoration
      styledText = generateMixedStyle(input, decoIndex);
    }
    
    // Add suffix randomly
    const addSuffix = Math.random() > 0.7;
    const suffix = addSuffix ? gamerSuffixes[complexIndex % gamerSuffixes.length] : "";
    
    const id = `complex-${complexIndex}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `Premium Style ${complexIndex + 1}`,
        text: `${decoration.prefix}${styledText}${suffix}${decoration.suffix}`,
      });
      generatedIds.add(id);
    }
    
    complexIndex++;
  }

  // Mixed styles with different seeds (legacy support)
  for (let i = 0; i < 5; i++) {
    const id = `mixed-${i}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `Mixed Style ${i + 1}`,
        text: generateMixedStyle(input, i),
      });
      generatedIds.add(id);
    }
  }

  // Spaced styles
  styleKeys.slice(0, 5).forEach((key, index) => {
    const style = styles[key];
    const id = `spaced-${key}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `${style.name} (Spaced)`,
        text: generateSpacedStyle(input, key),
      });
      generatedIds.add(id);
    }
  });

  // Decorated versions with simple decorations
  let decorationIndex = 0;
  while (results.length < batchSize * 2 && decorationIndex < decorations.length * styleKeys.length) {
    const styleIndex = decorationIndex % styleKeys.length;
    const decoIndex = Math.floor(decorationIndex / styleKeys.length);
    
    if (decoIndex >= decorations.length) break;
    
    const style = styles[styleKeys[styleIndex]];
    const decoration = decorations[decoIndex];
    
    let styledText = "";
    for (const char of input) {
      styledText += style.map[char as keyof typeof style.map] || char;
    }
    
    const id = `deco-${styleIndex}-${decoIndex}-${input}`;
    if (!generatedIds.has(id)) {
      results.push({
        id,
        name: `${style.name} (Decorated)`,
        text: `${decoration.prefix}${styledText}${decoration.suffix}`,
      });
      generatedIds.add(id);
    }
    
    decorationIndex++;
  }

  return results.slice(0, batchSize);
};

export const resetGeneratedIds = () => {
  generatedIds.clear();
};

export const generateFancyText = generateFancyTextBatch;

// Random nicknames by category
export const nicknameCategories = {
  gaming: [
    "Shadow", "Phantom", "Viper", "Ghost", "Titan", "Dragon", "Thunder", "Storm",
    "Ninja", "Warrior", "Legend", "King", "Queen", "Ace", "Pro", "Elite",
    "Nova", "Blaze", "Phoenix", "Hunter", "Sniper", "Bullet", "Savage", "Beast",
  ],
  cool: [
    "Ice", "Frost", "Chill", "Mystic", "Neon", "Cosmic", "Solar", "Lunar",
    "Star", "Galaxy", "Void", "Echo", "Pulse", "Wave", "Spark", "Flash",
    "Rogue", "Cipher", "Zero", "Vortex", "Nexus", "Quantum", "Cyber", "Digital",
  ],
  funny: [
    "Pickle", "Noodle", "Waffle", "Muffin", "Cookie", "Banana", "Potato", "Taco",
    "Nugget", "Burger", "Pizza", "Donut", "Cupcake", "Jellybean", "Marshmallow", "Bubble",
    "Giggles", "Chuckles", "Smiles", "Silly", "Wacky", "Goofy", "Quirky", "Funky",
  ],
  stylish: [
    "Velvet", "Silk", "Diamond", "Crystal", "Pearl", "Sapphire", "Ruby", "Emerald",
    "Gold", "Silver", "Platinum", "Luxe", "Chic", "Vogue", "Glam", "Posh",
    "Elegant", "Royal", "Noble", "Crown", "Regal", "Majestic", "Supreme", "Divine",
  ],
};

export type NicknameCategory = keyof typeof nicknameCategories;

export const getRandomNickname = (category: NicknameCategory): string => {
  const names = nicknameCategories[category];
  const name1 = names[Math.floor(Math.random() * names.length)];
  const name2 = names[Math.floor(Math.random() * names.length)];
  const number = Math.floor(Math.random() * 1000);
  
  const formats = [
    `${name1}${name2}`,
    `${name1}_${name2}`,
    `${name1}${number}`,
    `${name1}_${number}`,
    `xX${name1}Xx`,
    `${name1}Pro`,
  ];
  
  return formats[Math.floor(Math.random() * formats.length)];
};
