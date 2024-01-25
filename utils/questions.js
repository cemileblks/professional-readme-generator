// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid name for your project");
            }
            return true;

    }
}
]

module.exports = questions;