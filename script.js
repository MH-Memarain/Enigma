var alphbet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];                        
alert(alphbet)
function TurnUp(){
    let item = alphbet.pop();    
    alphbet.unshift(item);
}
function TurnDown(){
    let item = alphbet.shift();
    alphbet.push(item);
}