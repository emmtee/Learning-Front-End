let control = "not quit";
const itinerary = []
let i = 0;
while (control.toLowerCase() !== "quit" && control.toLowerCase() !== 'q') {

    control = prompt("What would you like to do?")
    if (control.toLowerCase() === "new") {

        itinerary[i] = prompt("What would you like to add to the list")
        console.log(`${itinerary[i]} added to TO-DO list`)
        i++;
    }
    else if (control.toLowerCase() === "list") {
        console.log("**********")
        for (let j = 0; j < itinerary.length; j++) {
            console.log(`${j + 1}: ${itinerary[j]}`)
        }
        console.log("**********")
    }
    else if (control.toLowerCase() === "delete") {
        const index = parseInt(prompt("Ok, enter an index you want to delete?"))
        if (!Number.isNaN(index)) {
            const deleted = itinerary.splice(index-1, 1)
            console.log(`Ok, deleted ${deleted[0]}`)
        }
        else {
            console.log("Unknown index")
        }
    }
}
console.log("App Quitted")