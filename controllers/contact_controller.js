const Model = require('../models/Contact');
const { sendEmailToUser } = require("../middlewares/nodeMailer_Contact")



module.exports = {


    addUserForm: async (req,res) => {
        
        try {
           console.log(req.body)
            // gettind values from the body request
            const {
                name,
                email,
                message
               
            } = req.body;
    

            // creating new model using the values from req.body
            const new_model = new Model({

                name,
                email,
                message
    
            });

            // actual saving
            await new_model.save();

            sendEmailToUser(email,name)

            // return success message
            return res.status(200).json({
                success:true,
                message:`success to add new contact form - for guest`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in add contact form - for guest`,
                error: error.message
            })
        }
    },


    getAllUserForms: async (req, res) => {
        try {
          const contacts = await Model.find().exec();
    
          return res.status(200).json({
            success: true,
            message: `success to find all contacts - for managers`,
            contacts,
          });
        } catch (error) {
          return res.status(500).json({
            message: `error in get all contacts - for -managers`,
            error: error.message,
          });
        }
      },


    deleteUserFormById : async (req,res)=> {


        try {

            const id = req.params._id;

            await Model.findByIdAndDelete(id).exec();

            return res.status(200).json({
                success:true,
                message:`success to delete user contact by id`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in delete user contact by id`,
                error: error.message
            })
        }
    }
}