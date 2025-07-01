# [0, 3, 4, 31] [4, 6, 30] = [0, 3, 4, 4, 6, 30, 31]

array_1 = [0, 3, 4, 31]
array_2 = [4, 6, 2, 30]

def mergeSortedArray(first_array, second_array):
    first_array_end = len(first_array) - 1
    second_array_end = len(second_array) - 1
    for i in range(0, (second_array_end + 1)):
        second_array_item = second_array[second_array_end]
        print(f'sencond array item {second_array_item}')
        for j in range(0, (first_array_end + 1)):
            print(f'first array end {first_array_end}')
            if second_array_item >= first_array[first_array_end]:
                first_array.insert(first_array_end + 1, second_array_item)
                # first_array_end =  - 1
                break
            first_array_end = first_array_end - 1
        second_array_end = second_array_end - 1
    return first_array






print(mergeSortedArray(array_1, array_2))