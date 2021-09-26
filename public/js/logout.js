const { application } = require("express");

const logout = async function (event) {
    event.preventDefault();
    app.delete('/logout', function (req,res) {
        req.session.currentUser = null;
        res.redirect('/');
    });
};
document.querySelector("#logout").addEventListener("submit", logout);
