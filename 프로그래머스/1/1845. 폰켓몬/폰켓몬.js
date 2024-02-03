function solution(nums) {
    let myPokemon = [...new Set(nums)];
    // console.log(myPokemon);
    let limit = nums.length / 2;
    // console.log(limit);
    
    return myPokemon.length > limit ? limit : myPokemon.length;
}