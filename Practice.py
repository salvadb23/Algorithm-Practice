def findPairs(a,t):

    lookup = {}
    result = []

    for val in a:
        key = t-val
        if val not in lookup:
            lookup[key] = val

    for val in a:
        key = t-val

        valid = lookup.get(val, False)

        if valid:
            result.append([val, valid])

    return result

print(findPairs(a,t))


# problem three from above.

def find_closest(a,b,t):
    LOOKUP = {}

    if len(a) < len(b):
        shorter_array = a
        longer_array = b
    else:
        shorter_array = b
        longer_array = a

    end_of_range = 2
    start_of_range = end_of_range * -1

    for val in shorter_array:
        index_of_range = start_of_range
        while index_of_range < end_of_range:
            # widen the net in the hopes that
                # one of the keys is in the other array.
            key = t - val + index_of_range
            LOOKUP[key] = val
            index_of_range += 1

    minimum_abs_diff = float('inf')
    lowest = None
    for val in longer_array:
        if val in LOOKUP:
            lookup_sum = val + LOOKUP[val]
            diff = t - lookup_sum
            # need to compare the magnitude of a difference
                # that is both positive and negative so
                # multiply it by itself to remove the sign.
            temp_abs_diff, test_abs_diff = minimum_abs_diff, diff * diff
            minimum_abs_diff = min(test_abs_diff, minimum_abs_diff)
            if temp_abs_diff != minimum_abs_diff:
                lowest = [val, LOOKUP[val]]
    return lowest


a=[9, 13, 1, 8, 12, 4, 0, 5]
b=[3, 17, 4, 14, 6]
t=21

print(find_closest(a,b,t)) #[4, 17]
