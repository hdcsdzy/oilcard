var orm = require("orm");
orm.connect("mysql://hdcsd:8dle2Hd7@182.92.198.113/chexiaoxiao", function (err, db) {
    if (err) throw err;
    var dingdan = db.define("oilcard", {
        userPhone : Number,
        orderid   : Number,
        game_userid: Number,
        userid: Number,
        deviceid: Number,
        chargeType: Number,
        order_failed_reason: String,
        consumeMileages: Number,
        counts: Number,
        status: Number,
        createtime: String,
        couponid: Number
    });


    dingdan.find({ }, function (err, dingdan) {
        // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
        for (var value in dingdan[0]) {
            console.log(dingdan[0][value]);
        }
        // console.log("First person: %s, age %d", people[0].fullName(), people[0].age);
        // people[0].age = 16;
        // people[0].save(function (err) {
        //     // err.msg = "under-age";
        // });
    });
});




