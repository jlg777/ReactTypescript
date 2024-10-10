import { FilterValue } from "../untils/const"
import Filter from "./Filter"

interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void
}
const Footer = ({filterSelected, onFilterChange}: Props) => {
    return (
        <>
            <footer className="footer">
                <Filter filterSelected={filterSelected} onFilterChange={onFilterChange}/>
            </footer>
        </>
    )
}
export default Footer