// styled
import styled from "styled-components";

// axios
import axios from 'axios';


const SearchPage = () => {

    const options = {
        method: 'GET',
        url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
        params: {platform: 'steam', type: 'loot', 'sort-by': 'popularity'},
        headers: {
          'x-rapidapi-key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
          'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    return(
        <StyledSearchPage>
        </StyledSearchPage>
    )
}

const StyledSearchPage = styled.div`
height: 30vh;
`;

export default SearchPage;