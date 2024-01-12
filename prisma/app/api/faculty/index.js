import { createInstitute } from "../../../prisma/institute";

export default async function handler(req, res) {
    
    try{
        const { method } = req
        
        switch (method) {
            case 'POST':{
                const { facultyID,name,gender,designation,date_of_joining,aicte_id,state} = req.body;
                const new_faculty = await createInstitute(facultyID,name,gender,designation,date_of_joining,aicte_id,state)
            
                return res.status(201).json(new_faculty)
            }
            
            
        }
    }catch(error){
        console.log(error);
    }
}