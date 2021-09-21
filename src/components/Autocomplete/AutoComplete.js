import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  import {useState} from "react";
  
  const getUrl=query=>`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=4c73bd783447428bae8e6cc5abaa127f`
const AutoComplete=({inputProps,onSelect})=>{
  const [value,setValue]=useState("");
  const [results,setResults]=useState([]);
    return (
<Combobox>
  <ComboboxInput {...inputProps} value={value} onChange={async e=>{
    const {value}=e.target;
    try{
      setValue(value);
      if(value.length>1){
        const res=await fetch(getUrl(value));
        const {results}=await res.json();
        setResults(results)
      }
    }catch(e){
      console.log(e);
    }
  }}/>
  <ComboboxPopover>
    <ComboboxList>
        {
            results.map((item,index)=>{
              const {formatted,geometry}=item;
                return (
                    <ComboboxOption key={index} onClick={()=>{
                      onSelect(geometry);
                      setValue(formatted);
                      }} value={formatted} >
                        <ComboboxOptionText />
                        </ComboboxOption>
                )
            })
        }
    </ComboboxList>
  </ComboboxPopover>
</Combobox>
    )
}
export {AutoComplete}