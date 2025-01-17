import React from 'react';

export default function ListView_Data () {
    const people = [
            {
                id:'1',
                firstname:'Donna',
                lastname:'Coloscos',
                birthdate:'March 01, 2003',
                age:21,
                address:'Capitol Site, Cebu City',
                motto:'Importante Buhi',
                picture: require('./images/donns.jpg'),
            },
            {
                id:'2',
                firstname:'April Rose',
                lastname:'Jimenez',
                birthdate:'April 04, 2003',
                age:21,
                address:'MHOA, Poso Center Mactan, Lapu - Lapu City, Cebu',
                motto:'aji no motto',
                picture: require('./images/aprilrose.jpg'),
            },
            {
                id:'3',
                firstname:'Nichole',
                lastname:'Soroño',
                birthdate:'September 10, 2003',
                age:21,
                address:'Basak, Lapu-lapu, City',
                motto:"You are what you do, not what you think you'll do",
                picture: require('./images/nicholeupsidedown.jpg'),
            },
            {
                id:'4',
                firstname:'Johnel',
                lastname:'Bucog',
                birthdate:'November 30,2002',
                age:21,
                address:'Talisay, City',
                motto:"Kaya mo yan, kaya motto!",
                picture: require('./images/johnel.jpg'),
            },
            {
                id:'5',
                firstname:'Aldrin',
                lastname:'Aban',
                birthdate:'July 19,2001',
                age:22,
                address:'Banilad, Mandaue City ',
                motto:"When you feel down in life, then go upstairs",
                picture: require('./images/aldrin.jpg'),
            },
            {
                id:'6',
                firstname:'Harold Paul',
                lastname:'Armentano',
                birthdate:'July 19,2002',
                age:21,
                address:'Hermag Village Sector 1 Pagsabungan, Mandaue City, Cebu ',
                motto:"Will your lips taste the kiss of death?",
                picture: require('./images/harold.jpg'),
            },
            {
                id:'7',
                firstname:'Mac Niño',
                lastname:'Ibale',
                birthdate:'January 20,2002',
                age:22,
                address:' San Roque, Cebu City  ',
                motto:"If it works, don't touch it",
                picture: require('./images/mac.jpg'),
            },
            {
                id:'8',
                firstname:'Anthony Angel',
                lastname:'Rezaba',
                birthdate:'December 19, 2002',
                age:21,
                address:' Inayawan, Cebu City  ',
                motto:"We are the kids that your parents warned you about.",
                picture: require('./images/antonee.jpg'),
            },
            {
                id:'9',
                firstname:'Ben Joseph',
                lastname:'Vitualla',
                birthdate:'March 20, 2004',
                age:20,
                address:' Inayawan, Cebu City  ',
                motto:"Win or Learn",
                picture: require('./images/benjo.jpg'),
            },
            {
                id:'10',
                firstname:'Christian Dave',
                lastname:'Fernandez',
                birthdate:'Everyday Birthday',
                age:22,
                address:'San Fernando, Cebu',
                motto:"wdjajdghaihsdi",
                picture: require('./images/chan2.jpg'),
            },
        ];

    return people;
}
