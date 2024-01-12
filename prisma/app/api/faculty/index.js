import { createInstitute, deleteinstitute } from "../../../prisma/institute";

export default async function handler(req, res) {
    
    try{
        const { method } = req
        
        switch (method) {
            case 'POST':{
                const { facultyID,name,gender,designation,date_of_joining,aicte_id,state} = req.body;
                const new_faculty = await createInstitute(facultyID,name,gender,designation,date_of_joining,aicte_id,state)
            
                return res.status(201).json(new_faculty)
            }
            case 'GET':
                const allfaculty = await getAllinstitute()
            
                return res.status(200).json(allfaculty)
            
                case 'DELETE':
                    const { facultyID } = req.query;
                    await deleteinstitute(facultyID)
                    return res.status(200).json({msg: 'faculty resigned from institute'})
                default:
                    res.status(405).end(`Method ${method} Not Allowed`)
        }
    }catch(error){
        console.log(error);
    }
}