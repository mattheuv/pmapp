import express from "express"
import passport from "passport";
import { transporter, mailOptions, mailOptionsLogOut } from "../config/nodemailer.js";


const router = express.Router()


class UserRouter {

    start() {


router.get('/signup', (req, res, next) => {
  res.render('signup', {
      title: 'Sign Up',
  })
})


router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  passReqToCallback: true
}))


router.get('/login', (req, res, next) => {
  res.render('signin', {
      title: 'Sign In',
  })
})

router.post('/login', 
  passport.authenticate('local-signin', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/usertest');
  });

  router.get('/usertest', isAuthenticated, (req, res) => {
    res.send("is active")
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
          console.log(err)
          return err
      }
      console.log(info)
  })
  })

  router.get('/logout', isAuthenticated, (req, res, next) => {
    req.logOut()
    res.redirect('/')

    transporter.sendMail(mailOptionsLogOut, (err, info) => {
        if (err) {
            console.log(err)
            return err
        }
        console.log(info)
    })
})
       
        return router
    }
}

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next()
  }
  res.redirect('/login')
}


export default UserRouter

  