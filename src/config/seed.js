import Person from '../api/person/person.model';

export default function() {
  return Person.find({}).remove()
    .then( () => Person.create(
      {
        first_name: 'Ben',
        last_name: 'Diuguid',
        email: 'bendiuguid@gmail.com',
        id: '1',
        friends: [
          '/api/persons/2',
          '/api/persons/3',
          '/api/persons/4',
        ],
      },
      {
        first_name: 'Chris',
        last_name: 'Cordle',
        email: 'chris_cordle@ultimatesoftware.com',
        id: '2',
        friends: [
          '/api/persons/1',
          '/api/persons/4',
        ],
      },
      {
        first_name: 'Joseph',
        last_name: 'Cutrono',
        email: 'joseph_cutrono@ultimatesoftware.com',
        id: '3',
        friends: [
          '/api/persons/1',
          '/api/persons/2',
        ],
      },
      {
        first_name: 'Cason',
        last_name: 'Clagg',
        email: 'cason_clagg@ultimatesoftware.com',
        id: '4',
        friends: [
          '/api/persons/1',
          '/api/persons/2',
        ],
      })
    ).then( () => {
      console.info('Seed complete!'); // eslint-disable-line
    });

}
