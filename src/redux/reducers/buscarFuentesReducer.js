import {BUSCAR_TEXTO} from "../actions/buscarTextoAction";
import Fuentes from "../../json/fuentes.json";


const buscarFuentes = (state = Fuentes, action)=>{
    switch (action.type) {
        case BUSCAR_TEXTO:{
          console.log(action);
            const filter =  Fuentes.filter(item =>{
              switch (action.check) {
                case "id":
                  return item._id.includes(action.word) 
                case "text":
                  return item.name.includes(action.word) || 
                          item.company.includes(action.word) ||
                          item.description.includes(action.word)
                case "date":
                  return item.timestamp.createdAt.includes(action.word)
                default: item._id.includes(action.word);
              }
              return item._id.includes(action.word)
            })
            return filter
        }
        default: return state;
    }
}


export default buscarFuentes;
