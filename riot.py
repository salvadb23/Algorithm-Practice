#!/bin/python3

import math
import os
import random
import re
import sys


# Complete the 'PrintGardenLayoutWithIdealSeats' function below.

def PrintGardenLayoutWithIdealSeats():
    # Write your code here
    dimension = input().split(",")
    x = int(dimension[0])
    y = int(dimension[1])
    matrix = [['B'] * x for _ in range(y)]
    for operation in sys.stdin:
        operation_values = operation.split(",")
        plot = operation_values[0]
        plotX = int(operation_values[1])
        plotY = int(operation_values[2])
        matrix[plotY][plotX] = plot
    
    stack = []
    max_flower = 0
    for y_index in range(y):
        for x_index in range(x):
            if not matrix[y_index][x_index] in "FW":
                flower = 0
                testX_left = x_index
                testY_up = y_index
                while testX_left >=0:
                    if matrix[y_index][testX_left] == "W":
                        break
                    elif matrix[y_index][testX_left] == 'F':
                        flower += 1
                    testX_left -= 1
                for testX_right in range(x_index, x):
                    if matrix[y_index][testX_right] == "W":
                        break
                    elif matrix[y_index][testX_right] == 'F':
                        flower += 1
                while testY_up >=0 :
                    if matrix[testY_up][x_index] == "W":
                        break
                    elif matrix[testY_up][x_index] == 'F':
                        flower += 1
                    testY_up -= 1

                for testY_down in range(y_index, y):
                    if matrix[testY_down][x_index] == "W":
                        break
                    elif matrix[testY_down][x_index] == 'F':
                        flower += 1
                if flower >= max_flower and flower != 0:
                    matrix[y_index][x_index] = "*"
                    if len(stack) > 0 and flower != max_flower:
                        for items in stack:
                            matrix[items[0]][items[1]] = "B"
                    max_flower = flower
                    stack.append([y_index,x_index])

    for y_index in range(y):
        for x_index in range(x):
            print(matrix[y_index][x_index], end="")
        print("\n", end="")
if __name__ == '__main__':