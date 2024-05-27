
// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
// "FizzBuzz"
function fizzBuzz(n:number):string[]{
    let numbers: string[] =[]
    for(let i=1; i<=n;i++)
        {
            if(i%3===0)
                {
                numbers.push("Fizz")
                    
                }
            else if(i%5===0)
                {
                    numbers.push("Buzz")
                }

            else if(i%3&&i%5===0)
            {
                numbers.push("FizzBuzz")

                
            }
            else
            {
                numbers.push(i.toString())
            }
            
        }
        return numbers
        }
        let n = 100

        let numbers= fizzBuzz(n)
        console.log(numbers.join())




