const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

app.post('/login', (req, res) => {
    console.log(req.body);
    const user = req.body.User;
    console.log(user);

    const length = user.length;
    const { vowels, consonants } = countVowelsAndConsonants(user);

    res.json({ Length: length, Vowels: vowels, Consonants: consonants });
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});