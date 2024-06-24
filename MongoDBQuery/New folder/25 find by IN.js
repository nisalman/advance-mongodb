db.products.aggregate([

    {$match:{name:{$in:['Andre','Thomas']}}}
    
])



db.products.find({name:{$in:['Andre','Thomas']}})