# dashoboard component

## layout
- the entire aplication inside a body, is in a *#root* div
- inside this div we have an *header* and one *main* tag
- *header* houses an div **.balance** with an *p* tag and one title *h1*
- header have an image logo too
- header have an display flex to align -items verticaly, and separate him from each other
- the *main* tag have an subtitle *h2* and houses other components inside an *article* tag
- this article tag have an display flex and align-items:flex-end to align the component *track* on the bottom, also, have an gap of 0.2em too
- *track* is an div *.track* housing many elements like: (two *spans* and one div beneath him)
- the first span show a value for the ammount of day
- this first spans is hidden by **display:flex** and only appears if the bar is in focus and hide again when he blur
- second span shows the initials of days of week
- the div don't have any content, only an style for width and height to make this like an column-bar
### code operation
- track component have *useState* and *useEffect* hooks to controls layout
- inside this component we have:
- * one const with style who sets the height of each bar
- * one const with the color cyan
- * an state housing the atual day using the object data()
- * two functions calles respectively **hide()** **show()** responsible to hide or show the span with a ammount of this day

- an useEffect give each bar this two functions
- an useEffect get the id of each bar and compare with a state with atual day, if an bar have an id equal a state, this bar get a color cyan