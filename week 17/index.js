function result() {
    const input = document.querySelector('.firstForm-input')
    if (input) {
        const str = input.value.toLowerCase().trim();
        let names = str.split(" ").filter(name => name !== "");
        console.log(names);

        for (let i in names) {
            names[i] = (names[i].replace(names[i][0], names[i][0].toUpperCase()));
            console.log(names[i])
            document.getElementById('secondName').value = names[0]
            document.getElementById('firstName').value = names[1]
            document.getElementById('fathersName').value = names[2]
        };

    }

};