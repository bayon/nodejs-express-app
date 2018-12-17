module.exports = {
    index(req , res, next ) {
       /* res.send("welcome to bloc-cit");*/
        res.render("static/index", {title: "Welcome to BloCC-iT" });	
       
    },
    about(req, res, next) { 
        res.render("static/about",{title:"All ABout Us"});
    }
    

}
