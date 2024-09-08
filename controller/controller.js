const NoticeSchema=require('../model/model')

const getAllnotices=async(req,res)=>{
    const data=await NoticeSchema.find();
    res.send(data);
};

const sendnotice=async (req,res)=>{
    try {
        const {title, description}=req.body;
        const notice=new NoticeSchema({
            title,
            description,
            date: new Date().toLocaleDateString()
        });
        await notice.save();
        res.status(201).json({message: 'Notice sent successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updateNotice=async(req,res)=>{
    try{
        const { id } = req.params;
        const { title, description } = req.body;
        if(!title && !description){
            return res.status(400).send('Title or description are required.');
        }
        const data=await NoticeSchema.findByIdAndUpdate(id, { title, description }, { new: true });
        if(!data){
            return res.status(404).send('Data not found.');
        }
        res.send(data);    
    }catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
     
    }
};

const deleteNotice=async(req,res)=>{
    try{
        const { id } = req.params;
        const data=await NoticeSchema.findByIdAndDelete(id);
        if(!data){
            return res.status(404).send('Data not found.');
        }
        res.send(data);    
    }catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
     
    }
}
module.exports={getAllnotices,sendnotice,updateNotice,deleteNotice};