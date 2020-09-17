const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    
});

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kittehn', kittySchema)

const silence = new Kitten({ name: 'Silence' })
console.log(silence.name);

kittySchema.methods.speak = function () {
    const greeting = this.name
    ? "meow name is " + this.name
    : "i dont haev a name";
    console.log(greeting);
}

const kitten = mongoose.model('Kitten', kittySchema)

const fluffy = new kitten({ name: 'fluffy '})
fluffy.speak();

fluffy.save(function(err,fluffy) {
if (err) return console.error(err);
fluffy.speak();
})

kitten.find(function (err, kittens) {
if (err) return console.error(err)
console.log(kittens);
})

kitten.find({name: /^fluff/}, callback);


