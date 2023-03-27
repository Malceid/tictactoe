/*

-----------------------Code cliffnotes or something like that------------------------

I can definitely write the code more better and neatly lol

What my matrix looks like for tic tac toe
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Converted X and Y coordinates of the matrix, left integer for Y and right integer for left
[00, 01, 02]
[10, 11, 12]
[20, 21, 22]




calculate for x axis of the matrix
Glad I could come up with a formula with my own thinking only
(1 + 5) % 3 = 6 % 3 ==  0
(2 + 5) % 3 = 7 % 3 ==  1
(3 + 5) % 3 = 8 % 3 ==  2
(4 + 5) % 3 = 9 % 3 ==  0
(5 + 5) % 3 = 10 % 3 ==  1 
(6 + 5) % 3 = 11 % 3 ==  2
(7 + 5) % 3 = 12 % 3 ==  0
(8 + 5) % 3 = 13 % 3 ==  1
(9 + 5) % 3 = 14 % 3 ==  2

formula: (n + 5) % 3


calculate for y axis
This one is slightly weird because for every prime number
the number subtracted will be the same one from the previous number
(1 - 1) = 0
(2 - 2) = 0
(3 - 3) = 0
(4 - 3!) = 1
(5 - 4) = 1
(6 - 5) = 1
(7 - 5!) = 2
(8 - 6) = 2
(9 - 7) = 2

Wow thank goodness I know about prime numbers; too bad I can't find a simple formula using it
3, 5, 7 :o


I spend 20 minutes looking for a valid formula   



Do I really have to use switch case for this? Hopefully not lol
First draft of formula
input = 5: result = 1,1
1 = [1-1][1-1] = [0][0] : if (num <= 3) { [n-n][n-1]} = [0][n-1]
2 = [2-2][2-1] = [0][1]
3 = [3-3][3-1] = [0][2]
4 = [4-3][4-4] = [1][0] : if (num <=6) { [n-n+1][n-4]} = [4-4+1 = 1][4-4] = [1][n-4] 
5 = [5-4][5-4] = [1][1] 
6 = [6-5][6-4] = [1][2] 
7 = [7-6][7-7] = [2][0] : if (num <= 9) { [n-n+3][n-7]} = [7-7+3][7-7] = [2][n-7]
8 = [8-7][8-7] = [2][1]
9 = [9-7][9-7] = [2][2]





check: I am too lazy to explain please look at the y axis formula table for reference
if n <= 3 or n <= 6
    do stuff


Code but with checks so I can tell what's wrong with my logic
Need to test to see how code logic works to prevent the bot from editing the same matrix
while(turns != 7) {
    if (arr[ranY][ranX] != "X") {
        console.log("---------------------------------!!!------------------------------")
        console.log("Vector Y: " + ranY)
        console.log("Vector X: " + ranX)    
        console.log("---------------------------------!!!------------------------------")
        arr[ranY][ranX] = "X"
        getRanVector(ranX, ranY)
        arr.forEach(result=>console.log(...result))
        turns++
        console.log("Turns: " + turns)
    } else if(arr[ranY][ranX] == "X") {
        getRanVector(ranX, ranY)
        console.log("---------------------------------???------------------------------")
        console.log("Turns: " + turns)
        console.log("---------------------------------???------------------------------")
    }

}

//To be used (real)
console.log("---------------------------------???------------------------------")

//Print out array
arr.forEach(result=>console.log(...result))


//Code without having all these checks to see if the bot will avoid edited matrixes
while(turns != 8) {
    if (arr[ranY][ranX] != "X") {
        arr[ranY][ranX] = "X"
        getRanVector(ranX, ranY)
        turns++
    } else if(arr[ranY][ranX] == "X") {
        getRanVector(ranX, ranY)
    }

}







*/

//Man I hate cleaning up the code















