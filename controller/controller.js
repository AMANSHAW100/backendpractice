import model from  "../model/model.js"

async function create_user(req,res){
    try {
        let body = req.body
        let data = await model.create({
            title: body.title,
            fname:body.fname,
            lname:body.lname,
            phone:body.phone,
            email: body.email,
            password: body.password,
            address: {
    
                street : body.address.street,
                city : body.address.city,
                pincode :Number(body.address.pincode)
            
        },
            gender: body.gender
        });
        console.log(data)
        // if(!req) return res.status(400).send({status:false, data:"Aman"});
        return res.status(200).send({status:true, data})
        
    } catch (err) {
        return res.status(500).send({status:true, err:err.message})
        
    }
}

export {
    create_user
}