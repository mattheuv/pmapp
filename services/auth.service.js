import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model.js'
import { DB } from "../config/db.js"

const db = new DB  


db.connectDB()



passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser(function (id, done) {
    return done(null, id)
})

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email: email })
    if (!user) {
        return done(null, false)
    }
    if (!user.comparePassword(password)) {
        return done(null, false)
    }
    done(null, user)
}))

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email: email })
    if (user) {
        return done(null, false)
    } else {

        //email, password, name, address, telephone
        const newUser = new User()
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)
        newUser.address = req.body.address;
        newUser.telephone = req.body.telephone;
        await newUser.save()
        done(null, newUser)
        
    }
}))