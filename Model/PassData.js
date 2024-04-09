import ListView_Data from '../ViewModel/Data';

const data = new ListView_Data();

export function getData(index) {
    const person = data[index];
    console.log('Person:', person); 
    return {
        firstName: person.firstname,
        lastName: person.lastname,
        birthDate: person.birthdate,
        motto:person.motto,
        age: person.age,
        address: person.address,
        picture: person.picture,
    };
}