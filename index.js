import chalkAnimation from 'chalk-animation'
import { generateSlug } from 'random-word-slugs'
import inquirer from 'inquirer'

inquirer
    .prompt([
        {
            type: 'number',
            name: 'length', 
            message: 'how long should the band name be?',
            default: 3
        }, 
        {
            type: 'list',
            name: 'animationName',
            message: 'which animation would you like to use?',
            default: 'rainbow',
            choices: ['glitch', 'pulse', 'rainbow', 'neon', 'karaoke', 'radar']
        }
    ])
    .then((answers) => {
        console.log(answers)

        const bandName = generateSlug(answers.length, {format: 'title'})

        chalkAnimation.pulse(bandName)

        if (answers.animationName === 'pulse') {
            chalkAnimation.pulse(bandName)
        } else if (answers.animationName === 'glitch') {
            chalkAnimation.glitch(bandName)
        } else if (answers.animationName === 'rainbow') {
            chalkAnimation.rainbow(bandName)
        } else if (answers.animationName === 'neon') {
            chalkAnimation.neon(bandName)
        } else if (answers.animationName === 'karaoke') {
            chalkAnimation.karaoke(bandName)
        } else if (answers.animationName === 'radar') {
            chalkAnimation.radar(bandName)
        }
    })
        .catch((error) => console.log(error))





