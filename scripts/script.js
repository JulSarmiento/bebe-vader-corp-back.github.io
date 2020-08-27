/**
 * Dictionary
 */
const users = {
    '12345678910': {
        name: 'Pepito Perez',
        amount: Math.floor(Math.random() * 100000000) + 1     
    }, 
    '12345678911': {
        name: 'Rosa Martinez',
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678912': {
        name: 'Bebé Vader',
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678913': {
        name: 'Esteban Rogriguez',
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678914': {
        name: 'Murphy Pendlethon',
        amount: Math.floor(Math.random() * 100000000) + 1     
    }
};

/**
 * Loggin
 */
const accountNumber = document.getElementById('account');

function submitAccount(event) {
    const e = event || window.event
    e.preventDefault()
       
    const user = users[accountNumber.value];

    console.log('Número de cuenta', accountNumber.value);

    console.log('accountNumber', user);
    console.log('User name: ', user.name);
  
}

// document.getElementById('login').addEventListener('submit', submitAcount)