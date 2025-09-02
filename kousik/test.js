function validateAge(ageInput) {
    try {
        let age = Number(ageInput);
        if (isNaN(age)) {
            throw 'Age must be a number';
        }
        if (age < 0) {
            throw 'Age must be a positive number';
        }
        console.log('Age is valid');
    } catch (error) {
        console.error(error);
    }

}
validateAge('25');  
validateAge('-5');  
validateAge('abc');