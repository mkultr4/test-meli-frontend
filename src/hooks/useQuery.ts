import { useLocation } from 'react-router-dom';
// Custom Hook For Query Params
const useQuery = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
}
export default useQuery;