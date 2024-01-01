function sortChr(str){
    str.split(' ').sort((a,b) => {
        let letterA = parseInt(a.match(/\d/));
        let letterB = parseInt(b.match(/\d/));
        return letterA-letterB
    })
    return str.join(' ')
}