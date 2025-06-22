# ask for how many days
# ask for each day temp
# store this temp in list
# perfor calculation
# 1. do average
# 2. find above average days

days = int(input("Enter a how many days of temp : "))

days_temps = []
for i in range(1, days + 1):
    temp = int(input(f"Enter a temp of day {i} : "))
    days_temps.append(temp)

avg_temp = sum(days_temps) / len(days_temps)
print(f"average temp of days is {avg_temp}")
no_of_days_with_high_temp = len([i for i in days_temps if i > avg_temp])
print(f"highest temp of days is {no_of_days_with_high_temp}")