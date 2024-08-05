import { useDispatch } from 'react-redux'
import {changeLanguage} from '../slice/languages'
import { useSelector } from 'react-redux'
const Home =()=>{
    const basicLanguage= useSelector(state=>state.language.basicLanguage)
    const translation= useSelector(state=>state.language.translate)
const dispatch=useDispatch()


    const convertTOEnglish=()=>{
        dispatch(changeLanguage('en'))

    }
    const ConvertTOArabic=()=>{
        dispatch(changeLanguage('ar'))
    }
    return(
        <div>
         
            

            <button className="btn btn-info" onClick={() => convertTOEnglish()}> English </button>

            <button className="btn btn-primary mx-5" onClick={() => ConvertTOArabic()}> Arabic </button>


        <div>
            <h1> {basicLanguage}</h1>
            <div>
                <h2>{translation.title}</h2>
                <p>{translation.description}</p>
                <h3>{translation.home}</h3>
            </div>
        </div>

        </div>
    )
}
export default Home