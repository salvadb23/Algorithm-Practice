var replaceWords = function(dict, sentence) {
    let sentArr = sentence.split(' ');
    for(let i = 0; i < sentArr.length; i++){
        for(let j = 0; j < dict.length; j++){
            if (sentArr[i].slice(0, dict[j].length).includes(dict[j])){
                sentArr[i] = dict[j]
                break
            }
        }
    }
    return sentArr.join(' ')
};

var topKFrequent = function(nums, k) {
    let histogram = {};
    nums.forEach((num) => {
        histogram[num] = histogram[num] + 1 || 1
    })
    let sorted = Object.keys(histogram).sort((a,b) => histogram[b] - histogram[a])
    return sorted.slice(0,k)
};

var distributeCandies = function(candies, num_people) {
    let startArr = new Array(num_people).fill(0)
    let candy = 1;
    let index = 0;
    let numOfCandies = candies
    while (numOfCandies > 0) {
        if (index == num_people) {
            index = 0
        }
        if (candy <= numOfCandies) {
            startArr[index] += candy
            numOfCandies -= candy
        } else {
            startArr[index] += numOfCandies
            numOfCandies =0
        }
        candy += 1
        index++
    }
    return startArr
};