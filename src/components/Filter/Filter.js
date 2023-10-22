import '../Filter/Filter.css'

function Filter(props) {

    const onFilterHandler = (e) => {
        props.filterProduct(e.target.value)
    }
    
    return (
        <div>
            <select onChange={onFilterHandler}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    );
}
export default Filter;