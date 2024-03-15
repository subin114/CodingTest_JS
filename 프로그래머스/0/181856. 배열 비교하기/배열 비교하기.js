function solution(arr1, arr2) {

    let sum = 0
    let sumArr1 = arr1.reduce((sum, n) => sum += n)
    let sumArr2 = arr2.reduce((sum, n) => sum += n)
    
    if (arr1.length > arr2.length) return 1
    else if (arr1.length < arr2.length) return -1
    else {
        if (sumArr1 > sumArr2) return 1
        else if (sumArr1 < sumArr2) return -1
        else return 0
    }
}