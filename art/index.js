
/*
@title: Palestine flag
@author: md faizal
@snapshot:palestine flag

*/

const t = new bt.Turtle()
const size = 100

t.forward(size)
t.right(90)
t.forward(60)
t.right(90)
t.forward(size)
t.right(90)
t.forward(60)
t.left(180)
t.forward(20)
t.left(90)
t.forward(100)
t.right(90)
t.forward(20)
t.right(90)
t.forward(size)

t.left(90)
t.forward(20)
t.left(90)
t.left(45)
t.forward(40)
t.left(90)
t.forward(40)

// draw it
drawLines(t.lines());