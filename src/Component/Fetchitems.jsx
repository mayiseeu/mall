import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemAction } from "../store/itemsSlice"
import { fetchStatusAction } from "../store/fetchStatusSlice"
import { baseUrl } from "../store/Url"
const Fetchitems=()=>{
  const fetchitem=useSelector(state=>state.fetchStatus)
  console.log(fetchitem)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(fetchitem.fetchDone) return;
    const controller=new AbortController();
    const signal=controller.signal;
    dispatch(fetchStatusAction.markFetchingStarted())
    fetch(`${baseUrl}items`,{signal}).then((res)=>res.json().then(({items})=>{
      console.log('df',fetchitem.fetchDone)
      
      dispatch(itemAction.addInitialItems(items))
      dispatch(fetchStatusAction.markFetchDone())
      dispatch(fetchStatusAction.markFetchingFinished())
      console.log("items fetched",items)
      
    }))
    return()=>{
      controller.abort()
    }
  })
  console.log('dfdsf',fetchitem.fetchDone)
  return<>
  {/* <p>{fetchitem}</p> */}
  <p>  {`fetchDone:${fetchitem.fetchDone}`}
    {`currentlyfething:${
      fetchitem.currentlyFetching
    }`}
  </p>


  </>
}
export default Fetchitems