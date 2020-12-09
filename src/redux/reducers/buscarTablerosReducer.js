import {BUSCAR_TEXTO} from "../actions/buscarTextoAction";
import Tableros from "../../json/tableros.json";


const buscarTableros = (state = Tableros, action)=>{
    switch (action.type) {
        case BUSCAR_TEXTO:{
          console.log(action);
            const filter =  Tableros.filter(item =>{
              switch (action.check) {
                case "id":
                  return item._id.includes(action.word) 
                case "text":
                  return item.dashboardName.includes(action.word) || 
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


export default buscarTableros;
