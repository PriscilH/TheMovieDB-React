import { Search as SearchIcon } from "react-bootstrap-icons";


const SearchBar = ({onSubmit}) => {
    const submit = (e) => {
        if(e.key === "Enter" && e.target.value.trim()!=="") {
            onSubmit(e.target.value)
          }
    }
  return (
    <>
        <SearchIcon size={27} className="icon" />
      <input
        onKeyUp={submit}
        className="search"
        type="text"
        placeholder={"Search a tv show you may like"}
      />
    </>
  )
}

export default SearchBar