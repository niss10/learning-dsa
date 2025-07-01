# reverse a given string
# i.g "Hi my name is Nisarg"

msg = "Hi my name is Nisarg"

def reverse_string(msg):
    msgList = list(msg) - O(n)
    print(msgList)
    end = len(msgList) - 1
    start = 0
    print(f'before loop {end}')
    print(f'before loop {start}')
    for i in range(0, end):
        print(f'in loop {end}')
        print(f'in loop {start}')
        if start >= end:
            print("We are done")
            break
        else:
            end_item = msgList[end]
            start_item = msgList[start]
            msgList[start] = end_item
            msgList[end] = start_item
            end = end - 1
            start = start + 1
    return "".join(msgList)
        

reverse_msg = reverse_string(msg)

original_msg = reverse_string(reverse_msg)
print(original_msg)