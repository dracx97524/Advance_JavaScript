function getLabelsHtml(text, sender, ...employees) {

    const employee = employees.map((employee)=>{
        return  `<div class="label-card">
        <p>Dear ${employee.name} </p>
        <p>${text}</p>
        <p>Best wishes,</p>
        <p>${sender}</p>
    </div>`
    }).join('')

    return employee
    /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you 
       see **NAME**.
    3. Return HTML template for each label.
    */

    // `<div class="label-card">
    //     <p>Dear **NAME** </p>
    //     <p>${text}</p>
    //     <p>Best wishes,</p>
    //     <p>${sender}</p>
    // </div>`
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'


document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text,
    sender,
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Harriet' }
)

