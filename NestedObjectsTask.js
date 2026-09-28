 NarutoSeries={
    Maincharacters:{
        Naruto:{
            ChakraLevel:9/10,
            mainJutsu:"Sharingan",
            characterType:"bad to good",
            specility:"Kurama",
            ExtraJutsu:{
                power1:"SageMode",
                power2:"Kurama Mode",
                power3:"Rasen-shureiken",
            } ,
            Mentors:{Mentor1:"Kakashi",Mentor2:"Jiraya",Mentor3:"Great-toad",Mentor4:"Orochimaru"}           
        },
        sasuke:{
            ChakraLevel:8/10,
            mainJutsu:"Shadow clone Jutsu",
            charactersType:"Goood",
            extraJutsus:{power1:"fireball",},
            nickName:"Last Uchiha",

        },
        kakashi:{
            role:"mentor to team 7",
            KnowJutsu:"1000 Jutsus",
            Specility:"Creator of chidori",
            nickName:"Copy ninja",
            MainJutsu:"chidori",

        },
    }
 }
//  Accessing from objectss
// console.log(NarutoSeries)
// console.log(NarutoSeries.Maincharacters.Naruto)
// console.log(NarutoSeries.Maincharacters.Naruto.ExtraJutsu)
// console.log(NarutoSeries["Maincharacters"]["sasuke"]["extraJutsus"])
// console.log(NarutoSeries["Maincharacters"]["kakashi"])


//  Updating the value in the objects
// console.log(NarutoSeries.Maincharacters.Naruto.MainJutsu="ShadowClone Jutsu")
// console.log(NarutoSeries.Maincharacters.Naruto["characterType"]="Completely Good")
// console.log(NarutoSeries["Maincharacters"]["sasuke"]["mainJutsu"]="Sharingan")
// console.log(NarutoSeries["Maincharacters"]["sasuke"]["Mangekyou"]="Yes")
// console.log(NarutoSeries["Maincharacters"]["Minato"]={Role:"Fourth Hokage",NickName:"Yellow Flash of Leaf",Specility:"Speed",MainJutsu:"Flying Raijin Jutsu"})

// Deleting the value inthe objects
// delete NarutoSeries["Maincharacters"]["sasuke"]
// console.log(NarutoSeries["Maincharacters"])
// delete NarutoSeries["Maincharacters"]["Naruto"]["Mentors"]["Mentor4"]
// console.log(NarutoSeries["Maincharacters"]["Naruto"]["Mentors"])
// delete NarutoSeries["Maincharacters"]["sasuke"]["extraJutsus"]
console.log(NarutoSeries)

