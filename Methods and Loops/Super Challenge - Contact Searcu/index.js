
import { contactsArr } from './contactData.js'



/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
const contactDisplay = document.getElementById('contact-display')
const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')

patternSearchSubmit.addEventListener('click', function () {
    findContact(contactsArr, patternSearchInput.value)
})
function findContact(contactsArr, pattern) {
    contactDisplay.innerText = '';
    const regex = new RegExp(pattern, 'i');
    contactsArr.filter(function (contact) {
        return regex.test(contact.name)
    })
        .forEach(function (contact) {
            renderContact(contact)
        })
}

function renderContact(contactObj) {
    const { name, email, phone } = contactObj;
    const contactCard = document.createElement('aside');
    contactCard.classList.add('contact-card');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('p');
    const phoneElem = document.createElement('p');
    nameElem.innerText = name;
    emailElem.innerText = email;
    phoneElem.innerText = phone;
    contactCard.appendChild(nameElem);
    contactCard.appendChild(emailElem);
    contactCard.appendChild(phoneElem);
    contactDisplay.appendChild(contactCard);

    /*
        The CSS for contact-card has been done for you. 
        The name, email and phone details can be placed in
        'p' elements and placed inside contact-card. 
    */
}