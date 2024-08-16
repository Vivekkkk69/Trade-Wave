function contact (req , res) {
    res.sendFile(__dirname+"/contact.html")
}
function about(req , res) {
    res.sendFile(__dirname+"/aboutus.html")
}

module.exports={contact , about}