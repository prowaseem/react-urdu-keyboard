let keyboard = {};
for(let i=32; i<127; i++){
    let hex = Number(i).toString(16);
    hex = "00".substr(0, 6-hex.length) + hex;
    keyboard[i] = [String.fromCharCode(i), hex];
}
export default keyboard;