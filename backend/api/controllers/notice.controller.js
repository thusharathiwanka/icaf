const notice = require( '../models/notice.model')

 const GetAllNotices = async (req, res) => {
    try {
        const notices = await notice.find();
        res.status(200).json(notices);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
}

};
 const CreateNotice = async (req, res) => {
   
    console.log(req.body);
    const newNotice= new notice(req.body);
    
    try {
        
        await newNotice.save();
        console.log(newNotice);
        res.status(201).json(newNotice);
    } catch (error) {
        
        res.status(409).json({message:error.message});
    }
    
};

module.exports = {GetAllNotices, CreateNotice }