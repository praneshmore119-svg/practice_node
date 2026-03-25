const mongoose =require('mongoose');

//define the menu schema
const menuitemschema =new mongoose.Schema({
    name:{
        type: String,
        requireed: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false//if client doesn't enter any value it will return false automatically
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
});

const menuitem =mongoose.model('menuitem',menuitemschema);
module.exports=menuitem;