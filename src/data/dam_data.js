class Dummdata {
    navbar=[
        "головна",
        "про асоціацію",
        "членство",
        "календар",
        "новини",
        "партнери",
        "сертифікація",
        "освіта",
        "контакти",
    ]

    jumbo={
        title:"Професійні стандарти. Етика. Адвокація.",
        text:"Головною метою Асоціації є здійснення та захист прав і свобод, задоволення суспільних, соціальних, культурних та інших інтересів членів, зокрема об’єднання зусиль членів Організації задля сприяння розвитку травматерапії шляхом психологічного консультування та захисту суспільних інтересів.",
        buttons:[
            {id:"register",label:"Вступити до АПКТ",href:"/"},
            {id:"payment",label: "Оплата онлайн", href:"/"}
        ],
        events:[
            {name:"Halloween", date:"30.10.2020", text:"Placeholder Назва подіі", href:"/"   },
            {name:"event2", date:"30.11.2020", text:"Placeholder Назва подіі", href:"/"   },
            {name:"event3", date:"30.10.2020", text:"Placeholder Назва подіі", href:"/"   },
            {name:"event4", date:"30.10.2020", text:"Placeholder Назва подіі", href:"/"   },
            {name:"event4", date:"30.10.2020", text:"Placeholder Назва подіі", href:"/"   },
        ]

        
    }
}

const dumdata = new Dummdata()
export default dumdata