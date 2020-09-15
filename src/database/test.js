const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = {
        name: "Evelyn de Paula",
        avatar: "https://www.instagram.com/evyydepaula/",
        whatsapp: "985418356",
        bio: "Aprendendo desenvolvimento de Web",

    }

    classValue = {
        subject: "Futura Desenvolvedora",
        cost: "150",
    }

    classScheduleValues = [{
            weekday: 1,
            time_from: 700,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]


    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
`)
    console.log(selectClassesAndProffys)


    const selectClassesSchedules = await db.all(`
        SELECT  class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selectClassesSchedules)
})