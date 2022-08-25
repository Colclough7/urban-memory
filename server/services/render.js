import axios from 'axios'

export const homeRoutes = (req, res) => {
    axios.get('https://intense-hamlet-86176.herokuapp.com/api/users')
    .then(function(response){
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })

}
export const addUser = (req, res) => {
    res.render('add_user')
}
export const updateUser = (req, res) => {
    axios.get('https://intense-hamlet-86176.herokuapp.com/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}