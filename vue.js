

function emojify(name) {
    let out = '<img src="emojis/' + name + '.png">'
    return out
}

let appMain = new Vue ({
    el: "#app",
    data: {
        counter: 1,
        message: emojify('hermione')
    },
    methods: {
        addCount: function()  {
            this.counter *= 2
        }
    }
})

// let header = new Vue ({
//     el: "#headerArea",
//     data: {
//         homeImage: emojify('home')
//     }
// })