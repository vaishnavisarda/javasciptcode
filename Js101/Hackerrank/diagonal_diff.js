
function diagonalDifference(arr) {
    let diag_1=0;
    let diag_2=0;
    let result =0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i==j){
                diag_1+=arr[i][j];
            }
            if(i+j==arr.length-1){
                diag_2+= arr[i][j];
            }
        }
    } 
    console.log(diag_1);
    console.log(diag_2);
    return result= diag_2-diag_1;

}

diagonalDifference(9,
    6, 6, 7, -10, 9, -3, 8, 9, -1,
    9 ,7, -10, 6, 4, 1, 6, 1, 1
    -1, -2, 4, -6, 1, -4, -6, 3, 9
    -8, 7, 6, -1, -6, -6, 6, -7, 2
    -10 ,-4, 9, 1, -7, 8 ,-5, 3, -5
    -8 ,-3 ,-4 ,2 ,-3, 7 ,-5, 1, -5
    -2 ,-7, -4, 8, 3, -1, 8, 2, 3
    -3 ,4 ,6 ,-7 ,-7 ,-8, -3 ,9 ,-6
    -2 ,0, 5, 4, 4, 4, -3, 3, 0);