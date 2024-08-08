import BAGSUMMARY from "../Component/BAGSUMMARY";
import { useSelector } from "react-redux"

import BagItem from "../Component/BagItem";
const Bag = () => {
  const bagItems=useSelector(state=>state.bag)
  const items=useSelector(state=>state.items)
  const finalItems=items.filter(item=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex >=0
  })


  return (
    <>

      <main>
        <div className="bag-page">
          {finalItems.map(item=>          <BagItem item={item} ></BagItem>
)}
          <BAGSUMMARY></BAGSUMMARY>
        </div>
      </main>
    </>
  );
};
export default Bag;
