const SearchResults = ({searchResults}) => {

    const tableData = searchResults.map(result => {
        return <tr key={result.id}>
            <td>{result.name}</td>
            <td>{result.platform}</td>
            <td>{result.genre}</td>
            <td>{result.publisher}</td>
            </tr>
    })

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Platform</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
     );
}
 
export default SearchResults;