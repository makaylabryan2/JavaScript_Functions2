console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    if (count < 0)
    {
        count = count * -1;
    }
    for (let i = 1; i < count; i++)
    {
            if (i % 2 != 0)
        {
            console.log(i);
        }
        else
        {
            continue;
        }
    }
}

printOdds(-33);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;

    if (userName == null)
    {
        console.log("Please enter a valid user name")
    }
    
    if (age < 16)
    {
        console.log(belowSixteen);
    }
    else if (age == null)
    {
        console.log("Please enter your age as a number");
    }
    else
    {
        console.log(aboveSixteen);
    }    
}

checkAge("Rachel", 17 );

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y)
{
    if (x > 0 && y > 0)
    {
        console.log("Quadrant I");
    }
    else if (x < 0 && y > 0)
    {
        console.log("Quadrant II");
    }
    else if (x < 0 && y < 0)
    {
        console.log("Quadrant III");
    }
    else if (x > 0 && y < 0)
    {
        console.log("Quadrant IV")
    }
    else if (x == 0 && y > 0 || y < 0)
    {
        console.log("y-axis");
    }
    else if (y == 0 && x > 0 || x < 0)
    {
        console.log("x-axis");
    }
    else if (x == 0 && y == 0)
    {
        console.log("point of origin");
    }
}
whichQuadrant (0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function whichTriangle(sideA,sideB,sideC)
{
    let triangleType = "";

    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA)
    {
        triangleType = "invalid";
    }
    else if (sideA == sideB && sideB == sideC)
    {
        triangleType = "equilateral";
    }
    else if (sideA == sideB || sideA == sideC || sideB == sideC)
    {
        triangleType = "isosceles";
    }
    else 
    {
        triangleType = "scalene"; 
    }
    console.log(`${sideA}, ${sideB}, and ${sideC} form a(n) ${triangleType} triangle.`)
}

whichTriangle(3,4,5)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function dataPlanStatus(planLimit, day, usage)
{
    let daysRemaining = 30-day;
    let recommendedDailyUse = planLimit/30;
    let averageDailyUse = usage/day;

    let exceedPlanBy = averageDailyUse*30 - planLimit;

    let excessUsage = "";
    {
        
        if (averageDailyUse > recommendedDailyUse)
        {
            excessUsage = "EXCEEDING";
        }
        else if (averageDailyUse < recommendedDailyUse)
        {
            excessUsage = "NOT EXCEEDING";
        }
       
    }
    let advisedRemainingUse = (planLimit-usage)/daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${recommendedDailyUse} GB/day`);
    console.log(`You are ${excessUsage} your average daily use (${averageDailyUse} GB/day),`);
    console.log(`continuing this usage, you'll exceed your data plan by ${exceedPlanBy} GB`);
    console.log(`To stay below your data plan, use no more than ${advisedRemainingUse} GB/day`);

}
dataPlanStatus(100, 15, 25);

// Exercise More Practice Section
/*console.log("More Practice:\n==========\n");

// Assign a function to a variable
const add = function (a,b)
{
    return a+b;
}
add(4, 7);

// Pass a function as a parameter(argument)
function multiply (add, x)
{
    return add*x;
}
multiply(add, 5);
// Return a function from a function */
