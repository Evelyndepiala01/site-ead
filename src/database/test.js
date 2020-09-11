const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars1.githubusercontent.com/u/7232573?s=460&u=013d5618bfc848ec46443f4a4794f589adf9f1a2&v=4",
        whatsapp: "985418356",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

    }

    classValue = {
        subject: "Química",
        cost: "20",
    }

    classScheduleValues = [{
            weekday: 1,
            time_from: 700,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })

})