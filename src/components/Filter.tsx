import { FILTER_BUTTONS, FilterValue, TODO_FILTERS } from '../untils/const'

interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    onFilterChange: (filter: FilterValue) => void
}
const Filter = ({ filterSelected, onFilterChange }: Props) => {
    return (
        <>
            <ul className="filters">
                {Object.entries(FILTER_BUTTONS).map(([key, value]) => {
                    return (
                        <li key={key}>
                            <a className={`${filterSelected === 'all' ? 'selected' : ''}`} href={value.href} onClick=
                                {(e) => {
                                    e.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}>
                                {value.literal}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Filter
