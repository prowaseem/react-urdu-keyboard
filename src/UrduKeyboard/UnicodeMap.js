let unicode = {};
for(let i=1536; i<1792; i++){
    let hex = Number(i).toString(16);
    hex = "0".substr(0, 6-hex.length) + hex;
    unicode[i] = [String.fromCharCode(i), hex];
}
export default unicode;