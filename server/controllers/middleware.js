module.exports = {
   checkUsername: (req, res, next) => {
      if(req.body.username.indludes('@') && req.body.username.indludes('.')){
         next();
      } else {
         res.status(403).send('Invalid email addres')
      }
   }
}