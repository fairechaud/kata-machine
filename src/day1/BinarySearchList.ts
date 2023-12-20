export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length - 1;
    let lo = 0;

    do{
        let mid = Math.floor((lo + hi)/2);
        if(haystack[mid] === needle){
            return true;
        }else if(haystack[mid] < needle){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }while(lo <= hi)
    return false;
}
