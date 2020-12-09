import {BUSCAR_TEXTO} from "../actions/buscarTextoAction";
import Conciliaciones from "../../json/conciliaciones.json";


const buscarConciliacion = (state = Conciliaciones, action)=>{
    switch (action.type) {
        case BUSCAR_TEXTO:{
          console.log(action);
            const filter =  Conciliaciones.filter(item =>{
              switch (action.check) {
                case "id":
                  return item._id.includes(action.word) 
                case "text":
                  return item.conciliationName.includes(action.word) || 
                          item.sourceA.includes(action.word) ||
                          item.sourceB.includes(action.word) ||
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


export default buscarConciliacion;
