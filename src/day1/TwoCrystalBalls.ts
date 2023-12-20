export default function two_crystal_balls(breaks: boolean[]): number {
    // step 1, find a '1' 
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    for (; i < breaks.length; i+=jump){
        if(breaks[i]){
            break;
        }
    } 
    // step 2, walk backwards until '0' is found
    i -= jump;
    for (let j = 0; j < jump && i < breaks.length; ++j, ++i){
        if(breaks[i]){
            return i;
        }
    }
    return -1;
}
