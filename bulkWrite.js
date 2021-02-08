db.users.bulkWrite(
[
    { insertOne:
        {
                "document" :{ f_name: "Anydoe", l_name: "Doesson", holding: 3821}
        }
    },
    { insertOne:
        {
                "document" :{ f_name: "Mike", l_name: "Persson", holding: 418269}
        }
    },
    { deleteOne :
        {filter: {_id : 1000}}

    },
    { replaceOne :
        {
            filter : {f_name: "Jon", l_name: "Doe"},
            replacement : {f_name: "Quinton", l_name: "Gran", holding: 742211 }
        }

    }
]
);