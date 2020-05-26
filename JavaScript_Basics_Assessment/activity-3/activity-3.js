const initialize = function() {
    const names = ["Leonard Hoffstadter", "Sheldon Cooper", "Rajesh Kuthripali"];

    for (let i=0; i<3; i++) {
        names.push(prompt("Enter a name"));
    }

    for (let i=0; i<names.length; i++) {
        console.log(`Element ${i}: ${names[i]}`);
    }
};

initialize();