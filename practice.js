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

var findShortestSubArray = function(nums) {
    let map = {};
    let degree = 0
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]][0] += 1
            if(map[nums[i]][2] < i){
                map[nums[i]][2] = i
            }
        } else {
            map[nums[i]] = [1, i, i]
        }
        if(map[nums[i]][0] > degree){
            degree = map[nums[i]][0]
        }
    }
    let k = Object.keys(map)
    let slice = nums.slice(0,nums.length)
    for(let i = 0; i < k.length; i++){
        if(map[k[i]][0] == degree){
            if(nums.slice(map[k[i]][1],map[k[i]][2]).length <                         slice.length){
                slice = nums.slice(map[k[i]][1],map[k[i]][2] + 1)
            }
        }
    }
    return slice.length
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

var middleNode = function(head) {
    var fast = head;
    var slow = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};

var isMonotonic = function(A) {
    let decrease = true;
    let increase = true;
    for(let i = 0; i < A.length; i++){
        if(A[i] < A[i + 1]) decrease = false;
        if(A[i] > A[i + 1]) increase = false;
    }
    return increase || decrease
};

function hourglassSum(arr) {
    const finalArr = []

    for (let outer = 0; outer < 4;outer++) {
        for (let inner = 0; inner < 4; inner++) {
            let top = arr[outer][inner] + arr[outer][inner + 1] + arr[outer][inner + 2]
            let mid = arr[outer + 1][inner + 1]
            let bot = arr[outer + 2][inner] + arr[outer + 2][inner + 1] + arr[outer + 2][inner + 2] 
        const sum = top + mid + bot
        finalArr.push(sum)
        }
    }
    return Math.max(...finalArr)
}

function arrayManipulation(n, queries) {
    let map = {}
    let largestVal = 0
    for(const query of queries){
        let a = query[0]
        let b = query[1]
        let k = query[2]
        
        for(let i = a; i <= b; i++){
            map[i] = map[i] + k || k
            if(map[i] > largestVal){
                largestVal = map[i]
            }
        }
    }
    console.log(map)
    return largestVal
}

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
