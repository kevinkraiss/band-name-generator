import chalkAnimation from 'chalk-animation'

import { generateSlug } from 'random-word-slugs'


const length = +process.argv[2]

const bandName = generateSlug(length, {format: 'title'})

chalkAnimation.pulse(bandName)