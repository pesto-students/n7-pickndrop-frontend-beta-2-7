import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  const array=[
      "Apple",
      "Banana",
      "Orange",
      "Pineapple",
      "Kiwi"
  ];
const AutoComplete=({inputProps})=>{
    return (
<Combobox aria-label="choose a fruit">
  <ComboboxInput {...inputProps} />
  <ComboboxPopover>
    <ComboboxList>
        {
            array.map((item,index)=>{
                return (
                    <ComboboxOption key={index} value={item} >
                        <ComboboxOptionText />
                        </ComboboxOption>
                )
            })
        }
      <ComboboxOption value="Apple" />
      <ComboboxOption value="Banana" />
    </ComboboxList>
  </ComboboxPopover>
</Combobox>
    )
}
export {AutoComplete}