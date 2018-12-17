module.exports = {
    index(req , res, next ) {
       /* res.send("welcome to bloc-cit");*/
        res.render("static/index", {title: "Welcome to BloCC-iT" });	
       
    }
}
