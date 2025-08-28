const prompt = require("prompt-sync")();

function printInfo() {
    console.log("Contact Management System");
    console.log("--------------------------");
    console.log("1. Add a contact");
    console.log("2. Delete a contact");
    console.log("3. View contacts");
    console.log("4. Search contacts");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Name: ");
    const email = prompt("Email: ");
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact);
}

function deleteContact() {
    const name = prompt("Name: ");
    for (let i = 0;i < contacts.length;i++) {
        if (name.toLowerCase() == contacts[i].name) {
            contacts.pop(contacts[i]);
            console.log("Contact deleted successfully");
        }
    }

}

function listContacts(contacts) {
    console.log(contacts);
}

function searchContact() {
    let name = prompt("Name: ");
    for (let i = 0;i < contacts.length;i++) {
        if (name.toLowerCase() == contacts[i].name) {
            console.log("Contact found:", contacts[i]);
        }
    }

}


printInfo();

const contacts = []


let running = true;
while(running){
    const number = prompt("Enter an operation (1 - 5): ");
    switch(number) {
        case "1":
            addContact();
            break;
        
        case "2":
            deleteContact();
            break;

        case "3":
            listContacts(contacts);
            break;
        
        case "4":
            searchContact();
            break;

        case "5":
            running = false;
            break;

        default:
            console.log("Unknown Operation");
            break;
    }
}

