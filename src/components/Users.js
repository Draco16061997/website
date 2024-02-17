import React from "react";


class Users extends React.Component {


    users = [
        {
            id: 1,
            firstname: "Yurii",
            lastname: "Kisil",
            bio: "Teacher in the ITStep Academy",
            age: 25,
            isHappy: true
        },
        {
            id: 3,
            firstname: "Alukard",
            lastname: "Hslsing",
            bio: "Hunter",
            age: 1239,
            isHappy: false
        },
        {
            id: 4,
            firstname: "Vasya",
            lastname: "Hslsing",
            bio: "No Hunter",
            age: 124,
            isHappy: true
        },
        {
            id: 5,
            firstname: "Din",
            lastname: "Vinchester",
            bio: "Hunter",
            age: 30,
            isHappy: false
        },
        {
            id: 6,
            firstname: "Jony",
            lastname: "Bravo",
            bio: " ----",
            age: 30,
            isHappy: true
        }, 
        {
            id: 7,
            firstname: "Din",
            lastname: "Vinchester",
            bio: "Hunter",
            age: 30,
            isHappy: false
        }
       
    ]

   





    render() {
        if (this.users.length > 0) {
            return (<div >
                {this.users.map((el) => (<div className={el.isHappy ? "postA" : "postB"} >
                    <h3>{el.firstname} {el.lastname}</h3>
                    <p>{el.bio}</p>
                    <p><b>{el.isHappy ? 'Счастлив' : 'не особо'}</b></p>
                    
                    

                </div>))}
            </div>)
        }else{
            return(
                <div className="post">
                    <h3>Пользователей не найдено</h3>
                </div>
            )
        }

    }



}


export default Users