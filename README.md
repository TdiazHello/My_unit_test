# My_unit_test


my_alpha_number_t.js avec la fonction my_alpha_number_t et les tests unitaires correspondants:


// my_alpha_number_t.js

const my_alpha_number_t = nbr => `${nbr}`;

module.exports = my_alpha_number_t;
Pour les tests unitaires avec Jest, créer un fichier my_alpha_number_t.test.js 
dans le même dossier que votre fichier my_alpha_number_t.js. :

// my_alpha_number_t.test.js

const my_alpha_number_t = require('./my_alpha_number_t');

describe('my_alpha_number_t', () => {
  it('should return "Hello"', () => {
    const result = my_alpha_number_t('Hello');
    expect(result).toBe('Hello');
  });

  it('should return "Bonjour"', () => {
    const result = my_alpha_number_t('bonjour');
    expect(result).toBe('Bonjour');
  });

  it('should return "Hello" when passed an empty string', () => {
    const result = my_alpha_number_t('');
    expect(result).toBe('Hello');
  });
})


Nous avons importé la fonction my_alpha_number_t dans le fichier de test et défini trois cas de test 
pour vérifier que la fonction 
