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