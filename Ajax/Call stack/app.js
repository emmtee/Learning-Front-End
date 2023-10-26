function multiply (x, y)
{
    return x * y
}
function square (x)
{
   return multiply(x , x)
}
function isRightAngle(x, y, z)
{
   return square(x) + square(y) === square(z)
}
console.log(isRightAngle(3,4,5))