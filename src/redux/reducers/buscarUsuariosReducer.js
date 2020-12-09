import {BUSCAR_TEXTO} from "../actions/buscarTextoAction";
import Usuarios from "../../json/usuarios.json";


const buscarUsuarios = (state = Usuarios, action)=>{
    switch (action.type) {
        case BUSCAR_TEXTO:{
          console.log(action);
            const filter =  Usuarios.filter(item =>{
              switch (action.check) {
                case "id":
                  return item._id.includes(action.word) 
                case "text":
                  return item.name.firstName.includes(action.word) || 
                          item.name.lastName.includes(action.word) ||
                          item.gender.includes(action.word) ||
                          item.company.includes(action.word) ||
                          item.email.includes(action.word) ||
                          item.address.includes(action.word) 
                case "date":
                  return item.createdAt.includes(action.word)
                default: item._id.includes(action.word);
              }
              return item._id.includes(action.word)
            })
            return filter
        }
        default: return state;
    }
}


export default buscarUsuarios;
