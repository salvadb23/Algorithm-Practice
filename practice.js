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

var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0){
        return 0
    }
    if(duration > timeSeries[timeSeries.length - 1]){
        return duration + (timeSeries[timeSeries.length -1] - timeSeries[0])
    }
    let counter = 0;
    for (let index = 1; index < timeSeries.length; index++) {
        if (timeSeries[index] - timeSeries[index - 1] >= duration) {
            // there was no overlap
            counter += duration
        } else {
            counter += timeSeries[index] - timeSeries[index - 1]
        }
    }
    counter += duration
    return counter
};

var numComponents = function(head, G) {
    let count = 0
    let node = head;
    let prev = null;
    while(node){
        if(G.includes(node.val)){
            if(prev == null || !G.includes(prev)){
                count++
            }
        }
        prev = node.val;
        node = node.next;  
    }
    return count
};