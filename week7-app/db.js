var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'fast_food'
    
});


function get_all_inventory(){
connection.connect(function(err){
    if (err) throw err;
    connection.query("SELECT * FROM inventory", function(err, result, fields){
        if (err) throw err;
        console.log(result);
    });
});

};
get_all_inventory();

function set_new_item(item_name, item_count){
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO inventory (item_name, item_count) VALUES ('burger', 20)";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      
    });
  });
}
set_new_item();


// module.exports = db.js;

// set_new_item();