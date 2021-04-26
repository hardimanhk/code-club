# Fibonacci
* The Fibonacci sequence is constructed by adding the last two numbers of the sequence so far to get the next number in the sequence. The first and second numbers of the sequence are defined as 0 and 1. We get:
``` 0, 1, 1, 2, 3, 5, 8, 13, 21… ```
* Write a function that returns the nth number of the sequence. This should be pretty easy. Your solution here may well be suitable for one of the following mini-challenges.
* Write the same function, but you may not use a loop; and if you use variables, treat them as constants (within the scope of the function). You may not reassign them.
* Write the same function, but you may not use local variables at all.
* Write the same function, but the last statement must be a recursive function call. The result of the recursion is returned as-is; it is not transformed in any way, or added to anything. This is a concept called [tail recursion](https://www.geeksforgeeks.org/tail-recursion/), and can be used to optimize processing in languages and compilers that support it.
* Write the same function, but this time, you’re not allowed to use recursion.