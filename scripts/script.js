/**
 * Dictionary
 */
const users = {
    '12345678910': {
        name: 'Pepito Perez',
        password: 1234,
        amount: Math.floor(Math.random() * 100000000) + 1     
    }, 
    '12345678911': {
        name: 'Rosa Martinez',
        password: 5678,
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678912': {
        name: 'Bebé Vader',
        password: 9101,
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678913': {
        name: 'Esteban Rogriguez',
        password: 1112,
        amount: Math.floor(Math.random() * 100000000) + 1     
    },
    '12345678914': {
        name: 'Murphy Pendlethon',
        password: 1314,
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