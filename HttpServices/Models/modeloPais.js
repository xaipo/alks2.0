/**
 * Created by xaipo on 12/30/2017.
 */
/**
 * Created by xaipo on 4/4/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var categoriaSchema = new mongoose.Schema({



   nombre_pais: String





});


module.exports= restful.model('pais',categoriaSchema);