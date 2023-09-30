import { ref } from "vue";
import axios from 'axios'
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useStudents(){
    const students = ref([]);
    const student = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getStudents = async () => {
        const response = await axios.get("students");
        students.value = response.data.data;
    }

    const getStudent = async (id) => {
        const response = await axios.get("students/"+ id);
        student.value = response.data.data;
    }
    
    const storeStudent = async (data) =>{
        try{
            await axios.post("students", data);
            await router.push({name: "StudentIndex"});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateStudent = async (id) =>{
        try{
            //console.log(id);
            await axios.put("students/"+ id, student.value);
            await router.push({name: "StudentIndex"});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyStudent = async (id, fullname) =>{
        if(!window.confirm(`Are you sure you want to delete the data of ${fullname}`)){
            return;
        }
        try {
            await axios.delete("students/"+ id);
            await getStudents(); 
        } catch(error){
            if(error.response.status === 422){
                error.value = error.response.data.data;
            }
        }  
    }

    return{
        student,
        students,
        getStudent,
        getStudents,
        storeStudent,
        updateStudent,
        destroyStudent,
        errors,
    };
}